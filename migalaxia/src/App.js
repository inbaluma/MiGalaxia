import React from "react";

// Componentes
import Cabecera from "./Components/Cabecera.js";
import Noticias from "./Components/Noticias.js";
import Bienvenido from "./Components/Bienvenido.js";
import Aprender from "./Components/Aprender.js";
import Jugar from "./Components/Jugar.js";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import FotoDelDia from "./Components/FotoDelDia.js";

library.add(fas, far);

class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      pagina: "0",
      mode: "dark"
    };
  }

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

  setPaginaActiva(element) {
    const nuevaPagina = element.getAttribute("data-page");
    this.setState({ pagina: nuevaPagina });
  }

  render() {
    const { pagina } = this.state;
    let child;
    switch(pagina) {
      case "0":
        child = <Bienvenido/>
        break;
      case "1":
        child = <Aprender/>;
        break;
      case "2":
        child = <Jugar/>;
        break;
      case "3":
        child = <FotoDelDia/>
        break;
      case "4":
        child = <Noticias/>;
      break;
      default:
        child = <Bienvenido/>;
    }
    return (
      <>
        <Cabecera app={this}/>
        {child}
      </>
    )
  }
}export default App;
  