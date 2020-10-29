

// Parallax Effects
const parallax = document.querySelector('.landing-parallax');

window.addEventListener('scroll', () => {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * -.4 + "px";
});




