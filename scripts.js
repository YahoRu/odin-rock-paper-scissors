const ROCK = {
    id: 1,
    elementName: 'rock'
};
const PAPER = {
    id: 2,
    elementName: 'paper'
};
const SCISSORS = {
    id: 3,
    elementName: 'scissors'
}

let playerSelection = ROCK;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * (3)) + 1;
    switch (randomNumber) {
        case 1: return ROCK;
        case 2: return PAPER;
        case 3: return SCISSORS;
    } 
}
const draw = 'Draw!';
const youWin = 'You win!';
const youLose = 'You lose!';

function rockPaperScissorsRound(playerSelection, computerSelection){ 
    let playerSelectionToLowerCase = playerSelection.toLowerCase();
 if(playerSelectionToLowerCase === ROCK.elementName && computerSelection === ROCK) return draw;
 else if(playerSelectionToLowerCase === ROCK.elementName && computerSelection === PAPER) return youLose;
 else if(playerSelectionToLowerCase === ROCK.elementName && computerSelection === SCISSORS) return youWin;
 else if(playerSelectionToLowerCase === PAPER.elementName && computerSelection === ROCK) return youWin;
 else if(playerSelectionToLowerCase === PAPER.elementName && computerSelection === PAPER) return draw;
 else if(playerSelectionToLowerCase === PAPER.elementName && computerSelection === SCISSORS) return youLose;
 else if(playerSelectionToLowerCase === SCISSORS.elementName && computerSelection === ROCK) return youLose;
 else if(playerSelectionToLowerCase === SCISSORS.elementName && computerSelection === PAPER) return youWin;
 else if(playerSelectionToLowerCase === SCISSORS.elementName && computerSelection === SCISSORS) return draw;
}



async function game() {
    let playersScore = 0;
    let computersScore = 0;

    while(playersScore !== 3 && computersScore !== 3){
        console.log('One!');
        await new Promise(r => setTimeout(r, 1000));
        console.log('Two!');
        await new Promise(r => setTimeout(r, 1000));
        console.log('Three!');
        await new Promise(r => setTimeout(r, 1000));
        var yourElement = prompt("Think fast!");
        let computerSelection = getComputerChoice();
        let result = rockPaperScissorsRound(yourElement, computerSelection);

        if(result === youWin) playersScore += 1;
        else if(result === youLose) computersScore += 1;

        console.log(`${result} Your ${yourElement} vs Computer\`s ${computerSelection.elementName}.`);
        await new Promise(r => setTimeout(r, 500));
        console.log(`Score: ${playersScore} - ${computersScore}.`)

        await new Promise(r => setTimeout(r, 3000));
    }

    if(playersScore > computersScore) console.log(`You win Best Of 3! Score: ${playersScore} - ${computersScore}.`)
    else console.log(`You lose Best Of 3! Score: ${playersScore} - ${computersScore}.`)
}

game();

