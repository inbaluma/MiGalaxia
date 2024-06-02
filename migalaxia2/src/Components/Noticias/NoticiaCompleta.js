import Feedback from "../Feedback";
import Navigation from "../Navigation";
import "./Noticia.css";

function NoticiaCompleta(props) {
   
    const noticia = props.noticia;

    document.title = noticia.titulo;

    let introduccion = <section key="0" children={[]}></section>;

    let secciones = <div children={[]}></div>;
    
    for(let i = 0; i < noticia.secciones.length; i++) {
        const seccion = noticia.secciones[i];
        if (seccion.titulo != null && seccion.titulo !== '') {
            const seccionHTML = <section key={i}>
                <h2>{seccion.titulo}</h2>
                <p>{seccion.contenido}</p>
            </section>
            secciones.props.children.push(seccionHTML);
        }
        else {
            const parrafo = <p key={i}>{seccion.contenido}</p>
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
        <div id="main" className="mx-3">
            <Navigation actual={noticia.titulo} paginas={[{nombre: "Noticias", path:"/noticias"}]}/>
            <article id="noticia" aria-live="polite" lang="en">
                <h1 className="titulo">{noticia.titulo}</h1>
                <div className="container text-center mb-2">
                    <img className="img-fluid rounded" src={noticia.img} alt={noticia.descripcion_imagen}/>
                </div>
                {secciones} 
            </article>
            <hr/>
            <div aria-live="polite" aria-relevant="additions">
                <p className="text-secondary text-center">¿Te ha gustado la noticia?</p>
                <Feedback item={noticia}/>
            </div>
        </div>
    )
}
export default NoticiaCompleta;