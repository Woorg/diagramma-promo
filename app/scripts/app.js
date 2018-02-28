import svg4everybody from 'svg4everybody';
import $ from 'jquery';
// import slick from 'slick-carousel';
import 'magnific-popup';
import mask from "jquery-mask-plugin";
import 'jquery-validation';
// import printThis from "print-this";

(function ($) {

	var styles = [
		'padding: 0 9px',
		'background: #fff',
		'color: #000',
		'display: inline-block',
		'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2)',
		'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
		'line-height: 1.4',
		'text-align: left',
		'font-size: 12px',
		'font-weight: 400'
	].join(';');

	console.log('%c заказать html верстку', styles);
	console.log('%c gorlov35@gmail.com', styles);

	$(function() {
		svg4everybody();

		// Nav

		const $navTrigger = $('.header__trigger');
		const $navW = $('.header__w');
		const $pOverlay = $('.page__overlay');


		$('.header__trigger').on('click', function (e) {
			e.preventDefault();
			e.stopPropagation();


			$pOverlay.toggleClass('page__overlay_active');
			$navW.toggleClass('header__w_active');

			$(document).on('click', function(e) {
				if (!$(e.target).closest($navW).length) {
					$navW.removeClass('header__w_active');
					$pOverlay.removeClass('page__overlay_active');
				}
			});

		});


		let $hHeight = $('.header').height();

		$('.nav a, .logo').on('click', function(e) {
			var _scroll = $(this).attr('href');

			$navW.removeClass('header__w_active');
			$pOverlay.removeClass('page__overlay_active');

			if (_scroll != '#' && $(_scroll).length) {
				$('html, body').animate({ scrollTop: $(_scroll).offset().top - ($hHeight / 2) }, 800);
			}
		});


		$('.page').css('paddingTop', $hHeight );

		$(window).on('scroll', function(e) {
			if($(window).scrollTop() > 0 ) {
				$('.page').css('paddingTop', $hHeight );
				$('.header').addClass('header_fixed');
			} else {
				$('.page').css('paddingTop', $hHeight );

				$('.header').removeClass('header_fixed');
			}
		});

		$(window).on('resize', function(e) {
			$hHeight = $('.header').height();
			$(window).on('scroll', function(e) {
				if($(window).scrollTop() > $hHeight ) {
					$('.page').css('paddingTop', $hHeight );
					$('.header').addClass('header_fixed');
				} else {
					$('.page').css('paddingTop', $hHeight );

					$('.header').removeClass('header_fixed');
				}
			});
		});


		// mask

		var $formPhone = $('.form__field_phone input');

		$formPhone.mask("+ 7 (999) 999-99-99",
			{
				placeholder: "+7 (...)"
			}
		);



		// Faq

		let allPanels = $('.faq__list > dd').hide();
		let fT = $('.faq__list > dd.faq__desc_active').show();

		$('.faq__list dt').click(function() {
			$('.faq__list dt').removeClass('faq__term_active');
			$(this).addClass('faq__term_active');
			let $this = $(this);
			let $target =  $this.next();

			console.log($target);

			if(!$target.hasClass('faq__desc_active')){
				allPanels.removeClass('faq__desc_active').slideUp();
				$target.addClass('faq__desc_active').slideDown();
			}
			return false;

		});


		// Validation

		const subscribeForm = $('#subscribe-form');

		subscribeForm.validate({
			rules: {
				subscribe_email : {
					required: true,
					email: true
				}
			},
			message: {
				subscribe_email: {
					required: '',
					email: ''
				}
			}
		});

		// $.validator.seDefaults({
		// 	errorPlacement: function (error, element) {
		// 		element.parent()
		// 		attr("placeholder", error[0].outerText);
		// 	}
		// });




	});

})(jQuery);
