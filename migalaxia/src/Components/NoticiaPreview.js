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
        console.log(props.noticia);
        console.log(buttons);
        for (let i=0; i < buttons.length; i++) {
            let b = buttons[i];
            console.log(b);
            if (b.getAttribute("data-like") === "1") { // Like
                b.innerText = props.noticia.state.likes + " likes";
            }
            else { // Dislike
                b.innerText = props.noticia.state.dislikes + " dislikes";
            }
        }
    }

    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className='card mx-2 mb-2'>
                <div className='card-body'>
                    <h2 className='titulo noticia-preview mb-3'>{props.noticia.nombre}</h2>
                    <img className="card-img mb-3" src={props.noticia.img} alt=""/>
                    <div id="feedback">
                        <button className="btn btn-success" onClick={giveFeedback} onChange={update} data-like="1">{props.noticia.state.likes+" likes"}</button>
                        <button className="btn btn-danger" onClick={giveFeedback} onChange={update} data-like="0">{props.noticia.state.likes+" dislikes"}</button>
                    </div>

                </div>
            </div>
        </div>
    )

    

    
}
export default NoticiaPreview;