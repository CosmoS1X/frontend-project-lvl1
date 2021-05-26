import readlineSync from 'readline-sync';
import { getRandomProgression } from '../calculations.js';

const question = 'What number is missing in the progression?';

const generateAnswers = () => {
  const progression = getRandomProgression();
  const randomIndex = Math.floor(Math.random() * progression.length);
  const randomElement = progression[randomIndex];
  progression[randomIndex] = '..';
  console.log(`Question: ${progression.join(' ')}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  const correctAnswer = randomElement;

  return { userAnswer, correctAnswer };
};

export default { question, answers: generateAnswers };
