export {};

let name = 'Atsushi';
name = 'Ham';

let nickname = 'Ham' as const;
nickname = 'Hamutaro'; //Ham型にしろォー！！

let profile = {
  name: 'Atushi',
  height: 178,
} as const; // プロパティにreadonly修飾子が付く

profile.Ham = 'Ham';
profile.height = 180;
