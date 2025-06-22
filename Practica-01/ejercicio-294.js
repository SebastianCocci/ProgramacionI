
/* Dado el importe bruto de una factura, calcular el resultado de bonificarlo (descuento) con un 4%. Al
monto obtenido calcularle el IVA (21%). Finalmente informar: el importe bruto, el valor de la
bonificación, el importe bruto bonificado, el monto correspondiente al IVA y el importe neto resultante. */

let importeBruto = prompt("Ingrese el importe bruto de su factura");
let regex = /^[0-9]+$/;

if (regex.test(importeBruto)) {
    console.log("Aqui esta el resumen de tu factura:");
} else {
    alert("Debe ingresar un valor valido");
    throw "Debe ingresar un valor valido";
}

let valorBonif = importeBruto * 0.04;
let importeBonif = importeBruto - valorBonif;
let iva = importeBonif * 0.21;
let valorNento = importeBonif - iva;

console.log("Importe bruto:", importeBruto);
console.log("El valor de la bonificacion es:", valorBonif);
console.log("Importe bruto bonificado:", importeBonif);
console.log("IVA:", iva);
console.log("Importe Neto:", valorNento);