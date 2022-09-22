export {};

let name: any = 'はむ';

//文字"数"が渡ってくる→numberに変えても大丈夫と判断できる
// let length:number = name.length;
// let length = name.length as number;
let length = (name as string).length;

length = 'foo';
