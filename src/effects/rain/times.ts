export function times(count: number, iteratee: (index: number) => void) {
  for (let index = 0; index < count; index += 1) {
    iteratee(index);
  }
}
