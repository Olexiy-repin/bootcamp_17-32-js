'use strict';

const backdropEl = document.querySelector('.js-backdrop');
const openModalBtnEl = document.querySelector('.js-modal-open');
const closeModalBtnEl = document.querySelector('.js-modal-close');

const onModalClose = () => {
  backdropEl.classList.remove('is-open');

  document.removeEventListener('keydown', onEscKeyPress);
};

const onEscKeyPress = event => {
  if (event.code === 'Escape') {
    console.log('Hello!');

    onModalClose();
  }
};

openModalBtnEl.addEventListener('click', event => {
  backdropEl.classList.add('is-open');

  document.addEventListener('keydown', onEscKeyPress);
});

closeModalBtnEl.addEventListener('click', event => {
  onModalClose();
});
