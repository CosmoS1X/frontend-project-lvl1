#!/usr/bin/env node
import isEven from '../games/isEven.js';
import question from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const questionText = 'Answer "yes" if the number is even, otherwise answer "no".';

question(isEven, questionText);
