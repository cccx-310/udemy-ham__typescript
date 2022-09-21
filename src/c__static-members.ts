export {};

class Me {
  static Pro: boolean = true;
  static FN: string = 'Atushi';
  static LN: string = 'Ishida';

  static work() {
    return `Hey,guys! I'm ${this.FN}`;
    //staticメンバの呼び出しは「クラス名」か「this」！
    //「Hey,guys! I'm Atushi」
  }
}

console.log(Me.work());
