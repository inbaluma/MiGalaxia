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
    while (i < 10 && type !== "BUTTON") {
      element = element.parentNode;
      type = element.nodeName;
      i++;
    }
    element.classList.add("active");

    // Avisamos a App
    props.app.setPaginaActiva(element);
  }

  const changeMode = (e) => {
    props.app.changeMode(e.target);
  }

    return (
      <nav id="cabecera" className="navbar sticky-top navbar-expand-md gradient-dark">
        <div className="container-fluid">
          <a onClick={setPaginaActiva} className="navbar-brand" href="/" data-page="0">MiGalaxia</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            {<FontAwesomeIcon icon="fas fa-bars text-light"/>}
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto" id="nav-list">
              <li className="nav-item text-center">
                <button onClick={setPaginaActiva} className="nav-link" href="/" data-page="1">
                  <div className='nav-icon'>
                    {<FontAwesomeIcon icon="fas fa-book-open text-light"/>}
                  </div>
                    Aprender
                </button>
              </li>
              <li className="nav-item text-center">
                <button onClick={setPaginaActiva} className="nav-link" href="/" data-page="2">
                  <div className='nav-icon'>
                    {<FontAwesomeIcon icon="fas fa-gamepad"/>}
                  </div>
                  Jugar
                </button>
              </li>
              <li className="nav-item text-center">
                <button onClick={setPaginaActiva} className="nav-link" href="/" data-page="3">
                  <div className='nav-icon'>
                    {<FontAwesomeIcon icon="fas fa-image"/>}
                  </div>
                  Foto del día
                </button>
              </li>
              <li className="nav-item text-center justify-content-center">
                <button onClick={setPaginaActiva} className="nav-link" data-page="4">
                  <div className='nav-icon'>
                    {<FontAwesomeIcon icon="fas fa-newspaper" />}
                  </div>
                  Noticias
                </button>
              </li>
            </ul>

              <button className='btn btn-sm btn-secondary' onClick={changeMode}>Cambiar a modo claro</button>
          </div>
        </div>
      </nav>
    )
}

export default Cabecera;