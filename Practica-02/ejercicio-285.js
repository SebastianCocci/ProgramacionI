
/* Realizar un programa que pida tres números distintos (Primer Número, Segundo Número y Tercer
Número). Luego en una lista desplegable que muestre las operaciones a realizar (Suma, Resta,
Multiplicación y Promedio). También deberá tener este programa, dos botones (Enviar y Limpiar).
Cuando el usuario le da clic a Limpiar el programa deberá borrar el contenido de las texts. Cuando el
usuario presiona el botón Enviar, debe llamar a un programa que sólo tendrá que mostrar un cartel
identificatorio y el resultado de la operación que se pidió realizar.
Por ejemplo, si los números ingresados fueron 4, 5 y 6, y se seleccionó la operación Suma, deberá
mostrar:
La Suma de los números 4, 5 y 6 es 15.
Y así respectivamente para las otras operaciones. */

function enviar() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    const operacion = document.getElementById("operacion").value;

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Por favor, ingrese números válidos.");
        throw ("Por favor, ingrese números válidos.");
    }

    if (num1 === num2 || num2 === num3 || num3 === num1) {
        alert("Los valores no deben ser los mismos.");
        throw ("Los valores no deben ser los mismos.");
    }

    let resultado;
    let mensaje;

    switch (operacion) {
        case "suma":
            resultado = num1 + num2 + num3;
            mensaje = `La suma de los números ${num1}, ${num2} y ${num3} es ${resultado}.`;
            console.log("La suma de los números ", num1, num2, num3 + " es", resultado);
            break;
        case "resta":
            resultado = num1 - num2 - num3;
            mensaje = `La resta de los números ${num1}, ${num2} y ${num3} es ${resultado}.`;
            console.log("La resta de los números ", num1, num2, num3 + " es", resultado);
            break;
        case "multiplicacion":
            resultado = num1 * num2 * num3;
            mensaje = `La multiplicación de los números ${num1}, ${num2} y ${num3} es ${resultado}.`;
            console.log("La multiplicación de los números ", num1, num2, num3 + " es", resultado);
            break;
        case "promedio":
            resultado = (num1 + num2 + num3) / 3;
            mensaje = `El promedio de los números ${num1}, ${num2} y ${num3} es ${resultado}.`;
            console.log("El promedio de los números ", num1, num2, num3 + " es", resultado);
            break;
        default:
            mensaje = "Operación no válida.";
    }

    alert(mensaje);
};

function borrar() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("num3").value = "";
};