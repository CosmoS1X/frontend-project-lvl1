#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greeting, checkAnswer } from '../src/index.js';
import { getRandomInt, getRandomOp, calculate } from '../src/calculations.js';

greeting();

console.log('What is the result of the expression?');

const calc = () => {
  const randomInt1 = getRandomInt();
  const randomInt2 = getRandomInt();
  const randomOp = getRandomOp();
  console.log(`Question: ${randomInt1} ${randomOp} ${randomInt2}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  const correctAnswer = calculate(randomInt1, randomInt2, randomOp);

  return { userAnswer, correctAnswer };
};

checkAnswer(calc);
