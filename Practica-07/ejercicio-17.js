/* Escribir un programa que cargue un array de 100 elementos con números al azar entre 0 y 10.
Luego deberá armar una función que se llame MasRepetidos que devolverá el o los número/s más
repetido/s. Fuera de la función, es decir en el script principal, deberá imprimir lo que devuelva esta
función.
Por último, deberá armar un nuevo array sólo con los números que no se encuentren en el array
anterior. Deberá imprimirlo por pantalla, y en caso de que no haya ninguno, informar por pantalla de
esta situación. */

const arrayNumeros = [];
let elRepetido = 0;
const numerosFal = [];

while (arrayNumeros.length <= 100) {
    const numeroAleatorio = Math.floor(Math.random() * 11);

    arrayNumeros.push(numeroAleatorio)
}

function masRepetidos(array) {
    let valores = [],
        frecuencias = [],
        largoArray = array.length;

    for (let i = 0; i < largoArray; i++) {
        let numero = array[i];
        let indice = valores.indexOf(numero);

        if (indice === -1) {

            valores.push(numero);
            frecuencias.push(1);

        } else {

            frecuencias[indice]++;
        }
    }
    //console.log("Valores:", valores);
    //console.log("Frecuencias:", frecuencias);

    // Buscar cantidad de veces que se repite
    let maxFrecuencia = 0,
        largoFrs = frecuencias.length;

    for (let i = 0; i < largoFrs; i++) {
        if (frecuencias[i] > maxFrecuencia) {
            maxFrecuencia = frecuencias[i];
        }
    }

    // Buscar el valore que mas se repite
    let resultado = [];

    for (let i = 0; i < largoFrs; i++) {
        if (frecuencias[i] === maxFrecuencia) {
            resultado.push(valores[i]);
        }
    }

    return resultado;
}

//console.log(arrayNumeros);
const resultado = masRepetidos(arrayNumeros);
console.log("Número/s más repetido/s:", `${resultado}`);

//Buscar si falta algun numero del 0 al 10
for (let i = 0; i <= 10; i++) {
    if (arrayNumeros.indexOf(i) === -1) {
        numerosFal.push(i);
    }
}
// Mostrar resultado
if (numerosFal.length > 0) {
    console.log("Números que NO están en el array:", numerosFal);
} else {
    console.log("Todos los números están presentes en el array.");
}


