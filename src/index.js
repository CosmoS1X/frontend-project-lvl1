import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');

export const greeting = () => {
  console.log(`Hello, ${name}!`);
};

export const checkAnswer = (game) => {
  const iter = (counter) => {
    const result = game();

    if (result.userAnswer === result.correctAnswer && counter < 3) {
      console.log('Correct!');
      return iter(counter + 1, game);
    }
    if (result.userAnswer !== result.correctAnswer) {
      return console.log(`'${result.userAnswer}' is wrong answer :(. Correct answer was '${result.correctAnswer}'.\nLet's try again, ${name}!`);
    }

    return console.log(`Correct!\nCongratulations, ${name}!`);
  };

  return iter(1);
};
