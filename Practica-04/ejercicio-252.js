
/* Elaborar un programa para estimar la población estudiantil que se espera tener en un determinado
año, los datos que se tienen son: la población actual de la escuela (número de estudiantes), el
porcentaje de crecimiento anual que se espera tener, el año actual y el año al que se desea estimar el
crecimiento. Todos estos datos deben ser leídos para imprimir al final lo estimado. */

let poblacionActual = parseInt(prompt("Ingrese la población actual de estudiantes:"));

if (isNaN(poblacionActual) || poblacionActual < 0) {
    alert('El valor ingresado no es valido');
    throw new Error("El valor ingresado no es válido.");
};

let porcentajeCrecimiento = parseFloat(prompt("Ingrese el porcentaje de crecimiento anual:"));

if (isNaN(porcentajeCrecimiento) || porcentajeCrecimiento < 0) {
    alert("Porcentaje de crecimiento no válido");
    throw new Error("Porcentaje de crecimiento no válido");
};

let anioActual = parseInt(prompt("Ingrese el año actual:"));

if (isNaN(anioActual)) {
    alert("Año actual no válido");
    throw new Error("Año actual no válido");
};

let anioEstimado = parseInt(prompt("Ingrese el año al que desea estimar la población:"));

if (isNaN(anioEstimado) || anioEstimado < anioActual) {
    alert("El año ingresado no es válido, debe ser mayor año actual.");
    throw new Error("El año ingresado no es válido, debe ser mayor año actual.");
};

let poblacionEstimada;
let añosProyectados = anioEstimado - anioActual;

for (let i = 0; i < añosProyectados; i++) {
    poblacionEstimada = poblacionActual * (1 + (porcentajeCrecimiento / 100));
};

poblacionEstimada = Math.round(poblacionEstimada);

alert(`La población estudiantil estimada para el año ${anioEstimado} es de aproximadamente ${poblacionEstimada} estudiantes.`);
console.log(`La población estudiantil estimada para el año ${anioEstimado} es de aproximadamente ${poblacionEstimada} estudiantes.`);