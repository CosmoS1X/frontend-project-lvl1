#!/usr/bin/env node
import progression from '../games/progression.js';
import question from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const questionText = 'What number is missing in the progression?';

question(progression, questionText);
