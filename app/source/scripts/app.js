// mobile-menu
var navToggle = document.querySelector('.header__menu-icon');


navToggle.addEventListener('click', function(){
  document.body.classList.toggle('navigation-is-open');
  navToggle.classList.toggle('header__menu-icon--close-x');
});
