const CLAVE = "F0YEUnbX6pJC6gWkSi2TMwPXdCX11TeGLT23ZjF9";
const URL = "https://api.nasa.gov/planetary/apod"; //Con GET
const MENSAJE_ERROR = "Hubo un error obteniendo la imagen";
let llamadas = 0; //Para no llamar a la API varias veces
let elementoImagen = <></>;
let descripcion = '';

function obtenerURLAPI() {
	return `${URL}?api_key=${CLAVE}`;
}

function inicializarFoto() {
	if (llamadas === 0){
		fetch(obtenerURLAPI(),{
			method : 'GET'
		}).then(respuesta => {
			if (!respuesta.ok) {
				return MENSAJE_ERROR;
			}
			return respuesta.json();
		}).then(json => {
			console.log(json);

			const huboError = json === MENSAJE_ERROR;
			if (huboError){
				elementoImagen = <h3>{MENSAJE_ERROR}</h3>
			} else {
				if (json.media_type === 'image') {
					elementoImagen = <img src={json.url} className="shadow rounded float-center img-fluid" alt="La imagen astronómica de hoy"/>;
				} else {
					elementoImagen = 
					<div className="ratio ratio-16x9">
						<iframe title="Vídeo del día" src={json.url} alt="La imagen astronómica de hoy"/>
					</div>;
				}
				descripcion = json.explanation;
			}
			llamadas = 1;
		});
	}
	console.log(elementoImagen);
}

function FotoDelDia() {
	inicializarFoto();

	const fecha = new Date();

	return(
		<div className="text-center">
			<h1>Foto de {fecha.getDate()}/{fecha.getMonth()+1}/{fecha.getFullYear()}</h1>
			<div className="container">
				{elementoImagen}
			</div>
			<p className="text-wrap fs-5">
				{descripcion}
			</p>
		</div>
	);
} export default FotoDelDia;