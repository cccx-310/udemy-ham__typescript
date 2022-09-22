export {};

namespace JP {
  //'JP'名前空間（フォルダ）のPerson
  namespace Tokyo {
    export class Person {
      //exportで外に露出する
      constructor(public name: string) {}
    }
  }
}

namespace EN {
  //'EN'名前空間（フォルダ）のPerson
  export class Person {
    constructor(public FN: string, public MN: string, public LN: string) {}
  }
}

const me = new JP.Person('はむ'); //名前空間の.クラス名
console.log(me.name);
