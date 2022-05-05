'use strict';
/*
 * Функциональные выражения и объявление функции.
 * Параметры, аргументы, возврат.
 */

// function имя_функции(праметр_1, параметр_2...) {
// тело функции
// }

// const showMessage = function (userName = 'guest') {
//   alert(`Hello ${userName}`);
// };

// showMessage('Oleksii', 40, 'male');

// function showMessage(userName = 'guest') {
//   alert(`Hello ${userName}`);
// }

// showMessage();
// showMessage('Stephen Jensen');
// showMessage('Nell Jefferson');

// function add(a, b) {
//   const sum = a + b;

//   if (sum < 10) {
//     return 'Сумма меньше 10';
//   }

//   return 'Сумма больше 10';
// }

// const result = add(20, 30);

// console.log(result);

/*
? Напиши функцию calcBMI(weight, height) которая рассчитывает и возвращает индекс массы тела человека.
? Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
? Вес и высота будут специально переданы как строки. Нецелые числа могут быть заданы в виде 24.7 или 24,7,
? то есть в качестве разделителя дробной части может быть запятая.
? Индекс массы тела необходимо округлить до одной цифры после запятой;
*/

// function calcBMI(weight, height) {
//   const userWeight = Number.parseFloat(weight.replace(',', '.'));
//   const userHeight = Number.parseFloat(height.replace(',', '.'));

//   const bmi = userWeight / userHeight ** 2;

//   return bmi.toFixed(1);
// }

// const userBMI = calcBMI('88,3', '1.75');
// console.log(userBMI); // 28.8

/*
? Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.
*/

// function min(a, b) {
//   return a < b ? a : b;
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

/*
? Напиши функцию getRectArea(dimensions) для вычисления площади прямоугольника со сторонами,
? значения которых будут переданы в параметр dimensions в виде строки.
? Значения гарантированно разделены пробелом.
*/

// function getRectArea(dimensions) {
//   const sidesArr = dimensions.split(' ');

//   return sidesArr[0] * sidesArr[1];
// }

// console.log(getRectArea('8 11')); // 88
// console.log(getRectArea('18 11')); // 198
// console.log(getRectArea('8 21')); // 168

/*
? Напиши функцию logItems(items), которая получает массив и использует цикл for,
? который для каждого элемента массива будет выводить в консоль сообщение
? в формате <номер элемента> - <значение элемента>. Нумерация элементов должна начинаться с 1.
? Например для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено 1 - Mango,
? а для индекса 2 выведет 3 - Ajax.
*/

// function logItems(items) {
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
? Напиши функцию printContactsInfo(names, phones) которая выводит в консоль имя и телефонный номер пользователя.
? В параметры names и phones будут переданы строки имен и телефонных номеров, разделенные запятыми.
? Порядковый номер имен и телефонов в строках указывают на соответствие.
? Количество имен и телефонов гарантированно одинаковое.
*/

// function printContactsInfo(names, phones) {
//   const userNamesArr = names.split(',');
//   const userPhonesArr = phones.split(',');

//   for (let i = 0; i < userNamesArr.length; i += 1) {
//     console.log(`${userNamesArr[i]}: ${userPhonesArr[i]}`);
//   }
// }

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

// printContactsInfo('Vera,Carr,Violet,Sherman', '89001234567,89001112233,890055566377,890055566300');

/*
? Напиши функцию findLargestNumber(numbers)которая ищет самое большое число в массиве.
*/

// function findLargestNumber(numbers) {
//   let max = numbers[0];

//   for (let i = 1; i < numbers.length; i += 1) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }

//   return max;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

/*
? Напишите функцию calcAverage() которая принимает произвольное кол-во аргументов и возвращает их среднее значение.
? Все аругменты будут только числами.
*/

// function calcAverage() {
//   let total = 0;

//   for (const num of arguments) {
//     total += num;
//   }

//   return total / arguments.length;
// }

// console.log(calcAverage(1, 2, 3, 4)); // 2.5
// console.log(calcAverage(14, 8, 2)); // 8
// console.log(calcAverage(27, 43, 2, 8, 36)); // 23.2

/*
? Напишите функции для работы с коллекцией обучающих курсов courses:
? addCourse(name) - добавляет курс в конец коллекции
? removeCourse(name) - удаляет курс из коллекции
? updateCourse(oldName, newName) - изменяет имя на новое
*/

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас уже есть такой курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс с таким именем не найден'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// updateCourse('С++', 'PHP'); // 'Курса с таким именем не найдено'
// console.log(courses);

// function addCourse(name) {
//   if (courses.includes(name)) {
//     console.log(`У вас уже есть курс ${name}`);
//     return;
//   }

//   courses.push(name);
// }

// function removeCourse(name) {
//   if (courses.includes(name)) {
//     const idxOfCourse = courses.indexOf(name);

//     courses.splice(idxOfCourse, 1);

//     return;
//   }

//   console.log(`Курс ${name} не найден`);
// }

// function updateCourse(oldName, newName) {
//   if (!courses.includes(oldName)) {
//     console.log(`Курса ${oldName} не найдено`);

//     addCourse(newName);

//     return;
//   }

//   if (courses.includes(newName)) {
//     console.log(`У вас уже есть курс ${newName}`);
//     return;
//   }

//   const idxOfCourse = courses.indexOf(oldName);

//   courses.splice(idxOfCourse, 1, newName);
// }
