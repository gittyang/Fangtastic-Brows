

// Parallax Effects
const parallax = document.querySelector('.landing-parallax');
// console.log(parallax);

window.addEventListener('scroll', () => {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * -.4 + "px";
});



// FAQ
$(document).ready(function() {

  // Slide Out Animation Toggle
  $('.info-item-heading').on('click', function(event) {

    if (window.matchMedia('(min-width: 576px)').matches) {

      // this toggles the slide in slide out animation
      const $body = $(this).next();
      console.log('hi');
      $body.slideToggle(function(){
        $(this).removeClass('hide');
        $(this).addClass('show');
        console.log('toggle worked');
      });
  
      // this toggles the minus and plus sign
      $(this).children().children('.faq-plus').toggleClass('hide');
      // console.log('hide worked');

    } else {
      console.log('screen too small');
    }

  });


  // On page load of sm, display body
  if ( window.matchMedia('(max-width: 576px)').matches ) {

    // on page load, if window screen is less than 576px

    // display the faq body paragraph
    $('.info-item-body').css('display', 'block');
    console.log('shown')

  }

  // Set timeout for resize event
  var resizeId;
  $(window).resize(function() {

    clearTimeout(resizeId);
    resizeId = setTimeout(resize, 10)

  });

  // On resize to sm, display body
  function resize () {

    if ( window.matchMedia('(max-width: 576px)').matches ) {

      // when window is resized and if screen is below 576px

      // if a faq icon is open (-), then close to (+)
      if( $('.faq-plus').hasClass('hide') ) {

        $('.faq-plus').removeClass('hide');
        
      }

      // display the faq body paragraph
      $('.info-item-body').css('display', 'block');
      console.log('shown after resize')

    } else {

      // otherwise, for m screens or higher, display original state

      const show = document.querySelectorAll('.show');
      // console.log(show);
      for (i = 0; i < show.length; i ++) {
        const sBodies = show[i];
        console.log(sBodies);
      }
      $('.show').css('display', 'block');

      const hide = document.querySelectorAll('.hide');
      // console.log(hide);
      for (i = 0; i < hide.length; i ++) {
        const hBodies = hide[i];
        console.log(hBodies);
      }
      $('.hide').css('display', 'none');

    }

  };

});




















































// const $body = $('.info-item-body');
// // console.log($body);
// // const $displayedBody = $('.info-item-body').addClass('show');
// // console.log($displayedBody); 

// // const $dBody = $('.show');

// // .filter(function () { 
// //   return $('.info-item-body').hasClass('show');
// // });

// // console.log($dBody);


// const $head = $('.info-item-heading');
// console.log($head);

// const $shows = $('.shows');
// console.log($shows);

// $head.click(function(){
//   const $dBody = $('.show');
//   console.log($dBody);
//   // console.log($body);
// });




