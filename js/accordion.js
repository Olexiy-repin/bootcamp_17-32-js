'use strict';
const openPanelBtnEls = document.querySelectorAll('.js-accordion-btn');

const onPanelBtnElClick = event => {
  const panelBtnEl = event.currentTarget;
  const panelEl = panelBtnEl.nextElementSibling;

  panelEl.classList.toggle('active');
};

openPanelBtnEls.forEach(el => {
  el.addEventListener('click', onPanelBtnElClick);
});
