import readlineSync from 'readline-sync';
import { random, findGCD } from '../calculations.js';

const question = 'Find the greatest common divisor of given numbers.';

const generateAnswers = () => {
  const randomInt1 = random(1, 100);
  const randomInt2 = random(1, 10);
  console.log(`Question: ${randomInt1} ${randomInt2}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  const correctAnswer = findGCD(randomInt1, randomInt2);

  return { userAnswer, correctAnswer };
};

export default { question, answers: generateAnswers };
