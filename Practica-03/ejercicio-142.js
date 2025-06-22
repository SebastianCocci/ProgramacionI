
/* Se desea obtener la suma de los N (ingresarlo en el programa) números naturales posteriores al
número 300 inclusive. */

const numeroIngr = parseInt(prompt("Ingrese cuántos números naturales desea sumar"));
let suma = 0;

if (/^-?\d+(\.\d+)?$/.test(numeroIngr)) {

  for (let i = 0; i < numeroIngr; i++) {
    suma += 300 + i;

  };
} else {
  console.log("No es un número válido.");
};



console.log("Suma total:", suma);
