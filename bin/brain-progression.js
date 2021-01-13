#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greeting, checkAnswer } from '../src/index.js';
import { getRandomProgression } from '../src/calculations.js';

greeting();

console.log('What number is missing in the progression?');

const progression = () => {
  const prog = getRandomProgression();
  const rndIndex = Math.floor(Math.random() * prog.length);
  const rndElement = prog[rndIndex];
  prog[rndIndex] = '..';
  console.log(`Question: ${prog.join(' ')}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  const correctAnswer = rndElement;

  return { userAnswer, correctAnswer };
};

checkAnswer(progression);
