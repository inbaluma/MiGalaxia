/* Configuracion de props
actual: string // nombre de la pagina actual
paginas: array de 
    {
        nombre: string, // nombre de la pagina
        path: string // enlace a la pagina, tipo "/noticias"
    }
en orden de pagina anterior a posterior, por ejemplo de Juegos a Pasapalabra
*/
import '../index.css';

function Navigation(props) {

    const navigation = <p className="text-secondary-dark" children={[]}></p>
    for (let i = 0; i < props.paginas.length; i++) {
        const pagina = props.paginas[i];
        navigation.props.children.push(<a key={i} className='link-secondary-dark' href={pagina.path}>{pagina.nombre}</a>)
        navigation.props.children.push(" > ");
    }
    navigation.props.children.push(props.actual);

    return (
        <div className="mt-2">
            {navigation}
        </div>
    );
}
export default Navigation;