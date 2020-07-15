
import "slick-carousel";

// $('.country__slider').slick({
//     dots: true,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ]
//   });
console.log(innerWidth)
let userWidth = innerWidth;
let count = 4;
let tumb = false
if (userWidth < 1200 && userWidth > 768){
  count = 3
}else if(userWidth < 768 && userWidth > 568){
  count = 2
}else if(userWidth < 569 && userWidth > 480){
  count = 1
  tumb = true
}else if(userWidth < 480){
  count = 1
  tumb = false
}
$(document).ready(function() {
    if($('.country__slider').length > 0){
      $('.country__slider').slick({
        arrows:true,
        // dots: true,
        infinite: true,
        centerMode: tumb,
        // autoplay: 1500,
        speed: 1000,
        slidesToShow: count,
        adaptiveHeight: true,
        nextArrow: '<div class = "rightW">',
        prevArrow: '<div class = "leftW">'
      });
    }
});
console.log(count)