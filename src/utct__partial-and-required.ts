export {};
/* Pertial
type Profile = {
  name: string;
  age: number;
  zipCode: number;
};

type PartialType = Partial<Profile>;
//全てのプロパティがオプショナルになった型を用意してくれる
*/

/*Required*/
type Profile = {
  name?: string;
  age?: number;
  zipCode?: number;
};

type ReqioredType = Required<Profile>;
//全てのプロパティが必須になる（オプショナルの?を除去）
