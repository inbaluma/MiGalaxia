import React from "react";

// Modelos
import Palabra from "../../model/PalabrasJuego";
import SetPalabras from "../../model/SetPalabras";

import "../../index.css"
import Navigation from "../Navigation";

function Pasapalabra() {

    const palabras = new SetPalabras([
        new Palabra('A', 'Ámigo', 'Definicion amigo'),
        new Palabra('B', 'Bebé', 'Definicion bebé')
    ]);

    const comprobar = (e) => {
        // Obtenemos el input
        const input = document.getElementById("inputPalabra").value;
        const check = palabras.checkPalabra(input);
        const mensaje = document.getElementById("mensaje");

        // Comprobamos la palabra
        if (check) { // Palabra correcta
            mensaje.innerText = "La palabra es correcta.";
            siguientePalabra();
        }
        else {
            document.getElementById("intentosRestantes").innerText = palabra.getIntentosRestantes();
            mensaje.innerText = "La palabra es incorrecta.";
            if (palabra.getIntentosRestantes() <= 0) siguientePalabra();
        }

        document.getElementById("acertadas").innerText = palabras.getAciertos();
        document.getElementById("erroneas").innerText = palabras.getErroneos();
        document.getElementById("restantes").innerText = palabras.getRestantes();

        if (palabras.isTerminado()) {
            document.getElementById("comprobar-boton").disabled = true;
            document.getElementById("pasapalabra-boton").disabled = true;
        }
    }   

    const siguientePalabra = (e) => {
        const mensaje = document.getElementById("mensaje");
        if (palabras.isTerminado()) {
            mensaje.innerText = "Has completado el juego."
        }
        else {
            // Buscamos la siguiente palabra sin adivinar
            palabra = palabras.getNextPalabra();
            while (! palabra.isLibre()) palabra = palabras.getNextPalabra();

            document.getElementById("letra").innerText = palabra.getLetra();
            document.getElementById("definicion").innerText = palabra.getDefinicion();
            document.getElementById("intentosRestantes").innerText = palabra.getIntentosRestantes();

            mensaje.innerText = "";

            const displayLetras = document.getElementById("letras-siguientes");
            displayLetras.innerHTML = displayLetrasHTML();
        }
        return null;
    }

    const displayLetrasHTML = () => {
        const letras = palabras.getNextLetras();

            let innerHTML = "";
            for(let i = 0; i < letras.length; i++) {
                let datos = {};
                switch (letras[i].estado) {
                    case 1: // Palabra acertada
                        datos.estado = "Correcto";
                        datos.formato = "text-bg-success";
                    break;
                    case -1: // Palabra incorrecta
                        datos.estado = "Incorrecto";
                        datos.formato = "text-bg-danger";
                    break;
                    default:
                        datos.estado = "Disponible";
                        datos.formato = "text-bg-tertiary";
                }
                innerHTML += "<span class='badge mx-1 "+ datos.formato +"'>" +
                    letras[i].letra + "<br/>" +
                    datos.estado +
                "</span>"
            }
        return innerHTML;
    }

    let palabra = palabras.getNextPalabra();

    

    const componentes = [];
    const letras = palabras.getNextLetras();
    for(let i = 0; i < letras.length; i++) {
        componentes.push(<span key={i} className="badge mx-1">
            {letras[i].letra} <br/> Disponible
        </span>);
    }

    const displayLetras = <p id="letras-siguientes">
        {componentes}
    </p>;


    return (
        <div className="mx-3">
            <Navigation actual="Pasapalabra" paginas={[{nombre: "Jugar", path:"/jugar"}]}/>
            <h1 className="titulo mb-3">Pasapalabra</h1>
            <div className="card mx-3">
                <div className="card-body">
                    <h2 className="titulo">Empieza por la '<strong id="letra">{palabra.letra}</strong>'</h2>
                    <p id="definicion">{palabra.definicion}</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <label htmlFor="inputPalabra" className="form-label">Introduzca la palabra:</label>
                                <div className="col-auto">
                                    <input type="text" id="inputPalabra" className="form-control form-control-lg"/>
                                </div>

                                <div className="col-auto">
                                    <button id="comprobar-boton" onClick={comprobar} className="btn btn-primary me-2 my-1">Comprobar</button>
                                    <button id="pasapalabra-boton" onClick={siguientePalabra} className="btn btn-secondary me-2 my-1">Pasapalabra</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <p>Número de intentos restantes: <strong id="intentosRestantes">{palabra.getIntentosRestantes()}</strong></p>
                        </div>
                    </div>
                    <p id="mensaje"></p>
                    <p>
                        Palabras acertadas: <strong id="acertadas">{palabras.getAciertos()}</strong>.
                        Palabras erróneas: <strong id="erroneas">{palabras.getErroneos()}</strong>.
                        Palabras restantes: <strong id="restantes">{palabras.getRestantes()}</strong>.
                    </p>
                    {displayLetras}
                </div>
            </div>
        </div>
    )
    
}
export default Pasapalabra;