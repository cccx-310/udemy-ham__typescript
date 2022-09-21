export {};

//型注釈を含むシグネチャーの宣言
function double(value: number): number;
function double(value: string): string;

//オーバーロードはany型で良い
//処理で通るシグネチャーで型安全は担保されるから
function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2;
  } else if (typeof value === 'string') {
    return value + value;
  } else {
    throw 'numberでもstringでもないので、引数の型を確認して下さい';
  }
}

console.log(double(100));
console.log(double('Go '));
console.log(double(true));
