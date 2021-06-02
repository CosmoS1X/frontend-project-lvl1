import getRandomNumber from '../getRandomNumber.js';

const generateProgression = (begin, increaseBy) => {
  const progression = [begin];

  for (let i = 1; i < 10; i += 1) {
    progression.push(progression[progression.length - 1] + increaseBy);
  }

  return progression;
};

const gameQuestion = 'What number is missing in the progression?';

const generateRound = () => {
  const begin = getRandomNumber(1, 10);
  const increaseBy = getRandomNumber(1, 10);
  const progression = generateProgression(begin, increaseBy);
  const randomIndex = Math.floor(Math.random() * progression.length);
  const randomElement = progression[randomIndex];
  progression[randomIndex] = '..';
  const roundQuestion = `${progression.join(' ')}`;
  const correctAnswer = String(randomElement);

  return { roundQuestion, correctAnswer };
};

export default { gameQuestion, generateRound };
