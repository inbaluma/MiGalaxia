import { Link } from "react-router-dom";

function Juegos() {

  document.title = "Juegos de MiGalaxia";

  return (
    <div id="main">
      <h1 style={{ textAlign: "center", fontWeight: "bold" }}>Juegos</h1>
      <div className="row mx-3">
        <div className="col-12 col-md-6 col-lg-6 mb-3">
          <div className="card text-center">
            <img
              src="/images/logotrivia.jpg"
              className="card-img-top mx-auto"
              style={{ height: "200px", width: "200px", objectFit: "cover" }}
              alt="Logo del juego Trivia"
            />
            <div className="card-body">
              <h5 className="card-title">Trivia</h5>
              <p className="card-text">
                ¡Desafía tu conocimiento del espacio con nuestro juego de trivial! Desde planetas hasta agujeros negros, ¡prepárate para un viaje cósmico lleno de preguntas fascinantes!
              </p>
              <Link className="btn btn-primary" to="Trivia" aria-label="Ir al juego de Trivia">Ir a Trivia</Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6 mb-3">
          <div className="card text-center">
            <img
              src="/images/fotoAhorcado.png"
              className="card-img-top mx-auto"
              style={{ height: "200px", width: "200px", objectFit: "cover" }}
              alt="Logo del juego Ahorcado"
            />
            <div className="card-body">
              <h5 className="card-title">Ahorcado</h5>
              <p className="card-text">
                ¡Adivina la palabra secreta del cosmos antes de que se pierda en el vacío del espacio! Desafía tus habilidades con un giro cósmico del clásico juego del ahorcado.
              </p>
              <Link className="btn btn-primary" to="Ahorcado" aria-label="Ir al juego de Ahorcado">Ir a Ahorcado</Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6 mb-3">
          <div className="card text-center">
            <img
              src="/images/pasapalabraEspacio.jpg"
              className="card-img-top mx-auto"
              style={{ height: "200px", width: "200px", objectFit: "cover" }}
              alt="Logo del juego Pasapalabra Espacial"
            />
            <div className="card-body">
              <h5 className="card-title">Pasapalabra Espacial</h5>
              <p className="card-text">
                ¡Desafía tus conocimientos del espacio con un emocionante pasapalabra galáctico! ¡Letras, palabras y conceptos estelares te esperan en este desafío cósmico!
              </p>
              <Link className="btn btn-primary" to="pasapalabra" aria-label="Ir al juego Pasapalabra Espacial">Ir a Pasapalabra Espacial</Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6 mb-3">
          <div className="card text-center">
            <img
              src="/images/planetasmemoria.jpg"
              className="card-img-top mx-auto"
              style={{ height: "200px", width: "200px", objectFit: "cover" }}
              alt="Logo del juego Memoria Planetaria"
            />
            <div className="card-body">
              <h5 className="card-title">Memoria Planetaria</h5>
              <p className="card-text">
                ¡Descubre el universo mientras emparejas cartas de planetas en este juego de memoria galáctica! ¡Encuentra las parejas antes de que se pierdan en el espacio!
              </p>
              <Link className="btn btn-primary" to="Memoria" aria-label="Ir al juego Memoria Planetaria">Ir a Memoria Planetaria</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Juegos;





