import imagenBienvenida from "./imagenBienvenida.jpg";

function Bienvenido() {
    document.title = "Bienvenido a MiGalaxia";

    return (
        <div id="main" style={{ textAlign: 'center' }}>
            <h1 className="titulo" style={{ fontSize: '3rem', marginBottom: '20px' }}>Bienvenido a MiGalaxia</h1>
            <div style={{ margin: 'auto', width: '50%' }}>
                <p style={{ fontSize: '1.5rem' }}>El lugar perfecto para aprender sobre nuestra galaxia</p>
            </div>
            <img 
                src={imagenBienvenida} 
                alt="Imagen representativa de bienvenida a MiGalaxia, un sitio para aprender sobre nuestra galaxia" 
                style={{ maxWidth: '100%', marginTop: '20px' }} 
            />
        </div>
    )
}
export default Bienvenido;
