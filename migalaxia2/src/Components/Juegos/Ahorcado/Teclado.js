import { useState,useEffect, useRef } from "react";
import Tecla from "./Tecla";

function Teclado({teclasPermitidas, ultimaTecla, setUltima}) {
    //Hacer que construya el teclado con useEffect
    const alfabetoMayusculas = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    const tecladoConstruido = useRef();
    tecladoConstruido.current = false;
    let [filas,setFilas] = useState([<></>,<></>,<></>]);
    function inicailizarFilas() {
        setFilas([0, 1, 2].map((i) => {
            return (
                <div className="row gx-1 my-1">
                    <div className="col">
                        <Tecla tecla={alfabetoMayusculas[0 + 9 * i]} ultima={ultimaTecla} setUltima={setUltima} activo={teclasPermitidas.includes(alfabetoMayusculas[0 + 9 * i])} />
                    </div><div className="col">
                        <Tecla tecla={alfabetoMayusculas[1 + 9 * i]} ultima={ultimaTecla} setUltima={setUltima} activo={teclasPermitidas.includes(alfabetoMayusculas[1 + 9 * i])} />
                    </div><div className="col">
                        <Tecla tecla={alfabetoMayusculas[2 + 9 * i]} ultima={ultimaTecla} setUltima={setUltima} activo={teclasPermitidas.includes(alfabetoMayusculas[2 + 9 * i])} />
                    </div><div className="col">
                        <Tecla tecla={alfabetoMayusculas[3 + 9 * i]} ultima={ultimaTecla} setUltima={setUltima} activo={teclasPermitidas.includes(alfabetoMayusculas[3 + 9 * i])} />
                    </div><div className="col">
                        <Tecla tecla={alfabetoMayusculas[4 + 9 * i]} ultima={ultimaTecla} setUltima={setUltima} activo={teclasPermitidas.includes(alfabetoMayusculas[4 + 9 * i])} />
                    </div><div className="col">
                        <Tecla tecla={alfabetoMayusculas[5 + 9 * i]} ultima={ultimaTecla} setUltima={setUltima} activo={teclasPermitidas.includes(alfabetoMayusculas[5 + 9 * i])} />
                    </div><div className="col">
                        <Tecla tecla={alfabetoMayusculas[6 + 9 * i]} ultima={ultimaTecla} setUltima={setUltima} activo={teclasPermitidas.includes(alfabetoMayusculas[6 + 9 * i])} />
                    </div><div className="col">
                        <Tecla tecla={alfabetoMayusculas[7 + 9 * i]} ultima={ultimaTecla} setUltima={setUltima} activo={teclasPermitidas.includes(alfabetoMayusculas[7 + 9 * i])} />
                    </div><div className="col">
                        <Tecla tecla={alfabetoMayusculas[8 + 9 * i]} ultima={ultimaTecla} setUltima={setUltima} activo={teclasPermitidas.includes(alfabetoMayusculas[8 + 9 * i])} />
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
    },[]);
    return(
        <div id="teclado" className="col-md">
            <p className="fw-semibold">Puedes usar los botones o usar el teclado</p>
            {filas}
        </div>
    );
} export default Teclado;