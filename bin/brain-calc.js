#!/usr/bin/env node
import calculator from '../games/calculator.js';
import question from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const questionText = 'What is the result of the expression?';

question(calculator, questionText);
