
/* Escribir un programa que pida dos números, que representan el radio y la altura en cm de un tanque
de agua cilíndrico. Luego que indique por medio de funciones, si el tanque es pequeño, mediano o
grande, según se indica:
Si tiene más de 5000 litros, es grande.
Si tiene entre 1000 y 5000 litros, es mediano.
Si tiene menos de 1000 litros, es pequeño.
Recordar que el volumen de un cilindro es π * radio2

* altura, y 1 litro equivale a 1 decímetro.

El mensaje debe salir en el script principal. */

const radio = parseFloat(prompt("Ingrese el radio de la base del cilindro en centímetros:")),

    altura = parseFloat(prompt("Ingrese la altura del cilindro en centímetros:"));

if (isNaN(altura) || isNaN(radio) || altura <= 0 || radio <= 0) {

    alert("Por favor, ingrese valores numéricos válidos y mayores a cero.");
    throw new Error("Entrada inválida.");

}

const volumenCilindro = Math.PI * Math.pow(radio, 2) * altura,

    volumenLitros = volumenCilindro / 1000;

//console.log ("Ll volumen del cilindo es: ", volumenCilindro.toFixed(2), "cmts cubicos") ;
//console.log ("Es :", pasarLitros.toFixed(2) ,  " lts") ;

const tamanioTanque = (parametro) => {

    if (parametro > 5000) return 'Grande';

    if (parametro > 1000 && parametro < 5000) return 'Mediano';

    return 'Pequeño';

};

console.log('El tamañ del tanque es:', tamanioTanque(volumenLitros));