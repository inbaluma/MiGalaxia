import { width } from "@fortawesome/free-regular-svg-icons/faAddressBook";


function ComponenteConImagen() {
    return (
      <div style={{textAlign: "center"}}>
        <h1 style={{fontWeight: "bold"}}>Aprender</h1>
        <h2 style={{fontWeight: "bold", marginBottom: "20px"}}>El sistema solar</h2>
        <h3>Seleccione un planeta para ver más información</h3>
        <img src= "/sistemaSolar.jpg" alt="Ejemplo" style={{width: "1000px", height: "auto"}} />
      </div>
    );
  }
  
  export default ComponenteConImagen;