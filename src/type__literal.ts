export {};

let day: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';
day = '月';
day = '31'; //文字列だからって許されると思うな！！

let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12; //リテラル内だな！ヨシ！
month = 13; //13月など受け入れないわ！

let TRUE: true = true;
TRUE = false; //Boolean(true/false)でtrueしか許容しない
