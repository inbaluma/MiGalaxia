import React from "react";
import Cabecera from "./Components/Cabecera.js";
import Noticias from "./Components/Noticias.js"
import Bienvenido from "./Components/Bienvenido.js"

class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      pagina: "0"
    };
  }

  setPaginaActiva(e) {
    const nuevaPagina = e.target.getAttribute("data-page");
    this.setState({ pagina: nuevaPagina });
    console.log(nuevaPagina);
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
        child = null;
    }
    return (
      <>
        <Cabecera app={this}/>
        {child}
      </>
    )
  }
} export default App;
  