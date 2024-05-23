import { useEffect, useState } from "react";

function Tecla({tecla, ultima, setUltima, activo = true}) {

    const desactivado = 
        <button className="btn btn-primary w-100" type="button" disabled>
            {tecla}
        </button>;

    const [boton,setBoton] = useState(<></>);
    
    function pulsar() {
        const e = {key : tecla};
        setUltima(e);
        setBoton(desactivado);
    }

    useEffect(() => {
        activo = ultima === tecla;
        setBoton(
        {activo}?
    <button className="btn btn-primary w-100" type="button" onClick={pulsar}>
        {tecla}
    </button>
        :
    {desactivado})}
    ,[ultima]);

    return(
        <>
            {boton}
        </>
    );
} export default Tecla;