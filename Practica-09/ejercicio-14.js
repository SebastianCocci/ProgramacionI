/* Elaborar un programa que ofrezca un menú de opciones, mediante el cual se pueda escoger calcular
el área de las figuras geométricas: trapecio, rombo y paralelogramo. Una vez seleccionada la opción,
que solicite tres datos numéricos (n1, n2 y n3). Luego en otro programa deberá crear una clase
general en donde se establezca el nombre de la figura seleccionada, que luego será mostrada. Y una
clase hija por cada figura distinta que pide el enunciado. En estas clases deberá calcular y mostrar las
áreas correspondientes a cada figura.
Recordar que las áreas se calculan de la siguiente manera:
Área de trapecio: (Base Mayor + Base Menor) x Altura / 2 (tomar n1 como Base Mayor, n2 como
Base Menor y n3 como Altura)
Área de rombo: Diagonal Mayor x Diagonal Menor / 2 (tomar n1 como Diagonal Mayor y n2 como
Diagonal Menor)
Área de paralelogramo: Base x Altura (tomar n1 como Base, y n2 como Altura)
El programa deberá mostrar qué figura se seleccionó, y el valor de su área correspondiente. */

window.onload = () => {

    function validarNumero(mensaje) {
        let numeroIng;
        do {
            let entrada = prompt(mensaje);
            if (entrada === null) return null;
            
            entrada = entrada.trim().replace(",", ".");
            numeroIng = parseFloat(entrada);

            if (!isNaN(numeroIng) && numeroIng > 0) {
                return numeroIng;
            } else {
                alert("Ingrese valor válido mayor que 0.");
            }
        } while (true);
    }

    function menu() {
        let seleccion;

        do {
            seleccion = parseInt(prompt(
                `Seleccione la figura geometrica que desea calcular su area. (o 0 para salir):
                    1. Trapecio
                    2. Rombo
                    3. Paralelogramo
                    0. Salir`));

            let figuraElegida;

            switch (seleccion) {
                case 1: {
                    let baseMayor = validarNumero("Ingrese la Base Mayor:");
                    if (baseMayor === null) return;
                    let baseMenor = validarNumero("Ingrese la Base Menor:");
                    if (baseMenor === null) return;
                    let altura = validarNumero("Ingrese la Altura:");
                    if (altura === null) return;
                    figuraElegida = new Trapecio(baseMayor, baseMenor, altura);
                    break;
                }
                case 2: {
                    let diagMayor = validarNumero("Ingrese la Diagonal Mayor:");
                    if (diagMayor === null) return;
                    let diagMenor = validarNumero("Ingrese la Diagonal Menor:");
                    if (diagMenor === null) return;
                    figuraElegida = new Rombo(diagMayor, diagMenor);
                    break;
                }
                case 3: {
                    let base = validarNumero("Ingrese la Base:");
                    if (base === null) return;
                    let altura = validarNumero("Ingrese la Altura:");
                    if (altura === null) return;
                    figuraElegida = new Paralelogramo(base, altura);
                    break;
                }
                case 0:
                    alert("Presione F5 para volver a iniciar");
                    return;
                default:
                    alert("Opción no válida.");
                    continue;
            }

            if (figuraElegida) {
                figuraElegida.mostrarNombre();
                const area = figuraElegida.calcularArea();
                console.log(`Área: ${area}`);
                alert(`Figura: ${figuraElegida.nombre}\nÁrea: ${area}`);
            }

        } while (seleccion !== 0);
    }

    menu();
};

class FiguraGeometrica {
    constructor(nombre) {
        this.nombre = nombre;
    }

    mostrarNombre() {
        console.log(`Figura seleccionada: ${this.nombre}`);
    }
}

class Paralelogramo extends FiguraGeometrica {
    constructor(base, altura) {
        super("Paralelogramo");
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return this.base * this.altura;
    }
}

class Trapecio extends FiguraGeometrica {
    constructor(baseMayor, baseMenor, altura) {
        super("Trapecio");
        this.baseMayor = baseMayor;
        this.baseMenor = baseMenor;
        this.altura = altura;
    }

    calcularArea() {
        return ((this.baseMayor + this.baseMenor) * this.altura) / 2;
    }
}

class Rombo extends FiguraGeometrica {
    constructor(diagonalMayor, diagonalMenor) {
        super("Rombo");
        this.diagonalMayor = diagonalMayor;
        this.diagonalMenor = diagonalMenor;
    }

    calcularArea() {
        return (this.diagonalMayor * this.diagonalMenor) / 2;
    }
}
