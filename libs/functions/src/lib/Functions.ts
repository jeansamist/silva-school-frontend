export function range(start: number, stop: number, step = 1): number[] {
  return Array.from({ length: (stop - start) / step + 1 }, (value, index) => start + index * step);
}
