export {};

class Person {
  public name: string; //'public'は基本、省略する
  private age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    //親クラスの初期化を流用
    super(name, age, nationality);
  }

  profile(): string {
    //ageでコンパイルエラー 親クラスでplivateのため
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let taro = new Person('Taro', 30, 'JP');
console.log(taro.profile());
console.log(taro.name);
// console.log(taro.age);
// console.log(taro.profile());
