import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Cabecera.css';

function Cabecera(props) {

  // Construimos la lista del navbar
  const ul = <ul className="navbar-nav me-auto" children={[]}></ul>

  const path = props.path;
  const paginas = [
    {nombre: "Aprender", path: "/aprender", icono: "fas fa-book-open text-light"},
    {nombre: "Jugar", path: "/jugar", icono: "fas fa-gamepad text-light"},
    {nombre: "Foto del día", path: "/foto", icono: "fas fa-image text-light"},
    {nombre: "Noticias", path: "/noticias", icono: "fas fa-newspaper text-light"}
  ];
   
  for (let i = 0; i < paginas.length; i++) {
    const pagina = paginas[i];
    const icono = <div className='nav-icon'>
      {<FontAwesomeIcon icon={pagina.icono}/>}
    </div>

    let li;
    if (path.startsWith(pagina.path)) {
      li = <li key={i} className="nav-item text-center">
        <a className="nav-link active" href={pagina.path}>
          {icono}
          {pagina.nombre}
        </a>
      </li>
    }
    else {
      li = <li key={i} className="nav-item text-center">
      <a className="nav-link" href={pagina.path}>
        {icono}
        {pagina.nombre}
      </a>
    </li>
    }

    ul.props.children.push(li);
  }
  

  const changeMode = (e) => {
    props.app.changeMode(e.target);
  }

    return (
      <nav id="cabecera" className="navbar sticky-top navbar-expand-md gradient-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" data-page="0">MiGalaxia</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            {<FontAwesomeIcon icon="fas fa-bars text-light"/>}
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            {ul}
            <button className='btn btn-sm btn-secondary' onClick={changeMode}>Cambiar a modo claro</button>
          </div>
        </div>
      </nav>
    )
}

export default Cabecera;