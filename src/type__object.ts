export {};

//プロパティ名まで指定しない
//緩いobject型付け
let profile1: object = { name: 'Ham' };
profile1 = { brithYear: 1976 };

//↕同じ 「:object」「:{}」

let profile2: {} = { name: 'Ham' };
profile2 = { birthYear: 1976 };

//プロパティ名まで指定する
//厳しいobject型付け
let profile3: {
  name: string;
} = { name: 'Ham' };
profile3 = { birthYear: 1976 };

/*
「name:'名前'」用のオブジェクトを厳格に設定している
ので、別の文字列は受け付けなくなっている
*/
