import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Cabecera.css';
import { useLocation, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Cabecera(props) {

    // Construimos la lista del navbar
    const componentes = [];

    const location = useLocation();
    const path = location.pathname;
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
                     <Link className="nav-link active" to={pagina.path}>
                         {icono}
                         {pagina.nombre}
                     </Link>
                 </li>
        }
        else {
            li = <li key={i} className="nav-item text-center">
                     <Link className="nav-link" to={pagina.path}>
                         {icono}
                         {pagina.nombre}
                     </Link>
                 </li>
        }

        componentes.push(li);
    }
    
    
    const ul = <ul className="navbar-nav me-auto">
        {componentes}
    </ul>

    const changeMode = (e) => {
        const text = props.changeMode(e.target);
        e.target.innerText = text;
    }

    return (
        <header className='gradient sticky-top'>
            <HashLink to="#main" className='texto-lector-pantalla'>Saltar al contenido principal</HashLink>
            <nav id="cabecera" className="navbar navbar-expand-md gradient" role="navigation" aria-label='Primaria'>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" data-page="0">MiGalaxia</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Abrir navegación">
                        {<FontAwesomeIcon icon="fas fa-bars text-light"/>}
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {ul}
                        <button className='btn btn-sm btn-secondary' onClick={changeMode}>Cambiar a modo claro</button>
                    </div>
                </div>
            </nav>
        </header>
        
    )
}

export default Cabecera;
