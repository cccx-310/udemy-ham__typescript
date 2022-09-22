export {};

//Record<K,T>

type P = 'Tokyo' | 'Chiba' | 'Tottori';

type cI = {
  kanji_name: string;
  confirmed_cases: number;
};

/* Recordなし */
const cJP: {
  Tokyo: cI;
  Chiba: cI;
  Tottori: cI;
} = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 249 },
  Tottori: { kanji_name: '鳥取', confirmed_cases: 2 },
};

/* Record<K,T> */
// ユニオン型で繰り返されるKにTを適用する
const cJP2: Record<P, cI> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 249 },
  Tottori: { kanji_name: '鳥取', confirmed_cases: 2 },
};
