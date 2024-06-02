import React, { useState, useRef } from 'react';
import './Trivia.css'
import "../../index.css"

import Navigation from "../Navigation";
import { data } from "../../assets/data";

const Trivia = () => {

    document.title = "Jugar al Trivia"

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1, Option2, Option3, Option4];

    const checkAns = (e, ans) => {
        if (lock === false) {
            if (question.ans === ans) {
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev => prev + 1);
            } else {
                e.target.classList.add("wrong");
                setLock(true);
                option_array[question.ans - 1].current.classList.add("correct");
            }
        }
    }

    const next = () => {
        if (lock === true) {
            if (index === data.length - 1) {
                setResult(true);
                return 0;
            }
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false);
            option_array.map((option) => {
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
                return null;
            })
        }
    }

    const reset = () => {
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    }

    return (
        <div id="main" className="mx-3">
            <Navigation actual="Trivia" paginas={[{ nombre: "Jugar", path: "/jugar" }]} />
            <div className="contenedor">
                <h1 className="titulo mb-3">TRIVIA</h1>
                <hr />
                {result ? <></> : <>
                    <h2 tabIndex={0} role="heading" aria-level="2">{index + 1}.{question.question}</h2>
                    <ul>
                        <li 
                            ref={Option1} 
                            onClick={(e) => { checkAns(e, 1) }} 
                            tabIndex={0}
                            role="button"
                            aria-selected={lock && question.ans === 1 ? "true" : "false"}>
                            {question.option1}
                        </li>
                        <li 
                            ref={Option2} 
                            onClick={(e) => { checkAns(e, 2) }} 
                            tabIndex={0}
                            role="button"
                            aria-selected={lock && question.ans === 2 ? "true" : "false"}>
                            {question.option2}
                        </li>
                        <li 
                            ref={Option3} 
                            onClick={(e) => { checkAns(e, 3) }} 
                            tabIndex={0}
                            role="button"
                            aria-selected={lock && question.ans === 3 ? "true" : "false"}>
                            {question.option3}
                        </li>
                        <li 
                            ref={Option4} 
                            onClick={(e) => { checkAns(e, 4) }} 
                            tabIndex={0}
                            role="button"
                            aria-selected={lock && question.ans === 4 ? "true" : "false"}>
                            {question.option4}
                        </li>
                    </ul>
                    <button onClick={next} tabIndex={0} aria-label = "Siguiente pregunta">Siguiente</button>
                    <div className="indice">{index + 1} de {data.length} preguntas</div></>}
                {result ? <>
                    <h2>Tu puntuación es {score} de {data.length}</h2>
                    <button onClick={reset} tabIndex={0} aria-label = "Reiniciar Trivia">Reiniciar</button>
                </> : <></>}

            </div>

        </div>
    );
}

export default Trivia;
