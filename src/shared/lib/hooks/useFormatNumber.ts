export function useFormatNumber(value: number | string | undefined): number {
  if (value === null || value === undefined) {
    return 0;
  }

  const num = typeof value === 'string' ? parseFloat(value) : value;

  if (!isNaN(num)) {
    return parseFloat(num.toFixed(4));
  } else {
    return 0;
  }
}
