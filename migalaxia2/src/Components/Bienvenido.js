import imagenBienvenida from "./imagenBienvenida.jpg";

function Bienvenido() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 className="titulo" style={{ fontSize: '3rem', marginBottom: '20px' }}>Bienvenido a MiGalaxia</h1>
            <div style={{ margin: 'auto', width: '50%' }}>
                <p style={{ fontSize: '1.5rem' }}>El lugar perfecto para aprender sobre nuestra galaxia</p>
            </div>
            <img src={imagenBienvenida} alt="Imagen Bienvenida" style={{ maxWidth: '100%', marginTop: '20px' }} />
        </div>
    )
}
export default Bienvenido;
