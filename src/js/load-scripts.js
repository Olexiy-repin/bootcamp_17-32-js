'use strict';

// https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js

/*
 * Загрузка скриптов
 */

//? Создайте функция loadScript(url), которая будет создавать и вставлять скрипт на страницу
// const loadScript = (url, onSuccess, onError) => {
//   const script = document.createElement('script');
//   script.src = url;

//   document.body.append(script);

//   script.addEventListener('load', event => {
//     onSuccess(script.src);
//   });

//   script.addEventListener('error', event => {
//     onError(script.src);
//   });
// };

// const successHandler = scriptUrl => {
//   console.log(`${scriptUrl} загружен успешно!`);
// };

// const errorHandler = scriptUrl => {
//   console.log(`${scriptUrl} не загрузился!`);
// };

// loadScript(
//   'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
//   scriptUrl => {
//     console.log(`${scriptUrl} загружен успешно!`);

//     loadScript(
//       'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
//       scriptUrl => {
//         console.log(`${scriptUrl} загружен успешно!`);

//         loadScript(
//           'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js',
//           scriptUrl => {
//             console.log(`${scriptUrl} загружен успешно!`);
//           },
//           scriptUrl => {
//             console.log(`${scriptUrl} не загрузился!`);
//           }
//         );
//       },
//       scriptUrl => {
//         console.log(`${scriptUrl} не загрузился!`);
//       }
//     );
//   },
//   scriptUrl => {
//     console.log(`${scriptUrl} не загрузился!`);
//   }
// );

//? Передайте кобэк, который буде вызываться по завершению загрузки скрипта

//? Обработка ошибок

//? Загрузка нескольких скриптов

//? Адская пирамида колбэков

//? Решение через промисы
// const loadScript = url => {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement('script');
//     script.src = url;

//     document.body.append(script);

//     script.addEventListener('load', event => {
//       resolve(script.src);
//     });

//     script.addEventListener('error', event => {
//       reject(script.src);
//     });
//   });
// };

// loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js')
//   .then(scriptUrl => {
//     console.log(`${scriptUrl} загружен успешно!`);

//     return loadScript(
//       'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'
//     );
//   })
//   .then(scriptUrl => {
//     console.log(`${scriptUrl} загружен успешно!`);

//     return loadScript(
//       'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js'
//     );
//   })
//   .then(scriptUrl => {
//     console.log(`${scriptUrl} загружен успешно!`);
//   })
//   .catch(scriptUrl => {
//     console.log(`${scriptUrl} не загрузился!`);
//   });
