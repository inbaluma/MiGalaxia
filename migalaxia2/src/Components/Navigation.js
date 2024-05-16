/* Configuracion de props
actual: string // nombre de la pagina actual
paginas: array de 
    {
        nombre: string, // nombre de la pagina
        path: string // enlace a la pagina, tipo "/noticias"
    }
en orden de pagina anterior a posterior, por ejemplo de Juegos a Pasapalabra
*/
import {Link} from "react-router-dom";
import '../index.css';

function Navigation(props) {

    const componentes = [];
    for (let i = 0; i < props.paginas.length; i++) {
        const pagina = props.paginas[i];
        componentes.push(
            <li key={i} className="breadcrumb-item">
                <Link className='link-secondary' to={pagina.path}>
                    {pagina.nombre}
                </Link>
            </li>
        );
    }
    componentes.push(
        <li key={10} className="breadcrumb-item active" aria-current="page">
            {props.actual}
        </li>
    );

    const navigation = <nav aria-label="breadcrumb">
        <ol className='breadcrumb'>
            {componentes}
        </ol>
    </nav>

    return (
        <div className="mt-2">
            {navigation}
        </div>
    );
}
export default Navigation;