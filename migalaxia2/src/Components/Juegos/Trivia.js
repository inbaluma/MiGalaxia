import React from "react";
import './Trivia.css'

import "../../index.css"
import Navigation from "../Navigation";

function trivia (){
    return(
        <div className="mx-3">
            <Navigation actual="Trivia" paginas={[{nombre: "Jugar", path:"/jugar"}]}/>
            <div className="contenedor">
                <h1 className="titulo mb-3">TRIVIA</h1>
                <hr />
                <h2>¿Quién está mas calvo?</h2>
                <ul>
                    <li>Guardiola</li>
                    <li>Iniesta</li>
                    <li>Zidane</li>
                    <li>Nadal</li>
                </ul>
                <button>Siguiente</button>
                <div className="indice">1 de 20 preguntas</div>
            </div>
                        
        </div>
    );
}

export default trivia;