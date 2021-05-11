import readlineSync from 'readline-sync';
import { getRandomProgression } from '../src/calculations.js';

export default () => {
  const progression = getRandomProgression();
  const randomIndex = Math.floor(Math.random() * progression.length);
  const randomElement = progression[randomIndex];
  progression[randomIndex] = '..';
  console.log(`Question: ${progression.join(' ')}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  const correctAnswer = randomElement;

  return { userAnswer, correctAnswer };
};
