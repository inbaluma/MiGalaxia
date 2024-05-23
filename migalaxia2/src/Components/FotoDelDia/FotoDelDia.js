import { Link } from "react-router-dom";
import VisualizadorFoto from "./VisualizadorFoto";
function FotoDelDia() {
	
	const fecha = new Date();

	document.title = "Foto del día de MiGalaxia";

	return (
		<div className="container text-center w-100">
			<main className="row">
				<div className="d-flex justify-content-center col-md-2 align-items-center">
					<Link className="btn btn-primary btn-lg align-middle" to="masfotos">Más fotos</Link>
				</div>
				<VisualizadorFoto fecha={fecha}/>
			</main>
		</div>
	);

}
export default FotoDelDia;
