export {};

enum Months {
  January = 1, // 値を1からインクリメントで振る
  February,
  March,
  April,
}

Months.January;
//コンパイル解析結果：(enum member)Months.January = 0
console.log(Months.January); //「0」

/* ↓
//JSで書くとしたら
const Months = {
  January: 0,
  February: 1,
};

「オブジェクトでキー：値」と人力で設定することになる
*/

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000',
}

let green = COLORS.GREEN;
console.log({ green }); //{ green: '#008000' }

enum COLORS { //付け足しできる
  YELLOW = '#FFFF00',
  GRAY = '#FFFF00', // 他にはあるのに、値設定されてないよ！
}

COLORS.YELLOW; //キーが無いのでエラー
