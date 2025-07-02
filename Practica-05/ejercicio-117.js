
/* Escribir un programa que, dada una posición en un tablero de ajedrez (ingresarlo), nos diga a qué
casillas podría saltar un alfil que se encuentra en esa posición. Como se indica en la figura, el alfil se
mueve siempre en diagonal. El tablero cuenta con 64 casillas. Las columnas se indican con las letras
de la “a” a la “h” y las filas se indican del 1 al 8. */

const columnas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

let posicion = prompt("Ingresa la posición del alfil (por ejemplo: d5)");

let letra = posicion[0].toLowerCase();

let numero = parseInt(posicion[1]);

let x = columnas.indexOf(letra);

let y = numero - 1;

let movimientos = [];

const direcciones = [[1, 1], [1, -1], [-1, 1], [-1, -1]];

if (posicion.length !== 2) {

    console.error('Debes ingresar una posición válida de 2 caracteres (ej: d5)');
    throw new Error('Debe ingresar una posición válida');

};
if (!columnas.includes(letra)) {

    console.error('El primer carácter debe ser una letra entre a y h');
    throw new Error('Letra de columna inválida');

};
if (isNaN(numero) || numero < 1 || numero > 8) {

    console.error('El segundo carácter debe ser un número entre 1 y 8');
    throw new Error('Número de fila inválido');

} else {


    for (let [columnaX, filaY] of direcciones) {

        let nuevaX = x + columnaX;
        let nuevaY = y + filaY;

        while (nuevaX >= 0 && nuevaX < 8 && nuevaY >= 0 && nuevaY < 8) {

            movimientos.push(columnas[nuevaX] + (nuevaY + 1));
            nuevaX += columnaX;
            nuevaY += filaY;

        }
    };

};

console.log(`El alfil en ${posicion} puede moverse a: ${movimientos.join(', ')}`);
