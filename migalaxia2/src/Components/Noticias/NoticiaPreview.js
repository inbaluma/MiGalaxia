import Feedback from "../Feedback";
import "./Noticia.css";

function NoticiaPreview(props) {

    const giveFeedback = (e) => {
        const button = e.target;
        const noticia = props.noticia;
        if (button.getAttribute("data-like") === "1") { // Like
            noticia.like();        
        }
        else {
            noticia.dislike();
        }
        update(e);
    }

    const update = (e) => {
        const buttons = e.target.parentNode.children;
        for (let i=0; i < buttons.length; i++) {
            let b = buttons[i];
            if (b.getAttribute("data-like") === "1") { // Like
                b.innerText = props.noticia.state.likes + " likes";
            }
            else { // Dislike
                b.innerText = props.noticia.state.dislikes + " dislikes";
            }
        }
    }

    const abrirNoticia = (e) => {
        props.atras.abrirNoticia(props.noticia);
    }

    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className='card mx-2 mb-2'>
                <div className='card-body'>
                    <div className="click" onClick={abrirNoticia}>
                        <h2 className='titulo noticia-preview mb-3'>{props.noticia.nombre}</h2>
                        <img className="card-img mb-3 click" src={props.noticia.img} alt=""/>
                    </div>
                    <Feedback item={props.noticia}/>
                </div>
            </div>
        </div>
    )

    

    
}
export default NoticiaPreview;