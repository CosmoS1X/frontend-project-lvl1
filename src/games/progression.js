import getRandomNumber from '../getRandomNumber.js';

const progressionLength = 10;

const generateProgression = (begin, increaseBy) => {
  const progression = [begin];

  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(progression[progression.length - 1] + increaseBy);
  }

  return progression;
};

const gameQuestion = 'What number is missing in the progression?';

const generateRound = () => {
  const begin = getRandomNumber(1, 10);
  const increaseBy = getRandomNumber(1, 10);
  const progression = generateProgression(begin, increaseBy);
  const randomIndex = getRandomNumber(0, progressionLength - 1);
  const randomElement = progression[randomIndex];
  progression[randomIndex] = '..';
  const roundQuestion = progression.join(' ');
  const correctAnswer = String(randomElement);

  return { roundQuestion, correctAnswer };
};

export default { gameQuestion, generateRound };
