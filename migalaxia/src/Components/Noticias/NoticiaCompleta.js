import Feedback from "../Feedback";
import Navigation from "../Navigation";

import "./Noticia.css";

function NoticiaCompleta(props) {
    const noticia = props.noticia;

    let introduccion = <section key="0" children={[]}></section>;

    const componentes = [];
    for(let i = 0; i < noticia.secciones.length; i++) {
        const seccion = noticia.secciones[i];
        if (seccion.titulo != null && seccion.titulo !== '') {
            const seccionHTML = <section key={i}>
                <h2>{seccion.titulo}</h2>
                <p>{seccion.contenido}</p>
            </section>
            componentes.push(seccionHTML);
        }
        else {
            const parrafo = <p key={i}>{seccion.contenido}</p>
            if (componentes.length === 0) {
                // Introducimos en la introduccion
                introduccion.props.children.push(parrafo);
                componentes.push(introduccion);
            }
            else {
                // Introducimos a la ultima sesion
                const seccion = componentes[componentes.length -1];
                seccion.props.children.push(parrafo);
            }
        } 
    }

    const secciones = <>{componentes}</>

    return (
        <div className="mx-3">
            <Navigation actual={noticia.nombre} paginas={[{nombre: "Noticias", path:"/noticias"}]}/>
            <h1 className="titulo">{noticia.nombre}</h1>
            <div className="container text-center mb-2">
                <img className="img-fluid rounded" src={noticia.img} alt=""/>
            </div>
            {secciones}
            <hr/>
            <p className="text-secondary-dark text-center">¿Te ha gustado la noticia?</p>
            <Feedback item={noticia}/>
        </div>
    )
}
export default NoticiaCompleta;