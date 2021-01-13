const random = (from, to) => {
  const min = Math.ceil(from);
  const max = Math.floor(to);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getRandomInt = () => random(1, 100);
export const getRandomDigit = () => random(1, 10);

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

export const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

export const getRandomProgression = () => {
  const begin = getRandomDigit();
  const increaseBy = getRandomDigit();

  const progression = [begin];

  for (let i = 1; i < 10; i += 1) {
    progression.push(progression[progression.length - 1] + increaseBy);
  }

  return progression;
};
