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
console.log({ green });

enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = 22,
}

COLORS.YELLOW; //キーが無いのでエラー
