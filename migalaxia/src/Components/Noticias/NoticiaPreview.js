import Feedback from "../Feedback";
import "./Noticia.css";

function NoticiaPreview(props) {

    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className='card mx-2 mb-2'>
                <div className='card-body'>
                    <a className="click" href={"/noticias/"+props.noticia.id}>
                        <h2 className='titulo noticia-preview mb-3'>{props.noticia.nombre}</h2>
                        <img className="card-img mb-3" src={props.noticia.img} alt=""/>
                    </a>
                    <Feedback item={props.noticia}/>
                </div>
            </div>
        </div>
    )

    

    
}
export default NoticiaPreview;