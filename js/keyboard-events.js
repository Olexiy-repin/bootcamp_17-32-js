'use strict';
/*
 * События клавиатуры. keypress, keydown, keyup
 */

const outputEl = document.querySelector('.js-output');

document.addEventListener('keyup', event => {
  outputEl.insertAdjacentHTML('afterbegin', `code: ${event.code} <br> key: ${event.key} <hr>`);
});
