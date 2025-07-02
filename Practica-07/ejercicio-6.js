/* Algunas plantas son sensibles al fotoperiodo. El fotoperiodo es el cambio en el tiempo de iluminación
durante la alternancia día-noche. El fotoperiodo varía a lo largo de las estaciones del año y modifica el
comportamiento de las plantas (floración, germinación...).
Realizar una función para Calcular el valor N del Fotoperiodo Anual, que reciba por parámetros los
datos que necesite; donde los valores xi representan los 12 valores del fotoperiodo anual (tenga en
cuenta que es un array, para simular una ejecución, cargue en este array los primeros 12 números
impares), m es la mediana (debe ser una constante con cualquier valor fijo), D es la moda (otra
constante con cualquier valor) y T es la desviación típica (la raíz cuadrada de la varianza, la varianza
debe estar definida como una constante, y luego hallar el valor de T).
El programa deberá imprimir fuera de la función:
Para los valores de xi, m, D y T el fotoperiodo anual es N. (Reemplazar cada uno de los datos con
sus respectivos valores). */


const xi = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23];// primeros 12 impares
let largo = xi.length 

const m = 10,
    D = 5,
    varianza = 4,
    T = Math.sqrt(varianza);

function calcularFotoperiodoAnual(xi, m, D, T) {
    let suma = 0;

    for (let i = 0; i < largo; i++) {
        suma += (xi[i] - m);
    }

    const N = suma / (D + T);
    return N;
}

const N = calcularFotoperiodoAnual(xi, m, D, T);

console.log(`Para los valores de xi = [${xi.join(", ")}], m = ${m}, D = ${D} y T = ${T.toFixed(2)} el fotoperiodo anual es N = ${N.toFixed(2)}.`);