'use strict';

const user = {
  age: 30,
  firstName: 'Sean',
  gender: 'male',
  isAdult: true,
  lastName: 'Rodriguez',

  showName() {
    return this.firstName;
  },
};

const arr = [1, 2, 3, 4];

const userJson = JSON.stringify(user);
const arrJson = JSON.stringify(arr);

try {
  console.log(JSON.parse('Hello'));
} catch (err) {
  console.log(err);
}

console.log('End!');
