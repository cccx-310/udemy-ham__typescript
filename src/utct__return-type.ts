export {};

function add(a: number, b: number) {
  return a + b;
}
console.log(add(1, 2));

type Re = ReturnType<typeof add>;
3;
//「type Re = number」
