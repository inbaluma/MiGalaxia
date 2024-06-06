const express = require("express")
const path = require('path');
const axios = require("axios");
const cors = require("cors");
const initModels = require("./models/init-models");
const sequelize = require("sequelize");
const models = initModels(sequelize);

const app = express();
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(cors({ origin: "*" }));

app.get("/noticias", async (req, res) => {
    try {
        await models.Noticia.findAll().then(async (data) => res.json(data));
    } catch(error) {
        res.json(error);
    }
})

app.get("/secciones/:id", async (req, res) => {
    try {
        await models.Seccion.findAll({
            where: {
                IdNoticia: req.params.id
            },
            order: sequelize.col('Posicion')
        }).then(async (data) => res.json(data));
    } catch(error) {
        res.json(error);
    }
});

app.get("/fetch/noticias", async (req, res) => {
    try {
        //const url = "https://newsdata.io/api/1/news?apikey=pub_4576509abf48207fd36b57982c19f424c423c&q=astronomía%20OR%20galaxia&language=es&category=science,technology";
        const url = 'https://saurav.tech/NewsAPI/top-headlines/category/science/us.json';
        console.log("here");
        const response = await axios.get(url);
        console.log("we");
        res.json(response.data);
        console.log("go");
    } catch(error) {
        //res.status(500).json({error: "Error recogiendo datos"});
        res.json(error);
    }
});

module.exports = app