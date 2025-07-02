
/* Realizar un programa que contenga una función que devuelva la cantidad de consonantes que tiene
una palabra, ingresada previamente. */

let valor = prompt('Ingrese la palabra que desea analizar');


if (valor.includes(' ') || /\d/.test(valor)) {
    alert('El valor ingresado no es correcto.');
    throw new Error('El valor ingresado no es correcto.');
};

const consonanteAnalizer = (palabra) => {
    const vocales = 'aeiouáéíóú';
    let contador = 0;

    for (const letra of palabra.toLowerCase()) {
        if (letra >= 'a' && letra <= 'z' && !vocales.includes(letra)) {
            contador++;
        }
    }

    return contador;
};

//console.log("Palabra ingresada:", valor);
console.log("Consonantes:", consonanteAnalizer(valor));