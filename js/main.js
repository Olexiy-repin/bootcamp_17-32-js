'use strict';
/*
 * Грязные и чистые функции
 */

//! Dirty function
// const numbers = [1, 2, 3, 4, 5];

// const pushNumbers = (...args) => {
//   numbers.push(...args);
// };

// pushNumbers(9, 6, 8);

// console.log(numbers);

//? Clear function
// const numbers = [1, 2, 3, 4, 5];

// const pushNumbers = (numbersArr, ...args) => {
//   const copyNumbersArr = [...numbersArr];

//   copyNumbersArr.push(...args);

//   return copyNumbersArr;
// };

// console.log(numbers);
// console.log(pushNumbers(numbers, 9, 6, 8));

//! Dirty function
// const numbers = [123, 56, 78, 9, 3];

// const doubleMulti = arr => {
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] *= 2;
//   }
// };

// doubleMulti(numbers);

// console.log(numbers);

//? Clear function

// const numbers = [123, 56, 78, 9, 3];

// const doubleMulti = arr => {
//   const copyNumbersArr = [...arr];

//   for (let i = 0; i < copyNumbersArr.length; i += 1) {
//     copyNumbersArr[i] *= 2;
//   }

//   return copyNumbersArr;
// };

// console.log(numbers);
// doubleMulti(numbers);
