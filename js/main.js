'use strict';

$(document).ready(function(){
	var viewportHeight = $('.header').outerHeight();
	$('.header').css({ height: viewportHeight });

	$(".navigation__link").click(function(e) {
		e.preventDefault();
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html,body").animate({
			scrollTop: destination
		}, 600);
		return false;
	});

	$(".scroll").click(function(e) {
		e.preventDefault();
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html,body").animate({
			scrollTop: destination
		}, 500);
		return false;
	});

	var $grid = $('.grid').imagesLoaded( function() {
	  // init Isotope after all images have loaded
	  $grid.isotope({
	    // options...
	    itemSelector: '.grid_item',
	    layoutMode: 'fitRows',
	    layoutMode: 'masonry',
	    masonry: {
	    	horizontalOrder: true,
	    	percentPosition: true,
	    }
	});
	});

	$('.portfolio__menuItem').click(function(e){
		e.preventDefault;
		$('.portfolio__menuItem').removeClass('active');
		$(this).addClass('active');

		var selector = $(this).attr('data-filter');
		$('.grid').isotope({
			filter: selector
		});
		return false;
	});

	$(document).ready(function() {
		$('.team__carousel').slick({
			slidesToScroll: 1,
			slide: 'div',
			arrows: false,
			dots: true,
			infinite: true,
			arrows: false,
			dotsClass: 'slick-dots dots'
		});
	});

	(function($) {
		$('.contactUs__button').click(function() {
			var $this = $(this);   
			var classModal = '.' + $this.data('modal');
			$(classModal).toggleClass('open');
		})

		$('.overlay').click(function() {
			var $this = $(this);   
			var openModal = $this.siblings('.open');
			openModal.toggleClass('open');
		})
	})(jQuery);

	$('.testimonials__carousel').slick({
		dots: true,
		dotsClass: 'slick-dots dots',
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 1300
	});

	var map = $('.map')[0];
	var uluru = {lat: 49.5687689, lng: 34.5858791};
	var mymap = new google.maps.Map(map, {
		center: uluru,
		zoom: 15
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: mymap,
		icon: "img/map.svg"
	});
});


