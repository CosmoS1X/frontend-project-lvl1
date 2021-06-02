import readlineSync from 'readline-sync';

const maxRoundNumber = 3;

export default (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  if (!game) {
    return undefined;
  }

  console.log(game.gameQuestion);

  const iter = (roundNumber = 1) => {
    const round = game.generateRound();
    console.log(`Question: ${round.roundQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (userAnswer === round.correctAnswer && roundNumber < maxRoundNumber) {
      console.log('Correct!');
      return iter(roundNumber + 1);
    }

    if (userAnswer !== round.correctAnswer) {
      return console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${round.correctAnswer}'.\nLet's try again, ${name}!`);
    }

    return console.log(`Correct!\nCongratulations, ${name}!`);
  };

  return iter();
};
