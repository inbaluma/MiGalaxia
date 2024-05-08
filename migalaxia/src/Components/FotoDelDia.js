import { useState } from "react";

const CLAVE = "F0YEUnbX6pJC6gWkSi2TMwPXdCX11TeGLT23ZjF9";
const URL = "https://api.nasa.gov/planetary/apod"; //Con GET
const MENSAJE_ERROR = "Hubo un error obteniendo la imagen";
let llamado = false; //Para no llamar a la API varias veces
let llamando = false;
let renderizado = false;
let descripcion = '';
let tipo = '';
let botonDescarga = <></>;
let elementoImagen = <></>;
const fecha = new Date();

function obtenerURLAPI() {
	return `${URL}?api_key=${CLAVE}`;
}

function inicializarFoto() {
	debugger;
	if (!llamado && !llamando && !renderizado){
		llamando = true;
		console.log("API llamada");
		fetch(obtenerURLAPI())
		.then(respuesta => {
			if (!respuesta.ok) {
				return MENSAJE_ERROR;
			}
			return respuesta.json();
		}).then(json => {
			const huboError = json === MENSAJE_ERROR;
			if (huboError){
				elementoImagen = <h3>{MENSAJE_ERROR}</h3>
			} else {
				if (json.media_type === 'image') {
					tipo = "Foto";
					const nombreArchivo = `foto${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}`;
					botonDescarga = 
					<a className="btn btn-secondary my-3" href={json.url} download={nombreArchivo}>Descargar foto</a>;
					elementoImagen = <img src={json.url} className="shadow rounded float-center img-fluid" alt="La imagen astronómica de hoy"/>;
				} else {
					tipo = "Vídeo";
					botonDescarga = 
					<a className="btn btn-outline-secondary my-3 disabled text-wrap" tabIndex="-1" aria-disabled="true">No se pueden descargar vídeos</a>;
					elementoImagen = <div className="ratio ratio-16x9">
						<iframe title="Vídeo del día" src={json.url} alt="La imagen astronómica de hoy"/>
					</div>;
				}
				descripcion = json.explanation;
			}
			llamado = true;
			llamando = false;
		});
		console.log(elementoImagen);
	}
}

function FotoDelDia() {
	
	const [texto,setTexto] = useState("Mostrar descripción");
	const [imagen, setImagen] = useState(<></>);

	inicializarFoto();

	if (!renderizado){
		renderizado = true;
		setImagen(elementoImagen);
	}

	const cambiarTexto = () =>{
		if (texto === "Mostrar descripción"){
			setTexto("Ocultar descripción");
		} else {
			setTexto("Mostrar descripción");
		}
	}

	return(
		<>
		<div className="row">
			<div className="col">

			</div>
			<div className="text-center col-8">
				<div>
					<h1 className="m-3" style={{fontWeight: "bold"}}>{tipo} de {fecha.getDate()}/{fecha.getMonth()+1}/{fecha.getFullYear()}</h1>
					<div className="container">
						{imagen}
					</div>
				</div>
				<p className="text-wrap fs-6 ms-3">
					Todos los vídeos e imágenes proceden de "Astronomy Picture of the Day" de la NASA.
				</p>
				<p className=" d-inline-flex gap-1">
					<a className="btn btn-primary my-2" data-bs-toggle="collapse" href="#descripcionColapsada" role="button" aria-expanded="false" aria-controls="descripcionColapsada" onClick={cambiarTexto} id="botonDescarga">
						{texto}
					</a>
				</p>
				<div className="collapse" id="descripcionColapsada">
					<div className="card card-body text-wrap fs-6 m-3">
						{descripcion}
					</div>
				</div>
			</div>
			<div className="col text-center">
				{botonDescarga}
			</div>
		</div>
		</>
	);
} export default FotoDelDia;