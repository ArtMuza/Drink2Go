let nav = document.querySelector('.nav__list');
let navToggle = document.querySelector('.nav__toggle');

const getButton = () => {
  nav.classList.remove('nav__list--nojs');

  navToggle.addEventListener('click', function () {
    if (nav.classList.contains('nav__list--closed')) {
      nav.classList.remove('nav__list--closed');
      nav.classList.add('nav__list--opened');
    } else {
      nav.classList.add('nav__list--closed');
      nav.classList.remove('nav__list--opened');
    }
  });

}

export { getButton }
