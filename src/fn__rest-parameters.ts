export {};

const reducer = (accmulator: number, currentValue: number) => {
  console.log({ accmulator, currentValue });
  return accmulator + currentValue;
};
[1, 2, 3, 4].reduce(reducer);

const sum: (...values: number[]) => number = (...values: number[]) => {
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));
