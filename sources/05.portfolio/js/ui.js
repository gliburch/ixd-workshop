function resetSectionHeight() {
  var section = $('.section-stack > section');
  section.css({
    'height': $(window).height()
  });
}

function resetSidePosition() {
  var nav = $('.section-nav');
  nav.css({
    'margin-top': -nav.height()/2
  }); 
}

function sectionFocusTo(index) {
  var nav_top = $('header nav li');
  var nav_side = $('.section-nav li');
  var section = $('.section-stack > section');
  nav_top.removeClass('active');
  nav_side.removeClass('active');
  $(nav_top[index]).addClass('active');
  $(nav_side[index]).addClass('active');
  $('html, body').animate({
    scrollTop: $(section[index]).offset().top
  }, '1000');
}

$(function() {

  resetSectionHeight();
  resetSidePosition();
  
  $(window).resize(function() {
    resetSectionHeight();
    resetSidePosition();
  });

  $($('header nav li')[0]).addClass('active');
  $($('.section-nav li')[0]).addClass('active');

  $('header nav li a').on('click', function(e) {
    e.preventDefault();
    var n = $(this).closest('li').index();
    sectionFocusTo(n);
  })

  $('.section-nav li button').on('click', function() {
    var n = $(this).closest('li').index();
    sectionFocusTo(n);
  })


})