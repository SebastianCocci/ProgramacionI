/* Se dispone de un lote de valores enteros positivos que finaliza con un valor -1. Ingresarlo por un
programa. El lote está dividido en sublotes por medio de valores cero. Desarrollar el programa que
determine e imprima:
a) por cada sublote el promedio de valores.
b) el total de sublotes procesados.
c) valor máximo del conjunto, indicando el sublote en que se encontró y la posición relativa del mismo
en el sublote.
Nota: puede estar el lote vacío (primer valor -1), o puede haber uno o varios o todos los sublotes
vacíos (ceros consecutivos). */


let valor,
    valores = [],
    sublotes = 0,
    suma = 0,
    cantidad = 0,
    maximo = 0,
    sublote = 0,
    posicion = 0,
    posicionActual = 0,
    subloteActual = 1,
    primerValor = true;

while (true) {
    valor = parseInt(prompt("Ingrese un número positivo, 0 para nuevo sublote, -1 para finalizar:"));

    if (isNaN(valor)) {
        alert("Por favor, ingrese un número válido.");
        continue;
    }

    if (valor === -1) {
        if (primerValor) {
            console.log("El lote está vacío.");
        } else {
            if (cantidad > 0 || suma > 0) {
                mostrarPromedio(suma, cantidad, subloteActual);
                sublotes++;
            }
            console.log(`Total de sublotes procesados: ${sublotes}`);
            //console.log(`Valores ingresados:`, valores);
            if (maximo !== 0) {
                console.log(`Valor máximo: ${maximo}, encontrado en sublote ${sublote}, posición ${posicion}`);
            }
        }
        break; // corta el while
    }

    primerValor = false;

    if (valor !== -1) {
        valores.push(valor);
    }

    if (valor === 0) {
        // Cierre del sublote actual
        if (cantidad > 0) {
            mostrarPromedio(suma, cantidad, subloteActual);
            sublotes++;

        } else {
            console.log(`Sublote ${subloteActual}: vacío.`);
            sublotes++;
        }
        // Reinicio para nuevo sublote
        suma = 0;
        cantidad = 0;
        posicionActual = 0;
        subloteActual++;
    } else {
        suma += valor;
        cantidad++;
        posicionActual++;

        if (valor > maximo) {
            maximo = valor;
            sublote = subloteActual;
            posicion = posicionActual;
        }
    }
}

function mostrarPromedio(suma, cantidad, subloteNro) {
    const promedio = suma / cantidad;
    console.log(`Sublote ${subloteNro}: promedio = ${promedio.toFixed(2)}`);
}

