'use strict';
/*
 * Циклы (while, do while, for)
 */

/*
 * While
 */

// while (condition) {
// код, тело цикла (statement)
// }

// 1 итерация
// iterator = 1;
// 1 <= 5 true
// iterator = 2;

// 2 итерация
// iterator = 2;
// 2 <= 5 true
// iterator = 3;

// 3 итерация
// iterator = 3;
// 3 <= 5 true
// iterator = 4;

// 4 итерация
// iterator = 4;
// 4 <= 5 true
// iterator = 5;

// 5 итерация
// iterator = 5;
// 5 <= 5 true
// iterator = 6;

// 6 итерация
// iterator = 6;
// 6 <= 5 false

// let iterator = 1;

// while (iterator <= 5) {
//   console.log('Hello');

//   iterator = iterator + 1;
// }

/*
? Выведите числа от 1 до 50
*/
// let iterator = 1;

// while (iterator <= 50) {
//   console.log(iterator);

//   // iterator = iterator + 1;
//   iterator += 1;
// }

/*
? Найдите сумму чисел от 1 до 100
 */
// 1 итарицая
// let iterator = 1;
// let result = 0;
// 1 <= 100 true
// result = 1;
// iterator = 2;

// 2 итарицая
// 2 <= 100 true
// result = 3;
// iterator = 3;

// let iterator = 1;
// let result = 0;

// while (iterator <= 100) {
//   // result = result + iterator;
//   result += iterator;

//   // iterator = iterator + 1;
//   iterator += 1;
// }

// console.log(result);

/*
? Дано число n=1000.
? Делите его на 2 столько раз, пока результат деления не станет меньше 50.
? Какое число получится?
? Посчитайте количество итераций, необходимых для этого, и запишите его в переменную num.
*/
// 1 итерация
// 1000 / 2 > 50 true
// counter = 1
// n = 500

// 2 итерация
// 500 / 2 > 50 true
// counter = 2
// n = 250

// 3 итерация
// 250 / 2 > 50 true
// counter = 3
// n = 125

// 4 итерация
// 125 / 2 > 50 true
// counter = 4
// n = 62.5

// 5 итерация
// 62.5 / 2 > 50 false

// let n = 1000;
// let counter = 0;

// while (n / 2 > 50) {
//   // counter = counter + 1
//   counter += 1;

//   // n = n / 2;
//   n /= 2;
// }

// console.log(counter);
// console.log(n);

/*
 * Do While
 */
// do {
// statement
// } while (condition);

/*
? Напишите цикл, который предлагает prompt ввести число, большее 100.
? Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
? Цикл должен спрашивать число пока посетитель не введёт число, большее 100.
? Предполагается, что посетитель вводит только числа;
*/

// let number;

// do {
//   number = Number.parseFloat(prompt('Введите число больше 100'));
// } while (number < 100);

/*
 * For
 */
// for (инициализация; условие; пост-выражение) {
// тело цикла
// }

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

/*
? При помощи цикла for выведите чётные числа от 2 до 10.
*/
// for (let i = 2; i <= 10; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

/*
? Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями.
? Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’,
? а для чисел, делящихся на 5 – ‘Buzz’.
? Для чисел которые кратны 3 и 5 = 'FizzBuzz'
*/

// 1 решение
// for (let i = 1; i <= 100; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

// 2 решение
// for (let i = 1; i <= 100; i += 1) {
//   let str = '';

//   if (i % 3 === 0) {
//     str = str + 'Fizz';
//   }

//   if (i % 5 === 0) {
//     str = str + 'Buzz';
//   }

//   console.log(str || i);
// }

/*
 ? Выведите методом console.log() звездочки от 1 до 7 штук в виде  треугольника таким образом:
 ? *
 ? **
 ? ***
 ? ****
 ? *****
 ? ******
 ? *******
 */

// let star = '*';

// for (let i = 0; i < 7; i += 1) {
//   console.log(star);

//   // star = star + '*';
//   star += '*';
// }
