export {};

type Mojiretsu = string;

const fooString: string = 'hello';
const fooMojiretsu: Mojiretsu = 'hello';

const example1 = {
  name: 'Ham',
  age: 43,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'Ham',
  age: 43,
};

//example1の構造に合わせて型注釈を設ける
//example1を参照するので、example1の内容が変われば
//合わせて型推論→型注釈が自動的に変わる
type Profile2 = typeof example1;
