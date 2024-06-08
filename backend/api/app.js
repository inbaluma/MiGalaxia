import { kv } from '@vercel/kv';

const express = require("express");
const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');
const path = require('path');
const axios = require("axios");
const cors = require("cors");

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(cors());

async function fetchNoticias(req, res, url, lang, napi) {
    try {
        let cont = (await kv.hgetall("cont")).noticias;
        let noticias = (await kv.hgetall("noticias")).noticias;
        let vacias = noticias.length == 0;
        if (vacias) noticias = ["Noticias"];

        const response = await axios.get(url);
        let articles;
        switch(napi) {
            case 0:
                articles = response.data.results;
                break;
            default:
                articles = response.data.articles;
        }
        //console.log(articles);
        for(let i = 0; i < articles.length; i++) {
            const article = articles[i];
            let noticia;
            switch(napi) {
                case 0:
                    noticia = {titulo: article.title, enlace: article.link, urlImagen: article.image_url, lang: lang};
                    break;
                default:
                    noticia = {titulo: article.title, enlace: article.url, urlImagen: article.urlToImage, lang: lang};
            }
            // comprobar que la url no este repetida
            let completa = false;
            
            let repetida = false;
            let j = 0;
            while(!vacias && !repetida && j < noticias.length) {
                repetida = noticia.enlace.includes(noticias[j].enlace);
                j++;
            }
            if (repetida) continue;
            
            //console.log(noticia);
            try {
            const response2 = await axios.get(noticia.enlace);
            const dom = new JSDOM(response2.data, {url: noticia.enlace});
            const readability = new Readability(dom.window.document).parse();
            
            const re = /\n|\t/;
            const parts = readability.textContent
                .replace('  ', '')
                .split(re)
                .filter((parrafo) => parrafo.length > 0 && !parrafo.includes('  '));
            const secciones = parts.map((parte, i) => {
                return ({
                    id: i,
                    titulo: "",
                    contenido: parte
                })
            })
            noticia.secciones = secciones;
            
            noticia.contenido = readability.textContent;
            noticia.id = cont;
            cont++;
            completa = true;
            } catch(error) {
                console.log("No se puede recoger el contenido de la noticia");
            }
            if (completa) {
                noticias.push(noticia);
            }
        }
        if (vacias) noticias = noticias.slice(1);
        //console.log(noticias.length);
        
        // guardamos cont y noticias
        await kv.hset('cont', {noticias: cont});
        await kv.hset('noticias', {noticias: noticias});
        res.json(noticias);
    } catch(error) {
        console.log(error);
        //res.json(error);
        res.send("Error con la API");
    }
}

app.get("/fetch/noticias", async (req, res) => {
    const url = "https://newsdata.io/api/1/news?apikey=pub_4576509abf48207fd36b57982c19f424c423c&q=espacial%20OR%20astronomía%20OR%20galaxia&language=es&category=science";
    await fetchNoticias(req, res, url, 'es', 0);
});

app.get("/fetch/news", async (req, res) => {
    const url = 'https://saurav.tech/NewsAPI/top-headlines/category/science/us.json';
    await fetchNoticias(req, res, url, 'en', 1);
});

app.get("/delete/noticias", async (req, res) => {
    await kv.hset('cont', {noticias: 1});
    await kv.hset('noticias', {noticias: []});
    res.send("Noticias borradas");
});

app.get("/delete/noticia/:id", async (req, res) => {
    let noticias = (await kv.hgetall('noticias')).noticias;
    noticias = noticias.filter((noticia) => noticia.id.toString() !== req.params.id)
    await kv.hset('noticias', {noticias: noticias});
    res.send("Noticia con id "+req.params.id+" borrada");
});

app.get("/modify/noticia/:id", async (req, res) => {
    const noticia = (await kv.hgetall("noticias"))
        .noticias
        .filter((n) => n.id.toString() === req.params.id)[0];
    //res.json(noticia);
    res.render("noticia", {noticia: noticia});
});

app.get("/modify/seccion/:idNoticia/:idSeccion", async (req, res) => {
    const noticia = (await kv.hgetall("noticias"))
        .noticias
        .filter((n) => n.id.toString() === req.params.idNoticia)[0];
    
    const seccion = noticia
        .secciones
        .filter((s) => s.id.toString() === req.params.idSeccion)[0];

    res.render("seccion", {idNoticia:noticia.id, seccion: seccion});
});

app.get("/new/seccion/:idNoticia", async (req, res) => {
    const noticia = (await kv.hgetall("noticias"))
        .noticias
        .filter((n) => n.id.toString() === req.params.idNoticia)[0];
    console.log(noticia);
    const secciones = noticia.secciones;
    const idSeccion = (secciones[secciones.length - 1]).id + 1;
    const seccion = {
        id: idSeccion,
        titulo: "",
        contenido: ""
    }

    res.render("seccion", {idNoticia:noticia.id, seccion: seccion});
});

app.post("/save/seccion", async (req, res) => {
    const noticias = (await kv.hgetall("noticias")).noticias;
    const noticia = noticias.filter((n) => n.id.toString() === req.body.idNoticia)[0];

    let secciones = noticia.secciones;
    const filtrado_secciones = secciones.filter((s) => s.id.toString() === req.body.idSeccion);
    let seccion;
    if (filtrado_secciones.length == 0) {
        seccion = {
            id: parseInt(req.body.idSeccion),
            titulo: req.body.titulo,
            contenido: req.body.contenido
        }
        secciones.push(seccion);
    }
    else {
        seccion = filtrado_secciones[0];
        seccion.titulo = req.body.titulo;
        seccion.contenido = req.body.contenido;
    }

    await kv.hset("noticias", {noticias: noticias});
    res.redirect(301, "/modify/noticia/" + req.body.idNoticia);
    //res.redirect("/modify/noticia/" + req.body.idNoticia);
});

app.get("/delete/seccion/:idNoticia/:idSeccion", async (req, res) => {
    const noticias = (await kv.hgetall("noticias")).noticias;
    const noticia = noticias.filter((n) => n.id.toString() === req.params.idNoticia)[0];

    noticia.secciones = noticia.secciones.filter((s) => s.id.toString() !== req.params.idSeccion);

    await kv.hset("noticias", {noticias: noticias});
    res.redirect("/modify/noticia/" + req.params.idNoticia);
});

module.exports = app