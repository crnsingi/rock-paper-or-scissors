type Choice ='rock' | 'paper' | 'scissors';

const getUserChoice = (userInput: string): Choice | undefined => {
    const input = userInput.toLowerCase();

    if(input === 'rock' || input === 'paper' || input === 'scissors') {
        return input;
    }
}