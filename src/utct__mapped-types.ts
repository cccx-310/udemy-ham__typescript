export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile;

type Optional<T> = {
  [P in keyof T]?: T[P] | null | string;
};

type OptionalProfile = Optional<Profile>;
