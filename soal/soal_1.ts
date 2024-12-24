function sortGenapGanjil(arr: number[]): number[] {
  // Pisahkan bilangan genap dan ganjil
  const genap = arr.filter(num => num % 2 === 0);
  const ganjil = arr.filter(num => num % 2 !== 0);
  genap.sort((a, b) => a - b);
  ganjil.sort((a, b) => a - b);

  return [...genap, ...ganjil];
}

const input = [5, 3, 8, 6, 1, 9, 2];
const result = sortGenapGanjil(input);
console.log(result);