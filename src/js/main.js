
// Press image to display
$(document).ready(function(){
  $('.slides a').click(function(e){
    e.preventDefault();
    $('.img-display img').attr("src", $(this).attr("href"));
  });
});

const homeGallery = document.querySelector('.home-gallery');
//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
//Image Display & Anchor Tags
const display = document.querySelector('.img-display img');
const images = document.querySelectorAll('.slides li a');
//.Slides Ul & Last Image Link
const slides = document.querySelector('.slides');
const lastImg = slides.lastElementChild.querySelector('a').href;
console.log(lastImg);
console.log(display.src);

// If the image displayed is the last imgage, then hide the next button.

homeGallery.addEventListener('click', (event) => {
  console.log(event.target);
  if (display.src == lastImg) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.style.display = 'block';
  }
});



 nextBtn.addEventListener('click', () => {
  let link = findMatch();

  function findMatch(){
    for (let image of images) {
      console.log(image);
      if (display.src == image.href) {
        console.log('match');
        let linkMatch = image;
        // console.log(linkMatch);
        return(linkMatch); 
      } 
    } 
  }
  console.log(link); 

  let linkParent = link.parentNode;
  console.log(linkParent);
  let linkNextUncle = linkParent.nextElementSibling;
  console.log(linkNextUncle);
  let linkNextCousin = linkNextUncle.querySelector('a');
  console.log(linkNextCousin);
  let cousinLink = linkNextCousin.href;
  console.log(cousinLink);
  display.src = cousinLink;  
});

