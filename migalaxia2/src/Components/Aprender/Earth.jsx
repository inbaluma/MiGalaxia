import React from 'react';
import earthImage from './Earth.jpg'; 
import Navigation from "../Navigation";

const Earth = () => {
    document.title = "Aprender sobre la Tierra";

    return (
        <div id="main" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1 }}>
                <Navigation actual="Planeta Tierra" paginas={[{nombre: "Aprender", path:"/Aprender"}]}/>
            </div>
            <img src={earthImage} alt="Imagen de la Tierra" style={{ maxWidth: '50%', marginRight: '20px', height: '750px' }} tabIndex="2"/>
            <div>
                <h1 style={{marginLeft: '110px'}}>Tierra</h1>
                <ul style={{ fontSize: '1.8rem', lineHeight: '1.5', marginLeft: '100px', marginTop: '50px' }} tabIndex="3">
                    <li>Velocidad orbital media: 29.78 km/s</li>
                    <li>Masa: 5.972 × 10^24 kg</li>
                    <li>Volumen: 1.08321 × 10^12 km³</li>
                    <li>Densidad: 5.51 g/cm³</li>
                    <li>Área de superficie: 510.1 millones km²</li>
                    <li>Radio: 6,371 km</li>
                    <li>Gravedad: 9.81 m/s²</li>
                    <li>Temperatura:
                        <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                            <li>Día: Variable dependiendo de la ubicación y la temporada, típicamente entre -50°C y 50°C.</li>
                            <li>Noche: Varía también, pero generalmente más fría que el día, con temperaturas que pueden bajar por debajo de los 0°C.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Earth;
