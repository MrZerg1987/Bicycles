'use strict';

// Mobile-menu

var navToggle = document.querySelector('.main-nav__toggle');
var navList = document.querySelector('.main-nav__list');
var navLinks = document.querySelectorAll('.main-nav__link');

navList.classList.add('list-close');
navToggle.classList.remove('toggle-no-js');
navList.classList.remove('nav-no-js');

navToggle.addEventListener('click', function () {
  navList.classList.toggle('list-close');
  navToggle.classList.toggle('toggle-close');
  document.body.classList.toggle('scroll-lock');
});

navLinks.forEach(function (navLink) {
  navLink.addEventListener('click', function () {
    navList.classList.toggle('list-close');
    navToggle.classList.toggle('toggle-close');
    document.body.classList.remove('scroll-lock');
  });
});

// Move to

var smoothLinks = document.querySelectorAll('.main-nav__link');

smoothLinks.forEach(function (smoothLink) {
  smoothLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    var id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
