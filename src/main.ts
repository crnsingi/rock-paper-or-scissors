type Choice = 'rock' | 'paper' | 'scissors';

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

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll<HTMLButtonElement>('.choices button');

  const userChoiceText = document.getElementById('user-choice');
  const computerChoiceText = document.getElementById('computer-choice');
  const winnerText = document.getElementById('winner');

  if (!userChoiceText || !computerChoiceText || !winnerText) {
    console.error('Missing result elements in HTML');
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const choiceAttr = button.getAttribute('data-choice');

      if (
        choiceAttr !== 'rock' &&
        choiceAttr !== 'paper' &&
        choiceAttr !== 'scissors'
      ) {
        console.error('Invalid data-choice:', choiceAttr);
        return;
      }

      const userChoice: Choice = choiceAttr;
      const computerChoice = getComputerChoice();
      const result = determineWinner(userChoice, computerChoice);

      userChoiceText.textContent = `You chose: ${userChoice}`;
      computerChoiceText.textContent = `Computer chose: ${computerChoice}`;
      winnerText.textContent = `Result: ${result}`;
    });
  });
});
