() => {

}

(() => {

    let deck = [],
        puntosJugador = 0,
        puntosComputadora = 0;
    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

    // Referencias HTML
    const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo'),
        puntosHtmlJugador = document.querySelector('.puntosJugador'),
        puntosHtmlCompu = document.querySelector('.puntosComputadora'),
        cartasJugador = document.querySelector('#jugadorCartas'),
        cartasComputadora = document.querySelector('#computadoraCartas');

    // Crear el mazo.
    const crearDeck = () => {
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
        puntosJugador += valorCarta(carta);
        puntosHtmlJugador.innerText = puntosJugador;

        const imgCartas = document.createElement('img');
        imgCartas.src = `assets/cartas/${carta}.png`;
        cartasJugador.append(imgCartas);

        if (puntosJugador > 21 || puntosJugador === 21) {
            console.warn(puntosJugador > 21 ? 'Perdiste' : '¡21!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    });

    // Evento Detener
    btnDetener.addEventListener('click', () => {
        btnDetener.disabled = true;
        btnPedir.disabled = true;
        turnoComputadora(puntosJugador);
    });

    // Turno Computadora
    const turnoComputadora = (puntosMinimos) => {
        while (
            puntosComputadora <= 16 ||
            (puntosComputadora < puntosMinimos && puntosMinimos <= 21)
        ) {
            const carta = pedirCarta();
            puntosComputadora += valorCarta(carta);
            puntosHtmlCompu.innerText = puntosComputadora;

            const imgCartas = document.createElement('img');
            imgCartas.src = `assets/cartas/${carta}.png`;
            cartasComputadora.append(imgCartas);
        }

        setTimeout(() => {
            if (puntosComputadora === puntosMinimos) {
                alert('Empate.');
            } else if (puntosMinimos > 21) {
                alert('Banca gana.');
            } else if (puntosComputadora > 21) {
                alert('Jugador gana.');
            } else {
                alert('Banca gana.');
            }
        }, 100);
    };

    // Evento Nuevo Juego
    btnNuevo.addEventListener('click', () => {
        console.clear();
        puntosJugador = 0;
        puntosComputadora = 0;
        puntosHtmlCompu.innerText = 0;
        puntosHtmlJugador.innerText = 0;
        cartasJugador.innerHTML = '';
        cartasComputadora.innerHTML = '';
        btnDetener.disabled = false;
        btnPedir.disabled = false;
        deck = crearDeck();
    });

    // Inicializar mazo desde el comienzo
    deck = crearDeck();

})();





