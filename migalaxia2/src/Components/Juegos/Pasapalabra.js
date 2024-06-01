import React from "react";

// Modelos
import Palabra from "../../model/PalabrasJuego";
import SetPalabras from "../../model/SetPalabras";

import "../../index.css"
import Navigation from "../Navigation";

function Pasapalabra() {

    document.title = "Jugar al Pasapalabra"
/* para hacer pruebas
    const palabras = new SetPalabras([
        new Palabra('A', '', ''),
        new Palabra('B', '', '')
    ]);
*/
    const palabras = new SetPalabras([
        new Palabra('A', 'Astronauta', 'Persona que tripula una astronave o que está entrenada para este trabajo.'),
        new Palabra('B', 'Baricentro', 'Centro de masa de un sistema de cuerpos.'),
        new Palabra('C', 'Cometa', 'Astro generalmente formado por un núcleo poco denso y una atmósfera luminosa que lo envuelve, precediéndolo o siguiéndolo, según su posición respecto del Sol, y que describe una órbita muy excéntrica.'),
        new Palabra('D', 'Doppler', 'Nombre del efecto que produce un cambio aparende de la frecuencia de una onda cuando existe un movimiento relativo entre la fuente emisora y el observador.'),
        new Palabra('E', 'Eclipse', 'Ocultación transitoria total o parcial de un astro por interposición de otro cuerpo celeste.'),
        new Palabra('F', 'Firmamento', 'Bóveda celeste en que están aparentemente los astros.'),
        new Palabra('G', 'Gravitación', 'Atracción universal de los cuerpos en razón de su masa.'),
        new Palabra('H', 'Heliocentrismo', 'Concepción cosmológica que dictaba que el Sol era el centro del universo, en contraposición con el geocentrismo.'),
        new Palabra('I', 'Interferómetro', 'Conjunto de instrumentos que se utilizan simultáneamente apuntando al mismo objeto para obtener una imagen de mayor resolución.'),
        new Palabra('J', 'Júpiter', 'El mayor planeta del Sistema Solar.'),
        new Palabra('K', 'Kelvin', 'Unidad de medida de temperatura.'),
        new Palabra('L', 'Luz', 'Radiación electromagnética visible al ojo humano.'),
        new Palabra('M', 'Meteorito', 'Fragmento de un cuerpo celeste que cae sobre la Tierra, o sobre un astro cualquiera.'),
        new Palabra('N', 'Nave', 'Vehículo capaz de navegar más allá de la atmósfera terrestre.'),
        new Palabra('Ñ', 'Año luz', 'Distancia que viaja la luz en un año terrestre.', false, "Expresión de 2 palabras"),
        new Palabra('O', 'Órbita', 'Trayectoria curva que describe un cuerpo en su movimiento alrededor de un centro.'),
        new Palabra('P', 'Planeta Enano', 'Un cuerpo celeste que orbita alrededor del Sol, posee suficiente masa, no ha limpiado su órbita de otros objetos y no es un satélite de otro planeta.', "Expresión de 2 palabras"),
        new Palabra('Q', 'Quantum', 'En latín, cantidad indivisible de energía, proporcional a la frecuencia del campo al que se asocia.'),
        new Palabra('R', 'Rayos cósmicos', 'Partículas subatómicas extremadamente energéticas que viajan por el universo con velocidades cercanas a la de la luz.', "Expresión de 2 palabras"),
        new Palabra('S', 'Solsticio', 'Cada uno de los dos momentos anuales en que el Sol se halla en uno de los dos trópicos, lo cual sucede del 21 al 22 de junio para el de Cáncer, y del 21 al 22 de diciembre para el de Capricornio, y en los que la diferencia entre la duración del día y de la noche es mayor.'),
        new Palabra('T', 'Telescopio', 'Instrumento que consta de lentes o espejos curvos y que permite ver agrandada una imagen de un objeto lejano, en especial los cuerpos celestes.'),
        new Palabra('U', 'Universo', 'Espacio exterior a la Tierra.'),
        new Palabra('V', 'Venus', 'El segundo planeta del sistema solar en orden de proximidad al Sol'),
        new Palabra('W', 'Hawking', 'Apellido de un físico que hizo grandes descubrimientos a cerca de los abujeros negros y obtuvo 12 doctorados.', false),
        new Palabra('X', 'Kerolox', 'Nombre común para una combinación de combustible y comburente utilizada para propulsar cohetes espaciales.', false),
        new Palabra('Y', 'Mercury', 'Nombre del primer programa espacial tripulado de los Estados Unidos.', false),
        new Palabra('Z', 'Zodíaco', 'La franja de la esfera celeste que se extiende, aproximadamente, unos 9 grados a ambos lados de la eclíptica (el plano de la órbita terrestre proyectado sobre el firmamento). Por esta zona se desplazan el Sol, la Luna y los planetas en su movimiento con respecto al fondo de estrellas.'),
    ]);

    const comprobar = (e) => {
        // Obtenemos el input
        const input = document.getElementById("inputPalabra").value;
        const check = palabras.checkPalabra(input);
        const mensaje = document.getElementById("mensaje");

        // Comprobamos la palabra
        if (check) { // Palabra correcta
            mensaje.innerText = "La palabra introducida '"+input+"' es correcta.";
            siguientePalabra();
        }
        else {
            document.getElementById("intentosRestantes").innerText = palabra.getIntentosRestantes();
            if (palabra.getIntentosRestantes() > 1)
                mensaje.innerText = "La palabra introducida '"+input+"' es incorrecta, te quedan "+palabra.getIntentosRestantes()+" intentos.";
            else if (palabra.getIntentosRestantes() === 1)
                mensaje.innerText = "La palabra introducida '"+input+"' es incorrecta, te queda 1 intento.";
            else {
                mensaje.innerText = "La palabra introducida '"+input+"' es incorrecta, se agotaron los intentos. La palabra correcta era '"+palabra.getPalabra()+"'.";
                siguientePalabra();
            }
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
            mensaje.innerText += " Has completado el juego."
        }
        else {
            // Buscamos la siguiente palabra sin adivinar
            palabra = palabras.getNextPalabra();
            while (! palabra.isLibre()) palabra = palabras.getNextPalabra();

            document.getElementById("titulo").innerText = palabra.getHeading();
            document.getElementById("definicion").innerText = palabra.getDefinicion();
            document.getElementById("intentosRestantes").innerText = palabra.getIntentosRestantes();

            document.getElementById("inputPalabra").value = "";
        }

        const displayLetras = document.getElementById("letras-siguientes");
        displayLetras.innerHTML = displayLetrasHTML();
    }

    const displayLetrasHTML = () => {
        let display = "<h4>Resumen del juego</h4>";
        const estados = palabras.getEstadoLetras();
        for (let i = 0; i < estados.length; i++) {
            //console.log(estados[i]);
            display += "<h5>"+estados[i].estado+"</h5>";
            const letras = estados[i].letras;
            if (letras == null || letras.length === 0) {
                display += "Ninguna palabra";
                continue;
            }
            for (let j = 0; j < letras.length; j++) {
                display += "<span class='badge mx-1 "+estados[i].clase+"'>"+letras[j]+"</span>";
            }
        }
        return display;
    }

    let palabra = palabras.getNextPalabra();

    const estados = palabras.getEstadoLetras();
    const displayLetras = <div id="letras-siguientes">
        <h4>Resumen del juego</h4>
        {
            estados.map(estado => {
                return (
                    <>
                    <h5>{estado.estado}</h5>
                    {estado.letras == null || estado.letras.length === 0 ? "Ninguna palabra" :
                    estado.letras.map(letra => {
                        return (<span className={"badge mx-1 " + estado.clase}>{letra}</span>)
                    })
                    }
                    </>
                )
            })
            
        }
    </div>

    return (
        <main id="main" aria-live="polite" role="document" className="mx-3">
            <Navigation actual="Pasapalabra" paginas={[{nombre: "Jugar", path:"/jugar"}]}/>
            <h1 className="titulo mb-3">Pasapalabra</h1>
            <div className="card mx-3">
                <div className="card-body">
                    <h2 className="titulo" id="titulo" tabIndex={0}>{palabra.getHeading()}</h2>
                    <p id="definicion" tabIndex={0}>{palabra.definicion}</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <form className="row" action={comprobar}>
                                <label id="label-input-palabra" htmlFor="inputPalabra" className="form-label">Introduzca la palabra:</label>
                                <div className="col-auto">
                                    <input type="text" id="inputPalabra" className="form-control form-control-lg" aria-describedby="mensaje"/>
                                </div>

                                <div className="col-auto">
                                    <button id="comprobar-boton" type="submit" onClick={comprobar} className="btn btn-primary me-2 my-1">Comprobar</button>
                                    <button id="pasapalabra-boton" onClick={siguientePalabra} className="btn btn-secondary me-2 my-1">Pasapalabra</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6">
                            <p>Número de intentos restantes: <strong id="intentosRestantes">{palabra.getIntentosRestantes()}</strong></p>
                        </div>
                    </div>
                    <p id="mensaje" role="status"></p>
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