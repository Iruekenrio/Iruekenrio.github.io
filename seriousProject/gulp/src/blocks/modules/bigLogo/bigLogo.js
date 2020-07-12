
// $(document).ready(function(){
//   $('.banner').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     adaptiveHeight: true
//   });
// });
// $('.banner').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     adaptiveHeight: true
//   });

// document.addEventListener("DOMContentLoaded", function(event) {
//   console.log("DOM fully loaded and parsed");
// });
$(document).ready(function() {
    if($('.banner').length > 0){
      $('.banner').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
      });
    }
});





//   $(document).ready(function() {
//     2
//           // Обработчик для .ready()
//     3
//       });
