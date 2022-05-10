'use strict';

/*
 * Операция spread как замена concat и slice
 */

//* Копия массива

// const numbers = [1, 2, 3, 4];
// const numbers1 = [...numbers];

// numbers1.push(5);

// console.log(numbers);
// console.log(numbers1);

//* Объединение массивов
// const numbers = [1, 2, 3];
// const numbers2 = [4, 5, 6];
// const resultArr = [...numbers, 15, 324, 33, ...numbers2, 10, 11, 12];

// console.log(resultArr);

//* Распыления массива в функцию
// const numbers = [1, 2, 3, 4, 5];

// console.log(Math.min(...numbers));

/*
 * Операция spread как замена Object.assign({}, obj)
 */

// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
// };

// const user1 = {
//   gender: 'male',
//   ...user,
// };

// user1.age = 20;

// console.log('user: ', user);
// console.log('user1: ', user1);

//* Распыления сложных типов

// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
//   someArr: [1, 2, 3, 4],
// };

// const user2 = _.cloneDeep(user);

// user2.firstName = 'Lina Castro';
// user2.someArr.push(10);

// console.log('user: ', user);
// console.log('copy: ', user2);

/*
 * Операция rest
 */

//? Напишите функцию sum, которая сумирует произвольное количество аргументов
// function sum(...args) {
//   let total = 0;

//   for (const num of args) {
//     total += num;
//   }

//   return total;
// }

// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum(10, 20));
