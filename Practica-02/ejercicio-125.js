
/* Diseñar un programa que pida la altura y el diámetro de un cilindro en metros. Deberá calcularse el
volumen del cilindro y mostrarse el resultado en la pantalla.
Recordar que el volumen de un cilindro es π * radio2
* altura, y 1 litro equivale a 1 decímetro. */

let altura = prompt("Por favor ingrese la altura del cilindro en metros.");

altura = Number(altura);

let diametro = prompt("Por favor ingrese el diametro de la base del cilindro en metros.");

diametro = Number(diametro);

let regex = /^[0-9]/;

if (regex.test(altura, diametro) && altura, diametro > 0) {
    console.log("Aqui esta el resultado:");
} else {
    alert("Debe ingresar un valor valido");
    throw "Debe ingresar un valor valido";
};

let radio = diametro / 2;

let areaBase = Math.PI * radio ** 2;

let volumenCilindro = areaBase * altura;

console.log("el volumen del cilindo es: ", volumenCilindro.toFixed(2), "mts cubicos");