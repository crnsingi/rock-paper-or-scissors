type Choice = 'rock' | 'paper' | 'scissors';

const getUserChoice = (userInput: string): Choice | undefined => {
  const input = userInput.toLowerCase();

  if (input === 'rock' || input === 'paper' || input === 'scissors') {
    return input;
  } else {
    console.log('Error, please type: rock, paper or scissors');
    return undefined;
  }
};

const getComputerChoice = (): Choice => {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    default:
      return 'scissors';
  }
};

const determineWinner = (
  userChoice: Choice,
  computerChoice: Choice
): string => {
  if (userChoice === computerChoice) {
    return 'This game is a tie!';
  }

  if (userChoice === 'rock') {
    return computerChoice === 'paper'
      ? 'Sorry, computer won!'
      : 'Congratulations, you won!';
  }

  if (userChoice === 'paper') {
    return computerChoice === 'scissors'
      ? 'Sorry, computer won!'
      : 'Congratulations, you won!';
  }

  return computerChoice === 'rock'
    ? 'Sorry, computer won!'
    : 'Congratulations, you won!';
};

// ✅ WAIT FOR DOM
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll<HTMLButtonElement>(
    '.choices button'
  );

  const userChoiceText = document.getElementById(
    'user-choice'
  ) as HTMLParagraphElement;

  const computerChoiceText = document.getElementById(
    'computer-choice'
  ) as HTMLParagraphElement;

  const winnerText = document.getElementById(
    'winner'
  ) as HTMLParagraphElement;

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const choice = button.dataset.choice as Choice;

      const userChoice = getUserChoice(choice);
      if (!userChoice) return;

      const computerChoice = getComputerChoice();
      const result = determineWinner(userChoice, computerChoice);

      userChoiceText.textContent = `You chose: ${userChoice}`;
      computerChoiceText.textContent = `Computer chose: ${computerChoice}`;
      winnerText.textContent = `Result: ${result}`;
    });
  });
});
