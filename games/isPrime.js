import readlineSync from 'readline-sync';
import { getRandomInt, isPrime } from '../src/calculations.js';

export default () => {
  const randomInt = getRandomInt();
  console.log(`Question: ${randomInt}`);
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
  const correctAnswer = isPrime(randomInt) ? 'yes' : 'no';

  return { userAnswer, correctAnswer };
};
