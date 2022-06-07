const randomColor = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
};

document.querySelectorAll('.section').forEach(el => {
  el.style.backgroundColor = `#${randomColor()}`;
});

const targetSecEl = document.querySelector('.target-section');

const intersectionObserverOptions = {
  root: null,
  rootMargin: '0px 0px 400px 0px',
  threshold: 1.0,
};

const intersectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }

    console.log(entry);
  });
}, intersectionObserverOptions);

intersectionObserver.observe(targetSecEl);
