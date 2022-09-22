export {};

class M {} //魔法使い
class S {} //僧侶

//クラスは単一継承なので、２つ継承はできない！
class Taro extends M {}

interface Ke {
  io(): void; //シグネチャー
}

interface Se {
  ko(): void; //シグネチャー
}

class Jiro implements Ke, Se {
  io(): void {
    console.log('Keからのinterface継承');
  }
  ko(): void {
    console.log('Seからのinterface継承');
  }
}

const jiro = new Jiro();
jiro.io();
jiro.ko();
