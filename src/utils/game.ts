const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const generateGame = (size: number) => {
  const numbers: string[] = [];
  for (let i = 1; i <= size * 2; i++) {
    numbers.push(`${i}a`);
    numbers.push(`${i}b`);
  }

  return shuffleArray(numbers);
};