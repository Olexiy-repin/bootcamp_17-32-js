'use strict';
/*
 * Класс - шаблон по которому будут созданны однотипные объекты
 * Экземпляр - это объект созданный по классу
 * Интерфейс - набор доступных методов и свойств
 */

//? Функция конструктор
const Person = function ({ firstName, lastName, age, hairColor, eyesColor } = {}) {
  // this = {}
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.legs = 2;
  this.hands = 2;
  this.eyes = 2;
  this.hairColor = hairColor;
  this.eyesColor = eyesColor;
  // return this;
};

Person.prototype.showFullName = function () {
  console.log(`${this.firstName} ${this.lastName}`);
};

Person.prototype.changeHairColor = function (newColor) {
  this.hairColor = newColor;
};

console.dir(Person);

//TODO:  Создаем человека по образу

const person1 = new Person({
  firstName: 'Edward',
  lastName: 'Smith',
  age: 30,
  hairColor: 'brown',
  eyesColor: 'brown',
});

console.log(Person.prototype === Object.getPrototypeOf(person1));

const person2 = new Person({
  firstName: 'Michael',
  lastName: 'Gill',
  age: 20,
  hairColor: 'white',
  eyesColor: 'blue',
});

console.log(person1);
console.log(person2);

person1.showFullName();
person2.changeHairColor('green');

// const person1 = {
//   firstName: 'Edward',
//   lastName: 'Smith',
//   age: 30,
//   legs: 2,
//   hands: 2,
//   eyes: 2,
//   hairColor: 'brown',
//   eyesColor: 'brown',
// };

// const person2 = {
//   firstName: 'Michael',
//   lastName: 'Gill',
//   age: 20,
//   legs: 2,
//   hands: 2,
//   eyes: 2,
//   hairColor: 'white',
//   eyesColor: 'blue',
// };

//? Создаем методы для наших экземпляров
