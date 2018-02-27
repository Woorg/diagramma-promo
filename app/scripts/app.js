import svg4everybody from 'svg4everybody';
// import $ from 'jquery';
import slick from 'slick-carousel';
import 'magnific-popup';
import mask from "jquery-mask-plugin";
import printThis from "print-this";

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

		$('.nav__list.nav__list_subnav > .nav__link').on('click', function (e) {
			e.preventDefault();
		});

		var $carousel = $('.objects__carousel .carousel__list');
		if ($carousel.length) {
			$carousel.slick({
				slidesToShow: 4,
				responsive: [
					{
					breakpoint: 1200,
						settings: {
						  slidesToShow: 3
						}
					},
					{
					breakpoint: 991,
						settings: {
						  slidesToShow: 3
						}
					},
					{
					breakpoint: 768,
						settings: {
						  slidesToShow: 2
						}
					},
					{
					breakpoint: 425,
						settings: {
						  slidesToShow: 1
						}
					}

				]
			});

		}
		var $cardSlider = $('.card__slider');
		var $cardThumbs = $('.card__thumbs');


		$cardSlider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.card__thumbs'
		});

		$cardThumbs.slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.card__slider',
			dots: false,
			centerMode: false,
			focusOnSelect: true,
			mobileFirst: true
		});


		// Tabs
		var tabsNavLink = $('.tabs__item');
		var tabsNavLinkActive = 'tabs__item_active';
		var tab = $('.tabs__tab');
		var tabActive = 'tabs__tab_active';

		tabsNavLink.click(function (event) {
			event.preventDefault();
			$(this).addClass(tabsNavLinkActive);
			$(this).siblings().removeClass(tabsNavLinkActive);
			var tabCurrent = $(this).children().attr('href');
			tab.not(tabCurrent).removeClass(tabActive).hide();
			$(tabCurrent).fadeIn(50).addClass(tabActive).show();
			if ($('.tabs__tab_active .team__item').length < 3) {
				console.log('true');
				$('.tabs__tab_active .team__list').addClass('team__list_quanted-low');
			}
		});

		// Objects-full magnific

		$('.carousel__link').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

		$('.objects-full__link').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

		$('.history__image').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

		$('.team__image').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

		$('.service__sertificate').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});


		$('.examples__link').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});


		$('.card__slider-link').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

		$('.objects-full__link').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

		$('.objects-full__link').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});

		// File input

		$('.form__label_file').on('change', '.form__file-input', function(event) {
			$(this).parent().parent().siblings('.form__file-text').html(this.value);
		});

		// mask

		var $formPhone = $('.form__field_phone input');

		$formPhone.mask("+ 7 (999) 999-99-99",
			{
				placeholder: "+7 (...)"
			}
		);

		// Popups

		$('.open-popup').magnificPopup({
			type:'inline',
			midClick: true
		});

		$('.related__button').click(function(e){
			e.preventDefault();
			$('.related__item').removeClass('related__item_hidden');
			$(this).hide();
		});

		$('.card__print').on('click', function(e) {
			e.preventDefault();
			$('.tablepress').printThis({
				importCSS: false,
				loadCSS: false,
				header: $('.card__title'),
				removeScripts: true
			});
		});

		$('.card__download').on('click', function(e) {
			e.preventDefault();
		});

		$('.card__button').on('click', function () {
			let $hiddenInput = $('input[name=prod_title]');
			let $productTitle = $('.card__title').text();
			$hiddenInput.val($productTitle);
		});

		$('.nav__trigger').on('click', function () {
			$(this).toggleClass('nav__trigger_active');
		});

		// class to first element in filter

		$(document).on('facetwp-loaded', function() {
			$.each(FWP.facets, function(name, vals) {
				if (FWP.facets[name].length > 0) {
					$('.facetwp-facet-' + name).addClass('is-active');
				}
				else {
					$('.facetwp-radio:first-child').addClass('is-passive');
				}
			});
			let catFilter = $('.catalog__nav .facetwp-radio').length;
			console.log(catFilter);
			if (catFilter < 2) {
				$('.catalog__nav').hide();
			}
		});

		if( $('.dd_last_viewed').length === 0 ) {
			$('.catalog__in').css( 'padding-bottom', 0 );
		}


	});

})(jQuery);
