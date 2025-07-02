/* Escribir un programa que cargue un array de 50 elementos con números al azar entre -500 y 500, y
que no se repitan. Luego deberá armar una función llamada Conversion que devolverá por cada
elemento del array generado, el cuadrado del número, la raíz cuadrada del número (en caso de ser un
número negativo, hacer la raíz cuadrada de su valor absoluto) y el valor absoluto del número. Fuera de
la función, deberá imprimir esa información.
Por último, deberá armar un nuevo array sólo con los números positivos encontrados en el anterior.
Deberá imprimirlo por pantalla, y en caso de que no se haya encontrado ningún número positivo,
informar por pantalla de esta situación. */

const numeros = new Set();

while (numeros.size < 50) {
    const num = Math.floor(Math.random() * 1001) - 500;
    numeros.add(num);
}

const arrayFinal = [...numeros];

// Función que devuelve un array con los resultados por número
const conversion = (array) => {
    const resultado = [];
    let largo = array.length;

    for (let i = 0; i < largo; i++) {
        const n = array[i];
        const cuadrado = n ** 2;
        const raiz = parseFloat(Math.sqrt(Math.abs(n)).toFixed(2));
        const absoluto = Math.abs(n);

        resultado.push([array[i], cuadrado, raiz, absoluto]);
    }

    return resultado;
};

// Mostrar
console.log(arrayFinal);
console.log("Resultados:")
console.log("Columna '0' es el valor.");
console.log("Columna '1' valor elevado cuadrado.");
console.log("Columna '2' raiz.");
console.log("Columna '3' absoluto.:");
console.table(conversion(arrayFinal));
