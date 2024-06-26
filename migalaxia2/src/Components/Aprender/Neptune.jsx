import React from 'react';
import neptuneImage from './Neptune.jpg'; 
import Navigation from "../Navigation";

const Neptune = () => {
    document.title = "Aprender sobre Neptuno";

    return (
        <div id="main" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1 }}>
                <Navigation actual="Planeta Neptuno" paginas={[{nombre: "Aprender", path:"/Aprender"}]}/>
            </div>
            <img src={neptuneImage} alt="Imagen de Neptuno" style={{ maxWidth: '50%', marginRight: '20px', height: '750px' }} tabIndex="2"/>
            <div>
                <h1 style={{marginLeft: '110px'}}>Neptuno</h1>
                <ul style={{ fontSize: '1.8rem', lineHeight: '1.5', marginLeft: '100px', marginTop: '50px' }} tabIndex="3">
                    <li>Velocidad orbital media: 5.43 km/s</li>
                    <li>Masa: 1.024 × 10^26 kg</li>
                    <li>Volumen: 6.254 × 10^13 km³</li>
                    <li>Densidad: 1.64 g/cm³</li>
                    <li>Área de superficie: 7.6183 × 10^9 km²</li>
                    <li>Radio: 24,622 km</li>
                    <li>Gravedad: 11.15 m/s²</li>
                    <li>Temperatura:
                        <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                            <li>Día: Aproximadamente -200°C en la atmósfera superior.</li>
                            <li>Noche: Las temperaturas nocturnas pueden variar dependiendo de la profundidad en la atmósfera, pero generalmente son similares a las del día debido a la circulación atmosférica.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Neptune;
