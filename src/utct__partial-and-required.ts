export {};

type Profile = {
  name: string;
  age: number;
  zipCode: number;
};

type PartialType = Partial<Profile>;
