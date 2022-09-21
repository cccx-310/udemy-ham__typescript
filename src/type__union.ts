export {};

/*
let value = 1; 型推論→number型注釈をされている
value = 'foo'; number型じゃないから受け付けられません！
*/

let value: number | string = 1; //数値か文字列ならいいよ！
value = 'foo';
