'use strict';
/*
 * Цепочки прототипов.
 * Object.create().
 * obj.hasOwnProperty()
 */

// https://learn.javascript.ru/article/native-prototypes/native-prototypes-classes.svg

// const user = {
//   firstName: 'Kevin',
//   age: 30,
// };

// const user2 = Object.create(user);

// user2.firstName = 'Cecelia';

// const user3 = Object.create(user2);

// user3.lastName = 'Blake';

// console.log('user: ', user);
// console.log('user2: ', user2);
// console.log('user3: ', user3);

//* Собственные свойства объекта и не собственные свойства

//* Провервка собественных свойства obj.hasOwnProperty()
// console.log(user3.hasOwnProperty('firstName'));

//* Цикл for...in, перебирает все свойства, и собственные и не собственные.
// for (const prop in user3) {
//   if (user3.hasOwnProperty(prop)) {
//     console.log(`${prop}: ${user3[prop]}`);
//   }
// }
