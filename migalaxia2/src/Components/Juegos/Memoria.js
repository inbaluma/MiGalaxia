import React from "react";
import { useState } from 'react';

import "../../index.css"
import Navigation from "../Navigation";
/*import "./Memoria.css"*/

/*Revisar las rutas de las imagenes */
const cardImages = [
    {"src": "./MemoriaImg/Earth.jpg"},
    {"src": "./MemoriaImg/Mars.jpg"},
    {"src": "./MemoriaImg/Saturn.jpg"},
    {"src": "./MemoriaImg/Jupiter.jpg"},
    {"src": "./MemoriaImg/Neptune.jpg"},
    {"src": "./MemoriaImg/Uranus.jpg"}
]

function Memoria (){

    document.title = "Jugar a Memoria Planetaria";

    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    //shuffle cards
    const shuffledCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({...card, id: Math.random() }))

        setCards(shuffledCards)
        setTurns(0)
    }

    console.log(cards, turns)

    return(
        <div className="mx-3">
            <Navigation actual="Memoria Planetaria" paginas={[{nombre: "Jugar", path:"/jugar"}]}/>
            <h1 className="titulo mb-3">MEMORIA PLANETARIA</h1> 
            <button onClick={shuffledCards}>New Game</button>

            <div className="card-grid">
                {cards.map(card => (
                    <div className="card" key={card.id}>
                        <div>
                            <img className="front" src={card.src} alt="card front"/>
                            <img className="back" src="./MemoriaImg/cover.png" alt="card back"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Memoria;