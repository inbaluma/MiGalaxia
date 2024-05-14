import React from 'react';
import sunImage from './sun.jpg'; // Ruta a la imagen del sol

const Sun = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={sunImage} alt="Sol" style={{ maxWidth: '50%', marginRight: '20px' }} />
            <div>
                <h1 style={{marginLeft: '110px'}}>Sol</h1>
                <ul style={{ fontSize: '1.8rem', lineHeight: '1.5', marginLeft: '100px', marginTop: '50px' }}>
                    <li>Distancia media desde la Tierra: 150 millones km</li>
                    <li>Diámetro: 1 391 016 km</li>
                    <li>Superficie: 6,0877 × 10^12 km²</li>
                    <li>Volumen: 1,4123 × 10^18 km³</li>
                    <li>Masa: 1,9891 × 10^30 kg</li>
                    <li>Densidad: 1411 kg/m³</li>
                    <li>Gravedad en la superficie: 5505 cm/s²</li>
                </ul>
            </div>
        </div>
    );
}

export default Sun;
