let playerScore = 0;
let computerScore = 0;

let myScore = document.getElementById('myScore');
let compScore = document.getElementById('computerScore');

function getComputerChoice () {
    let temp = Math.floor(Math.random() * 3);
    let choice;

    if (temp == 0) {
        choice = 'rock';
    } else if (temp == 1) {
        choice = 'paper';
    } else if (temp == 2) {
        choice = 'scissor'
    }

    return choice;
}

function playRound (playerChoice, computerChoice) {

    if (playerChoice == 'rock' && computerChoice == 'paper') {
        playerScore++;
        myScore.textContent = `Your Score : ${playerScore}`;
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        playerScore++;
        myScore.textContent = `Your Score : ${playerScore}`;
    } else if (playerChoice == 'scissor' && computerChoice == 'paper') {
        playerScore++;
        myScore.textContent = `Your Score : ${playerScore}`;
    } else {
        computerScore++;
        compScore.textContent = `Computer Score : ${computerScore}`;
    }

    if (playerScore == 5) {
        alert('You Win !')
    } else if (computerScore == 5) {
        alert('You Lose !')
    }
}




/// Don't Touch

let rock = document.querySelector('.rock')
let paper = document.querySelector('.paper')
let scissor = document.querySelector('.scissor')

function toggleBorder(element) {
    element.classList.toggle('borderColorChange');
    setTimeout(() => {
        element.classList.toggle('borderColorChange');
    }, 100)
}

rock.addEventListener('click', () => {
    toggleBorder(rock);
    playRound('rock', getComputerChoice());
})

paper.addEventListener('click', () => {
    toggleBorder(paper);
    playRound('paper', getComputerChoice());
})

scissor.addEventListener('click', () => {
    toggleBorder(scissor);
    playRound('scissor', getComputerChoice());
})
