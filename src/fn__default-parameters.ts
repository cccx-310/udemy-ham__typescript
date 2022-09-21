export {};

const next = (salary: number, rate: number = 1.1) => {
  return salary * rate;
};

console.log(next(1000));
