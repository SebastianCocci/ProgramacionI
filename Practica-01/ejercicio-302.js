
/* Ingresar la cantidad de kilowatios consumidos por un usuario en un mes, calcular el importe a pagar
por el mismo teniendo en cuenta que:
Si la cantidad de kilowatios consumidos es menor o igual a 200, el precio del kilowatio es de 0,05
pesos.
Si la cantidad de kilowatios consumidos es mayor que 200 y menor que 1000, el precio del kilowatio es
de 0,1 pesos.
Si la cantidad de kilowatios consumidos es mayor o igual que 1000, el precio del kilowatio es de 0,15
pesos. */

let cantidadKW = prompt("Ingrese la cantidad de kilowatios consumidos");
let totalPago;
let regex = /^[0-9]+$/;

if (regex.test(cantidadKW) || cantidadKW > 0) {

} else {
  alert("Debe ingresar un valor valido");
  throw "Debe ingresar un valor valido";
}

if (cantidadKW <= 200) {
  totalPago = cantidadKW * 0.05;
} else if (cantidadKW > 200 && cantidadKW < 1000) {
  totalPago = cantidadKW * 0.1;
} else if (cantidadKW >= 1000) {
  totalPago = cantidadKW * 0.15;
};

console.log("El importe a pagar es: ", totalPago);