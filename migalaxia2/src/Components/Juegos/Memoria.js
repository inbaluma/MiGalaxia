import React from "react";

import "../../index.css"
import Navigation from "../Navigation";

function memoria (){
    return(
        <div className="mx-3">
            <Navigation actual="Memoria Planetaria" paginas={[{nombre: "Jugar", path:"/jugar"}]}/>
            <h1 className="titulo mb-3">MEMORIA PLANETARIA</h1>            
        </div>
    );
}

export default memoria;