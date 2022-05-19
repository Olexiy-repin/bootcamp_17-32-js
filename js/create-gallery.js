'use strict';
const pictures = [
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/0/700/460',
    alt: 'laptop',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1/700/460',
    alt: 'developer',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/10/700/460',
    alt: 'forest',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/100/700/460',
    alt: 'beach',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1000/700/460',
    alt: 'mountain',
  },
];

/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
  </a>
</li>
*/

const galleryListEl = document.querySelector('.js-gallery');

// Функция для создание карточки makeGalleryCard(cardInfo)
const makeGalleryCard = ({ width, height, url, alt } = {}) => {
  // Создание li
  const listItemEL = document.createElement('li');
  listItemEL.classList.add('gallery-item');

  // Создание a
  const listLinkEl = document.createElement('a');
  listLinkEl.href = '#';
  listItemEL.append(listLinkEl);

  // Создание img
  const listImgEl = document.createElement('img');
  listImgEl.src = url;
  listImgEl.alt = alt;
  listImgEl.width = width;
  listImgEl.height = height;
  listLinkEl.append(listImgEl);

  return listItemEL;
};

// Перебор коллекции карточек через map
const cardsArr = pictures.map(el => {
  return makeGalleryCard(el);
});

// Вставка коллекции карточек на страницу
galleryListEl.append(...cardsArr);
