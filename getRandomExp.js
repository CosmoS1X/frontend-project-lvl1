import getRandomInt from './src/getRandomInt.js';

const getRandomExp = () => {
  const operators = ['+', '-', '*'];
  const randomizer = Math.floor(Math.random() * operators.length);
  const randomOperator = operators[randomizer];
  console.log('Operator', randomOperator);

  const randomInt1 = getRandomInt(1, 100);
  const randomInt2 = getRandomInt(1, 100);

  console.log('Number 1', randomInt1);
  console.log('Number 2', randomInt2);

  switch (randomOperator) {
    case '+':
      return randomInt1 + randomInt2;
    case '-':
      return randomInt1 - randomInt2;
    case '*':
      return randomInt1 * randomInt2;
    default:
      return NaN;
  }
};

console.log(getRandomExp());
