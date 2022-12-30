const players = ['X', 'O'];
let currentPlayer = '';
const board = ['', '', '', '', '', '','', '', ''];

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
const switchTurns = () => {
    if (currentPlayer === players[0]){
        currentPlayer = players[1];
    } else {
        currentPlayer = players[0];
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

    if (board[box1] !== '' &&
    (board[box1] === board[box2]) &&
    (board[box2] === board[box3]))
    {
        alert("You Win!");
    }
    }
}

const isDraw = () => {
    const draw = board.includes('');
    if (board === draw){
        alert("It's a draw!");
    }
}

//Event Listeners
enterButton[0].addEventListener('click', () => {
    const message = "Player One Name: ";
    playerOneDisplay.innerText = `${message} ${playerOne.value}`;
    playerOne.value = '';
});
enterButton[1].addEventListener('click', () => {
    const message = "Player Two Name: ";
    playerTwoDisplay.innerText = `${message} ${playerTwo.value}`;
    playerTwo.value = '';
});

for (let i = 0; i < boxDiv.length; i++){
boxDiv[i].addEventListener('click', (event) => {
    const {target} = event;
    target.textContent = currentPlayer;
    board[i] = currentPlayer;
    isWinner();
    switchTurns();
},
{once: true}

)};

restartGame.addEventListener('click', () => {
    for (let i = 0; i<boxDiv.length; i++){
        boxDiv[i].innerText = '';
        playerOneDisplay.innerText = "Player One Name: ";
        playerTwoDisplay.innerText = "Player Two Name: ";
        currentPlayer = players[0];
    }
});

    



