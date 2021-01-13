const randomInt = (from, to) => {
  const min = Math.ceil(from);
  const max = Math.floor(to);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getRandomInt = () => randomInt(1, 100);

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
