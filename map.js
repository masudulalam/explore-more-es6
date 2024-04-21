const numbers = [1, 63, 57, 51, 47, 23, 5, 3, 14, 40, 121];

function doubleIt(num) {
    // console.log('number now:', num);
    return num * 2;
}

const double2 = n => n * 2; 

const result = numbers.map(doubleIt);
// console.log(result);

const output = numbers.map(double2);
// console.log(output);

const output2 = numbers.map(n => n * 2);
console.log(output2);

// const doubled = [];
// for (num of numbers) {
//     const double = num * 2;
//     doubled.push(double);
    
// }
// console.log(doubled);