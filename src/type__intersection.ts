export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const sasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const Ochiai: Batter1 = {
  battingAverage: 0.367,
};

//intersection 既存の方を再利用する
type TwoWay = Pitcher1 & Batter1;

const Otani: TwoWay = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};
