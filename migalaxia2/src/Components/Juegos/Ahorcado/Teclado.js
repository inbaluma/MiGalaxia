import { useState,useEffect, useRef } from "react";
import Tecla from "./Tecla";

function Teclado({teclasPermitidas, ultimaTecla, cambiarTecla}) {
    //Hacer que construya el teclado con useEffect
    const alfabetoMayusculas = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    const tecladoConstruido = useRef();
    tecladoConstruido.current = false;
    let [filas,setFilas] = useState([<></>,<></>,<></>]);
    const botones = [...Array(27).keys()].map(i => {
        return <Tecla key={crypto.randomUUID()} tecla={alfabetoMayusculas[i]} ultima={ultimaTecla} cambiarTecla={cambiarTecla} activo={teclasPermitidas.includes(alfabetoMayusculas[i])}/>;
    });
    function inicailizarFilas() {
        setFilas([0, 1, 2].map((i) => {
            return (
                <div className="row gx-1 my-1">
                    <div className="col">
                        {botones[0 + 9 * i]}
                    </div><div className="col">
                        {botones[1 + 9 * i]}
                    </div><div className="col">
                        {botones[2 + 9 * i]}
                    </div><div className="col">
                        {botones[3 + 9 * i]}
                    </div><div className="col">
                        {botones[4 + 9 * i]}
                    </div><div className="col">
                        {botones[5 + 9 * i]}
                    </div><div className="col">
                        {botones[6 + 9 * i]}
                    </div><div className="col">
                        {botones[7 + 9 * i]}
                    </div><div className="col">
                        {botones[8 + 9 * i]}
                    </div>
                </div>
            )
        }));
    }
    useEffect(() => {
        if (!tecladoConstruido.current) {
            tecladoConstruido.current = true;
            inicailizarFilas();
        }
    },[ultimaTecla]);
    return(
        <div id="teclado" className="col-md">
            <p className="fw-semibold">Puedes usar los botones o usar el teclado</p>
            {filas}
        </div>
    );
} export default Teclado;