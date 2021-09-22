'use strict';

// Mobile-menu

var navToggle = document.querySelector('.main-nav__toggle');
var navList = document.querySelector('.main-nav__list');
var navLinks = document.querySelectorAll('.main-nav__link');

navList.classList.add('list-close');
navToggle.classList.remove('toggle-no-js');
navList.classList.remove('nav-no-js');

navToggle.addEventListener('click', function () {
  if (!navList.classList.contains('list-close')) {
    navList.classList.add('list-close');
    navToggle.classList.add('toggle-close');
    document.body.classList.remove('scroll-lock');
  } else {
    navList.classList.remove('list-close');
    navToggle.classList.remove('toggle-close');
    document.body.classList.add('scroll-lock');
  }
});

navLinks.forEach(function (navLink) {
  navLink.addEventListener('click', function () {
    if (!navList.classList.contains('list-close')) {
      navList.classList.add('list-close');
      navToggle.classList.add('toggle-close');
      document.body.classList.remove('scroll-lock');
    }
  });
});

// Move to

var moveTo = new window.MoveTo({
  duration: 2000,
  easing: 'easeOutQuart',
});

var smoothLinks = document.querySelectorAll('.main-nav__link');
if (smoothLinks.length) {
  smoothLinks.forEach(function (link) {
    moveTo.registerTrigger(link);
    document.activeElement.blur();
  });
}
