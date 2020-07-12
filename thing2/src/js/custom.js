(function ($) {

	/*==========FOR SVG ==============*/
	svg4everybody();

	/*========== TRANSITION SCROLL ==============*/

	$('.scroll').on("click", function (e) {
		e.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
	});


	/*----------------------------------------
	 VALIDATIONS JQUERY FORM
	 ----------------------------------------*/
	// $(function () {
	// 	/* RULES */
	// 	$("#form-messadge").validate({
	// 		focusCleanup: true,
	// 		focusInvalid: false
	// 	});
	// });


	/*----------------------------------------
	 SLICK CAROUSELS
	 ----------------------------------------*/


	// $('.carousel').slick({
	// 	infinite: false,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows: false,
	// 	dots: true,
	// 	responsive: [
	// 	{
	// 		breakpoint: 768,
	// 		settings: {
	// 			slidesToShow: 2
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 481,
	// 		settings: {
	// 			slidesToShow: 1
	// 		}
	// 	}
	// ]
	// });


	/*----------------------------------------
	 COLLAPSE
	 ----------------------------------------*/
	var collapseBtn = $('.collapse-header'),
		collapsePanel = $('.collapse-panel');

	collapseBtn.on('click', function (event) {
		event.preventDefault();
		$(this).toggleClass('clicked').next().slideToggle().toggleClass('active');
	});




})(jQuery);
