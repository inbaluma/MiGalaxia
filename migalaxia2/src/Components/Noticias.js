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
        let data = await fetch(url2);
        let parsedData = await data.json();
        console.log(parsedData);
        const articles = [];
        parsedData.articles.forEach((element, i) => {
            articles.push(new Noticia(i, element))
        });
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
                        path={""+element.id}
                        element={<NoticiaCompleta noticia={element}/>}
                    />)
            })}
        </Routes>
    );
}
export default Noticias;