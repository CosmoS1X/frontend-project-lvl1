#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greeting, checkAnswer } from '../src/index.js';
import { getRandomInt, gcd } from '../src/calculations.js';

greeting();

console.log('Find the greatest common divisor of given numbers.');

const GCD = () => {
  const randomInt1 = getRandomInt();
  const randomInt2 = getRandomInt();
  console.log(`Question: ${randomInt1} ${randomInt2}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  const correctAnswer = gcd(randomInt1, randomInt2);

  return { userAnswer, correctAnswer };
};

checkAnswer(GCD);
