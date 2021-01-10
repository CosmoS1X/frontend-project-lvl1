#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomInt from '../src/getRandomInt.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

let correctAnswersCount = 0;
let calculatedResult;

const calc = () => {
  const operators = ['+', '-', '*'];
  const randomizer = Math.floor(Math.random() * operators.length);
  const randomOperator = operators[randomizer];
  const randomInt1 = getRandomInt();
  const randomInt2 = getRandomInt();

  console.log(`Question: ${randomInt1} ${randomOperator} ${randomInt2}`);
  const answer = readlineSync.question('Your answer: ');

  const calculateResult = () => {
    switch (randomOperator) {
      case '+':
        return randomInt1 + randomInt2;
      case '-':
        return randomInt1 - randomInt2;
      case '*':
        return randomInt1 * randomInt2;
      default:
        return NaN;
    }
  };

  calculatedResult = calculateResult();

  if (calculatedResult === Number(answer)) {
    console.log('Correct!');
    correctAnswersCount += 1;
    if (correctAnswersCount < 3) {
      return calc();
    }
  }

  if (calculatedResult !== Number(answer)) {
    return console.log(`'${answer}' is wrong answer :(. Correct answer was '${calculatedResult}'.\nLet's try again, ${name}!`);
  }

  return console.log(`Congratulations, ${name}!`);
};

calc();
