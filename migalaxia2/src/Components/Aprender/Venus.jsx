import React from 'react';
import venusImage from './Venus.jpg'; 

const Venus = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={venusImage} alt="Venus" style={{ maxWidth: '50%', marginRight: '20px' }} />
            <div>
                <h1 style={{ marginLeft: '110px' }}>Venus</h1>
                <ul style={{ fontSize: '1.8rem', lineHeight: '1.5', marginLeft: '100px', marginTop: '50px' }}>
                    <li>Velocidad orbital media: 35.02 km/s</li>
                    <li>Masa: 4.867 × 10^24 kg</li>
                    <li>Volumen: 9.28 × 10^11 km³</li>
                    <li>Densidad: 5.24 g/cm³</li>
                    <li>Área de superficie: 4.60 × 10^8 km²</li>
                    <li>Radio: 6,052 km</li>
                    <li>Gravedad: 8.87 m/s²</li>
                    <li>Temperatura:
                        <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                            <li>Día: 465°C</li>
                            <li>Noche: -173°C</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
} 

export default Venus;