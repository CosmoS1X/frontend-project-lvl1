import getRandomNumber from '../getRandomNumber.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateGame = () => {
  const randomInt = getRandomNumber(1, 100);
  const roundQuestion = `${randomInt}`;
  const correctAnswer = isPrime(randomInt) ? 'yes' : 'no';

  return { roundQuestion, correctAnswer };
};

export default { gameQuestion, generateGame };
