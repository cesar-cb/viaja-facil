(function() {
 $('.header__toggle').on('click', function() {
  $('.header__nav').toggleClass('header__nav--isOpen');
});

 $('.nav-list__link').on('click', function() {
  if ($('.header__nav').hasClass('header__nav--isOpen')) {
    $('.header__nav').removeClass('header__nav--isOpen')
  }
});



 $('.media').on('click', function() {
  var data = $(this).attr('data-location')
  $('html').css(
    {
      '-ms-overflow-y': 'hidden'
    }
    );

  $('.modal[data-location="'+ data +'"]').fadeIn();
 });

 $('.modal__back').on('click', function(e) {
  e.preventDefault()
  $('html').css(
    {
      '-ms-overflow-y': 'scroll'
    }
  );

  $(this).parents('.modal').fadeOut();
 });


 $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 110)
        }, 1000);
        return false;
      }
    }
  });


 // Get the modal
var modal = $('.w3modal')

// Get the button that opens the modal
var btn = $('.modal__button')

// Get the <span> element that closes the modal
var span = $('.w3close')

// When the user clicks on the button, open the modal 
btn.on('click', function() {
  modal.css('display', 'block');
});

// When the user clicks on <span> (x), close the modal
span.on('click', function() {
  modal.css('display', 'none');
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


}());



