import React from 'react';
import uranusImage from './Uranus.jpg';

const Uranus = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={uranusImage} alt="Urano" style={{ maxWidth: '50%', marginRight: '20px', height: '750px' }} />
            <div>
                <h1 style={{marginLeft: '110px'}}>Urano</h1>
                <ul style={{ fontSize: '1.8rem', lineHeight: '1.5', marginLeft: '100px', marginTop: '50px' }}>
                <li>Velocidad orbital media: 6.81 km/s</li>
                <li>Masa: 8.681 × 10^25 kg</li>
                <li>Volumen: 6.833 × 10^13 km³</li>
                <li>Densidad: 1.27 g/cm³</li>
                <li>Área de superficie: 8.1156 × 10^9 km²</li>
                <li>Radio: 25,362 km</li>
                <li>Gravedad: 8.69 m/s²</li>
                <li>Temperatura:
                    <ul>
                        <li>Día: Aproximadamente -197°C en la atmósfera superior.</li>
                        <li>Noche: Las temperaturas nocturnas pueden variar dependiendo de la profundidad en la atmósfera, pero generalmente son similares a las del día debido a la circulación atmosférica.</li>
                    </ul>
                </li>
                </ul>
            </div>
        </div>
    );
}

export default Uranus;