#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greeting, checkAnswer } from '../src/index.js';
import { getRandomInt, isPrime } from '../src/calculations.js';

greeting();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const prime = () => {
  const randomInt = getRandomInt();
  console.log(`Question: ${randomInt}`);
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
  const correctAnswer = isPrime(randomInt) ? 'yes' : 'no';

  return { userAnswer, correctAnswer };
};

checkAnswer(prime);
