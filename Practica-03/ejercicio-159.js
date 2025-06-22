
/* La población de los países A y B es de 52 y 85 millones de habitantes respectivamente. Las tasas
anuales de crecimiento de población son de 6 % para el primero y 4 % para el segundo. Confeccionar
un programa que calcule e informe la población de cada uno de los países en los próximos años hasta
que la población de A exceda a la de B y determinar e informar en cuántos años se dará esta
situación. */

let poblacionA = 52;
let poblacionB = 85;
const tasaA = 0.06;
const tasaB = 0.04;
let anios = 0;

while (poblacionA <= poblacionB) {
  poblacionA *= (1 + tasaA);
  poblacionB *= (1 + tasaB);
  anios++;
}

console.log(`En ${anios} años, la población de A superará a la de B.`);
console.log(`Población A: ${poblacionA.toFixed(2)} millones`);
console.log(`Población B: ${poblacionB.toFixed(2)} millones`);