/* Diseñar el juego acierta la contraseña con POO. La mecánica del juego es la siguiente: el jugador
introduce la contraseña; a continuación, el programa por medio de tiradas aleatorias debe adivinarla.
Debe ir indicando si la palabra aleatoria es mayor o menor, alfabéticamente, que la contraseña, y
deberá actuar en consecuencia con esto. Al final, mostrar cuántas tiradas tomó adivinar la contraseña.
Todo esto, lo deberá implementar por medio de métodos. */

class JuegoAdivinaPassword {
    constructor() {
        this.password = "";
        this.intentos = 0;
        this.abecedario = "abcdefghijklmnopqrstuvwxyz";
        this.intentosPrevios = new Set();
    }

    pedirPassword() {
        const regex = /^[a-zA-Z]+$/;
        do {
            this.password = prompt("Ingrese la contraseña (solo letras, sin espacios ni números):");
            if (!this.password || !regex.test(this.password)) {
                alert("Contraseña inválida. Solo se permiten letras, sin espacios ni números.");
            }
        } while (!this.password || !regex.test(this.password));
        this.password = this.password.toLowerCase();
        console.log("Contraseña guardada. El programa empezará a adivinarla automáticamente.");
        console.clear();
    }

    generarPalabraAleatoria() {
        const longitud = this.password.length;
        let palabra;
        do {
            palabra = "";
            for (let i = 0; i < longitud; i++) {
                palabra += this.abecedario.charAt(Math.floor(Math.random() * this.abecedario.length));
            }
        } while (this.intentosPrevios.has(palabra));
        this.intentosPrevios.add(palabra);
        return palabra;
    }

    compararPalabras(palabra) {
        if (palabra === this.password) return 0;
        return palabra < this.password ? -1 : 1;
    }

    jugar() {
        this.pedirPassword();
        let encontrada = false;

        while (!encontrada) {
            const intento = this.generarPalabraAleatoria();
            this.intentos++;

            const resultado = this.compararPalabras(intento);

            if (resultado === 0) {
                console.log(`¡Encontre tu contraseña! "${intento}" en ${this.intentos} intentos.`);
                alert(`¡Encontre tu contraseña! "${intento}" en ${this.intentos} intentos.`);
                encontrada = true;
            } else if (resultado < 0) {
                console.log(`"${intento}" es MENOR que la contraseña.`);
            } else {
                console.log(`"${intento}" es MAYOR que la contraseña.`);
            }

        }
    }
}

const juego = new JuegoAdivinaPassword();
juego.jugar();


