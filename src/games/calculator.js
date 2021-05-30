import getRandomNumber from '../getRandomNumber.js';

const calculate = (a, b, op) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
};

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomElement = Math.floor(Math.random() * operators.length);

  return operators[randomElement];
};

const gameQuestion = 'What is the result of the expression?';

const generateGame = () => {
  const randomInt1 = getRandomNumber(1, 100);
  const randomInt2 = getRandomNumber(1, 100);
  const randomOp = getRandomOperator();
  const roundQuestion = `${randomInt1} ${randomOp} ${randomInt2}`;
  const correctAnswer = String(calculate(randomInt1, randomInt2, randomOp));

  return { roundQuestion, correctAnswer };
};

export default { gameQuestion, generateGame };
