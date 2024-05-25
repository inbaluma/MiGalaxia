import React, { useEffect } from "react";
import { useState } from 'react';

import "../../index.css"
import Navigation from "../Navigation";
import "./Memoria.css"
import Earth from "./MemoriaImg/Earth.jpg";
import Mars from "./MemoriaImg/Mars.jpg";
import Saturn from "./MemoriaImg/Saturn.jpg";
import Jupiter from "./MemoriaImg/Jupiter.jpg";
import Neptune from "./MemoriaImg/Neptune.jpg";
import Uranus from "./MemoriaImg/Uranus.jpg";
import cover from "./MemoriaImg/cover.png";
import SingleCard from "./MemoriaImg/SingleCard";

/*Revisar las rutas de las imagenes */
const cardImages = [
    {"src": Earth, matched: false},
    {"src": Mars, matched: false},
    {"src": Saturn, matched: false},
    {"src": Jupiter, matched: false},
    {"src": Neptune, matched: false},
    {"src": Uranus, matched: false}
]

function Memoria (){

    document.title = "Jugar a Memoria Planetaria";

    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    //shuffle cards
    const shuffledCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({...card, id: Math.random() }))

        setCards(shuffledCards)
        setTurns(0)
    }

    //handle a choice 
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    //compare 2 selected cards
    useEffect(() => { 
        if(choiceOne && choiceTwo){

            if(choiceOne.src == choiceTwo.src){
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if(card.src === choiceOne.src){
                            return {...card, matched: true}
                        }else{
                            return card
                        }
                    })
                })
                resetTurn()
            }else{
                resetTurn()
            }
        }
    }, [choiceOne, choiceTwo])

    console.log(cards)

    // reset choices & increase turn
    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
    }

    return(
        <div id="main" className="mx-3">
            <Navigation actual="Memoria Planetaria" paginas={[{nombre: "Jugar", path:"/jugar"}]}/>
            <h1 className="titulo mb-3">MEMORIA PLANETARIA</h1> 
            <button onClick={shuffledCards}>New Game</button>

            <div className="card-grid">
                {cards.map(card => (
                    <SingleCard 
                        key={card.id} 
                        card={card}
                        handleChoice={handleChoice}
                    />
                ))}
            </div>
        </div>
    );
}

export default Memoria;