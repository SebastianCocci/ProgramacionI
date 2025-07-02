"use strict";

const blackJack = (() => {
    let deck = [];
    let numJugadores = 2;
    let turno = 0;
    let turnoYaPasado = false;
    let puntosJugadores = [];

    const tipos = ['C', 'D', 'H', 'S'], especiales = ['A', 'J', 'Q', 'K'];

    // Referencias HTML
    const btnPedir = document.querySelector('#btnPedir');
    const btnDetener = document.querySelector('#btnDetener');
    const btnNuevo = document.querySelector('#btnNuevo');
    const btnAgregar = document.querySelector('#btnAgregar');
    const contenedor = document.querySelector('.juego');
    const contenedorJugadores = document.querySelector('.juego');
    const puntosHtmlComputadora = document.querySelector('.computadora .puntosJugadores');
    const cartasComputadora = document.querySelector('#computadoraCartas');

    const crearDeck = () => {
        const deckTemp = [];
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) deckTemp.push(i + tipo);
        }
        for (let tipo of tipos) {
            for (let esp of especiales) deckTemp.push(esp + tipo);
        }
        return _.shuffle(deckTemp);
    };

    const inicializarJuego = () => {
        deck = crearDeck();
        puntosJugadores = [];
        turno = 0;

        const jugadores = contenedor.querySelectorAll('.jugador');
        jugadores.forEach((div, i) => { if (i > 0) div.remove(); });

        for (let i = 0; i < numJugadores; i++) puntosJugadores.push(0);
        puntosJugadores.push(0); // computadora

        btnPedir.disabled = false;
        btnDetener.disabled = false;

        document.querySelectorAll('.puntosJugadores').forEach(el => el.innerText = 0);
        document.querySelectorAll('.cartas').forEach(el => el.innerHTML = '');
    };

    const pedirCarta = () => deck.length ? deck.pop() : (() => { throw 'No hay cartas'; })();

    const valorCarta = carta => {
        const valor = carta.slice(0, -1);
        return isNaN(valor) ? (valor === 'A' ? 11 : 10) : Number(valor);
    };

    const acumuladorPuntos = (carta, turnoActual) => {
        puntosJugadores[turnoActual] += valorCarta(carta);
        if (turnoActual === puntosJugadores.length - 1) {
            puntosHtmlComputadora.innerText = puntosJugadores[turnoActual];
        } else {
            const puntosHtml = contenedorJugadores.querySelectorAll('.puntosJugadores');
            puntosHtml[turnoActual].innerText = puntosJugadores[turnoActual];
        }
        return puntosJugadores[turnoActual];
    };

    const ponerCarta = (carta, turnoActual) => {
        const img = document.createElement('img');
        img.src = `assets/cartas/${carta}.png`;
        if (turnoActual === puntosJugadores.length - 1) {
            cartasComputadora.append(img);
        } else {
            contenedorJugadores.querySelectorAll('.cartas')[turnoActual].append(img);
        }
    };

    const pasarTurno = () => {
        turno++;

        if (turno >= numJugadores - 1) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            const puntosValidos = puntosJugadores.slice(0, -1).filter(p => p <= 21);
            const mayorPuntaje = puntosValidos.length ? Math.max(...puntosValidos) : 0;
            setTimeout(() => turnoComputadora(mayorPuntaje), 100);
        } else {
            btnPedir.disabled = false;
            btnDetener.disabled = false;
        }
    };

    const ganador = () => {
        const puntosComp = puntosJugadores.at(-1);
        const puntosHumanos = puntosJugadores.slice(0, -1);

        let mejor = 0;
        let indice = -1;

        puntosHumanos.forEach((p, i) => {
            if (p <= 21 && p > mejor) {
                mejor = p;
                indice = i;
            }
        });

        setTimeout(() => {
            if (mejor === 0 && puntosComp > 21) {
                alert('Todos pierden.');
            } else if (puntosComp > 21 && mejor > 0) {
                alert(`Jugador ${indice + 1} gana.`);
            } else if (mejor === 0 && puntosComp <= 21) {
                alert('Banca gana.');
            } else if (puntosComp > mejor) {
                alert('Banca gana.');
            } else if (puntosComp < mejor) {
                alert(`Jugador ${indice + 1} gana.`);
            } else {
                alert('Empate.');
            }
        }, 100);
    };

    const turnoComputadora = (puntosMinimos) => {
        let puntos = 0;
        while (puntos <= 16 || (puntos < puntosMinimos && puntosMinimos <= 21)) {
            const carta = pedirCarta();
            ponerCarta(carta, puntosJugadores.length - 1);
            puntos = acumuladorPuntos(carta, puntosJugadores.length - 1);
        }
        ganador();
    };

    // Eventos
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        const puntos = acumuladorPuntos(carta, turno);
        ponerCarta(carta, turno);

        if (puntos > 21 || puntos === 21) {
            alert(puntos > 21 ? `Jugador ${turno + 1} eliminado` : `Jugador ${turno + 1} sacó ¡21!`);
            turnoYaPasado = true;
            pasarTurno();
        }
    });

    btnDetener.addEventListener('click', () => {
        if (!turnoYaPasado) {
            pasarTurno();
            turnoYaPasado = true;  // <-- MARCAR que ya pasó el turno para bloquear otro paso
        }
    });


    btnNuevo.addEventListener('click', () => {
        console.clear();
        inicializarJuego();
    });

    btnAgregar.addEventListener('click', () => {
        numJugadores++;
        puntosJugadores.splice(puntosJugadores.length - 1, 0, 0); // antes de la compu

        const div = document.createElement('div');
        div.classList.add('jugador');
        div.innerHTML = `<h2> Jugador ${numJugadores - 1} - <span class="puntosJugadores">0</span></h2><div class="cartas"></div>`;
        contenedor.appendChild(div);
    });

    return {
        nuevoJuego: inicializarJuego
    };
})();
