import { width } from "@fortawesome/free-regular-svg-icons/faAddressBook";
import React from "react";
import ReactDOM from 'react-dom/client'
import EmblaCarousel from './Aprender/EmblaCarousel'


// ESTE IMPORT CAMBIA EL FORMATO DE LA PAGINA ENTERA!
//import './Aprender/base.css'
import './Aprender/sandbox.css'
import './Aprender/embla.css'

import sunImage from './Aprender/sun.jpg';
import mercurioImage from './Aprender/mercurio.jpg';
import venusImage from './Aprender/Venus.jpg'
import earthImage from './Aprender/Earth.jpg'
import marsImage from './Aprender/Mars.jpg'
import jupiterImage from './Aprender/Jupiter.jpg'
import saturnImage from './Aprender/Saturn.jpg'
import uranusImage from './Aprender/Uranus.jpg'
import neptuneImage from './Aprender/Neptune.jpg'

const OPTIONS = {}
//const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const SLIDES = [
  {
    imageUrl: sunImage,
    path: "/infoSun",
  },
  {
    imageUrl: mercurioImage,
    path: "/infoMercury"
  },
  {
    imageUrl: venusImage,
    path: "/infoVenus"
  },
  {
    imageUrl: earthImage,
    path: "/infoEarth"
  },
  {
    imageUrl: marsImage,
    path: "/infoMars"
  },
  {
    imageUrl: jupiterImage,
    path: "/infoJupiter"
  },
  {
    imageUrl: saturnImage,
    path: "/infoSaturn"
  },
  {
    imageUrl: uranusImage,
    path: "/infoUranus"
  },
  {
    imageUrl: neptuneImage,
    path: "/infoNeptune"
  }
]

function ComponenteConImagen() {
    return (
      <div style={{textAlign: "center"}}>
        <h1 style={{fontWeight: "bold", marginTop: "8px"}}>Aprender</h1>
        <h2 style={{fontWeight: "bold", marginBottom: "20px"}}>El sistema solar</h2>
        <h3>Navega entre los planetas</h3>
        <div style={{marginTop: "50px"}}></div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    );
  }
  
  export default ComponenteConImagen;

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      
    </React.StrictMode>
  )