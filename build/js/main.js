
// --- Parallax Effects ---
const parallax = document.querySelector('.landing-parallax');

window.addEventListener('scroll', () => {

  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * -.4 + "px";

});

// --- Navbar Drop Down Menu on SM Devices

// Nav drop down toggle
function toggleNav () {

  // .unbind from multiple resize events
  $('.nav-drop-down').unbind('click').click(function(event) {

    $('.nav-links').slideToggle();
  
  });

}

// On page load of sm or m devices, wait for toggle
if ( window.matchMedia('(max-width: 576px)').matches )  {

  toggleNav();

}

// Set timeout for resize event
// var resizeId;
// $(window).resize(function() {
//   clearTimeout(resizeId);
//   resizeId = setTimeout(resize, 1)
// });

// On resize to sm, wait for toggle
window.onresize = function(event) {

  if (window.matchMedia('(max-width: 576px)').matches)  {
     
    $('.nav-links').css('display', 'none');
    toggleNav();
     
  } else {
  
    $('.nav-links').css('display', 'block');
  
  }

};




