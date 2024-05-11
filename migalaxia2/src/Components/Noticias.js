import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import NoticiasHome from './Noticias/NoticiasHome';
import NoticiaCompleta from './Noticias/NoticiaCompleta';

import './Noticias/Noticia.css'

class Noticias extends React.Component {

    constructor() {
        super();

        this.state = {
            noticia: null
        }
    }

    atras() {
        this.setState({noticia: null})
    }

    abrirNoticia(noticia) {
        this.setState({noticia: noticia})
    }
    
    render() {
        let contenido;
        if (this.state.noticia === null) {
            contenido = <NoticiasHome atras={this}/>
        }
        else {
            contenido = <NoticiaCompleta noticia={this.state.noticia} atras={this}/>
        }
        return (
           <div>
            {contenido}
            {   <>
                <p>Iconos que se pueden usar</p>
                <FontAwesomeIcon icon="fas fa-thumbs-up" />
                <FontAwesomeIcon icon="far fa-thumbs-down" />
                <FontAwesomeIcon icon="fa-regular fa-calendar-days" />
                <FontAwesomeIcon icon="fa-regular fa-moon" />
                <FontAwesomeIcon icon="fa-regular fa-star-half-stroke" />
                <FontAwesomeIcon icon="fa-regular fa-star"/>
                <FontAwesomeIcon icon="fa-regular fa-chess-rook" />
                <FontAwesomeIcon icon="fa-regular fa-moon" />
                <FontAwesomeIcon icon="fa-regular fa-bookmark" />
                <FontAwesomeIcon icon="fa-solid fa-camera-retro" />
                <FontAwesomeIcon icon="fa-solid fa-camera" />
            </>
        }
           </div> 
        )
    }
}
export default Noticias;