const state = {
    humanPlayer: 'X',
    aiPlayer: 'O',
    currentPlayer: '',
    board: ['', '', '', '', '', '','', '', ''],
    emptySpaces: [],
}

//DOM Selectors
const playerOne = document.getElementById('player-one');
const playerTwo = document.getElementById('player-two');
const playerOneDisplay = document.getElementById('player-one-display');
const playerTwoDisplay = document.getElementById('player-two-display');
const enterButton = document.getElementsByClassName('enter');
const grid = document.getElementById('grid');
const boxDiv = document.getElementsByClassName('box');
const restartGame =document.getElementById('restart-game');

//Helper functions
const emptySpacesIndexes = () => {
    return state.board.filter(i => i !== 'X' && i !== 'O');
}

const minimax = () => {
    const bestMove = minimax(state.emptySpaces, aiMove);
}

const aiMove = emptySpacesIndexes(state[board]);

const switchTurns = () => {
    if (state.currentPlayer === state.humanPlayer) {
        state.currentPlayer = state.aiPlayer;
    } else {
        state.currentPlayer = state.aiPlayer;
    }
}

const isWinner = () => {
    const winningCombos = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
        ]
    
    for (let winner of winningCombos){
         [box1, box2, box3] = winner;

    if (state.board[box1] !== '' &&
    (state.board[box1] === state.board[box2]) &&
    (state.board[box2] === state.board[box3]))
    {
        alert("You Win!");
    }
    }
}

const isDraw = () => {
    const draw = state.board.includes('');
    if (state.board === draw){
        alert("It's a draw!");
    }
}

//Event Listeners
enterButton[0].addEventListener('click', () => {
    const message = "Player One Name: ";
    playerOneDisplay.innerText = `${message} ${playerOne.value}`;
    playerOne.value = '';
});

for (let i = 0; i < boxDiv.length; i++){
boxDiv[i].addEventListener('click', (event) => {
    const {target} = event;
    target.textContent = state.currentPlayer;
    state.board[i] = state.currentPlayer;
    isWinner();
    switchTurns();
},
{once: true}

)};

restartGame.addEventListener('click', () => {
    for (let i = 0; i<boxDiv.length; i++){
        boxDiv[i].innerText = '';
        playerOneDisplay.innerText = "Player One Name: ";
        state.currentPlayer = state.humanPlayer;
    }
});