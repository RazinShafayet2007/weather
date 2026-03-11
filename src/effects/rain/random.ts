export function random(from: number, to = 0, interpolation?: (value: number) => number) {
  const delta = to - from;
  const value = Math.random();
  return from + (interpolation ? interpolation(value) : value) * delta;
}

export function chance(value: number) {
  return Math.random() < value;
}
