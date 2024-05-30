import React from 'react';
import mercuryImage from './mercurio.jpg'; 
import Navigation from "../Navigation";

const Mercury = () => {
    document.title = "Aprender sobre Mercurio";

    return (
        <div id="main" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1 }}>
                <Navigation actual="Planeta Mercurio" paginas={[{nombre: "Aprender", path:"/Aprender"}]}/>
            </div>
            <img src={mercuryImage} alt="Imagen de Mercurio" style={{ maxWidth: '50%', marginRight: '20px' }} tabIndex="2"/>
            <div>
                <h1 style={{ marginLeft: '110px' }}>Mercurio</h1>
                <ul style={{ fontSize: '1.8rem', lineHeight: '1.5', marginLeft: '100px', marginTop: '50px'  }} tabIndex="3">
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
