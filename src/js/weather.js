'use strict';
// https://openweathermap.org/
import { fetchWeatherByCityName } from './weather-api';
import createWeatherCard from '../templates/weather-card.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const weatherWrapperEl = document.querySelector('.js-weather__wrapper');

const convertSecondsToHoursAndMinutes = seconds => {
  let date = new Date(seconds * 1000);

  return `${String(date.getHours()).padStart(2, 0)}:${String(
    date.getMinutes()
  ).padStart(2, 0)}`;
};

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements['user_country'].value;
  console.log(searchQuery);

  fetchWeatherByCityName(searchQuery)
    .then(data => {
      data.sys.sunrise = convertSecondsToHoursAndMinutes(data.sys.sunrise);
      data.sys.sunset = convertSecondsToHoursAndMinutes(data.sys.sunset);

      console.log(data);

      weatherWrapperEl.innerHTML = createWeatherCard(data);
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
