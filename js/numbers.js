'use strict';

/*
 * Математические операторы (+, -, *, /, %, **)
 */

/*
 ? Данно два числа 10 и 20.
 ? Проведите над этими числами математические операции (+ - / *).
*/
// const firstNum = 2;
// const secondNum = 3;

// const result = secondNum ** firstNum;

// console.log(result);
//? Проверьте четные ли числа 15, 20, 45, 30.
// const isEven = 20 % 2;

// console.log(isEven);

/*
  ? Данно 90 минут, узнайте сколько в данном числе содержиться часов и минут.
  ? Результат выведите в консоль.
*/
// const totalMinutes = 90;
// let hours = totalMinutes / 60;
// hours = Math.floor(hours);
// const minutes = totalMinutes % 60;

// console.log('hours: ', hours);
// console.log('minutes: ', minutes);

/*
 * Number Number.parseInt() Number.parseFloat()
 */

/* 
  ? Попросите пользователя ввести число.
  ? Выведите результат в консоль.
  ? Приведите строку к числу.
*/

// let number = prompt('Введите число');
// number = Number(number);

// console.log(number);

//? Данна строка '24px', достаньте с этой строки целое число.
// const str = '24px';
// const number = Number.parseInt(str);

// console.log(number);

//? Данна строка '25.5%', достаньте с этой строки дробное число.
// const str = '25.5%';
// const number = Number.parseFloat(str);

// console.log(number);
//? Попробуйте привести к числу, данную строку 'abc'.
// const str = 'abc';
// const number = Number(str);

// console.log(number);

//? Запросите у пользователя ввести два числа, сложите их и выведите результат в консоль.
// const firstNumber = Number.parseFloat(prompt('Введите первое число'));
// const secondNumber = Number.parseFloat(prompt('Введите второе число'));

// const result = firstNumber / secondNumber;

// console.log(result);
/*
 * Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow(), Math.random().
 */

/*
  ? Данно число 23.5, примените к нему различный методы округления.
  ? Протестируйте на числах, 23.3, 23.9
*/
// const number = 23.5;

// const result = Math.floor(number);

// console.log(result);

/*
  ? Попросите пользователя ввести число и степень.
  ? Возведите число в степень и выведете результат в консоль.
*/
// const number = Number(prompt('Введите число'));
// const power = Number(prompt('Введите степень'));

// const result = Math.pow(number, power);

// console.log(result);

/*
  ? Сгенирируйте рандомное число:
  ? от 0 до 1;
  ? от 10 до 50.
*/

// const min = 1;
// const max = 3;
// const random = Math.round(min - 0.5 + Math.random() * (max - min + 1));

// console.log(random);

//? Сгенирируйте рандомное число. Минимальное и максимально значение, получить от пользователя
// const min = Number.parseFloat(prompt('Введите минимальное число'));
// const max = Number.parseFloat(prompt('Введите максимальное число'));

// const randomNum = Math.round(min - 0.5 + Math.random() * (max - min + 1));

// console.log(randomNum);
