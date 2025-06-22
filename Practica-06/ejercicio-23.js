
/* Realizar un programa que pida solo un número. Luego que muestre los números de una sucesión que
comience en 1 y que no muestre los múltiplos del número ingresado. Hacerlo hasta que no supere el
número 1000. La tendrá que imprimir por pantalla. Además realizar una función que se llame
noMostrados, en donde debe mostrar los números que no fueron mostrados en la sucesión anterior,
lo deberá mostrar en el script principal. */

const numero = parseInt(prompt('Ingrese un número:')),

  listaNum = [];

if (isNaN(numero) || numero <= 0) {

  alert("Debe ingresar un número válido y mayor a 0.");
  throw new Error("Debe ingresar un número válido y mayor a 0.")

} else {

  for (let i = 1; i <= 1000; i++) {

    listaNum.push(i);

  }
};

const noMultiplos = listaNum.filter(n => n % numero !== 0);


const noMostrados = arr => arr.filter(n => n % numero === 0);


console.log(`Números que no son múltiplos de ${numero}:`, noMultiplos);
console.log(`Números que son múltiplos de ${numero}:`, noMostrados(listaNum));
