'use strict';
/*
 * Логические операторы (&& || !)
 */

//* && - запинается на лжи
//* Если все операнды были истинными, возвращается последний.
//* Если результат false, останавливается и возвращает исходное значение этого операнда.
// const result = 10 && '4' && true && 34;

// console.log(result);
//* || - запинается на правде
//* Возвращает первое истинное значение или последнее, если такое значение не найдено.
// const result = false || '' || 10 || 20;

// console.log(result);

// const userName = prompt('Ваше имя') || 'anonymus';

// const resultStr = `Hello ${userName}`;

// alert(resultStr);

//* ! - инвертирует правду в ложь, а ложь в правду

// console.log(!'10');

//? Логические операторы
// console.log(true && 3); // 3
// console.log(false && 3); // false
// console.log(true && 4 && 'kiwi'); // kiwi
// console.log(true && 0 && 'kiwi'); // 0
// console.log(true || 3); // true
// console.log(true || 3 || 4); // true
// console.log(true || false || 7); // true
// console.log(null || 2 || undefined); // 2
// console.log((1 && null && 2) > 0); // false
// console.log(null || (2 && 3) || 4); // 3

//? Преобразование типов
// console.log(2 + 5 + '' + 1 + 0);
// console.log('' + 1 - 0);
// console.log(true + false);
// console.log(6 / '3');
// console.log('2' * '3');
// console.log(4 + 5 + 'px');
// console.log('$' + 4 + 5);
// console.log('4' - 2);
// console.log('4px' - 2);
// console.log(7 / 0);
// console.log('  -9  ' + 5);
// console.log(null + 1);
