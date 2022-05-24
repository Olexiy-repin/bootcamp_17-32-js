'use strict';

const randomColor = () =>
  '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

document.querySelectorAll('.section').forEach(section => {
  section.style.backgroundColor = randomColor();
});

const onDoucmentScroll = event => {
  console.log(window.pageYOffset);

  if (window.pageYOffset >= 800) {
    document.querySelector('.js-animated-section').classList.add('active');
    document.removeEventListener('scroll', throttledFunction);
  }
};

const throttledFunction = _.throttle(onDoucmentScroll, 300);

document.addEventListener('scroll', throttledFunction);
