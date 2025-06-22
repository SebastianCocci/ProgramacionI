
/* Realizar un programa que recibirá las tres notas de un alumno. La situación de un alumno se evalúa
del siguiente modo:
• Si sus tres notas son mayores o iguales a 6: "Aprobado".
• Si el promedio es menor que 6: "Reprobado".
• Si el promedio es mayor o igual a 6, pero alguna de sus notas es menor que 6: "Recuperatorio".
Realizar dos funciones (situacion y promedio) para que muestre en el script principal, lo siguiente:
Situación: Reprobado
Promedio: 4,54 */

let notas = [];

for (let i = 0; i < 3; i++) {
  let valor = prompt(`Ingrese la nota ${i + 1} del alumno (entre 0 y 10):`);

  if (valor === "") {

    alert("Entrada vacía. Vuelva a empezar.");
    --i;

  } else if (isNaN(valor)) {

    alert("Eso no es un número válido.");
    --i;

  } else if (Number(valor) < 0 || Number(valor) > 10) {

    alert("La nota debe estar entre 0 y 10.");
    --i;

  } else {

    notas.push(Number(valor));
  };
};

let promedio = (arrayNotas) => {

  let suma = 0;
  let cantNotas = notas.length;
  for (let i = 0; i < cantNotas; i++) {
    suma += arrayNotas[i];
  }

  return suma / cantNotas;
};


let situacion = (arrayNotas, promedioCalc) => {

  let notaAprobada = true;
  let cantNotas = notas.length;

  for (let i = 0; i < cantNotas; i++) {

    if (arrayNotas[i] < 6) {

      notaAprobada = false;

      break;
    };
  };

  if (notaAprobada) {

    return 'Aprobado';

  } else if (promedioCalc < 6) {

    return 'Reprobado';

  } else {

    return 'Recuperatorio';

  };
};

let promedioAlumno = promedio(notas);
let resultado = situacion(notas, promedioAlumno);


console.log('Situacion:', resultado);
console.log('Promedio:', promedioAlumno);


