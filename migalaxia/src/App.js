import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Componentes
import Cabecera from "./Components/Cabecera.js";
import Noticias from "./Components/Noticias.js";
import Bienvenido from "./Components/Bienvenido.js";
import Aprender from "./Components/Aprender.js";
import Jugar from "./Components/Jugar.js";
import FotoDelDia from "./Components/FotoDelDia.js";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far);

class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      mode: "dark"
    };
  }

  router = createBrowserRouter([
    {
      path: "/",
      element: <Bienvenido/>
    },
    {
      path: "/aprender",
      element: <Aprender/>
    },
    {
      path: "/jugar",
      element: <Jugar/>
    },
    {
      path: "/foto",
      element: <FotoDelDia/>
    },
    {
      path: "/noticias",
      element: <Noticias/>
    }
  ]);

  changeMode(elemento) {
    const body = document.getElementsByTagName("body")[0];
    const classList = document.getElementById("cabecera").classList;

    if (this.state.mode === "dark") {
      this.setState({mode: "light"});
      body.setAttribute("data-bs-theme", "light");
      
      classList.remove("gradient-dark");
      classList.add("gradient-light");

      elemento.textContent = "Cambiar a modo oscuro";
    }
    else {
      this.setState({mode: "dark"});
      body.setAttribute("data-bs-theme", "dark");
      
      classList.remove("gradient-light");
      classList.add("gradient-dark");

      elemento.textContent = "Cambiar a modo claro";
    }
    
  }

  render() {
    const path = this.router.state.location.pathname;
    return (
      <>
        <Cabecera app={this} path={path}/>
        <RouterProvider router={this.router}/>
      </>
    )
  }
}
export default App;
  