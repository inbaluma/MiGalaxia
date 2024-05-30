import React from 'react';
import marsImage from './Mars.jpg'; 
import Navigation from "../Navigation";

const Mars = () => {
    document.title = "Aprender sobre Marte";

    return (
        <div id="main" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1 }}>
                <Navigation actual="Planeta Marte" paginas={[{nombre: "Aprender", path:"/Aprender"}]}/>
            </div>
            <img src={marsImage} alt="Imagen de Marte" style={{ maxWidth: '50%', marginRight: '20px', height: '750px' }} tabIndex="2"/>
            <div>
                <h1 style={{marginLeft: '110px'}}>Marte</h1>
                <ul style={{ fontSize: '1.8rem', lineHeight: '1.5', marginLeft: '100px', marginTop: '50px' }} tabIndex="3">
                    <li>Velocidad orbital media: 24.07 km/s</li>
                    <li>Masa: 6.417 × 10^23 kg</li>
                    <li>Volumen: 1.6318 × 10^11 km³</li>
                    <li>Densidad: 3.9335 g/cm³</li>
                    <li>Área de superficie: 144.8 millones km²</li>
                    <li>Radio: 3,389.5 km</li>
                    <li>Gravedad: 3.72076 m/s²</li>
                    <li>Temperatura:
                        <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                            <li>Día: Aproximadamente -5°C en el ecuador durante el verano.</li>
                            <li>Noche: Puede bajar hasta -73°C.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Mars;
