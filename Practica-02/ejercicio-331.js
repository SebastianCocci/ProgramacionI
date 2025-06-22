
/* Ingresar la medida de tres ángulos. Indicar si corresponden a un triángulo, y si es así, señalar si es
obtusángulo (tiene un ángulo mayor a 90o), rectángulo (tiene un ángulo de 90o), o acutángulo (tiene los
tres ángulos menores a 90o). */

let angulo1 = prompt("Ingrese el valor del primer angulo");

angulo1 = Number(angulo1);

validarAngulo(angulo1);

let angulo2 = prompt("Ingrese el valor del segundo angulo");

angulo2 = Number(angulo2);

validarAngulo(angulo2);

let angulo3 = prompt("Ingrese el valor del tercer angulo");

angulo3 = Number(angulo3);

validarAngulo(angulo3);

function validarAngulo(valor) {
    if (valor < 0 || valor > 179) {
        alert("No existen un angulo con ese valor");
        throw "No existen un angulo con ese valor";
    };
};

let regex = /^[0-9]+$/;

if (regex.test(angulo1, angulo2, angulo3)) {
    console.log("Aqui esta el resultado:");
} else {
    alert("Debe ingresar un valor valido");
    throw "Debe ingresar un valor valido";
};

console.log("Ángulo 1:", angulo1);
console.log("Ángulo 2:", angulo2);
console.log("Ángulo 3:", angulo3);

let sumaAngulos = angulo1 + angulo2 + angulo3;

if (sumaAngulos !== 180) {
    alert(" No es un triangulo");
    throw "Debe ingresar un valor valido";
} else if (angulo1 == 90 || angulo2 == 90 || angulo3 == 90) {
    alert("Es un triangulo rectángulo");
} else if (angulo1 > 90 || angulo2 > 90 || angulo3 > 90) {
    alert("Es un triangulo obtusàngulo");
} else if (angulo1 < 90 || angulo2 < 90 || angulo3 < 90) {
    alert("Es un triangulo acutángulo");
};