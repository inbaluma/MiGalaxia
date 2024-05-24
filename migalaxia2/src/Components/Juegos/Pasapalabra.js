import React from "react";

// Modelos
import Palabra from "../../model/PalabrasJuego";
import SetPalabras from "../../model/SetPalabras";

import "../../index.css"
import Navigation from "../Navigation";

function Pasapalabra() {

    document.title = "Jugar al Pasapalabra"

    const palabras = new SetPalabras([
        new Palabra('A', 'Astronauta', 'Persona que tripula una astronave o que está entrenada para este trabajo.'),
        new Palabra('B', 'Baricentro', 'el centro de masa de un sistema de cuerpos.'),
        new Palabra('C', 'Cometa', 'Astro generalmente formado por un núcleo poco denso y una atmósfera luminosa que lo envuelve, precediéndolo o siguiéndolo, según su posición respecto del Sol, y que describe una órbita muy excéntrica.'),
        new Palabra('D', 'Doppler', 'Efecto que produce un cambio aparende de la frecuencia de una onda cuando existe un movimiento relativo entre la fuente emisora y el observador.'),
        new Palabra('E', 'Eclipse', 'Ocultación transitoria total o parcial de un astro por interposición de otro cuerpo celeste.'),
        new Palabra('F', 'Firmamento', 'Bóveda celeste en que están aparentemente los astros.'),
        new Palabra('G', 'Gravitación', 'Atracción universal de los cuerpos en razón de su masa.'),
        new Palabra('H', 'Heliocentrismo', 'Concepción cosmológica que dictaba que el Sol era el centro del universo, en contraposición con el geocentrismo.'),
        new Palabra('I', 'Interferómetro', 'Conjunto de instrumentos que se utilizan simultáneamente apuntando al mismo objeto para obtener una imagen de mayor resolución.'),
        new Palabra('J', 'Júpiter', 'El mayor planeta del Sistema Solar.'),
        new Palabra('K', 'Kelvin', 'Unidad de medida de temperatura.'),
        new Palabra('L', 'Luz', 'Radiación electromagnética visible al ojo humano.'),
        new Palabra('M', 'Meteorito', 'Fragmento de un cuerpo celeste que cae sobre la Tierra, o sobre un astro cualquiera.'),
        //new Palabra('N', ['Nave espacial', 'Nave', 'Astronave'], 'Vehículo capaz de navegar más allá de la atmósfera terrestre.'),
        new Palabra('N', 'Nave', 'Vehículo capaz de navegar más allá de la atmósfera terrestre.'),
        new Palabra('Ñ', 'Año luz', 'Distancia que viaja la luz en un año terrestre.', false),
        new Palabra('O', 'Órbita', 'Trayectoria curva que describe un cuerpo en su movimiento alrededor de un centro.'),
        new Palabra('P', 'Planeta Enano', 'Un cuerpo celeste que orbita alrededor del Sol, posee suficiente masa, no ha limpiado su órbita de otros objetos y no es un satélite de otro planeta.'),
        new Palabra('Q', 'Quantum', '...'),
        new Palabra('R', 'Rayos cósmicos', 'Partículas subatómicas extremadamente energéticas que viajan por el universo con velocidades cercanas a la de la luz.'),
        new Palabra('S', 'Solsticio', 'Cada uno de los dos momentos anuales en que el Sol se halla en uno de los dos trópicos, lo cual sucede del 21 al 22 de junio para el de Cáncer, y del 21 al 22 de diciembre para el de Capricornio, y en los que la diferencia entre la duración del día y de la noche es mayor.'),
        new Palabra('T', 'Telescopio', 'Instrumento que consta de lentes o espejos curvos y que permite ver agrandada una imagen de un objeto lejano, en especial los cuerpos celestes.'),
        new Palabra('U', 'Universo', 'Espacio exterior a la Tierra.'),
        new Palabra('V', 'Venus', 'El segundo planeta del sistema solar en orden de proximidad al Sol'),
        new Palabra('W', 'Hawking', 'Apellido de un físico que hizo grandes descubrimientos a cerca de los abujeros negros.', false),
        new Palabra('X', 'Rayos X', '...', false),
        new Palabra('Y', '', ''),
        new Palabra('Z', 'Zodíaco', 'La franja de la esfera celeste que se extiende, aproximadamente, unos 9 grados a ambos lados de la eclíptica (el plano de la órbita terrestre proyectado sobre el firmamento). Por esta zona se desplazan el Sol, la Luna y los planetas en su movimiento con respecto al fondo de estrellas.'),
    ]);

    const comprobar = (e) => {
        // Obtenemos el input
        const input = document.getElementById("inputPalabra").value;
        const check = palabras.checkPalabra(input);
        const mensaje = document.getElementById("mensaje");

        // Comprobamos la palabra
        if (check) { // Palabra correcta
            mensaje.innerText = "La palabra es correcta.";
            siguientePalabra();
        }
        else {
            document.getElementById("intentosRestantes").innerText = palabra.getIntentosRestantes();
            mensaje.innerText = "La palabra es incorrecta.";
            if (palabra.getIntentosRestantes() <= 0) siguientePalabra();
        }

        document.getElementById("acertadas").innerText = palabras.getAciertos();
        document.getElementById("erroneas").innerText = palabras.getErroneos();
        document.getElementById("restantes").innerText = palabras.getRestantes();

        if (palabras.isTerminado()) {
            document.getElementById("comprobar-boton").disabled = true;
            document.getElementById("pasapalabra-boton").disabled = true;
        }
    }   

    const siguientePalabra = (e) => {
        const mensaje = document.getElementById("mensaje");
        if (palabras.isTerminado()) {
            mensaje.innerText = "Has completado el juego."
        }
        else {
            // Buscamos la siguiente palabra sin adivinar
            palabra = palabras.getNextPalabra();
            while (! palabra.isLibre()) palabra = palabras.getNextPalabra();

            document.getElementById("titulo").innerText = palabra.getHeading();
            document.getElementById("definicion").innerText = palabra.getDefinicion();
            document.getElementById("intentosRestantes").innerText = palabra.getIntentosRestantes();

            document.getElementById("inputPalabra").value = "";

            mensaje.innerText = "";

            const displayLetras = document.getElementById("letras-siguientes");
            displayLetras.innerHTML = displayLetrasHTML();
        }
        return null;
    }

    const displayLetrasHTML = () => {
        const letras = palabras.getNextLetras();

            let innerHTML = "";
            for(let i = 0; i < letras.length; i++) {
                let datos = {};
                switch (letras[i].estado) {
                    case 1: // Palabra acertada
                        datos.estado = "Correcto";
                        datos.formato = "text-bg-success";
                    break;
                    case -1: // Palabra incorrecta
                        datos.estado = "Incorrecto";
                        datos.formato = "text-bg-danger";
                    break;
                    default:
                        datos.estado = "Disponible";
                        datos.formato = "text-bg-tertiary";
                }
                innerHTML += "<span class='badge mx-1 "+ datos.formato +"'>" +
                    letras[i].letra + "<br/>" +
                    datos.estado +
                "</span>"
            }
        return innerHTML;
    }

    let palabra = palabras.getNextPalabra();

    

    const componentes = [];
    const letras = palabras.getNextLetras();
    for(let i = 0; i < letras.length; i++) {
        componentes.push(<span key={i} className="badge mx-1">
            {letras[i].letra} <br/> Disponible
        </span>);
    }

    const displayLetras = <p id="letras-siguientes">
        {componentes}
    </p>;


    return (
        <main id="main" className="mx-3">
            <Navigation actual="Pasapalabra" paginas={[{nombre: "Jugar", path:"/jugar"}]}/>
            <h1 className="titulo mb-3">Pasapalabra</h1>
            <div className="card mx-3">
                <div className="card-body">
                    <h2 className="titulo" id="titulo">{palabra.getHeading()}</h2>
                    <p id="definicion">{palabra.definicion}</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <label htmlFor="inputPalabra" className="form-label">Introduzca la palabra:</label>
                                <div className="col-auto">
                                    <input type="text" id="inputPalabra" className="form-control form-control-lg"/>
                                </div>

                                <div className="col-auto">
                                    <button id="comprobar-boton" onClick={comprobar} className="btn btn-primary me-2 my-1">Comprobar</button>
                                    <button id="pasapalabra-boton" onClick={siguientePalabra} className="btn btn-secondary me-2 my-1">Pasapalabra</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <p>Número de intentos restantes: <strong id="intentosRestantes">{palabra.getIntentosRestantes()}</strong></p>
                        </div>
                    </div>
                    <p id="mensaje"></p>
                    <p>
                        Palabras acertadas: <strong id="acertadas">{palabras.getAciertos()}</strong>.
                        Palabras erróneas: <strong id="erroneas">{palabras.getErroneos()}</strong>.
                        Palabras restantes: <strong id="restantes">{palabras.getRestantes()}</strong>.
                    </p>
                    {displayLetras}
                </div>
            </div>
        </main>
    )
    
}
export default Pasapalabra;