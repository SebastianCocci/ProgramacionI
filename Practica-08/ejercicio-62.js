/*Elaborar un programa que permita leer una frase u oración y que imprima la palabra más larga,
contemplar la posibilidad de que haya más de una palabra con la longitud más larga, en tal caso
utilizar un arreglo para guardarlas y al final imprimir todas las palabras que tuvieron la máxima
longitud. Utilizar distintos métodos para cada una de las acciones.*/

window.onload = () => {
    const texto = prompt("Ingrese una frase u oración:");
    if (texto) {
        const frase = new Frase(texto);

        frase.imprimirResultado();
        
    } else {
        alert("No ingresó ninguna frase.");
    }
};


class Frase {
    constructor(oracion) {
        this.oracion = oracion;
    }

    obtenerPalabras() {
        return this.oracion
            .replace(/[.,;:!?]/g, "")
            .split(/\s+/)
            .filter(palabra => palabra.length > 0);
    }

    buscarMaxLongitud() {
        const palabras = this.obtenerPalabras();
        let max = 0;
        for (let palabra of palabras) {
            if (palabra.length > max) {
                max = palabra.length;
            }
        }
        return max;
    }

    palabrasMasLargas() {
        const palabras = this.obtenerPalabras();
        const maxLong = this.buscarMaxLongitud();
        return palabras.filter(palabra => palabra.length === maxLong);
    }

    imprimirResultado() {
        const resultado = this.palabrasMasLargas();
        console.log("La/s palabra más larga/s:", resultado.join(", "));
    }
};
