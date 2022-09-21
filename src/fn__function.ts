export {};

//「引数」も「関数結果の"戻り値"」もnumber
function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bmi(1.78, 86));
