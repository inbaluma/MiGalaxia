import { Link } from "react-router-dom";

import Feedback from "../Feedback";
import "./Noticia.css";

function NoticiaPreview(props) {

    const noticia = props.noticia;

    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className='card mx-2 mb-2'>
                <div className='card-body'>
                    <Link className="click" to={""+noticia.id}>
                        <h2 className='titulo noticia-preview mb-3'>{noticia.titulo}</h2>
                        <img className="card-img mb-3 click" src={noticia.img} alt=""/>
                    </Link>
                    <Feedback item={noticia}/>
                </div>
            </div>
        </div>
    )
}
export default NoticiaPreview;