import readlineSync from 'readline-sync';
import { random, getRandomOp, calculate } from '../calculations.js';

const question = 'What is the result of the expression?';

const generateAnswers = () => {
  const randomInt1 = random(1, 100);
  const randomInt2 = random(1, 100);
  const randomOp = getRandomOp();
  console.log(`Question: ${randomInt1} ${randomOp} ${randomInt2}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  const correctAnswer = calculate(randomInt1, randomInt2, randomOp);

  return { userAnswer, correctAnswer };
};

export default { question, answers: generateAnswers };
