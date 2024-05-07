import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon="fa-solid fa-mug-hot" />
function Noticias() {
    
    return (
        <>
            <h1 style={{textAlign: "center", fontWeight: "bold"}}>Noticias</h1>
            {element}
        </>
    )
}
export default Noticias;