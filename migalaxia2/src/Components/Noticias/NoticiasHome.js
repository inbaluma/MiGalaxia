import NoticiaPreview from "./NoticiaPreview";

function NoticiasHome(props) {
  const componentes = [];
  const noticias = props.noticias;

  for (let i = 0; i < noticias.length; i++) {
    componentes.push(<NoticiaPreview key={i} noticia={noticias[i]} />);
  }

  return (
    <div id="noticias">
      <h1 className="titulo">Noticias</h1>
      <div className="row mx-2">{componentes}</div>
    </div>
  );
}
export default NoticiasHome;
