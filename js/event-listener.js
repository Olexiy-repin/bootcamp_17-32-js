'use strict';
/*
 * Основы событий. Создание и удаление слушателей. Объект события
 */

/*
 ?- Именование колбеков для слушателей
 ?  - handle*: handleSubjectEvent
 ?  - *Handler: subjectEventHandler
 ?  - on*: onSubjectEvent
 */

// https://picsum.photos/200/300

const swapBtnEl = document.querySelector('.js-swap-btn');
const imgEl = document.querySelector('.js-img');
const removeListenerBtnEl = document.querySelector('.js-remove-listener');

const onSwapBtnElClick = () => {
  imgEl.src = 'https://picsum.photos/200/300';
  imgEl.alt = 'random image';
};

swapBtnEl.addEventListener('click', onSwapBtnElClick);

removeListenerBtnEl.addEventListener('click', () => {
  console.log('Hello!');

  swapBtnEl.removeEventListener('click', onSwapBtnElClick);
});
