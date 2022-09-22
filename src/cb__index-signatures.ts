export {};

//How to white index signatures
// { [ index: typeForIndex ]: typeForValue }

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Ham', underTwenty: false };

profile.name = 'Ham';
profile.age = 43;
profile.nationality = 'JP';
