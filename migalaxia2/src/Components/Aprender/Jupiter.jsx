import React from 'react';
import jupiterImage from './Jupiter.jpg';

const Jupiter = () => {
    document.title = "Aprender sobre Jupiter";

    return (
        <div id="main" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={jupiterImage} alt="Jupiter" style={{ maxWidth: '50%', marginRight: '20px', height: '750px' }} tabIndex="2"/>
            <div>
                <h1 style={{marginLeft: '110px'}}>Jupiter</h1>
                <ul style={{ fontSize: '1.8rem', lineHeight: '1.5', marginLeft: '100px', marginTop: '50px' }} tabIndex="3">
                <li>Velocidad orbital media: 13.07 km/s</li>
                <li>Masa: 1.898 × 10^27 kg</li>
                <li>Volumen: 1.43128 × 10^15 km³</li>
                <li>Densidad: 1.33 g/cm³</li>
                <li>Área de superficie: 6.1419 × 10^10 km²</li>
                <li>Radio: 69,911 km</li>
                <li>Gravedad: 24.79 m/s²</li>
                <li>Temperatura:
                    <ul>
                        <li>Día: Aproximadamente -145°C en la atmósfera superior.</li>
                        <li>Noche: Las temperaturas nocturnas pueden variar dependiendo de la profundidad en la atmósfera, pero generalmente son similares a las del día debido a la circulación atmosférica.</li>
                    </ul>
                </li>
                </ul>
            </div>
        </div>
    );
} 

export default Jupiter;