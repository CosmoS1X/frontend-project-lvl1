import readlineSync from 'readline-sync';
import { random, isPrime } from '../calculations.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateAnswers = () => {
  const randomInt = random(1, 100);
  console.log(`Question: ${randomInt}`);
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
  const correctAnswer = isPrime(randomInt) ? 'yes' : 'no';

  return { userAnswer, correctAnswer };
};

export default { question, answers: generateAnswers };
