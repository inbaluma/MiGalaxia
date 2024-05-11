import Cabecera from "./Cabecera.js"
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Root = () => {
    const [mode, setMode] = useState("dark");
    function changeMode(elemento) {
        const body = document.getElementsByTagName("body")[0];
        const classList = document.getElementById("cabecera").classList;

        if (mode === "dark") {
            setMode("light");
            body.setAttribute("data-bs-theme", "light");
      
            classList.remove("gradient-dark");
            classList.add("gradient-light");

            elemento.textContent = "Cambiar a modo oscuro";
        }
        else {
            setMode("dark")
            body.setAttribute("data-bs-theme", "dark");
      
            classList.remove("gradient-light");
            classList.add("gradient-dark");

            elemento.textContent = "Cambiar a modo claro";
        }
    } 
    
    return (
      <>
        <Cabecera changeMode={changeMode}/>
        <Outlet />
      </>
    );
}

export default Root;
