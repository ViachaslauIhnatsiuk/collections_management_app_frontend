export const groupElementsBySize = (
  elements: string[],
): {
  [key: string]: number;
} => {
  const groupedElements = elements.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {} as { [key: string]: number });

  return groupedElements;
};
