// let navMain = document.querySelector('.header-navigation');
// let navToggle = document.querySelector('.header-navigation__toggle');

// navMain.classList.remove('header-navigation--nojs');

// navToggle.addEventListener('click', function () {
//   if (navMain.classList.contains('header-navigation--closed')) {
//     navMain.classList.remove('header-navigation--closed');
//     navMain.classList.add('header-navigation--opened');
//   } else {
//     navMain.classList.add('header-navigation--closed');
//     navMain.classList.remove('header-navigation--opened');
//   }
// });

const button = document.querySelector('.page__button');
const reserv = document.querySelector('.page__reserv');
const item = document.querySelector('.page__item');
const payment = document.querySelector('.payment');

button.onclick = function toggleNav() {
  reserv.classList.add('page__reserv--closed');
  payment.classList.remove('payment--opened')
  item.classList.add('page__item--opened')
}