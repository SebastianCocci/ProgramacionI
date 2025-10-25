""" Hacer una clase llamada Palabras, que siga las siguientes condiciones:
Sus atributos son: palabra1 y palabra2. Los métodos que se implementarán son:
método constructor: recibe el valor de los atributos. Por simplicidad, omitir la validación.
generarAnagrama(): deberá genera un anagrama de la palabra ingresada.
verificarAnagrama(): deberá indicar si son anagramas una de otra.
mostrarInformacion(): devuelve una cadena que tenga toda la información del objeto.
Un anagrama es una palabra que resulta de la transposición de otra palabra. Ejemplo de anagramas
para la palabra roma son: amor, ramo o mora. No considerar que sean palabras que tengan sentido en
nuestro idioma. Realizar un programa que reciba dos palabras. Que verifique si son anagramas. En
caso que no lo sean, deberá generar un anagrama de cada una de ellas. """


import random

class Palabras:
    # Método constructor
    def __init__(self, palabra1, palabra2):
        self.palabra1 = palabra1
        self.palabra2 = palabra2

    def generar_anagrama(self, palabra):
        return ''.join(random.sample(palabra, len(palabra)))

    def verificar_anagrama(self):
        return sorted(self.palabra1) == sorted(self.palabra2)

    def mostrar_informacion(self, son_anagramas):
        info = f"Palabra 1: {self.palabra1}\nPalabra 2: {self.palabra2}\n"
        if son_anagramas:
            info += "Las palabras son anagramas."
        else:
            info += "Las palabras no son anagramas."
        return info



p1 = input("Ingrese la primera palabra: ").lower()
p2 = input("Ingrese la segunda palabra: ").lower()

palabras = Palabras(p1, p2)
son_anagramas = palabras.verificar_anagrama()

print("\n--- Información ---")
print(palabras.mostrar_informacion(son_anagramas))

if not son_anagramas:
    print("\nGenerando anagramas...")
    print("Anagrama de palabra 1:", palabras.generar_anagrama(p1))
    print("Anagrama de palabra 2:", palabras.generar_anagrama(p2))
