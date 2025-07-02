
/* Ingresar la medida de cada uno de los tres ángulos de un triángulo, determinar e informar si
pertenecen o no a un triángulo rectángulo. */

let angulo1 = prompt("Ingrese el valor del primer angulo");

if (angulo1 < 0) {
    alert("No existen angulos negativos");
    throw "No existen angulos negativos";
}

let angulo2 = prompt("Ingrese el valor del segundo angulo");

if (angulo2 < 0) {
    alert("No existen angulos negativos");
    throw "No existen angulos negativos";
}

let angulo3 = prompt("Ingrese el valor del tercer angulo");

if (angulo3 < 0) {
    alert("No existen angulos negativos");
    throw "No existen angulos negativos";
}

let regex = /^[0-9]+$/;

if (regex.test(angulo1, angulo2, angulo3)) {
    console.log("Aqui esta el resultado:");
} else {
    alert("Debe ingresar un valor valido");
    throw "Debe ingresar un valor valido";
}

console.log("Ángulo 1:", angulo1);
console.log("Ángulo 2:", angulo2);
console.log("Ángulo 3:", angulo3);

let sumaAngulos = angulo1 + angulo2 + angulo3;

if (sumaAngulos !== 180) {
    alert(" No es un triangulo");
    throw "Debe ingresar un valor valido";
} else if (angulo1 == 90 || angulo2 == 90 || angulo3 == 90) {
    alert("Es un triangulo rectangulo");
} else {
    alert("No es un triangulo rectangulo");
};

