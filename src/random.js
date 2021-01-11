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
