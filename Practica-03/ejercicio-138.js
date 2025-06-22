
/* Dados como datos 200 números enteros (hacerlo aleatorios entre -200 y 200), obtener y mostrar su
suma. */

let numeros = [];
let suma = 0;

for (let i = 0; i < 200; i++) {
  const numeroAleatorio = Math.floor(Math.random() * 401) - 200;
  numeros.push(numeroAleatorio);
};

for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
};


console.log("Números generados:", numeros);
console.log("Suma total:", suma);
