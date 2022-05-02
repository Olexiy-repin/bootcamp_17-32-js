'use strict';
/*
 * Конкатенация строк, шаблонные строки
 */

// const str = 'Hello';
// const str1 = 'World';
// const str2 = '!';

// const resultStr = str + ' ' + str1 + str2;

// console.log(resultStr);

/*
  ? Запросите у пользователя имя с возрастом и выведете в консоль сообщение:
  ? Hello имя_пользователя, your age is возраст_пользователя .
*/

// const userName = prompt('Ваше имя');
// const userAge = prompt('Ваш возраст');

// const resultStr = 'Hello' + ' ' + userName + ', ' + 'your age is' + ' ' + userAge;

// alert(resultStr);

//? Выполните задачу выше, используя шаблонные строки
// const userName = prompt('Ваше имя');
// const userAge = prompt('Ваш возраст');

// const resultStr = `Hello ${userName}, your age is ${userAge}`;

// alert(resultStr);

/*
 * Свойства и Методы строк
 */

//? Запросите у пользователя имя и узнайте из скольких символов, состоит имя.
// const userName = prompt('Ваше имя');
// const lengthOfUserName = userName.length;

// console.log(lengthOfUserName);

//? Попросите пользователя ввести email и переведите в нижний регистр.
// const userEmail = prompt('Введите свой email');
// const normalizeUserEmail = userEmail.toLowerCase();

// console.log(normalizeUserEmail);

//? Попросите пользователя ввести email и переведите в верхний регистр
// const userEmail = prompt('Введите свой email');
// const normalizeUserEmail = userEmail.toUpperCase();

// console.log(normalizeUserEmail);
/*
  ? Есть строка 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++'.
  ? Узнайте есть ли в этой строке язык: 'JavaScript', или 'JS'?.
  ? Если есть, узнайте позицию на которой находиться данная подстрока
*/
// let languages = 'HTML, CSS, JS, PHP, React, Vue, Node.js, C, C++';
// const subStr = prompt('Введите язык прграммирования');

// const result = languages.includes(subStr);
// const indexOfSubStr = languages.indexOf(subStr);

// console.log(result);
// console.log(indexOfSubStr);

//? У нас есть строка '24px', узнайте на что заканчивается данная строка, на %, rem, em или px;
// const str = '24px';
// const subStr = 'px';

// const result = str.endsWith(subStr);

// console.log(result);

//? У нас есть строка '23,4', замените запятую на точку
// let str = '23,4';
// const result = str.replace(',', '.');

// console.log(result);

/*
  ? У нас есть строка:
  ? 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'.
  ? Замените все вхожденя dog на monkey.
*/
// let str = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// const resultStr = str.replaceAll('dog', 'monkey');

// console.log(resultStr);

//? У нас есть дата в формате '12:05:21', замените (:) на (.)
// const someDate = '12:05:21';
// const correctDate = someDate.replaceAll(':', '.');

// console.log(correctDate);

/*
  ? Данна строка 'Vasyl Pupkin is 24 years old'.
  ? Скопируйте с этой строки отдельно имя с фамилией и отдельно возраст.
*/
// const someStr = 'Vasyl Pupkin is 24 years old';
// const userName = someStr.slice(0, 12);
// const userAge = someStr.slice(16, 18);

// console.log(userName);
// console.log(userAge);
// console.log(someStr);
