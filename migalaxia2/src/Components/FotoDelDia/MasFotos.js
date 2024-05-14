import { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import VisualizadorFoto from "./VisualizadorFoto";

function MasFotos() {

    const fechaInicial = '1995-06-16';
    const [fecha,setFecha] = useState(new Date());

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="d-flex flex-column justify-content-evenly col-md-4 align-items-center">
                    <Link className="btn btn-primary btn-lg align-middle my-3" to="../foto">Volver a la foto de hoy</Link>
                    <Calendar minDate={new Date(fechaInicial)} maxDate={new Date()} onClickDay={setFecha}/>
                </div>
                <VisualizadorFoto fecha={fecha}/>
            </div>
        </div>
    )
} export default MasFotos;