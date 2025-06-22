
/* Pedir dos valores. Luego generar 100 números aleatorios del 0 al 20 y que los muestre por pantalla
separados por espacios. A continuación cambiará todas las ocurrencias del primer valor por el
segundo en la lista generada anteriormente. Los números que se han cambiado deben aparecer
entrecomillados. */

let valor1 = parseInt(prompt("Ingrese el primer valor (a reemplazar):"));
let valor2 = parseInt(prompt("Ingrese el segundo valor (el que se va a mostrar):"));
let numeros = [];
let resultado = [];


if (!isNaN(valor1, valor2) && valor1 <= 20) {

    for (let i = 0; i < 100; i++) {
        let num = Math.floor(Math.random() * 21);
        numeros.push(num);
        if (numeros[i] === valor1) {
            resultado.push(`"${valor2}"`);
        } else {
            resultado.push(numeros[i]);
        }
    }

} else {
    alert("El valor ingresado no es correcto");
    throw new Error("El valor ingresado no es correcto");
};

console.log("Lista original:");
console.log(numeros.join(' '));


console.log("Lista modificada:");
console.log(resultado.join(' '));
