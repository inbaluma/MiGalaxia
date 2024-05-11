import { width } from "@fortawesome/free-regular-svg-icons/faAddressBook";
import React from "react";
import ReactDOM from 'react-dom/client'
import EmblaCarousel from './Aprender/EmblaCarousel'
import Footer from './Aprender/Footer'

import './Aprender/base.css'
import './Aprender/sandbox.css'
import './Aprender/embla.css'

const OPTIONS = {}
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function ComponenteConImagen() {
    return (
      <div style={{textAlign: "center"}}>
        <h1 style={{fontWeight: "bold", marginTop: "8px"}}>Aprender</h1>
        <h2 style={{fontWeight: "bold", marginBottom: "20px"}}>El sistema solar</h2>
        <h3>Navega entre los planetas</h3>
        <div style={{marginTop: "50px"}}></div>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        <Footer />
      </div>
    );
  }
  
  export default ComponenteConImagen;

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      
    </React.StrictMode>
  )