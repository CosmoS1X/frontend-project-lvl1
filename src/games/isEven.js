import readlineSync from 'readline-sync';
import { random } from '../calculations.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateAnswers = () => {
  const randomInt = random(1, 100);
  const evenInt = randomInt % 2 === 0;
  console.log(`Question: ${randomInt}`);
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
  const correctAnswer = evenInt ? 'yes' : 'no';

  return { userAnswer, correctAnswer };
};

export default { question, answers: generateAnswers };
