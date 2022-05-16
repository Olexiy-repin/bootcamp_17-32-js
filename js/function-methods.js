'use strict';
/*
 *  Методы функции call и apply
 */

//* Функции это объекты со своими свойствами и методами
// const greeting = function (userName) {
//   console.log(`Hello ${userName}`);
// };

// greeting.test = 5;

// console.log(greeting.test);

// console.dir(greeting);
//* call и apply

//? Вызовите функцию showFullName в контексте объекта user

// const showFullName = function (message, num) {
//   console.log(num);
//   console.log(`${message} ${this.firstName} ${this.lastName}`);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// showFullName.call(user, 'Hello', 10);
// showFullName.apply(user, ['Hello', 10]);

//? Вызовите функцию showFullName в контексте объекта anotherUser
// const anotherUser = {
//   firstName: 'Ray',
//   lastName: 'Fleming',
//   age: 40,
// };

// showFullName.call(anotherUser, 'Hello', 15);

//* Одалживание метода

// const createCurrentDate = function () {
//   return [].join.call(arguments, '.');
// };

// console.log(createCurrentDate(22, 12, 21));

//* bind
// const showFullName = function () {
//   console.log(`${this.firstName} ${this.lastName}`);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// const showUserName = showFullName.bind(user);

// showUserName();

// const anotherUser = {
//   firstName: 'Rebecca',
//   lastName: 'Elliott',
//   age: 30,
// };

// const showAnotherUserName = showFullName.bind(anotherUser);

// showAnotherUserName();

//* Метод объекта в роли колбэка

// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log(`this ---->`, this);
//   },

//   showName() {
//     console.log(`this name is: ${this.name}`);
//   },
// };

// const someFunction = function (callback) {
//   // callback = user.showName;

//   callback();
// };

// someFunction(user.showName.bind(user));

/*
? Что выведет этот код?
*/

// const f = function () {
//   console.log(this.name);
// };

// const user = {
//   name: 'Вася',
// };

// const anotherUser = {
//   name: 'Петя',
// };

// const copyFunc = f.bind(user).bind(anotherUser);

// copyFunc();

/*
? Вызов checkPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
? Однако, его вызов приводит к ошибке. Почему?
 */

// const checkPassword = function (ok, fail) {
//   // ok = user.loginOk
//   // fail = user.loginFail

//   const password = 'rockstar';

//   if (password === 'rockstar') {
//     ok();
//   } else {
//     fail();
//   }
// };

// const user = {
//   name: 'Вася',

//   loginOk() {
//     console.log(`${this.name} logged in`);
//   },

//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },
// };

// checkPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// checkPassword(
//   function () {
//     // this = user;
//     console.log(`${this.name} logged in`);
//   },
//   function () {
//     // this = user;
//     console.log(`${this.name} failed to log in`);
//   }
// );
