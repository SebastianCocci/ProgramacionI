
/* Elaborar un programa que permita hacer conversiones de temperaturas entre grados Fahrenheit,
Celsius, Kelvin y Rankine. Primero debe preguntar qué tipo de grados quiere convertir. Por ejemplo, si
se le indica que desea convertir una temperatura en grados Fahrenheit, debe leer la cantidad de
grados, y luego calcular e imprimir su equivalente en grados Celsius, Kelvin y Rankine, y así, debe
hacer lo mismo para cada uno de los otros tipos. Para convertir en Celsius, la temperatura Fahrenheit
se le resta 32 y se multiplica por 5/9. Para convertir en Kelvin a los grados Celsius, se le suma 273.
Para convertir en Rankine a los grados Farenheit se le suma 460. */

let uMedida = prompt("ingrese la primer letra de la unidad de medida que desea convertir");
uMedida = uMedida.toUpperCase();
let grados = prompt("Ingrese la cantidad de grados ");
grados = parseFloat(grados);
let regexLet = ['F', 'C', 'K', 'R',];
let regex = /^[0-9]/;
let celsius;
let fahrenheit;
let kelvin;
let rankine;

if (!regexLet.includes(uMedida)) {
    console.log("La unidad de medida no está permitida");
    throw "Debe ingresar un valor valido";
};

if (!regex.test(grados)) {
    alert("No existen esa temperatura");
    throw "No existen esa temperatura";
};

switch (uMedida) {
    case "F":
        fahrenheit = grados;
        celsius = (grados - 32) * 5 / 9;
        kelvin = (grados - 32) * 5 / 9 + 273, 15;
        rankine = grados + 460;
        break;
    case "C":
        celsius = grados;
        fahrenheit = (grados * 9 / 5) + 32;
        kelvin = grados + 273, 15;
        rankine = (grados * 9 / 5) + 492;
        break;
    case "K":
        kelvin = grados;
        fahrenheit = (grados - 273.15) * 9 / 5 + 32;
        celsius = grados - 273, 15;
        rankine = grados * 1, 8;
        break;
    case "R":
        rankine = grados;
        fahrenheit = grados - 460;
        celsius = (grados - 492) * 5 / 9;
        kelvin = (grados * 5 / 9);
        break;
};

console.log("En celsius es: ", celsius);
console.log("En kelvin es: ", kelvin);
console.log("En rankine es: ", rankine);
console.log("En fahrenheit es:  ", fahrenheit);