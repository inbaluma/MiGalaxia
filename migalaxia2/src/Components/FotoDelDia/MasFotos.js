import { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import VisualizadorFoto from "./VisualizadorFoto";
import Navigation from '../Navigation';
import './Calendar.css';

function MasFotos() {

    const fechaInicial = '1995-06-16';
    const [fecha,setFecha] = useState(new Date());

    const formato_fecha = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();

    document.title = "Foto del " + formato_fecha;

    return(
        <div className="mx-3">
            <Navigation actual="Más fotos" paginas={[{nombre: "Foto del día", path:"/foto"}]}/>
            <div className="container-fluid">
                <main className="row">
                    <div className="d-flex flex-column justify-content-center col-lg-3 align-items-center">
                        <h3>Elija un día para ver su foto</h3>
                        <Calendar minDate={new Date(fechaInicial)} maxDate={new Date()} onClickDay={setFecha}/>
                    </div>
                    <VisualizadorFoto fecha={fecha}/>
                    <div className="d-flex justify-content-center col-lg-2 align-items-center">
                        <Link className="btn btn-primary btn-lg align-middle my-3 fs-5" to="../foto">Volver a la foto de hoy</Link>
                    </div>
                </main>
            </div>
        </div>
    )
} export default MasFotos;