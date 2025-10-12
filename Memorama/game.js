// 1.1 Array con 8 emojis diferentes para las cartas
const emojis = ['🌌','🔮','🀞','⚖️','✨','🕯️','🕸️','🌕']
// 1.2 Variables de estado del juego
let cards = [];              
let flippedCards = [];       
let matchedPairs = 0;        
let moves = 0;               
let canFlip = true;          



function initGame(){
    const bodyelem = document.body;
    const gameContainer = document.createElement('div')
    gameContainer.id = 'game-container'

    bodyelem.appendChild(gameContainer)
    createHeader(gameContainer);
    createGameBoard(gameContainer);
    createButtons(gameContainer);
    createModal();

    startNewGame();
}

function createHeader(container){
    const gameHeaderDiv = document.createElement('div')
    const gameHeader = document.createElement('h1')
}   