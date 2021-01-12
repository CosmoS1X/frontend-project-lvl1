#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greeting, checkAnswer } from '../src/index.js';
import { getRandomInt } from '../src/calculations.js';

greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const even = () => {
  const randomInt = getRandomInt();
  const evenInt = randomInt % 2 === 0;
  console.log(`Question: ${randomInt}`);
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
  const correctAnswer = evenInt ? 'yes' : 'no';

  return { userAnswer, correctAnswer };
};

checkAnswer(even);
