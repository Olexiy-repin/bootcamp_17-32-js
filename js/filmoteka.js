'use strict';
const filmoteka = [
  {
    id: 1,
    title: 'Duna',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 10,
    actors: ['Amelia Gibson', 'Cameron Clayton', 'Viola Vasquez', 'Lula Collins', 'Victor Nichols'],
    adult: false,
  },
  {
    id: 2,
    title: 'Venom',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 8,
    actors: ['Inez Greer', 'Barry Curtis', 'Blanche Rios', 'Glen Perry', 'Logan Powers'],
    adult: true,
  },
  {
    id: 3,
    title: 'Luca',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 9,
    actors: ['Marguerite Gibbs', 'Lora Alvarez', 'Jorge Simpson', 'Thomas Hall', 'Darrell Hunter'],
    adult: false,
  },
  {
    id: 4,
    title: 'Free Guy',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 6,
    actors: ['Calvin Andrews', 'Mamie Myers', 'Madge Townsend', 'Ralph Kim', 'Jorge Reese'],
    adult: true,
  },
  {
    id: 5,
    title: 'Saw',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 7,
    actors: ['Adele Marsh', 'Melvin Burgess', 'Jesus Reese', 'Harriet Moreno', 'Curtis Cox'],
    adult: true,
  },
];

//? Напишите функцию getAllTitlesOfFilms(films), которая возвращает масив со всеми названиями фильмов.
// function getAllTitlesOfFilms(films) {
//   const filmsTitles = [];

//   for (const film of films) {
//     filmsTitles.push(film.title);
//   }

//   return filmsTitles;
// }

// console.log(getAllTitlesOfFilms(filmoteka));

//? Напишите функцию findFilmByName(films, filmTitle), которая ищет фильм по названию.
// function findFilmByName(films, filmTitle) {
//   for (const film of films) {
//     if (film.title === filmTitle) {
//       return film;
//     }
//   }

//   return 'Такого фильма не найдено';
// }

// console.log(findFilmByName(filmoteka, 'Duna'));

//? Напишите функцию getAdultFilms(films), которая возврщает масив всех взрослых фильмов.
// function getAdultFilms(films) {
//   const adultFilmsArr = [];

//   for (const film of films) {
//     if (film.adult) {
//       adultFilmsArr.push(film);
//     }
//   }

//   return adultFilmsArr;
// }

// console.log(getAdultFilms(filmoteka));

//? Напишите функцию getNotAdultFilms(films), которая возврщает масив всех фильмов без возростного ограничения.
// function getNotAdultFilms(films) {
//   const notAdultFilmsArr = [];

//   for (const film of films) {
//     if (!film.adult) {
//       notAdultFilmsArr.push(film);
//     }
//   }

//   return notAdultFilmsArr;
// }

// console.log(getNotAdultFilms(filmoteka));
