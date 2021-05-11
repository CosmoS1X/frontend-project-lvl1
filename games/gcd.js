import readlineSync from 'readline-sync';
import { getRandomInt, gcd } from '../src/calculations.js';

export default () => {
  const randomInt1 = getRandomInt();
  const randomInt2 = getRandomInt();
  console.log(`Question: ${randomInt1} ${randomInt2}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  const correctAnswer = gcd(randomInt1, randomInt2);

  return { userAnswer, correctAnswer };
};
