// mobile menu
var navToggle = document.querySelector('.header__menu-icon');

navToggle.addEventListener('click', function() {
  document.body.classList.toggle('navigation-is-open');
  navToggle.classList.toggle('header__menu-icon--close-x');
});

// smooth scrolling
$(document).ready(function() {

  var scrollLink = $('.scroll');

  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - 100
    }, 1000);
  });

})

//view more button
$(document).ready(function() {



  $('.projects__item').slice(0, 0).show();
  $("#viewMore").on('click', function(e) {
    e.preventDefault();
    $('.projects__item:hidden').slice(0, 4).slideDown();
    if ($('.projects__item:hidden').length == 0) {
      $("#load").fadeOut('slow');
      $("#viewMore").remove();
    }
  });

})
