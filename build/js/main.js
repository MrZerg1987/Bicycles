'use strict';

// Mobile-menu

var navToggle = document.querySelector('.main-nav__toggle');
var navList = document.querySelector('.main-nav__list');
var navLinks = document.querySelectorAll('.main-nav__link');

var openMenu = function () {
  navList.classList.add('list-close');
  navToggle.classList.add('main-nav__toggle-close');
  document.body.classList.remove('scroll-lock');
};

var closeMenu = function () {
  navList.classList.remove('list-close');
  navToggle.classList.remove('main-nav__toggle-close');
  document.body.classList.add('scroll-lock');
};

var toggleMenu = function () {
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      if (!navList.classList.contains('list-close')) {
        openMenu();
      } else {
        closeMenu();
      }
    });
  }
};

var clickLink = function () {
  navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function () {
      if (!navList.classList.contains('list-close')) {
        openMenu();
      }
    });
  });
};

// Move to

var moveTo = new window.MoveTo({
  duration: 2000,
  easing: 'easeOutQuart',
});

var initSmoothScroll = function () {
  var smoothLinks = document.querySelectorAll('.main-nav__link');
  if (smoothLinks.length) {
    smoothLinks.forEach(function (link) {
      moveTo.registerTrigger(link);
      document.activeElement.blur();
    });
  }
};

var initJs = function () {
  if (navList) {
    navList.classList.add('list-close');
    navList.classList.remove('nav-no-js');
  }
  if (navToggle) {
    navToggle.classList.remove('toggle-no-js');
  }
  toggleMenu();
  clickLink();
  initSmoothScroll();
};

initJs();
