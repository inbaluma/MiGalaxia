import React, { useEffect } from "react";
import { useState } from "react";

import "../../index.css"
import Navigation from "../Navigation";
import Teclado from "./Ahorcado/Teclado";
import Palabra from "./Ahorcado/Palabra";

const palabras = require("./Ahorcado/Palabras.json").palabras;

function Ahorcado (){

    document.title = "Jugar al Ahorcado";
    const maximo = 7;
    const indiceRandom = () => Math.floor(Math.random() * palabras.length);

    const reiniciar = (e) => {
        window.location.reload();
    }

    const [palabra,setPalabra] = useState(palabras[indiceRandom()]);
    const [ultimaTecla,setUltima] = useState("");
    const alfabetoMayusculas = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    const [teclasDisponibles,setDisponibles] = useState([...alfabetoMayusculas]);
    const [intentos,setIntentos] = useState(maximo);
    const botonReiniciar = <button aria-label="Reiniciar el juego" className="btn btn-warning" onClick={reiniciar}>
        Reiniciar
    </button>

    const cambiarTecla = (e) => {
        const boton = e.key.toUpperCase();
        if (teclasDisponibles.includes(boton) && intentos > 0){
            console.log(boton);
            setUltima(boton);
            setDisponibles(teclasDisponibles.filter(tecla => tecla !== boton));
            if (!palabra.normalize("NFD").toUpperCase().includes(boton)) { //Si la letra no está en la palabra se pierde un intento
                console.log(palabra.normalize("NFD").toUpperCase());
                setIntentos(intentos - 1);
            }
        }
    }

    return(
        <main id="main" className="container-fluid text-center" tabIndex={0} onKeyDown={cambiarTecla}>
            <Navigation actual="Ahorcado" paginas={[{nombre: "Jugar", path:"/jugar"}]}/>
            <div className="w-100 mx-auto">
                <h1 className="titulo mb-3">Ahorcado</h1>
                <div className="card mx-3">
                    <div className="card-body">
                        <Palabra palabra={palabra} teclaPulsada={ultimaTecla} letrasPermitidas={alfabetoMayusculas}>
                            <>Intentos: {intentos}</>
                            <>{botonReiniciar}</>
                        </Palabra>
                        <br/>
                        <div className="row">
                            <Teclado teclasPermitidas={teclasDisponibles} ultimaTecla={ultimaTecla} cambiarTecla={cambiarTecla}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Ahorcado;