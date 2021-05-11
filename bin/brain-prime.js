#!/usr/bin/env node
import isPrime from '../games/isPrime.js';
import question from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const questionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

question(isPrime, questionText);
