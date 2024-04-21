const numbers = [1, 5, 7, 23, 4, 8, 42, 48];
const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total);

const sum = numbers.reduce((p , c ) => p + c, 0);
console.log(sum);