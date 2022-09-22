export {};

/* 
const echo = (age: number): number =>{
  return arg;
};

const echo = (age: string): string =>{
  return arg;
};
*/

const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(100));
console.log(echo<string>('hello'));
console.log(echo<boolean>(true));

//ジェネリクスを用いたクラス
class M<T> {
  constructor(public val: T) {}
  echo(): T {
    return this.val;
  }
}

console.log(new M<number>(123).echo());
console.log(new M<string>('Hello,generics!').echo());
console.log(new M<boolean>(true).echo());
