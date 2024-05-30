import React from 'react';
import saturnImage from './Saturn.jpg'; 
import Navigation from "../Navigation";

const Saturn = () => {
    document.title = "Aprender sobre Saturno";

    return (
        <div id="main" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1 }}>
                <Navigation actual="Planeta Saturno" paginas={[{nombre: "Aprender", path:"/Aprender"}]}/>
            </div>
            <img src={saturnImage} alt="Imagen de Saturno" style={{ maxWidth: '50%', marginRight: '20px', height: '750px' }} tabIndex="2"/>
            <div>
                <h1 style={{marginLeft: '110px'}}>Saturno</h1>
                <ul style={{ fontSize: '1.8rem', lineHeight: '1.5', marginLeft: '100px', marginTop: '50px' }} tabIndex="3">
                    <li>Velocidad orbital media: 9.69 km/s</li>
                    <li>Masa: 5.683 × 10^26 kg</li>
                    <li>Volumen: 8.2713 × 10^14 km³</li>
                    <li>Densidad: 0.687 g/cm³</li>
                    <li>Área de superficie: 4.27 × 10^10 km²</li>
                    <li>Radio: 58,232 km</li>
                    <li>Gravedad: 10.44 m/s²</li>
                    <li>Temperatura:
                        <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
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
