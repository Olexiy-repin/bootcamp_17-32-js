'use strict';
/*
 * forEach() как замена циклов for и for...of для массивов
 */

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbersArr => {
//   // 1 Вариант (цикл for)
//   //   let total = 0;
//   //   for (let i = 0; i < numbersArr.length; i += 1) {
//   //     total += numbersArr[i];
//   //   }
//   //   return total;
//   // 2 Вариант (цикл for...of)
//   //   let total = 0;
//   //   for (const number of numbersArr) {
//   //     total += number;
//   //   }
//   //   return total;
//   // 3 Вариант (метод forEach())
//   // let total = 0;

//   // numbersArr.forEach((el, idx, arr) => {
//   //   total += el;
//   // });

//   // return total;
// };

// console.log(sum(numbers));

// const ownForEach = (arr, callback) => {
//   for (let i = 0; i < arr.length; i += 1) {
//     callback(arr[i], i, arr);
//   }
// };

// ownForEach(numbers, (el, idx, arr) => {
//   console.log('el: ', el);
//   console.log('idx: ', idx);
// });

/*
? Выполните рефакторинг кода используя метод forEach и стрелочные функции.
*/

// const logItems = items => {
//   console.log(items);

//   // for (let i = 0; i < items.length; i += 1) {
//   //   console.log(`${i + 1} - ${items[i]}`);
//   // }

//   items.forEach((el, idx) => {
//     console.log(`${idx + 1} - ${el}`);
//   });
// };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
? Выполните рефакторинг кода используя метод forEach и стрелочные функции.
*/

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   // for (let i = 0; i < nameList.length; i += 1) {
//   //   console.log(`${nameList[i]}: ${phoneList[i]}`);
//   // }

//   nameList.forEach((el, idx) => {
//     console.log(`${el}: ${phoneList[idx]}`);
//   });
// }

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

/*
? Выполните рефакторинг кода используя метод forEach и стрелочные функции.
*/

// function calсulateAverage(...args) {
//   let total = 0;

//   // for (let i = 0; i < args.length; i += 1) {
//   //   total += args[i];
//   // }

//   args.forEach(el => {
//     total += el;
//   });

//   return total / args.length;
// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
