import React from 'react';
import sunImage from './sun.jpg'; // Ruta a la imagen del sol

const Sun = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={sunImage} alt="Sol" style={{ maxWidth: '50%', marginRight: '20px' }} />
            <div>
                <h1>Sol</h1>
                <p>Aquí puedes colocar tu texto</p>
            </div>
        </div>
    );
}

export default Sun;
