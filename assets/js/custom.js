(function ($) {

	var office_base_js = {

		__init: function () {

			var self_obj = this;

			office_base_js.AOS_load();

			$(document).ready(this.initialize_ele);

			$(window).scroll(this.scroll_init);

			$(window).resize(this.resize_function);

			$('.tabs-block li').on('click', this.tab_block);

		},



		initialize_ele: function () {

			var tl = new TimelineMax();

			console.log("Ready");
			office_base_js.slider_load();
			office_base_js.shape_Size();
			office_base_js.action_area_h();
			office_base_js.toggle_Menu();
			office_base_js.atag_link();
			
		},

		toggle_Menu: function () {

			jQuery(document).ready(function(){
				jQuery(".toggle__menu").click(function(){
					jQuery(".toggle__menu").toggleClass("open");
					jQuery(".header__menu").toggleClass("active");
					jQuery("body").toggleClass("menu-open");
					
					
				});
				jQuery(".header__menu ul li").click(function(){
					jQuery(".toggle__menu").toggleClass("open");
					jQuery(".header__menu").toggleClass("active");
					jQuery("body").toggleClass("menu-open");
					
				});
			});
		},
		scroll_init: function () {

			if ($(this).scrollTop() > 60) {



				$('.header').addClass('fixed');



			} else {



				$('.header').removeClass('fixed');



			}

		},

		resize_function: function () {

			console.log("resize");

			// office_base_js.shape_Size();

			office_base_js.action_area_h();
			office_base_js.slider_load();
			office_base_js.atag_link();
			office_base_js.shape_Size();
		},

		shape_Size: function () {

			var start_element = $('.tabs-block li');

			var $label = $('.fclp__shape');
			var $article = $('.fclp__article');

			var initWidth = start_element.width();
			var tabsx = $(".tabs-block").offset();
			$label.css({'width' : initWidth, 'left' : tabsx.left});

			$('.tabs-block li').removeClass('active');
			$article.removeClass('show');
			$('.tabs-block li.active-a').addClass('active');
			$('.num_' + 1).addClass('show');

		},

		atag_link: function(){
			$(document).on('click', '.menu-item a[href^="#"], a[href^="#"].btn-book-appointment', function(e) {
				// target element id
				var id = $(this).attr('href');
				console.log(id);
				
				// target element
				var $id = $(id);
				if ($id.length === 0) {
					return;
				}
				
				// prevent standard hash navigation (avoid blinking in IE)
				e.preventDefault();
				
				// top position relative to the document
				var menuh = $('.header__main').outerHeight();
				var pos = $id.offset().top - menuh;
				// animated top scrolling
				$('body, html').animate({scrollTop: pos});
			});

		},

		win_Scroll: function(evnt){
			var scrollPos = $(document).scrollTop();
			$('.header__menu a').each(function () {
				var currLink = $(this);
				var refElement = $(currLink.attr("href"));
				if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
					$('.header__menu ul li a').removeClass("active");
					currLink.addClass("active");
				}
				else{
					currLink.removeClass("active");
				}
			});
		},

		tab_block: function (e) {
			e.preventDefault();

			var tl = new TimelineMax();

			var $label = $('.fclp__shape');

			var $this = $(this);

			var el_width = $this.width();

			var offset_left = $this.offset();

			var initTabNum = $this.data('menu');

			var $article = $('.fclp__article');

			var $show = $('.show');



			function step_1() {

				$article.removeClass('show')

			}



			function step_2() {

				$('.num_' + initTabNum).addClass('show')

			}



			if (!tl.isActive()) {

				tl.to($article, 0.05, {opacity: 1, ease: Back.easeOut, onComplete: step_1})
				.fromTo($('.num_' + initTabNum), 0.75, {onStart: step_2, opacity: 1}, {opacity: 1, ease: Power4.easeOut, immediateRender: false})

				console.log(el_width);

				$label.offset({left: offset_left.left}).css('width', el_width)



				$('.tabs-block li').removeClass('active');

				$this.addClass('active');

			}

		},

		action_area_h: function (){

			var highest = 0;



			function sortNumber(a, b) {

				return a - b;

			}

			var heights = new Array();

			$('.fclp__article').each(function () {

				$(this).css('height', 'auto');

				heights.push($(this).outerHeight());

				heights = heights.sort(sortNumber).reverse();

			});

			highest = heights[0];

			$('.fclp__article').each(function () {

				$(this).css('height', highest);

			});



			console.log(highest);

			var mhe = $('.tabs-block li').outerHeight();

			var tmhf = highest + mhe

			$('.fclp__actionarea__tab--block').css('height', (tmhf + 50));

			console.log(tmhf);



		},



		AOS_load: function () {

			AOS.init({

				once: true,

			});

		},



		slider_load: function () {

			// Assign some jquery elements we'll need

			var $swiper = $(".swiper-container");

			var $bottomSlide = null; // Slide whose content gets 'extracted' and placed

			// into a fixed position for animation purposes

			var $bottomSlideContent = null; // Slide content that gets passed between the

			// panning slide stack and the position 'behind'

			// the stack, needed for correct animation style



			var mySwiper = new Swiper(".swiper-container", {

				spaceBetween: 150,

				slidesPerView: 3,

				centeredSlides: true,

				roundLengths: true,

				loop: true,

				navigation: {

					nextEl: ".swiper-button-next",

					prevEl: ".swiper-button-prev"

				},

				breakpoints: {
					2800: {

						spaceBetween: 250,

					},

					2200: {

						spaceBetween: 190,

					},

					1900: {

						spaceBetween: 150,

					},

					768: {

						spaceBetween: 120,

						slidesPerView: 2

					},

					767: {

						slidesPerView: 2

					},

					320: {

						spaceBetween: 20,

						slidesPerView: 1

					}

				}

			});

		},

	};



	office_base_js.__init();

})(jQuery);



