
/* Escribir un programa que le pregunte al usuario si quiere destacar el máximo o el mínimo. Luego
rellenar un array de 100 elementos con números enteros aleatorios comprendidos entre 0 y 500
(ambos incluidos). A continuación el programa mostrará el array. Seguidamente se volverá a mostrar el
array escribiendo el número destacado entre dobles asteriscos, dependiendo de lo que haya
respondido el usuario. */

let respuesta = prompt("Ingrese 'mayor' o 'menor' dependiendo si quiere resaltar el numero mas grande o mas chico de la lista");
let listaNum = [];

if (respuesta.toUpperCase() == "MAYOR" || respuesta.toUpperCase() == "MENOR") {
    for (i = 0; i <= 99; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 500);
        listaNum.push(numeroAleatorio);
    };
} else {
    alert("Ingrese un valor valido");
};

console.log('Lista creada', listaNum);

let numeroResaltado;

if (respuesta.toUpperCase() == "MAYOR") {
    numeroResaltado = Math.max(...listaNum);
} else {
    numeroResaltado = Math.min(...listaNum);
};

console.log('El numero encontrado es', numeroResaltado);

let arrayResaltado = [];

for (let i = 0; i < listaNum.length; i++) {
    if (listaNum[i] === numeroResaltado) {
        arrayResaltado.push(`**${listaNum[i]}**`);
        arrayResaltado.push(listaNum[i]);
    }
}

console.log('Esta es la lista con el numero resaltado', arrayResaltado);