import readlineSync from 'readline-sync';

export default (game, question) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(question);

  const iter = (counter) => {
    const result = game();
    if (result.userAnswer === result.correctAnswer && counter < 3) {
      console.log('Correct!');
      return iter(counter + 1);
    }
    if (result.userAnswer !== result.correctAnswer) {
      return console.log(`'${result.userAnswer}' is wrong answer :(. Correct answer was '${result.correctAnswer}'.\nLet's try again, ${name}!`);
    }

    return console.log(`Correct!\nCongratulations, ${name}!`);
  };

  return iter(1);
};
