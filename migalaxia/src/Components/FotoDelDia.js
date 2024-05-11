import { useState, useEffect } from "react";
function FotoDelDia() {
	const CLAVE = "F0YEUnbX6pJC6gWkSi2TMwPXdCX11TeGLT23ZjF9";
	const URL = "https://api.nasa.gov/planetary/apod"; //Con GET
	const MENSAJE_ERROR =
		"Hubo un error obteniendo la imagen, intentelo más tarde";
	const fecha = new Date();

	function obtenerURLAPI() {
		return `${URL}?api_key=${CLAVE}`;
	}

	const [texto, setTexto] = useState("Mostrar descripción");
	const [descripcion, setDescripcion] = useState("Cargando datos");
	const [imagen, setImagen] = useState(<></>);
	const [boton, setBoton] = useState(<></>);
	const [tipo, setTipo] = useState("Imagen");
	const [mensajeDescarga, setMensaje] = useState("");
	let URLDatos;

	useEffect(() => {
		const cargarImagenAPI = async () => {
			try {
				console.log("API llamada");
				const response = await fetch(obtenerURLAPI());
				if (!response.ok) {
					setImagen(<h3>{MENSAJE_ERROR}</h3>);
				}
				let datosImagen = await response.json();
				setDescripcion(datosImagen.explanation);
				URLDatos = datosImagen.url;
				if (datosImagen.media_type === "image") {
					setBoton(
						<button
							id="botonDescarga"
							className="btn btn-secondary my-3 btn-sm"
							onClick={manejarDescarga}
						>
							Descargar foto
						</button>
					);
					setImagen(
						<img
							src={URLDatos}
							className="shadow rounded float-center img-fluid"
							alt="La imagen astronómica de hoy"
						/>
					);
				} else {
					setTipo("Vídeo");
					setBoton(
						<a
							className="btn btn-outline-secondary my-3 disabled text-wrap"
							tabIndex="-1"
							aria-disabled="true"
						>
							No se pueden descargar vídeos
						</a>
					);
					setImagen(
						<div className="ratio ratio-16x9">
							<iframe
								title="Vídeo del día"
								src={URLDatos}
								alt="La imagen astronómica de hoy"
							/>
						</div>
					);
				}
			} catch (err) {
				setImagen(<h3>{MENSAJE_ERROR}</h3>);
			}
		};
		cargarImagenAPI();
	}, []);

	const cambiarTexto = () => {
		if (texto === "Mostrar descripción") {
			setTexto("Ocultar descripción");
		} else {
			setTexto("Mostrar descripción");
		}
	};

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-2"></div>
					<div className="text-center mx-0 g-0 col-8">
						<div>
							<h1 className="m-3" style={{ fontWeight: "bold" }}>
								{tipo} de {fecha.getDate()}/{fecha.getMonth() + 1}/
								{fecha.getFullYear()}
							</h1>
							<div className="container">{imagen}</div>
						</div>
						<p className="text-wrap fs-6 ms-3">
							Todos los vídeos e imágenes proceden de "Astronomy
							Picture of the Day" de la NASA.
						</p>
						<p className=" d-inline-flex gap-1">
							<a
								className="btn btn-primary my-2"
								data-bs-toggle="collapse"
								href="#descripcionColapsada"
								role="button"
								aria-expanded="false"
								aria-controls="descripcionColapsada"
								onClick={cambiarTexto}
								id="botonDescarga"
							>
								{texto}
							</a>
						</p>
						<div className="collapse" id="descripcionColapsada">
							<div className="card card-body text-wrap fs-6 m-3">
								{descripcion}
							</div>
						</div>
					</div>
					<div className="col-2 text-center">
						{boton}
						<br />
						<p>{mensajeDescarga}</p>
					</div>
				</div>
			</div>
			
		</>
	);
}
export default FotoDelDia;
