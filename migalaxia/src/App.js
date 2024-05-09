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
      path: "/noticias/*",
      element: <Noticias/>
    }
  ]);

  changeMode(elemento) {
    const prevMode = this.state.mode;
    let mode;
    if (prevMode === "dark") {
      this.setState({mode: "light"});
      mode = "light";
    }
    else {
      this.setState({mode: "dark"})
      mode = "dark";
    }

    const body = document.getElementsByTagName("body")[0];    
    body.setAttribute("data-bs-theme", mode);

    this.changeModeClassName(prevMode, mode, "gradient-");

    //const textNormal = document.getElementsByClassName("text-normal-"+this.state.mode);
    this.changeModeClassName(prevMode, mode, "text-normal-");
    this.changeModeClassName(prevMode, mode, "text-secondary-");
    this.changeModeClassName(prevMode, mode, "link-secondary-");


  }

  changeModeClassName(prevMode, mode, className) {
    const elements = document.getElementsByClassName(className+prevMode);

    for(let i = 0; i < elements.length; i++) {
      const classList = elements[i].classList;
      classList.add(className+mode);
      classList.remove(className+prevMode);
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
  