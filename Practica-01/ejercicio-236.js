
// Leer una cantidad de horas e imprimir su equivalente en minutos, segundos y días.

let horas = prompt("Ingrese la cantidad de horas que desea calcular");
let regex = /^[0-9]+$/;



if (regex.test(horas)) {
    console.log("Aqui estan tus numeros:");
} else {
    alert("Debe ingresar una hora valida");
    throw "Debe ingresar una hora valida";
}

let minutos = horas * 60;

let segundos = horas * 3600;

let dias = horas / 24;

let horasRestantes = horas % 24;

console.log("La hora ingresada fue: ", horas, "hs");
console.log("En minutos es: ", minutos, "min");
console.log("En segundos es: ", segundos, "seg");
console.log("Y son ", Math.floor(dias), "días");
console.log("Con ", horasRestantes, "horas");
