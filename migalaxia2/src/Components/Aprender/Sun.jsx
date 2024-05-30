import React from 'react';
import sunImage from './sun.jpg'; // Ruta a la imagen del sol
import Navigation from "../Navigation";

const Sun = () => {
    document.title = "Aprender sobre el Sol";

    return (
        <div id="main" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <div className="navigation" style={{ position: 'absolute', top: '10px', left: '10px' }}>
                <Navigation actual="Sol" paginas={[{ nombre: "Aprender", path: "/Aprender" }]} />
            </div>
            <img src={sunImage} alt="Imagen del Sol" style={{ maxWidth: '50%', marginRight: '20px' }} tabIndex="2"/>
            <div>
                <h1 style={{ marginLeft: '110px' }}>Sol</h1>
                <ul style={{ fontSize: '1.8rem', lineHeight: '1.5', marginLeft: '100px', marginTop: '50px' }} tabIndex="3">
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
