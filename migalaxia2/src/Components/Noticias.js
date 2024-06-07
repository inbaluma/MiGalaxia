import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';

import Noticia from '../model/Noticia'

import NoticiasHome from './Noticias/NoticiasHome';
import NoticiaCompleta from './Noticias/NoticiaCompleta';

import './Noticias/Noticia.css'

function Noticias() {

    const [noticias, setNoticias] = useState([]);

    const results = async () => {
        if (noticias.length > 0) return;
        const url1 = 'https://newsapi.org/v2/top-headlines?'
        + 'language=en&'
        + 'category=science&'
        + 'page=1&'
        + 'apiKey=82906c06e30546c59d14ab9aa89ce6cf';
        const url = 'https://migalaxia-backend.vercel.app/api/noticias';
        const response = await fetch(url, {
            mode: 'cors'
        });
        const _noticias = (await response.json()).noticias;
        console.log(_noticias);
        const lista_noticias = [];
        for(let i = 0; i < _noticias.length; i++) {
            lista_noticias.push(new Noticia(_noticias[i]));
        }
        setNoticias(lista_noticias);
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