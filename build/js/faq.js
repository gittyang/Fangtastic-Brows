// FAQ
$(document).ready(function() {

    // Slide Out Animation Toggle
    $('.info-item-heading').on('click', function(event) {
  
      if (window.matchMedia('(min-width: 576px)').matches) {
  
        // this toggles the slide in slide out animation
        const $body = $(this).next();
        $body.slideToggle(function(){
          $(this).toggleClass('show');
          $(this).toggleClass('hide');
          console.log('toggle worked');
        });
    
        // this toggles the minus and plus sign icon
        $(this).children().children('.faq-plus').toggleClass('hidePlus'); 
  
      } 
  
    });
  
  
    // On page load of sm, display body
    if ( window.matchMedia('(max-width: 576px)').matches ) {
  
      // on page load, if window screen is less than 576px
  
      // display the faq body paragraph
      $('.info-item-body').css('display', 'block');
  
    }
  
    // Set timeout for resize event
    var resizeId;
    $(window).resize(function() {
  
      clearTimeout(resizeId);
      resizeId = setTimeout(resize, 1)
  
    });
  
  
    // On resize to sm, display body
    function resize () {
  
      if ( window.matchMedia('(max-width: 576px)').matches ) {
  
        // when window is resized and if screen is below 576px
  
        // display the faq body paragraph
        $('.info-item-body').css('display', 'block');
        console.log('shown after resize')
  
      } else {
  
        // otherwise, for m screens or higher, display original state
        $('.show').css('display', 'block');
  
        const hide = document.querySelectorAll('.hide');
        $('.hide').css('display', 'none');
  
      }
  
    };
  
  });