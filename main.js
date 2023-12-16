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
        return true;
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        return true;
    } else if (playerChoice == 'scissor' && computerChoice == 'paper') {
        return true;
    } else {
        return false;
    }
}

function game (choice) {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        
        if (playRound(choice, getComputerChoice()) == true) {
            playerScore++;
        } else {
            computerScore++;
        }

    }

    if (playerScore > computerScore) {
        console.log('You Win !');
    } else {
        console.log('You Lose !');
    }

    console.log(`SCORE \n
    Player = ${playerScore} \n
    Computer = ${computerScore}`);
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
    game('rock');
})

paper.addEventListener('click', () => {
    toggleBorder(paper);
    game('paper');
})

scissor.addEventListener('click', () => {
    toggleBorder(scissor);
    game('scissor');
})
