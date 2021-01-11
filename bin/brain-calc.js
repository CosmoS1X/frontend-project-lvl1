#!/usr/bin/env node
import readlineSync from 'readline-sync';
import calculate from '../src/index.js';
import { getRandomInt, getRandomOp } from '../src/random.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

let correctAnswersCount = 0;
let result;

const calc = () => {
  const randomInt1 = getRandomInt();
  const randomInt2 = getRandomInt();
  const randomOp = getRandomOp();
  console.log(`Question: ${randomInt1} ${randomOp} ${randomInt2}`);
  const answer = readlineSync.question('Your answer: ');
  result = calculate(randomInt1, randomInt2, randomOp);

  if (result === Number(answer)) {
    console.log('Correct!');
    correctAnswersCount += 1;
    if (correctAnswersCount < 3) {
      return calc();
    }
  }
  if (result !== Number(answer)) {
    return console.log(`'${answer}' is wrong answer :(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
  }

  return console.log(`Congratulations, ${name}!`);
};

calc();
