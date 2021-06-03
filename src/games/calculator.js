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
      throw new Error('unexpected error in calculate function');
  }
};

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, operators.length - 1);
  return operators[randomIndex];
};

const gameQuestion = 'What is the result of the expression?';

const generateRound = () => {
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);
  const randomOperator = getRandomOperator();
  const roundQuestion = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const correctAnswer = String(calculate(randomNumber1, randomNumber2, randomOperator));

  return { roundQuestion, correctAnswer };
};

export default { gameQuestion, generateRound };
