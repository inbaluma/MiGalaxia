import { Link } from "react-router-dom";
import VisualizadorFoto from "./VisualizadorFoto";
function FotoDelDia() {
	
	const fecha = new Date();

	document.title = "Foto del día de MiGalaxia";

	return (
		<div id="main" className="container-fluid text-center w-100">
			<main className="row">
				<div className="col-lg-3"></div>
				<VisualizadorFoto fecha={fecha}>
					<Link className="btn btn-primary btn-lg align-middle" to="masfotos" aria-label="Ver más fotos">Más fotos</Link>
				</VisualizadorFoto>	
			</main>
		</div>
	);

}
export default FotoDelDia;
