export {};

//抽象クラスとメソッド
abstract class A {
  abstract cry(): string;
}

class L extends A {
  cry() {
    return 'roar';
  }
}

//抽象メソッドを呼び出していないとコンパイルエラー
//使い回すクラスで「メソッドの設定漏れ」を防げる
class T extends A {}
