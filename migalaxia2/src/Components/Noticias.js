import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";


import Noticia from '../model/Noticia'

import NoticiasHome from './Noticias/NoticiasHome';
import NoticiaCompleta from './Noticias/NoticiaCompleta';

import './Noticias/Noticia.css'

function Noticias() {

    const [noticias, setNoticias] = useState([]);

    const results = async () => {
        if (noticias.length > 0) return;
        const url = 'https://newsapi.org/v2/top-headlines?'
        + 'language=en&'
        + 'category=science&'
        + 'page=1&'
        + 'apiKey=82906c06e30546c59d14ab9aa89ce6cf';
        const url2 = 'https://saurav.tech/NewsAPI/top-headlines/category/science/us.json'
        const url3 = 'https://newsdata.io/api/1/news?apikey=pub_4576509abf48207fd36b57982c19f424c423c&q=astronomía%20OR%20galaxia&language=es&category=science,technology';
        const url4 = 'http://localhost:3333/noticias';
        const urlSecciones = 'http://localhost:3333/secciones/';
        let data = await fetch(url4);
        let parsedData = await data.json();
        //console.log(parsedData);
        
        const articles = [];
        for(let i = 0; i < parsedData.length; i++) {
            const element = parsedData[i];
            data = await fetch(urlSecciones + element.IdNoticia);
            const secciones = await data.json();
            articles.push(new Noticia(element, secciones));
        }
        setNoticias(articles);
        
    };

    useEffect(() => {
        results();
    })
    
    return (
        <Routes>
            <Route path="" element={<NoticiasHome noticias={noticias}/>}/>
            {noticias.map(element => {
                return (
                    <Route
                        key = {element.id}
                        path={""+element.id}
                        element={<NoticiaCompleta noticia={element}/>}
                    />)
            })}
        </Routes>
    );
}
export default Noticias;