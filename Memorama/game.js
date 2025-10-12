// ============================================
// 🎮 JUEGO DE MEMORIA - PRÁCTICA DE JAVASCRIPT
// ============================================

// PASO 1: DECLARAR VARIABLES GLOBALES

// 1.1 Array con 8 emojis diferentes para las cartas
const emojis = ['🌌','🔮','🀞','⚖️','✨','🕯️','🕸️','🌕']

// 1.2 Variables de estado del juego
let cards = [];              
let flippedCards = [];       
let matchedPairs = 0;        
let moves = 0;               
let canFlip = true;          

// PASO 2: FUNCIÓN PRINCIPAL - INICIALIZAR EL JUEGO
// ============================================
function initGame(){
    // 2.1 Crear el contenedor principal (#game-container)
    const gameContainer = document.createElement('div'); // Usa: document.createElement('div')
    gameContainer.id = 'game-container'; // Asigna el id 'game-container'
    document.body.appendChild(gameContainer); // Agrega el contenedor al body

    // 2.2 Llamar a las funciones para crear cada parte
    createHeader(gameContainer);
    createGameBoard(gameContainer);
    createButtons(gameContainer);
    createModal();

    // 2.3 Iniciar el juego
    startNewGame();
}

// PASO 3: CREAR EL HEADER CON TÍTULO Y ESTADÍSTICAS
// ============================================
function createHeader(container){
    // 3.1 Crear div con clase 'game-header'
    const gameHeaderDiv = document.createElement('div');

    // 3.2 Crear h1 con el título '🧠 Juego de Memoria'
    const gameTitle = document.createElement('h1');
    gameTitle.textContent = '🧠 Juego de Memoria';

    // 3.3 Crear div de estadísticas con clase 'stats'
    const gameStats = document.createElement('div');
    gameStats.innerHTML = `<span id="moves">0</span> movimientos | <span id="pairs">0/8</span> pares`;

    // 3.4 Agregar todo al header y el header al container
    gameHeaderDiv.appendChild(gameTitle);
    gameHeaderDiv.appendChild(gameStats);
    container.appendChild(gameHeaderDiv);
}   

// PASO 4: CREAR EL TABLERO DE JUEGO
// ============================================
function createGameBoard(container){
    // 4.1 Crear div con clase 'game-board' e id 'game-board'
    const gameBoardDiv = document.createElement('div');
    gameBoardDiv.classList.add('game-board');
    gameBoardDiv.id = 'game-board';

    // 4.2 Agregar el tablero al container
    container.appendChild(gameBoardDiv);
}

// PASO 5: CREAR BOTONES DE CONTROL
// ============================================
function createButtons(container){
    // 5.1 Crear div con clase 'buttons'
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('buttons')

    // 5.2 Crear botón de reiniciar
    const button = document.createElement('button');
    button.textContent = '🔄 Reiniciar';
    button.addEventListener("click", startNewGame); // onclick: debe llamar a startNewGame()

    // 5.3 Agregar botón al div y el div al container
    buttonDiv.appendChild(button);
    container.appendChild(buttonDiv);
}

// PASO 6: CREAR MODAL DE VICTORIA
// ============================================
function createModal() {
    // 6.1 Crear div con clase 'modal' e id 'victory-modal'
    const modalDiv = document.createElement('div');
    modalDiv.classList.add('modal');
    modalDiv.id = 'victory-modal';

    // 6.2 Crear div con clase 'modal-content'
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const modalCongrats = document.createElement('h2'); // - h2 con '🎉 ¡Felicidades!'
    modalCongrats.textContent = '🎉 ¡Felicidades!';

    const modalEndText = document.createElement('p');   // - p con 'Has completado el juego'
    modalEndText.textContent = 'Has completado el juego';

    const modalFinalMoves = document.createElement('p');// - p con id 'final-moves' (vacío por ahora)
    modalFinalMoves.id = 'final-moves';

    const closeGameButton = document.createElement('button'); // - Dos botones: uno para cerrar y otro para jugar de nuevo
    closeGameButton.textContent = 'Cerrar';
    closeGameButton.addEventListener("click", closeModal);

    const newGameButton = document.createElement('button');
    newGameButton.textContent = 'Nuevo Juego';
    newGameButton.addEventListener("click", () => {
        closeModal();
        startNewGame();
    });

    // 6.3 Agregar modal-content al modal
    modalContent.appendChild(modalCongrats);
    modalContent.appendChild(modalEndText);
    modalContent.appendChild(modalFinalMoves);
    modalContent.appendChild(closeGameButton);
    modalContent.appendChild(newGameButton);
    modalDiv.appendChild(modalContent);

    // Agregar modal al body
    document.body.appendChild(modalDiv);
}   

// PASO 7: INICIAR NUEVO JUEGO
// ============================================
function startNewGame() {
    // 7.1 Resetear todas las variables a su estado inicial
    moves = 0;
    matchedPairs = 0;
    flippedCards = [];
    canFlip = true;

    // 7.2 Actualizar las estadísticas en pantalla
    updateStats();

    // 7.3 Crear el array de cartas
    cards = createCards();

    // 7.4 Mezclar las cartas
    shuffleCards(cards);

    // 7.5 Renderizar el tablero
    renderBoard();
}

// PASO 8: CREAR ARRAY DE CARTAS
// ============================================
function createCards(){
    // 8.1 Duplicar el array de emojis para crear pares
    const emojiCopy = [...emojis, ...emojis];

    // 8.2 Crear un array de objetos carta
    return emojiCopy.map((emoji, index) => ({
        id: index,
        emoji: emoji,
        flipped: false,
        matched: false
    }));
}

// PASO 9: MEZCLAR CARTAS (Algoritmo de Fisher-Yates)
// ============================================
function shuffleCards(array) {
    // 9.1 Implementar el algoritmo de Fisher-Yates
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// PASO 10: RENDERIZAR EL TABLERO
// ============================================
function renderBoard() {
    // 10.1 Obtener el elemento del tablero
    const board = document.getElementById('game-board');

    // 10.2 Limpiar el tablero (innerHTML = '')
    board.innerHTML = '';

    // 10.3 Para cada carta en el array cards:
    cards.forEach(card => {
        const cardDiv = document.createElement('div'); // - Crear div con clase 'card'
        cardDiv.classList.add('card');
        cardDiv.dataset.id = card.id; // - Agregar atributo data-id con el id de la carta

    //　(11.4) - Agregar clase 'flipped' al elemento HTML
        if (card.flipped) cardDiv.classList.add('flipped');
        if (card.matched) cardDiv.classList.add('matched');

        cardDiv.textContent = card.flipped || card.matched ? card.emoji : '❓'; // - Crear el contenido de la carta (emoji oculto)
        cardDiv.addEventListener('click', () => flipCard(card.id)); // - Agregar event listener de click que llame a flipCard(card.id)
        board.appendChild(cardDiv); // - Agregar la carta al tablero
    });


    
}

// PASO 11: VOLTEAR UNA CARTA
// ============================================
function flipCard(cardId) {
    // 11.1 VALIDACIONES (return si alguna es verdadera)
    if (!canFlip) return;   // - Si canFlip es false
    const card = cards.find(c => c.id === cardId);
    if (card.flipped || card.matched) return;

    card.flipped = true; // - Cambiar card.flipped a true
    flippedCards.push(card); // - Agregar la carta al array flippedCards
    console.log(card);
    // card.classList.add('flipped')
    renderBoard(); // - Agregar clase 'flipped' al elemento HTML

    if (flippedCards.length === 2) { // - Si ya hay 2 cartas volteadas
        canFlip = false;
        moves++;
        updateStats();
        setTimeout(checkMatch, 800);
    }
}

// PASO 12: VERIFICAR SI HAY COINCIDENCIA
// ============================================
function checkMatch() {
    canFlip = false;
    const [card1, card2] = flippedCards;

    // 12.1 Si los emojis coinciden:
    if (card1.emoji === card2.emoji) {
        setTimeout(() => {}, 500); // Esperar 500ms y luego:
        card1.matched = card2.matched = true; // - Marcar ambas cartas como matched
        matchedPairs++;    // - Incrementar matchedPairs
        flippedCards = []; // - Limpiar flippedCards
        updateStats();     // - Actualizar stats
        canFlip = true;
        if (matchedPairs === emojis.length) showVictory(); // - Si matchedPairs === emojis.length, mostrar victoria
    // 12.2 Si NO coinciden:
    } else {
        setTimeout(() => {}, 1000); // Esperar 1000ms y luego:
        card1.flipped = card2.flipped = false; // - Cambiar flipped a false en ambas cartas
        flippedCards = []; // - Limpiar flippedCards 
        canFlip = true; // - Permitir voltear de nuevo
    }
    renderBoard();
}

// PASO 13: ACTUALIZAR ESTADÍSTICAS
// ============================================
function updateStats() {
    // 13.1 Actualizar el texto de #moves con el valor de moves
    document.getElementById('moves').textContent = moves;

    // 13.2 Actualizar el texto de #pairs con
    document.getElementById('pairs').textContent = `${matchedPairs}/${emojis.length}`;
}

// PASO 14: MOSTRAR MODAL DE VICTORIA
// ============================================
function showVictory() {
    // 14.1 Obtener el modal
    const modal = document.getElementById('victory-modal');

    // 14.2 Actualizar el texto de #final-moves
    const finalMoves = document.getElementById('final-moves');
    finalMoves.textContent = `Lo completaste en ${moves} movimientos.`; // Debe mostrar: 'Lo completaste en X movimientos'

    // 14.3 Agregar clase 'show' al modal
    modal.classList.add('show');
}

// PASO 15: CERRAR MODAL
// ============================================
function closeModal() {
    // 15.1 Obtener el modal y remover la clase 'show'
    const modal = document.getElementById('victory-modal');
    modal.classList.remove('show');
}

// PASO 16: INICIAR EL JUEGO AL CARGAR LA PÁGINA
// ============================================

// 16.1 Verificar si el DOM está listo
if (document.readyState === 'loading') { // Si document.readyState === 'loading', usar addEventListener
    document.addEventListener('DOMContentLoaded', initGame);
} else { // Si no, llamar directamente a initGame()
    initGame(); 
}
