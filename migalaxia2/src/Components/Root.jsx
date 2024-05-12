import Cabecera from "./Cabecera.js";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Root = () => {
  const [mode, setMode] = useState("dark");

  function changeMode(elemento) {
    let currentMode;
    let texto;
    if (mode === "dark") {
      setMode("light");
      currentMode = "light";
      texto = "Cambiar a modo oscuro";
    } else {
      setMode("dark");
      currentMode = "dark";
      texto = "Cambiar a modo claro";
    }

    const body = document.getElementsByTagName("body")[0];
    body.setAttribute("data-bs-theme", currentMode);

    changeModeClassName(mode, currentMode, "gradient-");
    changeModeClassName(mode, currentMode, "text-normal-");
    changeModeClassName(mode, currentMode, "text-secondary-");
    changeModeClassName(mode, currentMode, "link-secondary-");

    return texto;
  }

  function changeModeClassName(prevMode, mode, className) {
    const elements = document.getElementsByClassName(className+prevMode);

    for(let i = 0; i < elements.length; i++) {
      const classList = elements[i].classList;
      classList.add(className+mode);
      classList.remove(className+prevMode);
    }
  }

  return (
    <>
      <Cabecera changeMode={changeMode} />
      <Outlet />
    </>
  );
};

export default Root;
