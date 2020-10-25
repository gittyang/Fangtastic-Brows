

// Parallax Effects
const parallax = document.querySelector('.landing-parallax');
console.log(parallax);

window.addEventListener('scroll', () => {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * -.4 + "px";
});



// FAQ
$(document).ready(function() {

  $('.info-item-heading').on('click', function(event) {

    if (window.matchMedia('(min-width: 576px)').matches) {

      // this toggles the slide in slide out animation
      $(this).next().slideToggle(function(){
        console.log('toggle worked');
      });
  
      // this toggles the minus and plus sign
      $(this).children().children('.faq-plus').toggleClass('hide');
      console.log('hide worked');

    } else {
      console.log('screen too small');
    }

  });



  // window.onresize = function(event) {
    
  //   if (window.matchMedia('(max-width: 576px)').matches) {

  //     $('.info-item-body').css('display', 'block');
  //     console.log('shown')

  //   } else {

  //     $('.info-item-body').css('display', 'none');
  //     console.log('hid')

  //   }

  // }



  window.onresize = function(event) {
  
    if (window.matchMedia('(min-width: 576px)').matches ) {

      console.log('do nothing');
  
    } else if (window.matchMedia('(max-width: 576px)').matches) {

      // when window is resized and if screen is below 576px

      // 1. if a faq icon is open (-), then close to (+)
      if( $('.faq-plus').hasClass('hide') ) {

        $('.faq-plus').removeClass('hide');
        
      }

      // 2. display the faq body paragraph
      $('.info-item-body').css('display', 'block');
      console.log('shown')

    } else {
      
      // currently not working
      $('.info-item-body').css('display', 'none');
      console.log('else');

    }

  };



});



