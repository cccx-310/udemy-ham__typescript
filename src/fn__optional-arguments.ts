export {};

let bmi: (h: number, w: number, printable?: boolean) => number = (
  h: number,
  w: number,
  printable?: boolean
): number => {
  const bmi: number = w / (h * h);

  if (printable) {
    console.log({ bmi });
  }

  return bmi;
};

bmi(1.78, 86, true);
