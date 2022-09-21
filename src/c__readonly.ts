export {};
/*
class card {
  readonly owner: string;

  constructor(owner: string) {
    this.owner = owner;
  }
}
*/

class card {
  //省略記法。readonlyは変数名の直前！
  constructor(public readonly owner: string) {}
}

let visa = new card('Ham');
console.log(visa.owner);
//visa.owner = 'aaaa';
//コンパイルエラー：読み取り専用です！
