'use strict';
/*
 * Синхронний vs Асинхронний JS
 */

// console.log('Start');

// window.setTimeout(() => {
//   console.log('SetTimeout');
// }, 1000);

// console.log('Middle');

// console.log('End');

// Стек виклику функцій

// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!
// Функції відкладеного виклику window.setTimeout(callback, delay, arg1, arg2, ...);

// const timeOutId = setTimeout(() => {
//   console.log('Hello');
// }, 5000);

// document.addEventListener('click', () => {
//   clearTimeout(timeOutId);
// });
// Очистка интервалов и таймаутов clearInterval(intervalID), clearTimeout(timeoutID)
