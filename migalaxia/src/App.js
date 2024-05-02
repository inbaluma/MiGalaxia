import React from "react";

// Componentes
import Cabecera from "./Components/Cabecera.js";
import Noticias from "./Components/Noticias.js";
import Bienvenido from "./Components/Bienvenido.js";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far);

class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      pagina: "0"
    };
  }

  setPaginaActiva(element) {
    const nuevaPagina = element.getAttribute("data-page");
    this.setState({ pagina: nuevaPagina });
    console.log(nuevaPagina);
    console.log(element)
  }

  render() {
    const { pagina } = this.state;
    let child;
    switch(pagina) {
      case "0":
        child = <Bienvenido/>
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
} export default App;
  