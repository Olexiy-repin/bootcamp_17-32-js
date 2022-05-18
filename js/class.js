'use strict';
/*
 * Классы: объявление, конструктор, методы
 * Приватные свойства и методы
 * Статические свойства и методы
 * Геттеры и сеттеры
 */

class Person {
  #userEmail;
  static test = 5;

  constructor({ firstName, lastName, age, hairColor, eyesColor, email } = {}) {
    // this = {}
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.legs = 2;
    this.hands = 2;
    this.eyes = 2;
    this.hairColor = hairColor;
    this.eyesColor = eyesColor;
    this.#userEmail = email;
    // return this
  }

  showFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  changeHairColor(newColor) {
    this.hairColor = newColor;
  }

  changeFirstName(newName) {
    this.firstName = this.#trimStr(newName);
  }

  #trimStr(str) {
    return str.trim();
  }

  get email() {
    return this.#userEmail;
  }

  set email(newEmail) {
    this.#userEmail = newEmail;
  }
}

const person1 = new Person({
  firstName: 'Edward',
  lastName: 'Smith',
  age: 30,
  hairColor: 'brown',
  eyesColor: 'brown',
  email: 'mevuabo@ukku.gh',
});

console.log(person1.email);
person1.email = 'cusnuj@zopur.id';

person1.changeFirstName('      Oleksii');

console.log(person1);

const obj = new Object();

console.dir(Object);
