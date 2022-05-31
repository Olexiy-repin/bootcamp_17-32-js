'use strict';

/*
 * Промисы
 */

//? конструктор new Promise(callback(resolve, reject));
// const promise = new Promise((resolve, reject) => {
//   const randomNum = Math.random();

//   setTimeout(() => {
//     if (randomNum > 0.1) {
//       resolve('Done!');
//     } else {
//       reject('Error');
//     }
//   }, 2000);
// });

// console.log(promise);

// promise
//   .then(data => {
//     console.log(promise);
//     console.log(data);

//     return data;
//   })
//   .then(data => {
//     data += '1.';

//     console.log(data);
//   })
//   .catch(err => {
//     console.log(promise);
//     console.log(err);
//   })
//   .finally(() => {
//     console.log('The End!');
//   });

//? then(onSuccess, onError)

//? ланцюжок промісів та catch(onError)

//? finally()

//? TASK 01
// Можно ли "перевыполнить" промис?

// const promise = new Promise((resolve, reject) => {
//   resolve(1);

//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// });

// promise.then(result => {
//   console.log(result);
// });

//? TASK 02
// Что будет в консоли

// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data); // '1'
//   })
//   .then(data => {
//     console.log(data); // undefined
//     return '2';
//   })
//   .then(data => {
//     console.log(data); // '2'
//   });

//? TASK 03
// Что будет в консоли

// const promise = new Promise((resolve, reject) => {
//   reject('error');
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);
//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error); // error
//   });
