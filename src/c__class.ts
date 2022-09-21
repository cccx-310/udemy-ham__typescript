export {};

class Person {
  //コンストラクタメソッドの型注釈はココ！
  name: string;
  age: number;

  constructor(name: string, age: number) {
    //この中が初期化設定
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

let taro = new Person('Taro', 30);
console.log(taro.profile());
