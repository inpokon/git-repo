$(document).ready(function(){
 		 $('.header-contacts__button').on("click", function(){
 			 $('.overlay').show();
 	 	});
 		 $('.popup-close').on("click", function(){
 		 	$('.overlay').hide();
 	 	});


});
$(document).ready(function(){
		var link = $('.menu-link');
		var link_active = $('.menu-link_active');
		var menu = $('.menu-ul');
		var nav_link = $('.menu-ul a');

		link.click(function(){
		 link.toggleClass('menu-link_active');
		 menu.toggleClass('menu-ul_active');
		});
		nav_link.click(function(){
		 link.toggleClass('menu-link_active');
		 menu.toggleClass('menu-ul_active');
		});
});

/*Slick Script*/
   $('.production-slider-for').slick({
     autoplay: true,
     autoplaySpeed: 3500,
     arrows: false,
     slidesToShow: 1,
     slidesToScroll: 1,
     asNavFor: '.production-slider-nav',
   });
   $('.production-slider-nav').slick({
   	arrows: true,
   	slidesToShow: 4,
   	slidesToScroll: 1,
   	responsive: [
   	    {
   	      breakpoint: 576,
   	      settings: {
   	        slidesToShow: 1,
   	        slidesToScroll: 1
   	      }
   	    }
   	  ],
   	prevArrow: '<div class="production-arrow-prev"></div>',
				nextArrow: '<div class="production-arrow-next"></div>',
				asNavFor: '.production-slider-for',
				focusOnSelect: true,
   });
   $('.feedback-slider').slick({
   	autoplay: true,
    autoplaySpeed: 3500,
   	slidesToShow: 3,
   	prevArrow: '<div class="prev arrow"></div>',
			 nextArrow: '<div class="next arrow"></div>',
			 focusOnSelect: true,
			 responsive: [
			 {
			 breakpoint: 992,
			 settings: {
			 slidesToShow: 2,
			 }
			 },
			 {
			 breakpoint: 768,
			 settings: {
			 slidesToShow: 1,
			 prevArrow: '<button class="production-arrow-prev"></button>',
			 nextArrow: '<button class="production-arrow-next"></button>',
			 }
			 },
			 ]
   });

/*СКРОЛЛИНГ ЯКОРЯ*/

	$(".slowly").on("click", function (event) {
					//Отменяем стандартную обработку нажатия по ссылке.
					event.preventDefault();
					//Забираем идентификатор блока с атрибута href.
					var id = $(this).attr('href'),
					//Узнаём высоту от начала страницы до блока, на который ссылается якорь.
					top = $(id).offset().top;
					//Анимируем переход на расстояние - top за 1000ms.
					$('body,html').animate({scrollTop: top}, 1000);
				});
				/* ---------------------------------------*/

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [54.752656, 56.002053],
            zoom: 18
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/maps.png',
            // Размеры метки.
            iconImageSize: [64, 64],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-32, -64]
        });
        myMap.behaviors.disable('scrollZoom'); 
    myMap.geoObjects
        .add(myPlacemark);
});

