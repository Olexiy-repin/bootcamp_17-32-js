'use strict';
/*
 * Деструктуризация объектов
 */

const user = {
  firstName: 'John',
  lastName: 'Reese',
  age: 30,
};

/*
? Напишите деструктурирующее присваивание, которое:
? свойство firstName присвоит в переменную firstName.
? свойство age присвоит в переменную userAge.
? свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
*/

// const { age: userAge, firstName, isAdmin = false } = user;
const { firstName, ...otherProps } = user;

console.log(firstName);
console.log(otherProps);

/*
 * Глубокая деструктуризация объектов
 */

// const team = {
//   number: 4,
//   flag: './images/flag.jpg',
//   employees: ['Anton', 'Oleg', 'Ronnie', 'Carr'],
//   langs: {
//     original: 'uk',
//     secondary: 'en',
//   },
// };

// const {
//   number,
//   flag,
//   employees,
//   langs: { original, secondary },
// } = team;

// console.log(original, secondary);

/*
 * Деструктуризация массивов
 */

// const names = ['Herbert Todd', 'Belle Soto', 'Roger Marsh', 'Ethan Lindsey'];

// const [user1, user2] = names;

// console.log(user1, user2);

// const rgb = [0, 255, 34];

// const [red, green, blue] = rgb;

// console.log(red, green, blue);

/*
? У нас есть объект salaries с зарплатами:
? Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
?
? Если объект salaries пустой, то нужно вернуть null.
? Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
? P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
*/

// const salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function topSalary(salaries) {
//   let topEmployee = null;
//   const employeesArr = Object.entries(salaries);
//   let max = 0;
//   // [
//   //   ['John', 100],
//   //   ['Pete', 300],
//   //   ['Mary', 250],
//   // ];

//   for (const [name, salary] of employeesArr) {
//     // const [name, salary] = el;

//     if (salary > max) {
//       max = salary;
//       topEmployee = name;
//     }
//   }

//   return topEmployee;
// }

// console.log(topSalary(salaries));
