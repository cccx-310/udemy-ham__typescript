export {};

class Person {
  //コンストラクタメソッドの型注釈はココ！
  name: string;
  age: number;

  //"コンストラクタ"自体には型注釈は不要
  //例外的で、void型でもない
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
