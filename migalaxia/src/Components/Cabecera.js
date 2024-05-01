function Cabecera(props) {

  const setPaginaActiva = (e) => {
    // Avisamos a App
    props.app.setPaginaActiva(e);

    const navList = document.getElementById("nav-list").children;
    for (var i = 0; i < navList.length; i++) {
      navList[i].children[0].className = "nav-link"
    }
    e.target.className += " active";
  }

    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a onClick={setPaginaActiva} className="navbar-brand" href="#" data-page="0">MiGalaxia</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" id="nav-list">
              <li className="nav-item">
                <a onClick={setPaginaActiva} className="nav-link" href="#" data-page="1">Aprender</a>
              </li>
              <li className="nav-item">
                <a onClick={setPaginaActiva} className="nav-link" href="#" data-page="2">Jugar</a>
              </li>
              <li className="nav-item">
                <a onClick={setPaginaActiva} className="nav-link" href="#" data-page="3">Foto del día</a>
              </li>
              <li className="nav-item">
                <a onClick={setPaginaActiva} className="nav-link" href="#" data-page="4">Noticias</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Cabecera;