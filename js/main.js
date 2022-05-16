'use strict';

/*
 *  Контекст вызова this
 */

/*
 * this существует только фнутри функций.
 * На контекст не влияет то где функция была //!ОБЪЯВЛЕНА.
 * На контекст влияет то где функция //!ВЫЗЫВАЕТСЯ.
 */

//TODO: Расмотрим как this ведёт себя в методах
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log('this -----> ', this);
//   },

//   showName() {
//     console.log('this -----> ', this);
//     console.log('name:', this.name);
//   },
// };

// user.showName();

// const anotherUser = {
//   name: 'Helen',
//   age: 25,

//   showThis() {
//     console.log('this -----> ', this);
//   },

//   showName() {
//     console.log('this -----> ', this);
//     console.log('name:', this.name);
//   },
// };

// anotherUser.showName();

//TODO: Расмотрим как this ведёт себя в обычных функциях (строгий, не строгий режим)

//? Function expression
// const greeting = function () {
//   console.log('this ---->', this);
//   console.log('Hello');
// };

// greeting();

//? Function declaration
// function greeting() {
//   console.log('this ---->', this);
//   console.log('Hello');
// }

// greeting();

//? Arrow function
// const greeting = () => {
//   console.log('this ---->', this);
//   console.log('Hello');
// };

// greeting();

//TODO: Присвоение функции как метода объекта

// const showThis = function () {
//   console.log(`this ----> `, this);
// };

// const showThisName = function () {
//   console.log(`this name is: ${this.name}`);
// };

// const user = {
//   name: 'Luis',
//   age: 30,
// };

// user.showUserThis = showThis;
// user.showUserName = showThisName;

// user.showUserName();

//TODO: Вызов метода объекта без контекста
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

// const showUserThis = user.showThis;
// const showUserName = user.showName;

// user.showThis();
// showUserThis();

// user.showName();
// showUserName();

//TODO: This в callback функциях

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

// someFunction(user.showName);

//TODO: This в стрелочных функциях. Стрелочные функции не имеют своего this, this в стрелках всегда ссылается на родительский this.
// const user = {
//   name: 'Luis',
//   age: 30,

//   changeUserAge(newAge) {
//     const changeAge = () => {
//       console.log(`this ---->`, this);

//       this.age = newAge;
//     };

//     changeAge();
//   },
// };

// user.changeUserAge(40);
// console.log(user);

/*
? Каким будет результат выполнения этого кода?
*/

// let user = {
//   name: 'Джон',

//   go() {
//     console.log(this);
//     console.log(this.name);
//   },
// };

// const goFn = user.go;

// goFn();
// user.go();

/*
? Здесь функция makeUser возвращает объект.
? Каким будет результат при обращении к свойству объекта ref? Почему?
*/

// const makeUser = function () {
//   return {
//     name: 'Джон',
//     ref: this,
//   };
// };

// const user = makeUser();

// console.log(user);
// console.log(user.ref.name);

/*
? Каким будет результат console.log
*/

// function makeUser() {
//   return {
//     name: 'Джон',
//     ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();

// console.log(user);
// console.log(user.ref().name);

/*
? Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:
*/

// const ladder = {
//   step: 0,

//   up() {
//     this.step += 1;

//     return this;
//   },

//   down() {
//     this.step -= 1;

//     return this;
//   },

//   showStep() {
//     console.log(this.step);
//   },
// };

// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

// ladder.up().up().down().showStep();
