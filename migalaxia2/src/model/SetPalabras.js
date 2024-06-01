class SetPalabras {

    constructor(palabras) {
        this.palabras = palabras;

        this.current = 0;

        this.size = palabras.length;

        this.aciertos = 0;

        this.incorrectos = 0;

        this.palabra = null;
    }

    getNextPalabra() {
        this.palabra = this.palabras[this.current];
        this.current = (this.current + 1) % this.size;
        return this.palabra;
    }

    getNextLetra() {
        return this.palabras[this.current].letra;
    }

    getNextLetras() {
        const letras = [];

        for (let i = 0; i < this.size; i++) {
            letras.push({
                letra: this.palabras[i].getLetra(),
                estado: this.palabras[i].getEstado()
            });
        }
        return letras;
    }

    getEstadoLetras() {
        const correctas = [];
        const incorrectas = [];
        const restantes = [];
        
        for (let i = 0; i < this.size; i++) {
            const palabra = this.palabras[i];
            if (palabra.isAcertada()) correctas.push(palabra.getLetra());
            else if(palabra.isIncorrecta()) incorrectas.push(palabra.getLetra());
            else restantes.push(palabra.getLetra());
        }

        const letras = [
            {
                estado: "Palabras correctas",
                letras: correctas,
                clase: "text-bg-success"
            },
            {
                estado: "Palabras incorrectas",
                letras: incorrectas,
                clase: "text-bg-danger"
            },
            {
                estado: "Palabras restantes",
                letras: restantes,
                clase: "text-bg-tertiary"
            }
        ];

        return letras;
    }

    checkPalabra(palabra) {
        const check = this.palabra.checkPalabra(palabra);
        if (check) {
            this.aciertos++;
        }
        else if(this.palabra.isIncorrecta()) {
            this.incorrectos++;
        }

        return check;
    }

    isTerminado() {
        return this.aciertos + this.incorrectos >= this.size;
    }

    getAciertos() {
        return this.aciertos;
    }

    getErroneos() {
        return this.incorrectos;
    }

    getRestantes() {
        return this.size - this.aciertos - this.incorrectos;
    }

}
export default SetPalabras;