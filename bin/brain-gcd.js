#!/usr/bin/env node
import gcd from '../games/gcd.js';
import question from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const questionText = 'Find the greatest common divisor of given numbers.';

question(gcd, questionText);
