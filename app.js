//State
const state = {
    players: [],
    board: [
            null, null, null,
            null, null, null,
            null, null, null
           ],
    score: 0,
}

//DOM Selectors
const playerOne = document.getElementById('player-one');
const playerTwo = document.getElementById('player-two');
const playerOneDisplay = document.getElementById('player-one-display');
const playerTwoDisplay = document.getElementById('player-two-display');
const enterButton = document.getElementsByClassName('enter');


//Helper functions
//const makeBox = () => {
    //const boxDiv = document.createElement('div');
    //boxDiv.style.backgroundColor = blueviolet;
    //boxDiv.style.width = 100px;
    //boxDiv.style.height = 100px;
    //body.document.appendChild('boxDiv');
//}


//Event Listeners
enterButton[0].addEventListener('click', () => {
    const message = "Player One Name: ";
    playerOneDisplay.innerText = `${message} ${playerOne.value}`;
    playerOne.value = '';
})
enterButton[1].addEventListener('click', () => {
    const message = "Player Two Name: ";
    playerTwoDisplay.innerText = `${message} ${playerTwo.value}`;
    playerTwo.value = '';
})