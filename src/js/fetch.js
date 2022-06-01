'use strict';
// https://jsonplaceholder.typicode.com/

fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });

//? TASK 01
// Создайте функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub, запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.
// Информация о пользователе GitHub с логином USERNAME доступна по ссылке: https://api.github.com/users/USERNAME.

// const BASE_URL = 'https://api.github.com';
// const userLogins = ['luxplanjay', 'olexiy-repin', 'salikovskyi'];
