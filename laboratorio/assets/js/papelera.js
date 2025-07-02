
const blackJack = (() => {
    "use strict"
    let deck = [];
    let numJugadores = 2;
    let turno = 0;
    let turnoYaPasado = false;


    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];

    // Referencias HTML
    const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo'),
        btnAgregar = document.querySelector('#btnAgregar'),
        contenedorJugadores = document.querySelector('.juego'),
        puntosHtmlComputadora = document.querySelector('.computadora .puntosJugadores'),
        cartasComputadora = document.querySelector('#computadoraCartas');


    // Inicializar mazo desde el comienzo
    const inicializarJuego = () => {
        deck = crearDeck();
        puntosJugadores = [];
        numJugadores = 2;
        turno = 0;

        // Eliminar jugadores agregados
        const jugadores = contenedorJugadores.querySelectorAll('.jugador');
        jugadores.forEach((div, index) => {
            if (index > 0) div.remove();
        });

        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }
        // Agregás uno más para la computadora
        puntosJugadores.push(0);

        btnPedir.disabled = false;
        btnDetener.disabled = false;

        const puntosHtml = document.querySelectorAll('.puntosJugadores');
        puntosHtml.forEach(elem => elem.innerText = 0);

        const cartasJugadores = document.querySelectorAll('.cartas');
        cartasJugadores.forEach(elem => elem.innerHTML = '');
    };

    // Agregar jugador

    btnAgregar.addEventListener('click', () => {

        agregarJugador();

    });

    const agregarJugador = () => {
        console.log(`Total jugadores: ${numJugadores}`);
        numJugadores++;
        console.log(puntosJugadores);
        puntosJugadores.push(0);
        // Crear nuevo div.jugador
        const divJugador = document.createElement('div');
        divJugador.classList.add('jugador');

        // Agregar contenido HTML
        divJugador.innerHTML = `<h2> Jugador ${numJugadores - 1} - <span class="puntosJugadores">0</span></h2>
        <div class="cartas"></div>`;

        contenedorJugadores.appendChild(divJugador);
    };

    // Crear el mazo.
    const crearDeck = () => {
        deck = [];
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo);
            }
        }
        for (let tipo of tipos) {
            for (let especial of especiales)
                deck.push(especial + tipo)
        }

        return _.shuffle(deck);
    }

    const pedirCarta = () => {
        if (deck.length === 0) {
            throw 'No quedan cartas en el mazo.';
        }
        return deck.pop();
    }

    const valorCarta = (carta) => {
        const valor = carta.slice(0, -1);
        return isNaN(valor) ? (valor === 'A' ? 11 : 10) : Number(valor);
    }

    // Función Pedir Carta
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        const puntosJugador = acumuladorPuntos(carta, turno);

        ponerCarta(carta, turno);

        if (puntosJugador > 21 || puntosJugador === 21) {
            console.warn(puntosJugador > 21 ? `Jugador ${turno + 1} eliminado` : `Jugador ${turno + 1} saco ¡21!`);
            alert(puntosJugador > 21 ? `Jugador ${turno + 1} eliminado` : `Jugador ${turno + 1} saco ¡21!`);
            turnoYaPasado = true;
            pasarTurno();
        }
    });


    // Pasar los turnos para cada jugador
    const pasarTurno = () => {
        turnoYaPasado = false;
        turno++;

        if (turno >= numJugadores - 1) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;

            const puntosValidos = puntosJugadores.slice(0, -1).filter(p => p <= 21);
            const mayorPuntaje = puntosValidos.length > 0 ? Math.max(...puntosValidos) : 0;

            setTimeout(() => {
                turnoComputadora(mayorPuntaje);
            }, 100);
        } else {
            btnPedir.disabled = false;
            btnDetener.disabled = false;
        }
    };

    // Evento Detener
    btnDetener.addEventListener('click', () => {
        if (!turnoYaPasado) {
            pasarTurno();
        }
    });


    // Acumulador de puntos en cada turno
    const acumuladorPuntos = (carta, turno) => {
        if (turno === puntosJugadores.length - 1) {
            // Turno de la computadora
            puntosJugadores[turno] += valorCarta(carta);
            puntosHtmlComputadora.innerText = puntosJugadores[turno];
        } else {
            const puntosHtml = contenedorJugadores.querySelectorAll('.puntosJugadores');
            puntosJugadores[turno] += valorCarta(carta);
            puntosHtml[turno].innerText = puntosJugadores[turno];
        }

        return puntosJugadores[turno];
    };



    // Poner carta en el tuno que se esta jugando
    const ponerCarta = (carta, turno) => {
        const img = document.createElement('img');
        img.src = `assets/cartas/${carta}.png`;

        if (turno === puntosJugadores.length - 1) {
            cartasComputadora.append(img);
        } else {
            const cartasJugadores = contenedorJugadores.querySelectorAll('.cartas');
            cartasJugadores[turno].append(img);
        }
    };



    // Determinar el ganador
    const ganador = () => {
        const puntosComputadora = puntosJugadores[puntosJugadores.length - 1];
        const puntosHumanos = puntosJugadores.slice(0, -1);

        let mejorHumano = 0;
        let indiceMejorHumano = -1;

        puntosHumanos.forEach((puntos, index) => {
            if (puntos <= 21 && puntos > mejorHumano) {
                mejorHumano = puntos;
                indiceMejorHumano = index;
            }
        });

        setTimeout(() => {
            if (mejorHumano === 0 && puntosComputadora > 21) {
                alert('Todos pierden.');
            } else if (puntosComputadora > 21 && mejorHumano > 0) {
                alert(`Jugador ${indiceMejorHumano + 1} gana.`);
            } else if (mejorHumano === 0 && puntosComputadora <= 21) {
                alert('Banca gana.');
            } else if (puntosComputadora > mejorHumano) {
                alert('Banca gana.');
            } else if (puntosComputadora < mejorHumano) {
                alert(`Jugador ${indiceMejorHumano + 1} gana.`);
            } else {
                alert('Empate.');
            }
        }, 100);
    };




    // Turno Computadora
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;
        while (
            puntosComputadora <= 16 ||
            (puntosComputadora < puntosMinimos && puntosMinimos <= 21)
        ) {
            const carta = pedirCarta();
            ponerCarta(carta, puntosJugadores.length - 1);
            puntosComputadora = acumuladorPuntos(carta, puntosJugadores.length - 1);
        }

        ganador();
    };

    // Evento Nuevo Juego
    btnNuevo.addEventListener('click', () => {
        console.clear();
        inicializarJuego();
    });

    return {
        nuevoJuego: inicializarJuego
    };

})();