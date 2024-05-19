import React, { useState } from 'react';
import './Trivia.css'
import "../../index.css"

import Navigation from "../Navigation";
import { data } from "../../assets/data";

const Trivia = () => {

    let [index, setIndex] = useState(0);
    let [question,setQuestion] = useState(data[index]);

    const checkAns = (e,ans) => {
        if (question.ans===ans){
            e.target.classList.add("correct");
        }else{
            e.target.classList.add("wrong")
        }
    }

    return (
        <div className="mx-3">
            <Navigation actual="Trivia" paginas={[{nombre: "Jugar", path:"/jugar"}]}/>
            <div className="contenedor">
                <h1 className="titulo mb-3">TRIVIA</h1>
                <hr />
                <h2>{index +1}.{question.question}</h2>
                <ul>
                    <li onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
                    <li onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
                    <li onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
                    <li onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
                </ul>
                <button>Siguiente</button>
                <div className="indice">1 de 20 preguntas</div>
            </div>
                        
        </div>
    );
}

export default Trivia;