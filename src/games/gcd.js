import getRandomNumber from '../getRandomNumber.js';

const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }

  return findGCD(b, a % b);
};

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 10);
  const roundQuestion = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = String(findGCD(randomNumber1, randomNumber2));

  return { roundQuestion, correctAnswer };
};

export default { gameQuestion, generateRound };
