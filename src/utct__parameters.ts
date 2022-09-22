export {};

const debug = (name: string, age: number) => {
  console.log({ name, age });
};

debug('Hamu', 43);

type P = Parameters<typeof debug>;

const profile: P = ['グロリア', 76];

debug(...profile);
