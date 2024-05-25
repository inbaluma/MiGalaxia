import React from "react";
import { useState } from "react";

import "../../index.css"
import Navigation from "../Navigation";
import Teclado from "./Ahorcado/Teclado";

function Ahorcado (){

    document.title = "Jugar al Ahorcado";

    const [palabra,setPalabra] = useState("NEBULOSA");
    const [descripcion,setDescripcion] = useState("Está hecha de polvo y gases");
    const [ultimaTecla,setUltima] = useState("");
    const alfabetoMayusculas = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    const [teclasDisponibles,setDisponibles] = useState([...alfabetoMayusculas]);

    const cambiarTecla = (e) => {
        const boton = e.key.toUpperCase();
        if (teclasDisponibles.includes(boton)){
            console.log(boton);
            setUltima(boton);
            setDisponibles(teclasDisponibles.filter(tecla => tecla !== boton));
        }
    }

    return(
        <div id="main" className="container-fluid text-center" tabIndex={0} onKeyDown={cambiarTecla}>
            <Navigation actual="Ahorcado" paginas={[{nombre: "Jugar", path:"/jugar"}]}/>
            <div className="w-100 mx-auto">
                <h1 className="titulo mb-3">Ahorcado</h1>
                <div className="card mx-3">
                    <div className="card-body">
                        <h2>Pista :<br/>{descripcion}</h2>
                        <div className="row">
                            <Teclado teclasPermitidas={teclasDisponibles} ultimaTecla={ultimaTecla} cambiarTecla={cambiarTecla}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ahorcado;