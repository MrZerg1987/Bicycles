'use strict';

// Mobile-menu

var navToggle = document.querySelector('.main-nav__toggle');
var navList = document.querySelector('.main-nav__list');
var navLinks = document.querySelectorAll('.main-nav__link');

var closeMenu = function () {
  navList.classList.add('list-close');
  navToggle.classList.add('main-nav__toggle-close');
  document.body.classList.remove('scroll-lock');
};

var openMenu = function () {
  navList.classList.remove('list-close');
  navToggle.classList.remove('main-nav__toggle-close');
  document.body.classList.add('scroll-lock');
  if (navList.scrollHeight > navList.offsetHeight) {
    navList.classList.add('scroll-unlock');
  }
};

var toggleMenu = function () {
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      if (!navList.classList.contains('list-close')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }
};

var clickLink = function () {
  navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function () {
      if (!navList.classList.contains('list-close')) {
        closeMenu();
      }
    });
  });
};

// Move to

var move = new window.MoveTo({
  duration: 2000,
  easing: 'easeOutQuart',
});

var initSmoothScroll = function () {
  var smoothLinks = document.querySelectorAll('.main-nav__link');
  if (smoothLinks.length) {
    smoothLinks.forEach(function (link) {
      move.registerTrigger(link);
      document.activeElement.blur();
    });
  }
};

// Form Validation

var form = document.querySelector('form');
var phoneInputs = form.querySelectorAll('input[type="tel"]');
var inputs = form.querySelectorAll('input');
var COUNTRY_CODE = '+7';
var len = COUNTRY_CODE.length;

var replacePhoneValue = function (el) {
  var matrix = '+7 (___) ___-__-__';
  var def = matrix.replace(/\D/g, '');
  var i = 0;
  var val = el.value.replace(/\D/g, '');
  if (def.length >= val.length) {
    val = def;
  }
  el.value = matrix.replace(/./g, function (a) {
    // eslint-disable-next-line no-nested-ternary
    return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
  });
};

var onInputPhoneInput = function (evt) {
  replacePhoneValue(evt.target);
};

var onFocusPhoneInput = function (evt) {
  if (!evt.target.value) {
    evt.target.value = COUNTRY_CODE;
    evt.target.addEventListener('input', onInputPhoneInput);
    evt.target.addEventListener('blur', onBlurPhoneInput);
    evt.target.addEventListener('keydown', onKeydownPhoneInput);
  }
};

var onKeydownPhoneInput = function (evt) {
  if (evt.target.selectionStart <= length && evt.keyCode !== 8 && evt.keyCode !== 46) {
    evt.target.setSelectionRange(len, len);
  }
  if ((evt.target.selectionStart === len || evt.target.selectionStart === 1) && evt.keyCode === 8) {
    evt.preventDefault();
  }
  if (evt.target.selectionStart === 1 && evt.keyCode === 46) {
    evt.preventDefault();
  }
};

var onBlurPhoneInput = function (evt) {
  if (evt.target.value === COUNTRY_CODE) {
    evt.target.value = '';
    evt.target.removeEventListener('input', onInputPhoneInput);
    evt.target.removeEventListener('blur', onBlurPhoneInput);
  }
};

var initPhoneMask = function () {
  if (phoneInputs.length) {
    phoneInputs.forEach(function (input) {
      input.addEventListener('focus', onFocusPhoneInput);
      if (input.value) {
        replacePhoneValue(input);
        input.addEventListener('input', onInputPhoneInput);
        input.addEventListener('blur', onBlurPhoneInput);
        input.addEventListener('keydown', onKeydownPhoneInput);
      }
    });
  }
};

var removeError = function () {
  var errors = form.querySelectorAll('.check-input');
  errors.forEach(function (error) {
    error.classList.remove('check-input');
  });
};

var checkInputsValidity = function () {
  inputs.forEach(function (input) {
    if (!input.value) {
      input.classList.add('check-input');
    } else {
      input.classList.remove('check-input');
    }
  });
};

var validateForm = function () {
  if (!form) {
    return;
  }
  form.noValidate = true;
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    removeError();
    checkInputsValidity();
  });
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
  initPhoneMask();
  validateForm();
};

initJs();
