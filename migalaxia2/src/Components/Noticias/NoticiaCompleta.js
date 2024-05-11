import Feedback from "../Feedback";
import "./Noticia.css";

function NoticiaCompleta(props) {
    const noticia = props.noticia;

    let introduccion = <section children={[]}></section>;

    let secciones = <div children={[]}></div>;
    
    for(let i = 0; i < noticia.secciones.length; i++) {
        const seccion = noticia.secciones[i];
        if (seccion.titulo != null && seccion.titulo !== '') {
            const seccionHTML = <section>
                <h2>{seccion.titulo}</h2>
                <p>{seccion.contenido}</p>
            </section>
            secciones.props.children.push(seccionHTML);
        }
        else {
            const parrafo = <p>{seccion.contenido}</p>
            if (secciones.props.children.length === 0) {
                // Introducimos en la introduccion
                introduccion.props.children.push(parrafo);
                secciones.props.children.push(introduccion);
            }
            else {
                // Introducimos a la ultima sesion
                const children = secciones.props.children;
                const seccion = children[children.length -1];
                seccion.props.children.push(parrafo);
            }
        }     
    }

    return (
        <div className="mx-3">
            <h1 className="titulo">{noticia.nombre}</h1>
            <div className="container text-center mb-2">
                <img className="img-fluid rounded" src={noticia.img} alt=""/>
            </div>
            {secciones}
            <hr/>
            <p className="text-secondary text-center">¿Te ha gustado la noticia?</p>
            <Feedback item={noticia}/>
        </div>
    )
}
export default NoticiaCompleta;