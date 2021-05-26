export const random = (from, to) => {
  const min = Math.ceil(from);
  const max = Math.floor(to);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getRandomOp = () => {
  const operators = ['+', '-', '*'];
  const rndElement = Math.floor(Math.random() * operators.length);

  return operators[rndElement];
};

export const calculate = (a, b, op) => {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
};

export const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }

  return findGCD(b, a % b);
};

export const getRandomProgression = () => {
  const begin = random(1, 10);
  const increaseBy = random(1, 10);

  const progression = [begin];

  for (let i = 1; i < 10; i += 1) {
    progression.push(progression[progression.length - 1] + increaseBy);
  }

  return progression;
};

export const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};
