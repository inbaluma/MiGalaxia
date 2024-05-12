import React from "react";

import "../../index.css"
import Navigation from "../Navigation";

function trivia (){
    return(
        <div className="mx-3">
            <Navigation actual="Trivia" paginas={[{nombre: "Jugar", path:"/jugar"}]}/>
            <h1 className="titulo mb-3">TRIVIA</h1>            
        </div>
    );
}

export default trivia;