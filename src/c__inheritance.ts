export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return 'はしる！';
  }
}

class L extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    super(name); //nameの初期化は親クラスで
    this.speed = speed; //新しいspeed初期化はこっちでやる
  }
  run(): string {
    const AnimalRun = super.run(); //superは親クラスを指す
    return `${AnimalRun} 時速${this.speed}Km`;
  }
}

//「はしる！ 時速80Km」
console.log(new L('sinba', 80).run());
