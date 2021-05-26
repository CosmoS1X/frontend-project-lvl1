import readlineSync from 'readline-sync';

export default (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  if (!game) {
    return undefined;
  }

  console.log(game.question);

  const firstRound = 1;
  const finalRound = 3;

  const iter = (counter) => {
    const result = game.answers();
    if (result.userAnswer === result.correctAnswer && counter < finalRound) {
      console.log('Correct!');
      return iter(counter + 1);
    }
    if (result.userAnswer !== result.correctAnswer) {
      return console.log(`'${result.userAnswer}' is wrong answer :(. Correct answer was '${result.correctAnswer}'.\nLet's try again, ${name}!`);
    }

    return console.log(`Correct!\nCongratulations, ${name}!`);
  };

  return iter(firstRound);
};
