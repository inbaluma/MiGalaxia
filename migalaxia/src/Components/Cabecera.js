import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Cabecera.css';
function Cabecera(props) {

  const setPaginaActiva = (e) => {
    const active = document.getElementsByClassName("active");

    // Eliminamos la clase active de los elementos activos
    for(let i = 0; i < active.length; i++) {
      active[i].classList.remove("active");
    }

    let element = e.target;
    let type = element.nodeName; 
    let i = 0; // Por seguridad
    while (i < 10 && type !== "A") {
      element = element.parentNode;
      type = element.nodeName;
      i++;
    }
    

    element.classList.add("active");

    // Avisamos a App
    props.app.setPaginaActiva(element);
  }

    return (
      <nav className="navbar navbar-expand-lg navbar-dark gradient-custom">
        <div className="container-fluid text-center">
          <a onClick={setPaginaActiva} className="navbar-brand text-center" href="#" data-page="0">MiGalaxia</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            {<FontAwesomeIcon icon="fas fa-bars text-light"/>}
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" id="nav-list">
              <li className="nav-item text-center">
                <a onClick={setPaginaActiva} className="nav-link" href="#" data-page="1">
                  <div onClick={setPaginaActiva}>
                    {<FontAwesomeIcon icon="fa-solid fa-book-open text-light"/>}
                  </div>
                  Aprender
                </a>
              </li>
              <li className="nav-item text-center">
                <a onClick={setPaginaActiva} className="nav-link" href="#" data-page="2">
                  <div>
                    {<FontAwesomeIcon icon="fa-solid fa-gamepad" text-light/>}
                  </div>
                  Jugar
                </a>
              </li>
              <li className="nav-item text-center">
                <a onClick={setPaginaActiva} className="nav-link" href="#" data-page="3">
                  <div>
                    {<FontAwesomeIcon icon="far fa-image"/>}
                  </div>
                  Foto del día
                </a>
              </li>
              <li className="nav-item text-center">
                <a onClick={setPaginaActiva} className="nav-link" href="#" data-page="4">
                  <div>
                    {<FontAwesomeIcon icon="fa-regular fa-newspaper" />}
                  </div>
                  Noticias
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Cabecera;