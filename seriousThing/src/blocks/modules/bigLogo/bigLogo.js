
import "slick-carousel";

// $('.banner').slick({
//   arrows:false
// });

// $('.banner').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3
// });
// $(document).ready(function(){
//   $(".banner").slick({
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
    if($('.slider').length > 0){
      $('.slider').slick({
        arrows:false,
        dots: true,
        infinite: true,
        // autoplay: 1500,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: true,
      });
    }
});





//   $(document).ready(function() {
//     2
//           // Обработчик для .ready()
//     3
//       });
