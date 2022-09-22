export {};

let F: any;
let B: string = 'TypeScript';

console.log(typeof F); //「undefined」
//anyにstringは代入できる→互換性がある
F = B;
console.log(typeof F); //「string」
//代入によってany→strign型に変化した

let FI: string;
let BI: number = 1;
//Error
//stringにnumberは入りません！→互換性がない
// FI = BI;

let FS: string;
let BS: string = 'string';
FS = BS; // 通過。互換性がある

let FSL: 'FSL' = 'FSL';
FS = FSL; // 通過。FSLはstring型として型推論→注釈された

let FN: number;
let FNL: 1976 = 1976;
FN = FNL;

interface A {
  age: number;
  name: string;
}

class P {
  constructor(public age: number, public name: string) {}
}

let me: A;
me = new P(43, 'はむ');
