'use strict';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = '95632b02f9162f375a368971925f5209';

export const fetchWeatherByCityName = city => {
  return fetch(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    console.log(response);

    return response.json();
  });
};
