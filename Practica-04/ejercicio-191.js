
/* Ingresar un valor entero N (< 30) y a continuación generar un conjunto de N elementos (aleatoriamente
con valores entre -100 y 100). Si el último elemento del conjunto tiene un valor menor que 10 imprimir
los negativos y en caso contrario los demás. */

let numeroIngr = parseInt(prompt("ingrese un numero menor a 30"));
let numeros = [];

if (!isNaN(numeroIngr) && numeroIngr < 30 && numeroIngr > 0) {

    for (let i = 0; i <= numeroIngr - 1; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 201) - 100;
        numeros.push(numeroAleatorio);
    };

} else {

    alert("No es un número válido.");
    throw new Error("El valor ingresado no es correcto");

};

let ultimo = numeros[numeros.length - 1];

console.log("Lista de de los", numeroIngr, "numeros generados", numeros);

if (ultimo < 10) {

    let negativos = numeros.filter(n => n < 0);
    console.log('Último número es menor a 10. Números negativos:', negativos);

} else {

    let positivos = numeros.filter(n => n >= 0);
    console.log("Último número es mayor a 10. Números positivos:", positivos);
};

