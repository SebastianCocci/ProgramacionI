237.
/*Crear una clase llamada Conversor que reciba los parámetros necesarios. En un programa ingresar
un valor en cualquiera de las siguientes unidades para luego, que la clase devuelva su equivalencia en
todas las otras medidas.
t
tonelada  1000 kg
qm
quintal   100 kg
mag
miriagramo 10 kg 
kg   1      
hg   0,1 kg
dag  0,01 kg
g    0,001 kg
dg   0,0001 kg
cg   0,00001 kg
mg   0,000001 kg*/

window.onload = () => {
    try {
        const entrada = prompt("Ingrese el valor numérico a convertir:");
        
        if (entrada === null || entrada.trim() === "") {
            console.error("No ingresó un valor numérico.");
        } else {
            const valor = parseFloat(entrada);

            if (isNaN(valor)) {
                console.error("El valor ingresado no es un número válido.");
            } else {
                const unidad = prompt("Ingrese la unidad de medida (ej:t, qm, mag, kg, hg, dag, g, dg, cg, mg):");

                if (!unidad) {
                    console.error("No ingresó ninguna unidad.");
                } else {
                    const conv = new Conversor(valor, unidad);

                    console.log(conv.toString());
                }
            }
        }
    } catch (e) {
        console.error(e.message);
    }
};

class Conversor {
    constructor(valor, unidad) {
        this.valor = valor;
        this.unidad = unidad.toLowerCase();
        this.factores = {
            t: 1000,          // tonelada → kg
            qm: 100,          // quintal → kg
            mag: 10,          // miriagramo → kg
            kg: 1,            // kilogramo base
            hg: 0.1,          // hectogramo → kg
            dag: 0.01,        // decagramo → kg
            g: 0.001,         // gramo → kg
            dg: 0.0001,       // decigramo → kg
            cg: 0.00001,      // centigramo → kg
            mg: 0.000001      // miligramo → kg
        };
    }

    convertir() {
        if (!(this.unidad in this.factores)) {
            throw new Error("Unidad no reconocida.");
        }

        const enKg = this.valor * this.factores[this.unidad];

        let resultados = {};
        for (let i in this.factores) {
            resultados[i] = enKg / this.factores[i];
        }
        return resultados;
    }

    toString() {
        const resultados = this.convertir();
        let salida = `Conversión de ${this.valor} ${this.unidad}:\n`;
        for (let [u, v] of Object.entries(resultados)) {
            salida += `${v} ${u}\n`;
        }
        return salida;
    }
};
