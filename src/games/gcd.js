import getRandomNumber from '../getRandomNumber.js';

const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }

  return findGCD(b, a % b);
};

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const generateGame = () => {
  const randomInt1 = getRandomNumber(1, 100);
  const randomInt2 = getRandomNumber(1, 10);
  const roundQuestion = `${randomInt1} ${randomInt2}`;
  const correctAnswer = String(findGCD(randomInt1, randomInt2));

  return { roundQuestion, correctAnswer };
};

export default { gameQuestion, generateGame };
