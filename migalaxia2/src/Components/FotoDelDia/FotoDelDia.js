import { Link } from "react-router-dom";
import VisualizadorFoto from "./VisualizadorFoto";
function FotoDelDia() {
	
	const fecha = new Date();

	return (
		<div className="d-flex justify-content-center">
			<div className="row">
				<div className="d-flex justify-content-center col-2 align-items-center">
					<Link className="btn btn-primary btn-lg align-middle" to="masfotos">Más fotos</Link>
				</div>
				<VisualizadorFoto fecha={fecha}/>
			</div>
		</div>
	);

}
export default FotoDelDia;
