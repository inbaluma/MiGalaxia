import NoticiaPreview from "./NoticiaPreview";

function NoticiasHome(props) {

  const noticias = props.noticias;

  return (
    <div id="noticias">
      <h1 className="titulo">Noticias</h1>
      <div className='row m-2'>
            {noticias.map(element => {
                return (
                    <NoticiaPreview noticia={element}/>
                )
            })}
            <p className='text-secondary-dark'>{noticias.length} noticias mostradas</p>
        </div>
    </div>
  );
}
export default NoticiasHome;
