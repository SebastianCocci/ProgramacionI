
/* Elaborar un programa para calcular la cantidad que se tendrá ahorrada después de 10 años, si se
depositan mil pesos mensualmente a una tasa de interés mensual de 3%, capitalizable cada mes, es
decir, que al capital se le agregan los intereses. */

let ahorro = 0;
const deposito = 1000;
const tasa = 0.03;

for (let i = 1; i <= 120; i++) {
  ahorro = (ahorro + deposito) * (1 + tasa);
}

console.log("Monto ahorrado después de 10 años:", ahorro.toFixed(2));

