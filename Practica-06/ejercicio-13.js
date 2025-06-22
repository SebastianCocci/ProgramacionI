
/* Escribir un programa que cargue un array de 50 elementos con números al azar entre 1 y 1000, y que
no se repitan. Luego deberá armar una función llamada elementos que devolverá por cada elemento
del array generado, si el número es par o no, si es impar o no, y si es primo o no. Fuera de la función,
deberá imprimir esa información. */

let numeros = [];

while (numeros.length < 50) {
    let num = Math.floor(Math.random() * 1000) + 1;

    if (!numeros.includes(num)) {

        numeros.push(num);

    };
};


function elementos(array) {

    let mensajes = [],

        largo = array.length - 1;

    for (let i = 0; i < largo; i++) {

        let num = array[i],

            mensaje = "Número: " + num;

        if (num % 2 === 0) {
            mensaje += " | Par: sí | Impar: no";
        } else {
            mensaje += " | Impar: sí | Par: no";
        };

        let esPrimo = true;

        if (num < 2) {

            esPrimo = false;

        } else {
            for (let x = 2; x <= Math.sqrt(num); x++) {
                if (num % x === 0) {
                    esPrimo = false;
                    break;
                }
            }
        };

        if (esPrimo) {
            mensaje += " | Primo: sí";
        } else {
            mensaje += " | Primo: no";
        };

        mensajes.push(mensaje);
    }

    return mensajes;
};

console.log(elementos(numeros));