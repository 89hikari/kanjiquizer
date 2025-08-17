export const getRandomArbitrary = (min: number, max: number) =>
  Math.ceil(Math.random() * (max - min) + min);

export const getAverageValue = (list: number[], count: number) =>
  Math.ceil(list.reduce((a, b) => a + b, 0) / count);
