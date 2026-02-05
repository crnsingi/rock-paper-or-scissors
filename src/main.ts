type Choice ='rock' | 'paper' | 'scissors';

const getUserChoice = (userInput: string): Choice | undefined => {
    const input = userInput.toLowerCase();

    if(input === 'rock' || input === 'paper' || input === 'scissors') {
        return input;
    } else {
        console.log('Error, please type: rock, paper or scissors');
        return undefined
    }
};

const getComputerChoice = (): Choice => {
    const randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber) {
        case 0:
            return 'rock';
        case 1: 
            return 'paper'
        default:
            return 'scissors'
    }
};

const determineWinner = (
    userChoice: Choice,
    computerChoice: Choice
): string => {
    if (userChoice === computerChoice) {
        return 'This game is a tie';
    }

    if(userChoice === 'rock') {
        return computerChoice === 'paper'
        ? 'Sorry, computer won'
        : 'Congratulations, you won';
    }

    if (userChoice === 'paper') {
        return computerChoice === 'scissors'
        ? 'Sorry, computer won!'
        : 'Congratulations, you won!';
    }

    return computerChoice === 'rock'
    ? 'Sorry, computer won!'
    : 'Congratulations, you won!';
}

const playGame = (): void => {
    const userChoice = getUserChoice('paper');
    if(!userChoice) return;

    const computerChoice = getComputerChoice();

    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();