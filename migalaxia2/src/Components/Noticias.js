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
           </div> 
        )
    }
}
export default Noticias;