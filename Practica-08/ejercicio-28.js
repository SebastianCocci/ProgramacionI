/*Hacer una clase llamada Tanque, que siga las siguientes condiciones:
Sus atributos son: radio y altura dados en cm. No queremos que se acceda directamente a ellos.
Los métodos que se implementarán son:
método constructor: recibe todos los valores de los atributos. Por simplicidad, omitir la validación.
calcularVolumen(): el volumen de un cilindro es π * radio2

* altura y 1 litro equivale a 1 decímetro.
Debe retornar un número. Este método solo podrá ser invocado por instancias de Tanque, no debe ser
accesible desde el exterior.
evaluarTamanio(): Retorna una cadena que indica "grande", "mediano", o "pequeño". Se considera
que un tanque es grande si tiene más de 5000 litros, mediano si tiene entre 1000 y 5000 litros, y
pequeño si tiene menos de 1000 litros.
toString(): devuelve una cadena que tenga toda la información del objeto.
Probar el programa.*/

window.onload = () => {
    try {
        const radio = prompt("Ingrese el radio del tanque en cm:");
        const altura = prompt("Ingrese la altura del tanque en cm:");

        if (!radio || !altura) {
            console.error("Debe ingresar valores válidos.");
            return;
        }

        const r = parseFloat(radio);
        const h = parseFloat(altura);

        if (isNaN(r) || isNaN(h)) {
            console.error("Los valores deben ser numéricos.");
            return;
        }

        const tanque = new Tanque(r, h);

        console.log(tanque.toString());
        
    } catch (e) {
        console.error(e.message);
    }
};


class Tanque {
    #radio;
    #altura;

    constructor(radio, altura) {
        this.#radio = radio;
        this.#altura = altura;
    }

    #calcularVolumen() {
        const volumenCm3 = Math.PI * Math.pow(this.#radio, 2) * this.#altura;
        return volumenCm3 / 1000;
    }

    evaluarTamanio() {
        const volumenLitros = this.#calcularVolumen();
        if (volumenLitros > 5000) {
            return "grande";
        } else if (volumenLitros >= 1000) {
            return "mediano";
        } else {
            return "pequeño";
        }
    }

    toString() {
        const volumenLitros = this.#calcularVolumen().toFixed(2);
        return `Tanque:
  Radio: ${this.#radio} cm
  Altura: ${this.#altura} cm
  Volumen: ${volumenLitros} litros
  Tamaño: ${this.evaluarTamanio()}`;
    }
};