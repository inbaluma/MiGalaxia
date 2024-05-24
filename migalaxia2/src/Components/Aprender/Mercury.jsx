import React from 'react';
import mercurioImage from './mercurio.jpg'; // Ruta a la imagen de Mercurio

const Mercury = () => {
    document.title = "Aprender sobre Mercurio";

    return (
        <div id="main" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={mercurioImage} alt="Mercurio" style={{ maxWidth: '50%', marginRight: '20px' }} />
            <div>
                <h1 style={{ marginLeft: '110px' }}>Mercurio</h1>
                <ul style={{ fontSize: '1.8rem', lineHeight: '1.5', marginLeft: '100px', marginTop: '50px'  }}>
                    <li>Velocidad orbital media: 47,8725 km/s</li>
                    <li>Masa: 3,302×10^23 kg</li>
                    <li>Volumen: 6,083×10^10 km³</li>
                    <li>Densidad: 5,43 g/cm³</li>
                    <li>Área de superficie: 7,5x10^7 km²</li>
                    <li>Radio: 2439,7 kilómetros</li>
                    <li>Gravedad: -0,38 g</li>
                    <li>Temperatura:
                        <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                            <li>Día: 350 °C</li>
                            <li>Noche: -170 °C</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Mercury;
