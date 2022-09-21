export {};

// * owner - private & getterで対応
//    * 所有者
//    * 初期化時に設定できる
//    * 途中で変更できない
//    * 参照できる
//
// * number - private & setterで対応
//    * 個人番号
//    * 初期化時に設定できる
//    * 途中で変更できる
//    * 参照できない

class card {
  private _owner: string;
  private _number: number;

  constructor(owner: string, number: number) {
    (this._owner = owner), (this._number = number);
  }

  get owner() {
    //参照するためのメソッド
    return this._owner;
  }

  set number(num: number) {
    this._number = num;
  }

  debugPrint() {
    return `number: ${this._number}`;
  }
}

let h_card = new card('はむ', 1234);

// h_card.owner = 'Ham' //代入できない、ヨシ！
console.log(h_card.owner); //参照できる、ヨシ！

console.log(h_card.debugPrint()); //「1234」代入前
h_card.number = 5678; //代入できる、ヨシ！
console.log(h_card.debugPrint()); //「5678」代入後
h_card._number; //参照できない
