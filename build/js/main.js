


// Parallax Effects
const parallax = document.querySelector('.landing-parallax');

window.addEventListener('scroll', () => {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * -.4 + "px";
});



// Navbar Drop Down Menu
if (window.matchMedia('(max-width: 576px)').matches)  {
  console.log('sm devices')

  const $dropDown = document.querySelector('.nav-drop-down');
  console.log($dropDown);
  
  $('.nav-drop-down').on('click', function(event) {
  
    const $navLinks = $('.nav-links');
    $navLinks.slideToggle(function() {
      console.log('toggle worked for nav');
    });
  
  });
   
}





