#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomInt from '../src/getRandomInt.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correctAnswersCount = 0;

const isEven = () => {
  const randomInt = getRandomInt();
  const evenInt = randomInt % 2 === 0;
  console.log(`Question: ${randomInt}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = (evenInt && answer.toLowerCase() === 'yes')
  || (!evenInt && answer.toLowerCase() === 'no');

  if (correctAnswer) {
    console.log('Correct!');
    correctAnswersCount += 1;
    if (correctAnswersCount < 3) {
      return isEven();
    }
  }

  if (!correctAnswer && evenInt) {
    return console.log(`'${answer}' is wrong answer :(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
  }

  if (!correctAnswer && !evenInt) {
    return console.log(`'${answer}' is wrong answer :(. Correct answer was 'no'.\nLet's try again, ${name}!`);
  }

  return console.log(`Congratulations, ${name}!`);
};

isEven();
