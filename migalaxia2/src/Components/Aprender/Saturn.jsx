import React from 'react';
import saturnImage from './Saturn.jpg'; 

const Saturn = () => {
    document.title = "Aprender sobre Saturno";

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={saturnImage} alt="Saturno" style={{ maxWidth: '50%', marginRight: '20px', height: '750px' }} />
            <div>
                <h1 style={{marginLeft: '110px'}}>Saturno</h1>
                <ul style={{ fontSize: '1.8rem', lineHeight: '1.5', marginLeft: '100px', marginTop: '50px' }}>
                <li>Velocidad orbital media: 9.69 km/s</li>
                <li>Masa: 5.683 × 10^26 kg</li>
                <li>Volumen: 8.2713 × 10^14 km³</li>
                <li>Densidad: 0.687 g/cm³</li>
                <li>Área de superficie: 4.27 × 10^10 km²</li>
                <li>Radio: 58,232 km</li>
                <li>Gravedad: 10.44 m/s²</li>
                <li>Temperatura:
                    <ul>
                        <li>Día: Alrededor de -139°C en la parte superior de la atmósfera.</li>
                        <li>Noche: Las temperaturas nocturnas son similares a las diurnas debido a la circulación atmosférica.</li>
                    </ul>
                </li>
                </ul>
            </div>
        </div>
    );
}

export default Saturn;