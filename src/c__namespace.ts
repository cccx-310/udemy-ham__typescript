export {};

namespace JP {
  //'JP'名前空間（フォルダ）のPerson
  //namespace内はexportで外に露出する！！

  //日本・東京人
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  //日本・大阪人
  export namespace Osaka {
    export class Person {
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

const me = new JP.Tokyo.Person('はむ'); //名前空間の.クラス名
console.log(me.name);
