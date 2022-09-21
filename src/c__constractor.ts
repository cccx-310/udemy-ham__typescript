export {};

class Person {
  //constructorメソッドの引数にアクセス修飾子を付けると
  //引数の定義・型注釈・初期化の３つを行う
  constructor(public name: string, protected age: number) {}
}

const me = new Person('はむ', 43);
console.log(me);
