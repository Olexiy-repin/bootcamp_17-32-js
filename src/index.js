//? Что код выведет в консоли?
// setTimeout(function timeout() {
//   console.log('Таймаут');
// }, 0);

// let p = new Promise(function (resolve, reject) {
//   console.log('Создание промиса');
//   resolve();
// });

// p.then(function () {
//   console.log('Обработка промиса');
// });

// console.log('Конец скрипта');

//? Что код выведет в консоли?
// console.log(1);

// setTimeout(() => console.log(2), 0);

// Promise.resolve().then(() => console.log(3));

// Promise.resolve().then(() => setTimeout(() => console.log(4), 0));

// Promise.resolve().then(() => console.log(5));

// setTimeout(() => console.log(6));

// console.log(7);

//? Последовательность выполнения асинхронного кода в event loop
// setTimeout(() => {
//   let counter = 0;

//   for (let i = 0; i < 1e10; i += 1) {
//     counter += 1;
//   }

//   console.log('Hello from setTimeout');

//   console.log(counter);
// }, 0);

// Promise.resolve('Hello from then').then(str => {
//   let counter = 0;

//   for (let i = 0; i < 1e10; i += 1) {
//     counter += 1;
//   }

//   console.log(str);

//   console.log(counter);

//   document.body.innerHTML = '<h2>Hi</h2>';
// });

// document.body.innerHTML = '<h1>Hello</h1>';

// for (let i = 0; i < 1e4; i += 1) {
//   console.log(i);
// }

//? Счетчик
// let i = 0;

// const count = () => {
//   do {
//     i += 1;
//     document.body.innerHTML = i;
//   } while (i % 10 !== 0);

//   if (i < 1e4) {
//     setTimeout(() => {
//       count();
//     }, 0);
//   }
// };

// count();
