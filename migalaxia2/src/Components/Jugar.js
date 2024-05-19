import { Link } from "react-router-dom";


function Juegos() {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontWeight: "bold" }}>Juegos</h1>
      <div className="row mx-3">
        <div className="col-12 col-md-6 col-lg-6 mb-3">
          <div className="card text-center">
            <img
              src="/logotrivia.jpg"
              className="card-img-top mx-auto"
              style={{ height: "200px", width: "200px", objectFit: "cover" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Trivia</h5>
              <p className="card-text">
                ¡Desafía tu conocimiento del espacio con nuestro juego de trivial! Desde planetas hasta agujeros negros, ¡prepárate para un viaje cósmico lleno de preguntas fascinantes!
              </p>
              <Link className="btn btn-primary" to="Trivia">Ir a Trivia</Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6 mb-3">
          <div className="card text-center">
            <img
              src="/fotoAhorcado.png"
              className="card-img-top mx-auto"
              style={{ height: "200px", width: "200px", objectFit: "cover" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Ahorcado</h5>
              <p className="card-text">
                ¡Adivina la palabra secreta del cosmos antes de que se pierda en el vacío del espacio! Desafía tus habilidades con un giro cósmico del clásico juego del ahorcado.
              </p>
              <Link className="btn btn-primary" to="Ahorcado">Ir a Ahorcado</Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6 mb-3">
          <div className="card text-center">
            <img
              src="/pasapalabraEspacio.jpg"
              className="card-img-top mx-auto"
              style={{ height: "200px", width: "200px", objectFit: "cover" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Pasapalabra Espacial</h5>
              <p className="card-text">
                ¡Desafía tus conocimientos del espacio con un emocionante pasapalabra galáctico! ¡Letras, palabras y conceptos estelares te esperan en este desafío cósmico!
              </p>
              <Link className="btn btn-primary" to="pasapalabra">Ir a Pasapalabra Espacial</Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6 mb-3">
          <div className="card text-center">
            <img
              src="/planetasmemoria.jpg"
              className="card-img-top mx-auto"
              style={{ height: "200px", width: "200px", objectFit: "cover" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Memoria Planetaria</h5>
              <p className="card-text">
                ¡Descubre el universo mientras emparejas cartas de astronautas, planetas y naves espaciales en este juego de memoria galáctica! ¡Encuentra las parejas antes de que se pierdan en el espacio!
              </p>
              <Link className="btn btn-primary" to="Memoria">Ir a Memoria Planetaria</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Juegos;




