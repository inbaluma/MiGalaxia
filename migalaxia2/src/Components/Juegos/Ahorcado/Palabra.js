import { Children, useEffect, useState } from "react";

function Palabra({palabra,teclaPulsada,letrasPermitidas,setCompletado,children}) {
    const palabraMayuscula = palabra.toUpperCase() + ""; //String vacio para que el IDE detecte que es un string

    const letras = palabraMayuscula.normalize("NFD").split("").filter((letra) => letrasPermitidas.includes(letra));
    const [pulsadas,setPulsadas] = useState([...letras].map(e => false));
    const [elementoLetras,setLetras] = useState([""])
    const hijos = Children.toArray(children);

    useEffect(() => {
        const indices = letras.reduce((array,elemento,indice) => (elemento === teclaPulsada) ? [...array,indice] : array,[]); //Coge los indices donde se encuentra la letra
        indices.forEach((elemento) => pulsadas[elemento] = true); //Setea las casillas pulsadas a true
        setPulsadas(pulsadas);
        if (pulsadas.every(e => e)) {
            setCompletado(true);
        }
        setLetras(pulsadas.map((pulsada,indice) => { //Crea las letras o las modifica según las pulsadas
            let letraOBarra;
            if (!pulsada){
                letraOBarra = "_ ";
            } else {
                letraOBarra = letras[indice] + " ";
            }
            return letraOBarra;
        }));
    },[teclaPulsada]);

    return (
        <div id="palabra" className="container-fluid text-center fs-4">
            <span tabIndex={0} className="float-start">{hijos[0]}</span> <span tabIndex={0} aria-label={letras.length + " letras:" + elementoLetras}>{elementoLetras}</span> <span className="float-end">{hijos[1]}</span>
            {pulsadas.every(e => e)? "¡Has ganado!":""}
        </div>
    );
} export default Palabra;