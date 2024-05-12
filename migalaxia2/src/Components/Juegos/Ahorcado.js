import React from "react";

import "../../index.css"
import Navigation from "../Navigation";

function ahorcado (){
    return(
        <div className="mx-3">
            <Navigation actual="Ahorcado" paginas={[{nombre: "Jugar", path:"/jugar"}]}/>
            <h1 className="titulo mb-3">AHORCADO</h1>            
        </div>
    );
}

export default ahorcado;