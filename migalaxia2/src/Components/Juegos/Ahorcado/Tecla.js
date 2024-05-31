import { useEffect, useState } from "react";

function Tecla({tecla, ultima, cambiarTecla, activo = true}) {

    const [boton,setBoton] = useState(<></>);
    const [creado,setCreado] = useState(false);
    const [activoEstado,setActivo] = useState(activo);
    
    function pulsar() {
        const e = {key : tecla};
        cambiarTecla(e);
        setBoton(
        <button className="btn btn-primary w-100" type="button" aria-label={tecla.toLowerCase()} disabled>
            {tecla}
        </button>
        );
    }

    useEffect(() => {
        if (!creado) {
            setBoton(
                <button className="btn btn-primary w-100" type="button" aria-label={tecla.toLowerCase()} onClick={pulsar}>
                    {tecla}
                </button>
                );
            setCreado(true);
        }
        setActivo(activoEstado && (ultima !== tecla));
        if (!activoEstado) {
            setBoton(
            <button className="btn btn-primary w-100" type="button" aria-label={tecla.toLowerCase()} disabled>
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