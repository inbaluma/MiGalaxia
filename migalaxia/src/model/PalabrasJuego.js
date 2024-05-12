class Palabra {
    
    constructor(letra, palabra, definicion) {
        this.letra = letra.toUpperCase();

        this.palabra = this.minusculasSinTildes(palabra);

        this.definicion = definicion;

        this.intentos = 3;

        this.acertada = false;
    }

    getLetra() {
        return this.letra;
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