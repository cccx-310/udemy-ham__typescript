export {};

type D = { name: string; height: number; weight: number };

// Pick 既存の型から欲しいものだけ取り出して型を生成する
type SP = Pick<D, 'name' | 'weight'>;

// Pickの中身
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Omit 既存の型から除外を指定して、それ以外で型を生成する
type SO = Omit<D, 'name' | 'weight'>;

// Omitの中身
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
