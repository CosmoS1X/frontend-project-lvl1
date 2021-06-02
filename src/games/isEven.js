import getRandomNumber from '../getRandomNumber.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const randomNumber = getRandomNumber(1, 100);
  const isEven = randomNumber % 2 === 0;
  const roundQuestion = `${randomNumber}`;
  const correctAnswer = isEven ? 'yes' : 'no';

  return { roundQuestion, correctAnswer };
};

export default { gameQuestion, generateRound };
