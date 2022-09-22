export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person('taro', 30);
console.log(taro);

type PersonType = typeof Person;
type P = ConstructorParameters<PersonType>;

const profile: P = ['Ham', 43];
const ham = new Person(...profile);
console.log(ham);

type ConstructorParameters<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: infer P) => any ? P : never;
