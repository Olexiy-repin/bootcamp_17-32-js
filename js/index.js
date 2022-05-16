'use strict';

// const names = ['Jared Barnes', 'Manuel Christensen', 'Gabriel Santos', 'Janie Nguyen'];

// const idxOfManuel = names.indexOf('Manuel Christensen');
// names.splice(idxOfManuel, 1);

// console.log(names);

// const users = [
//   {
//     firstName: 'Beatrice',
//     lastName: 'Munoz',
//     age: 30,
//   },
//   {
//     firstName: 'Leah',
//     lastName: 'Lloyd',
//     age: 34,
//   },
//   {
//     firstName: 'Sally',
//     lastName: 'Hubbard',
//     age: 20,
//   },
//   {
//     firstName: 'Justin',
//     lastName: 'McGee',
//     age: 50,
//   },
// ];

// const idxOfSally = users.findIndex(el => el.firstName === 'Sally');

// users.splice(idxOfSally, 1);

// console.log(users);

// const numbers = [1, 2, 3, 4, 5];

// const doubleNumbers = numbers.reduce((acc, el, idx, arr) => {
//   acc.push(el * 2);

//   return acc;
// }, []);

// console.log(doubleNumbers);

const number = 10;
const number2 = number;

console.log(number);
console.log(number2);

const user = {
  fullName: 'Olivia Burns',
  age: 30,
};

const user2 = {
  ...user,
};
