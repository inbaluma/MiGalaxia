import Feedback from "../Feedback";
import Navigation from "../Navigation";
import "./Noticia.css";

function NoticiaCompleta(props) {
   
    const noticia = props.noticia;

    document.title = noticia.titulo;

    if (noticia.secciones === null) {
        console.log("RELLENAR NOTICIA");
    }
    /*
      if (isLoading) {
        return <span>Loading...</span>;
      }
    
      if (isError) {
        return <span>Error: {error.message}</span>;
      }
    
      return <div>{JSON.stringify(data)}</div>;
*/
    let introduccion = <section key="0" children={[]}></section>;
    
    return (
        <div id="main" className="mx-3">
            <Navigation actual={noticia.titulo} paginas={[{nombre: "Noticias", path:"/noticias"}]}/>
            <article id="noticia" aria-live="polite" lang="en">
                <h1 className="titulo">{noticia.titulo}</h1>
                <div className="container text-center mb-2">
                    <img className="img-fluid rounded" src={noticia.img} alt={noticia.descripcion_imagen}/>
                </div>
                {noticia.secciones.map((seccion) => {
                    if (seccion.titulo === null || seccion.titulo === '') return (<p>{seccion.contenido}</p>)
                    else return (<>
                        <h2>{seccion.titulo}</h2>
                        <p>{seccion.contenido}</p>
                    </>)
                })}
                <a href={noticia.enlace}>Enlace a la noticia original</a>
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