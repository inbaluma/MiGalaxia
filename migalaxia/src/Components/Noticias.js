import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NoticiaPreview from './NoticiaPreview';
import Noticia from '../model/Noticia'
function Noticias() {
    
    return (
        <div id='noticias'>
            <h1 className='titulo'>Noticias</h1>
            <div className='row mx-2'>
            <NoticiaPreview noticia={new Noticia("Cada vez estamos más cerca del sol")}/>
            <NoticiaPreview noticia={new Noticia("Cada vez estamos más cerca del sol")}/>
            </div>
            {   <>
                    <p>Iconos que se pueden usar</p>
                    <FontAwesomeIcon icon="fas fa-thumbs-up" />
                    <FontAwesomeIcon icon="far fa-thumbs-down" />
                    <FontAwesomeIcon icon="fa-regular fa-calendar-days" />
                    <FontAwesomeIcon icon="fa-regular fa-moon" />
                    <FontAwesomeIcon icon="fa-regular fa-star-half-stroke" />
                    <FontAwesomeIcon icon="fa-regular fa-star"/>
                    <FontAwesomeIcon icon="fa-regular fa-chess-rook" />
                    <FontAwesomeIcon icon="fa-regular fa-moon" />
                    <FontAwesomeIcon icon="fa-regular fa-bookmark" />
                    <FontAwesomeIcon icon="fa-solid fa-camera-retro" />
                    <FontAwesomeIcon icon="fa-solid fa-camera" />
                </>
            }
        </div>
    )
}
export default Noticias;