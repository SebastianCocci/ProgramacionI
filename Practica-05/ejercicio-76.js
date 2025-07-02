
/* Realizar un programa que pida un número positivo y entero (n). Luego debe generarse aleatoriamente
2 vectores (a y b) de n elementos. Llamar una función donde genere un vector (c) donde cada
elemento se forme de la siguiente manera:
$c[1] $a[1] + $b[n] $c[2] $a[2] + $b[n-1].................. $c[n] $a[n] + $b[1]
En otra función, se debe mostrar el vector resultante. */

let numero = prompt('Ingrese un numero positivo y entero');

const valor = Number(numero);

const numAleatorio = (min, max) => Math.random() * (max - min + 1) + min;

let vectorA = [];

let vectorB = [];

if (numero === "") {
    console.error('Debe ingresar un número positivo y entero');
    throw new Error('Debe ingresar un número positivo y entero');

} else if (isNaN(valor)) {

    console.error('El valor ingresado no es un número');
    throw new Error('El valor ingresado no es un número');

} else if (!Number.isInteger(valor)) {
    console.error('El número debe ser entero');
    throw new Error('El número debe ser entero');

} else if (valor <= 0) {

    console.error('El número debe ser menor a 10 y mayor a 0');
    throw new Error('El número debe ser menor a 10 y mayor a 0');

};

for (let i = 0; i < valor; i++) {
    vectorA[i] = parseInt(numAleatorio(0, 60));
    vectorB[i] = parseInt(numAleatorio(0, 60));
};

const vectorAl = (array1, array2, valorIngr) => {

    let vectorMezcla = [];
    let largoArray = array2.length;
    for (let i = 0; i < valorIngr; i++) {

        vectorMezcla.push(array1[i] + array2[largoArray - i]); //corregir lo del .length

    };
    return vectorMezcla;
};

let vectorC = vectorAl(vectorA, vectorB, valor);

const mostrarResultado = (resultado) => {
    return resultado;
};

console.log(mostrarResultado(vectorC));