

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

    $(this).next().slideToggle('slow', function(){
      console.log('toggle worked');
    });

    $(this).children().children('.faq-plus').toggleClass('hide');
    console.log('hide worked');

  });

});



