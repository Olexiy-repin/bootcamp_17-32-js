'use strict';
/*
 *  Массивы: литерал массива, элементы, индексация, длина
 */

/*
? Создайте массив genres с элементами «Jazz» и «Blues».
? Добавьте «Рок-н-ролл» в конец.
? Выведите в консоль первый элемент массива.
? Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
? Удалите первый элемент и выведите его в консоль.
? Вставьте «Country» и «Reggy» в начало массива.
 */

// const genres = ['Jazz', 'Blues'];
// genres.push('Рок-н-ролл');

// console.log(genres[0]);
// console.log(genres[genres.length - 1]);

// const firstElOfGenres = genres.shift();
// console.log(firstElOfGenres);

// genres.unshift('Country', 'Reggy');

// console.log(genres);

/*
 * Передача по ссылке и по значению
 */

/*
? Создайте переменную a = 10.
? Создайте и присвойте переменной b -> переменную a
? Вывидите в консоль обе этих переменных
? Измените значение переменной a и ещё раз выведете в консоль
*/

// let a = 10;
// const b = a;

// console.log('a: ', a);
// console.log('b: ', b);

// a = 20;

// console.log('a: ', a);
// console.log('b: ', b);

/*
? Создайте массив arr1 = [1, 2, 3].
? Создайте и присвойте массиву arr2 -> массив arr1
? Вывидите в консоль оба эти массива
? Добавьте элемент в массив arr1 и ещё раз выведете оба массива в консоль
*/

// const numbers = [1, 2, 3];
// const numbers2 = numbers;

// console.log('numbers: ', numbers);
// console.log('numbers2: ', numbers2);

// numbers.push(4);

// console.log('numbers: ', numbers);
// console.log('numbers2: ', numbers2);

/*
 * Перебор массива циклами for и for...of
 */

/*
? Напиши скрипт для перебора массива fruits циклом for.
? Для каждого элемента массива выведи в консоль строку в формате номер_элемента: значение_элемента.
? Нумерация элементов должна начинаться с 1.
*/

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

/*
? Напиши скрипт поиска самого маленького числа в массиве.
? Код должен работать для любого массива чисел.
? Используй цикл для решения задачи.
*/

// const numbers = [2, 17, 94, 1, -20, -1, 23, -40, 37];
// let min = numbers[0];

// for (let i = 1; i < numbers.length; i += 1) {
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }

// console.log(min);

/*
? У нас есть массив с зарплатами сотрудников, нужно посчитать общую сумму зарплат
*/

// const salaries = [200, 450, 600, 150, 300];
// let total = 0;

// 1 итерация
// i = 0
// total = 0
// total = 0 + 200 = 200

// 2 итерация
// i = 1
// total = 200
// total = 200 + 450  = 650

// 3 итерация
// i = 2
// total = 650
// total = 650 + 600  = 1250

// for (let i = 0; i < salaries.length; i += 1) {
//   const item = salaries[i];
//   // total = total + salaries[i];
//   total += item;
// }

// for (const item of salaries) {
//   total += item;
// }

// console.log(total);

/*
? У нас есть несколько массивов с зарплатами сотрудников из разных отделов, нужно посчитать общую сумму зарплат
*/

// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];

// 1 вариант
// let total = 0;

// for (let i = 0; i < managerSalaries.length; i += 1) {
//   // total = total + managerSalaries[i];
//   total += managerSalaries[i];
// }

// for (let i = 0; i < developersSalaries.length; i += 1) {
//   // total = total + developersSalaries[i];
//   total += developersSalaries[i];
// }

// for (const salary of managerSalaries) {
//   total += salary;
// }

// for (const salary of developersSalaries) {
//   total += salary;
// }

// console.log(total);

// 2 вариант
// const salaries = managerSalaries.concat(developersSalaries);
// let total = 0;

// for (let i = 0; i < salaries.length; i += 1) {
//   // total = total + developersSalaries[i];
//   total += salaries[i];
// }

// for (const item of salaries) {
//   total += item;
// }

// console.log(total);

/*
 * Базовые методы: split и join, indexOf и includes, push, slice и splice, concat
 */

/*
? Напиши скрипт для вычисления площади прямоугольника со сторонами,
? значения которых хранятся в переменной values в виде строки.
? Значения гарантированно разделены пробелом.
*/

// const values = '8 11';
// const sidesArr = values.split(' ');

// const area = sidesArr[0] * sidesArr[1];

// console.log(area);

/*
? Напиши скрипт который выводит в консоль имя и телефонный номер пользователя.
? В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми.
? Порядковый номер имен и телефонов в строках указывают на соответствие.
? Количество имен и телефонов гарантированно одинаковое.
*/

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }

/*
? Напиши скрипт который «разворачивает» строку (обратный порядок букв)
? и выводит ее в консоль.
*/
// 1 вариант
// const string = 'Welcome to the future';
// const charsArr = string.split('');
// const reverseArr = [];
// let reverseStr = null;

// for (let i = charsArr.length - 1; i >= 0; i -= 1) {
//   reverseArr.push(charsArr[i]);
// }

// reverseStr = reverseArr.join('');

// console.log(reverseStr);

// 2 вариант
// const string = 'Welcome to the future';
// let reverseStr = '';

// for (let i = string.length - 1; i >= 0; i -= 1) {
//   reverseStr += string[i];
// }

// console.log(reverseStr);

// 3 вариант
// const string = 'Welcome to the future';
// let charsArr = string.split('');
// charsArr = charsArr.reverse();
// const reverseStr = charsArr.join('');

// console.log(reverseStr);

/*
? У нас есть массив сотрудников, отсортируйте его, что бы сотрудники не повторялись
*/

// const employees = ['Dennis', 'Dennis', 'Shaw', 'Watkins', 'Ray', 'Shaw', 'Watkins'];
// const filteredEmployees = [];

// 1 итерация
// i = 0;
// 0 === 0

// 2 итерация
// i = 1;
// 1 === 0

// 3 итерация
// i = 2;
// 2 === 2

// for (let i = 0; i < employees.length; i += 1) {
//   if (i === employees.indexOf(employees[i])) {
//     filteredEmployees.push(employees[i]);
//   }
// }

// console.log(filteredEmployees);

// //? Сотрудник Shaw уволился, удалите его из массива
// const idxOfShaw = filteredEmployees.indexOf('Shaw');
// filteredEmployees.splice(idxOfShaw, 1);

// console.log(filteredEmployees);
// //? Добавьте нового сотрудника Thornton, перед Watkins;
// const idxOfWatkins = filteredEmployees.indexOf('Watkins');
// filteredEmployees.splice(idxOfWatkins, 0, 'Thornton');

// console.log(filteredEmployees);
