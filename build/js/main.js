

// Parallax Effects
const parallax = document.querySelector('.landing-parallax');
console.log(parallax);

window.addEventListener('scroll', () => {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * -.4 + "px";
});


// FAQ

$(document).ready(function() {

  $('.faq-wrapper').on('click', function(event) {

    $(this).parent().next().slideToggle('slow', function(){
      console.log('toggle worked');
    });

    $(this).children('.faq-plus').toggleClass('hide');
    console.log('hide worked');

  });

});



