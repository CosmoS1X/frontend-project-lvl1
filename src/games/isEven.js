import getRandomNumber from '../getRandomNumber.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGame = () => {
  const randomInt = getRandomNumber(1, 100);
  const evenInt = randomInt % 2 === 0;
  const roundQuestion = `${randomInt}`;
  const correctAnswer = evenInt ? 'yes' : 'no';

  return { roundQuestion, correctAnswer };
};

export default { gameQuestion, generateGame };
