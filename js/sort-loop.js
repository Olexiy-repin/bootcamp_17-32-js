'use strict';
/*
 *  Метод sort()
 */

//? Сортировка чисел и строк по умолчанию
// const numbers = [3, 7, 2, 8, 1, 42, 56];
// const sortedNumbers = [...numbers].sort();

// console.log('numbers: ', numbers);
// console.log('sortedNumbers: ', sortedNumbers);

// const strArr = ['Asdfs', 'Cdasfas', 'Bsadfdsa', 'Dcvffd', 'acvcvdvd'];
// const sortedStrArr = [...strArr].sort();

// console.log('strArr: ', strArr);
// console.log('sortedStrArr: ', sortedStrArr);

//? Сортировка чисел и строк по условию
// const numbers = [3, 7, 2, 8, 1, 42, 56];

// 1 итерация
// a = 3
// b = 7
// return 3 - 7 = -4;

// 2 итерация
// a = 7
// b = 2
// return 7 - 2 = 5;

// const sortedNumbers = [...numbers].sort((a, b) => {
//   return b - a;
// });

// console.log('numbers: ', numbers);
// console.log('sortedNumbers: ', sortedNumbers);

// const strArr = ['Abdfs', 'Cdasfas', 'Bsadfdsa', 'Dcvffd', 'acvcvdvd'];
// const sortedStrArr = [...strArr].sort((a, b) => {
//   return a.localeCompare(b);
// });

// console.log('strArr: ', strArr);
// console.log('sortedStrArr: ', sortedStrArr);

/*
? Пусть функция sortByAscendingAmount возвращает новый массив автомобилей отсортированный
? по возврастанию значения свойства amount.
*/
const cars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
];

// const sortByAscendingAmount = cars => {
//   const sortedCarsByAmount = [...cars].sort((a, b) => {
//     return a.amount - b.amount;
//   });

//   return sortedCarsByAmount;
// };

// console.table(sortByAscendingAmount(cars));

/*
? Пусть функция sortByDescendingPrice возвращает новый массив автомобилей отсортированный
? по убыванию значения свойства price.
*/

// const sortByDescendingPrice = cars => {
//   const carsCopy = [...cars].sort((a, b) => {
//     return b.price - a.price;
//   });

//   return carsCopy;
// };

// console.table(sortByDescendingPrice(cars));

/*
? Пусть функция sortByModel возвращает новый массив автомобилей отсортированный по названию модели
? в алфавитном и обратном алфавитном порядке, в засисимости от значения параметра order.
*/

// const sortByModel = (cars, order) => {
//   const sortedCarsByModel = [...cars].sort((a, b) => {
//     if (order === 'asc') {
//       return a.model.localeCompare(b.model);
//     }

//     return b.model.localeCompare(a.model);
//   });

//   return sortedCarsByModel;
// };

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));
