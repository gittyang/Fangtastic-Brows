// // Press to enlarge
// $(document).ready(function(){
//   $('.thumb a').click(function(e){
//     e.preventDefault();
//     $('.imgBox img').attr("src", $(this).attr("href"))
//   });
// });

console.log('hi');

// Press to display
$(document).ready(function(){
  $('.thumb a').click(function(e){
    e.preventDefault();
    $('.img-display img').attr("src", $(this).attr("href"));
  });
});