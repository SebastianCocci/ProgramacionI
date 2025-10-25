""" Pedir un número (entero positivo) y una lista de sistemas de numeración para que el usuario elija
(Decimal, Binario, Octal y Hexadecimal). Luego una clase llamada Numeracion. Dicha clase debe
recibir por parámetros el número ingresado y la base que seleccionó el usuario. Implementar distintos
métodos para que devuelva el equivalente de ese número en los otros sistemas de numeración. Luego
tendrá que implementar un método que muestre todas esas conversiones que hizo. """

class Numeracion:
    # Método constructor
    def __init__(self, numero, base):
        self.numero = numero
        self.base = base
        self.decimal = self.convertir_a_decimal()
        self.binario = self.a_binario()
        self.octal = self.a_octal()
        self.hexadecimal = self.a_hexadecimal()

    def convertir_a_decimal(self):
        return int(self.numero, self.base)

    def a_binario(self):
        return bin(self.decimal)[2:]

    def a_octal(self):
        return oct(self.decimal)[2:]

    def a_hexadecimal(self):
        return hex(self.decimal)[2:].upper()

    def mostrar_conversiones(self):
        print(f"\n=== Conversión del número {self.numero} (base {self.base}) ===")
        print(f"Decimal     ➜ {self.decimal}")
        print(f"Binario     ➜ {self.binario}")
        print(f"Octal       ➜ {self.octal}")
        print(f"Hexadecimal ➜ {self.hexadecimal}")


def es_valido(numero, base):
    try:
        int(numero, base)
        return True
    except ValueError:
        return False


# Programa principal
print("Seleccione el sistema de numeración del número ingresado:")
print("1. Decimal\n2. Binario\n3. Octal\n4. Hexadecimal")

opcion = int(input("Opción: "))
bases = {1: 10, 2: 2, 3: 8, 4: 16}
base_seleccionada = bases.get(opcion)

if base_seleccionada:
    numero = input("Ingrese el número: ")

    if es_valido(numero, base_seleccionada):
        obj = Numeracion(numero, base_seleccionada)
        obj.mostrar_conversiones()
    else:
        print(f"Error: '{numero}' no es válido para la base {base_seleccionada}.")
else:
    print("Opción inválida.")
