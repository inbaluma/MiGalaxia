import NoticiaPreview from "./NoticiaPreview";

function NoticiasHome(props) {

  document.title = "Noticias de MiGalaxia";

  const noticias = props.noticias;

  return (
    <div id="main" role="document" aria-live="polite" aria-relevant="additions">
      <h1 className="titulo">Noticias</h1>
      <div className='row m-2'>
            {noticias.map((element, i) => {
                return (
                    <NoticiaPreview key={i} noticia={element}/>
                )
            })}
            <p className='text-secondary-dark'>{noticias.length} noticias mostradas</p>
        </div>
    </div>
  );
}
export default NoticiasHome;
