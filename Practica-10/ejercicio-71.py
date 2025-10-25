""" Realizar un programa con POO, que en un método genere al azar el nombre de tres cartas de la
baraja española. Esta baraja está dividida en cuatro palos: oro, copa, espada y basto. Cada palo está
formado por 10 cartas, de las cuales 7 cartas son numerales y 3 literales: 1, 2, 3, 4, 5, 6, 7, sota,
caballo y rey. Deberá simular una partida de truco en donde Ud sólo ve sus 3 cartas (que se deben
mostrar en la pantalla), tener en cuenta que no puede recibir 2 cartas del mismo palo y del mismo
valor, es decir que no se repita ninguna carta. La variación es que sólo que al recibir las cartas, se
deberá cantar (mostrar en pantalla) lo que corresponda, a saber:
Si entre sus 3 cartas recibió:
a. todas del mismo palo, deberá cantar flor.
b. dos del mismo palo y que además entre ellas sumen:
i. entre 20 y 26 deberá cantar envido.
ii. entre 27 y 31 deberá cantar real envido.
iii. más de 31 deberá cantar falta envido.
Recordar para este punto que los números tienen ese puntaje que indique el mismo; y sota, caballo y
rey valen 0 puntos. A la suma de ambos, siempre deberá sumarse 20.
c. Si tiene 2 o 3 cartas que correspondan a una seña, cantará truco. Las cartas que tienen seña son el
1 de espada, el 1 de basto, el 7 de espadas, el 7 de oro, todos los 3 y todos los 2.
Tener en cuenta que si cantó flor no podrá cantar nada relacionado al envido. Deberá cantar todo lo
que corresponda. Si no recibe nada para cantar, deberá mostrar me voy al mazo. Todo realizarlo por
medio de métodos. """

import random

class Carta:
    # Método constructor
    def __init__(self, valor, palo):
        self.valor = valor
        self.palo = palo

    def __str__(self):
        return f"{self.valor} de {self.palo}"


class Baraja:
    # Método constructor
    def __init__(self):
        self.palos = ["oro", "copa", "espada", "basto"]
        self.valores = ["1", "2", "3", "4", "5", "6", "7", "sota", "caballo", "rey"]
        self.cartas = [Carta(v, p) for p in self.palos for v in self.valores]

    def cartas_al_azar(self, n=3):
        
        return random.sample(self.cartas, n)


class PartidaTruco:
    # Método constructor
    def __init__(self):
        baraja = Baraja()
        self.cartas = baraja.cartas_al_azar()
        self.cantos = []

    def mostrar_cartas(self):
        print("Tus cartas son:")
        for carta in self.cartas:
            print(f" - {carta}")

    def _valor_envido(self, valor):
        
        if valor.isdigit():
            return int(valor)
        return 0

    def verificar_flor(self):
        
        palos = [c.palo for c in self.cartas]
        if len(set(palos)) == 1:
            self.cantos.append("Flor")
            return True
        return False

    def verificar_envido(self):

        palos = [c.palo for c in self.cartas]
        pares = []

        for i in range(len(self.cartas)):
            for j in range(i + 1, len(self.cartas)):
                if self.cartas[i].palo == self.cartas[j].palo:
                    v1 = self._valor_envido(self.cartas[i].valor)
                    v2 = self._valor_envido(self.cartas[j].valor)
                    puntaje = 20 + v1 + v2
                    pares.append(puntaje)

        if pares:
            max_puntaje = max(pares)
            if 20 <= max_puntaje <= 26:
                self.cantos.append("Envido")
            elif 27 <= max_puntaje <= 31:
                self.cantos.append("Real Envido")
            elif max_puntaje > 31:
                self.cantos.append("Falta Envido")

    def verificar_truco(self):
        
        señas = [
            ("1", "espada"), ("1", "basto"),
            ("7", "espada"), ("7", "oro"),
            ("2", "oro"), ("2", "copa"), ("2", "espada"), ("2", "basto"),
            ("3", "oro"), ("3", "copa"), ("3", "espada"), ("3", "basto")
        ]

        cantidad_señas = sum((c.valor, c.palo) in señas for c in self.cartas)
        if cantidad_señas >= 2:
            self.cantos.append("Truco")

    def jugar(self):
        
        self.mostrar_cartas()
        
        tiene_flor = self.verificar_flor()
        if not tiene_flor:
            self.verificar_envido()
        self.verificar_truco()

        print("\n=== Cantos del jugador ===")
        if self.cantos:
            print(", ".join(self.cantos))
        else:
            print("Me voy al mazo.")




if __name__ == "__main__":
    partida = PartidaTruco()
    partida.jugar()
