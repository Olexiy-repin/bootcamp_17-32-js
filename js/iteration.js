'use strict';

/*
 * for...in, Object.keys, Object.values
 */

//? Получите сумму зарплат всех сотрудников

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

// Вариант через for...in
// let total = 0;

// for (const key in salaries) {
//   // total = total + salaries[key];
//   total += salaries[key];
// }

// console.log(total);

// Вариант через Object.keys
// const salariesKeys = Object.keys(salaries);
// // salariesKeys = ['John', 'Ann', 'Pete'];
// let total = 0;

// for (const key of salariesKeys) {
//   total += salaries[key];
// }

// console.log(total);

// Вариант через Object.values
// const salariesValues = Object.values(salaries);
// let total = 0;

// for (const value of salariesValues) {
//   total += value;
// }

// console.log(total);
