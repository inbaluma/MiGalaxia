import { kv } from '@vercel/kv';

const express = require("express");
const { JSDOM } = require('jsdom');
const { Readability } = require('@mozilla/readability');
const path = require('path');
const axios = require("axios");
const cors = require("cors");
const initModels = require("../models/init-models");
const sequelize = require("sequelize");
const models = initModels(sequelize);

const app = express();
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(cors());

async function fetchNoticias(req, res, url, lang, napi) {
    try {
        let cont = (await kv.hgetall("cont")).noticias;
        let noticias = (await kv.hgetall("noticias")).noticias;
        //let noticias = [];
        //const noticias = [""];
        const frutas =["Noticias"];
        const response = await axios.get(url);
        //const articles = napi == 0 ? response.data.results : response.data.articles;
        let articles;
        switch(napi) {
            case 0:
                articles = response.data.results;
                break;
            default:
                articles = response.data.articles;
        }
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
            /*
            let repetida = false;
            let j = 0;
            while(!repetida && j < noticias.length) {
                repetida = article.enlace.contains(noticias[j].enlace);
                j++;
            }
            if (repetida) continue;
            */
            //console.log(noticia);
            try {
            const response2 = await axios.get(noticia.enlace);
            const dom = new JSDOM(response2.data, {url: noticia.enlace});
            const readability = new Readability(dom.window.document).parse();

            noticia.contenido = readability.textContent;
            noticia.id = cont;
            cont++;
            completa = true;
            } catch(error) {
                console.log("ERROR");
            }
            if (completa) {
                frutas.push(noticia);
            }
        }
        let noticias2 = frutas.slice(1);
        //console.log(frutas);
        //console.log(noticias2);
        // guardamos cont y noticias
        await kv.hset('cont', {noticias: cont});
        await kv.hset('noticias', {noticias: noticias2});
        res.json(noticias2);
    } catch(error) {
        //res.status(500).json({error: "Error recogiendo datos"});
        res.send("Error con la API");
    }
}

app.get("/fetch/noticias", async (req, res) => {
    const url = "https://newsdata.io/api/1/news?apikey=pub_4576509abf48207fd36b57982c19f424c423c&q=astronomía%20OR%20galaxia&language=es&category=science,technology";
    await fetchNoticias(req, res, url, 'es', 0);
});

app.get("/fetch/news", async (req, res) => {
    const url = 'https://saurav.tech/NewsAPI/top-headlines/category/science/us.json';
    await fetchNoticias(req, res, url, 'en', 1);
});

module.exports = app