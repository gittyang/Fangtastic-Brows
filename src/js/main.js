
// Press image to display w/ Jquery
$(document).ready(function(){
  $('.slides a').click(function(e){
    e.preventDefault();
    $('.img-display img').attr("src", $(this).attr("href"));
  });
});

// Home Gallery Div
const homeGallery = document.querySelector('.home-gallery');
//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
//Image Display & Anchor Tags
const display = document.querySelector('.img-display img');
const images = document.querySelectorAll('.slides li a');
//.Slides Ul, First & Last Image Link
const slides = document.querySelector('.slides');
const lastImg = slides.lastElementChild.querySelector('a').href;
const firstImg = slides.firstElementChild.querySelector('a').href;


// If image = last => hide nextBtn. If image = first => hide prevBtn
homeGallery.addEventListener('click', (event) => {
  if (display.src == lastImg) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.style.display = 'block';
  }

  if (display.src == firstImg) {
    prevBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'block';
  }
});

// Next Button Event
 nextBtn.addEventListener('click', () => {
// Find match between display image and li images. Return to link variable.
  let link = findMatch();
  function findMatch(){
    for (let image of images) {
      if (display.src == image.href) {
        let linkMatch = image;
        return(linkMatch); 
      } 
    } 
  }
// Take current link and find NEXT item link. Display it.
  let nextCousinLink = 
    link
    .parentNode
    .nextElementSibling
    .querySelector('a')
    .href;
  display.src = nextCousinLink;  
});

// Previous Button Event
prevBtn.addEventListener('click', () => {
  // Find match between display image and li images. Return to link variable.
    let link = findMatch();
    function findMatch(){
      for (let image of images) {
        if (display.src == image.href) {
          let linkMatch = image;
          return(linkMatch); 
        } 
      } 
    }
  // Take current link and find PREVIOUS item link. Display it.
    let prevCousinLink = 
      link
      .parentNode
      .previousElementSibling
      .querySelector('a')
      .href;
    display.src = prevCousinLink;  
  });
