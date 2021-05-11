import readlineSync from 'readline-sync';
import { getRandomInt } from '../src/calculations.js';

export default () => {
  const randomInt = getRandomInt();
  const evenInt = randomInt % 2 === 0;
  console.log(`Question: ${randomInt}`);
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
  const correctAnswer = evenInt ? 'yes' : 'no';

  return { userAnswer, correctAnswer };
};
