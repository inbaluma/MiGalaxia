import NoticiaPreview from "./NoticiaPreview";
import Noticia from '../../model/Noticia'

function NoticiasHome(props) {

    return (
        <div id='noticias'>
        <h1 className='titulo'>Noticias</h1>
        <div className='row mx-2'>
        <NoticiaPreview noticia={new Noticia(1, "Cada vez estamos más cerca del sol", "sistemaSolar.jpg", "El sol",
            [{titulo:"Titulo 1", contenido:"Hola, me llamo Inbal\nAdios."}]
        )}/>
        <NoticiaPreview noticia={new Noticia(2, "La NASA reconsidera su plan para traer muestras poco comunes de Marte a la Tierra",
            "220727111135-nasa-esa-mars-sample-return.webp", "Una ilustración muestra un concepto para múltiples robots que se unirían para transportar a la Tierra muestras recolectadas por el rover Mars Perseverance de la NASA. Crédito: NASA/JPL-Caltech.",
            [{titulo: "", contenido: "La NASA está buscando métodos innovadores que puedan ayudar a recuperar muestras recolectadas por el rover Perseverance en Marte en el futuro."},
            {contenido: "El rover, que aterrizó en Marte en febrero de 2021, ha estado recolectando especímenes del cráter Jezero, donde una vez existió un antiguo lago y un delta de un río en el planeta rojo. Los científicos creen que las muestras podrían ayudar a comprender mejor si alguna vez existió vida en Marte."},
            {titulo: "", contenido: "El diseño original del programa Mars Sample Return, una asociación entre la NASA y la Agencia Espacial Europea, era complejo. La estructura implicó el lanzamiento de múltiples misiones desde la Tierra a Marte para recolectar las muestras y luego realizar el primer lanzamiento de un cohete desde la superficie de otro planeta para devolver las muestras a la Tierra."},
            ]
        )}/>
        </div>
        
    </div> 
    )
}
export default NoticiasHome;