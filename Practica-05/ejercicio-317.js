
/* Pedir un número (< 10). Luego generar tantos números aleatorios (entre 0 y 40) como el número
ingresado lo diga. Armar una pirámide cuya base serán los números generados, y sabiendo que:
a + b
 a b
Ejemplo: si el número ingresado fue 5, se generan 5 números aleatorios (9, 31, 12, 5, 6), deberá
imprimir (omitir el recuadro): */

let valor = prompt('Ingrese un numero menor a 10');

const numAleatorio = (min, max) => Math.random() * (max - min + 1) + min;

let vectorA = [];

if (valor === "") {
    console.error('Debe ingresar un número');
    throw new Error('Debe ingresar un número');

} else if (isNaN(valor)) {

    console.error('El valor ingresado no es un número');
    throw new Error('El valor ingresado no es un número');

} else if (Number.isInteger(valor)) {
    console.error('El número debe ser entero');
    throw new Error('El número debe ser entero');

}
if (valor > 10 || valor < 0) {

    console.error('El número debe ser menor a 10 y mayor a 0');
    throw new Error('El número debe ser menor a 10 y mayor a 0');

} else {

    for (i = 0; i < valor; i++) {
        vectorA[i] = parseInt(numAleatorio(0, 4));

    }

};

let piramide = [vectorA];

while (piramide[piramide.length - 1].length > 1) {

    let anterior = piramide[piramide.length - 1];

    let nuevoNivel = [];

    for (let i = 0; i < anterior.length - 1; i++) {

        nuevoNivel.push(anterior[i] + anterior[i + 1]);

    }

    piramide.push(nuevoNivel);
};

for (let i = piramide.length - 1; i >= 0; i--) {

    let linea = piramide[i].map(num => String(num).padStart(4)).join("");

    console.log(linea.padStart(linea.length + (piramide.length - 1 + i) * 2));

};

