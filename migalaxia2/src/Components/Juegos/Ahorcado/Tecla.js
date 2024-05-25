import { useEffect, useState } from "react";

function Tecla({tecla, ultima, cambiarTecla, activo = true}) {

    const [boton,setBoton] = useState(<></>);
    const [creado,setCreado] = useState(false);
    
    function pulsar() {
        const e = {key : tecla};
        cambiarTecla(e);
        setBoton(
            <button className="btn btn-primary w-100" type="button" disabled>
                {tecla}
            </button>
            );
    }

    useEffect(() => {
        if (!creado) {
            setBoton(
                <button className="btn btn-primary w-100" type="button" onClick={pulsar}>
                    {tecla}
                </button>
                );
            setCreado(true);
        }
        activo = activo && (ultima !== tecla);
        if (!activo) {
            setBoton(
            <button className="btn btn-primary w-100" type="button" disabled>
                {tecla}
            </button>
            )
        }}
    ,[ultima]);

    return(
        <>
            {boton}
        </>
    );
} export default Tecla;