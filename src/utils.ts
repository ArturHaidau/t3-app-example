export const getRandom = (from: number, to: number) =>
  Math.round(Math.random() * to) + from;
