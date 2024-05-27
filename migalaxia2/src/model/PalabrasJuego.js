class Palabra {
    
    constructor(letra, palabra, definicion, empieza, tipo) {
        this.letra = letra.toUpperCase();

        this.palabra = this.minusculasSinTildes(palabra);

        this.definicion = definicion;        

        this.empieza = (empieza == null) || empieza;

        this.tipo = tipo == null ? "Palabra" : tipo;

        this.intentos = 3;

        this.acertada = false;
    }

    getLetra() {
        return this.letra;
    }

    getHeading() {
        let heading = this.tipo + " que ";

        if (this.empieza) heading += "empieza por la ";
        else heading += "contiene la ";
        
        heading += this.letra;

        return heading;
    }

    getPalabra() {
        return this.palabra;
    }

    getDefinicion() {
        return this.definicion;
    }

    getIntentosRestantes() {
        return this.intentos;
    }

    isAcertada() {
        return this.acertada;
    }

    isIncorrecta() {
        return this.intentos <= 0;
    }

    isLibre() {
        return ! (this.isAcertada() || this.isIncorrecta());
    }

    getEstado() {
        return this.acertada ? 1 : this.intentos > 0 ? 0 : -1;
    }

    getLectura() {
        let lectura = this.tipo + " que ";

        if (this.empieza) lectura += "empieza por la ";
        else lectura += "contiene la ";
        
        lectura += this.letra + ". ";
        lectura += this.definicion;

        return lectura;
    }

    checkPalabra(palabra) {
        this.acertada = this.palabra === this.minusculasSinTildes(palabra);
        if (this.acertada === false) {
            this.intentos--;
        }
        return this.acertada;
    }

    minusculasSinTildes(p) {
        let p1 = p.toLowerCase();
        let palabra = "";
        for(let i = 0; i < p1.length; i++) {
            const c = p1[i];
            if (c === 'á') palabra+='a';
            else if (c === 'é') palabra+='e';
            else if (c === 'í') palabra+='i';
            else if (c === 'ó') palabra+='o';
            else if (c === 'ú') palabra+='u';
            else palabra+=c;
        }
        return palabra;
    }

}
export default Palabra;