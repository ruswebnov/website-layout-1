$(document).ready(function(){

	//Slider section make
	$('.slider-small').slick({
		arrows:true, //стрелочки
		dots:false, //точки
		adaptiveHeight:true,
		slidesToShow:4, //сколько показвать слайдов
		asNavFor:".slider-big",
	});


	$('.slider-big').slick({
		arrows:false,
		asNavFor:".slider-small",
		responsive:[        //адаптив
			{
				breakpoint: 576,
					settings: {
						arrows: true,
				}
			},
			
		]
	});


	//Slider section reviews
	$('.slider__review').slick({
		arrows:true,
		slidesToShow:3,
		infinite:true,
		autoplay:true,
		speed:700,
		responsive:[        //адаптив
			{
				breakpoint: 920,
					settings: {
						slidesToShow:2,
				}
			},
			{
				breakpoint: 680,
				settings:{
					slidesToShow:1,
				}
			}
			
		]

	});


	//popup-form
	$("#btn-popup*").on('click', function(){
		$('.overlay ').fadeIn(700);
	});
	$('.popup-close').on('click', function(){
		$('.overlay').fadeOut(700);
	})


	//popup-more
	$('.product__item-btn').on('click', function() {
		$('.overlay-more').fadeIn(700);
	});

	$('.popup-close').on('click', function() {
		$('.overlay-more').fadeOut(700);
	})


});