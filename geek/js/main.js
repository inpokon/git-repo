$(function() {

		/*=====shippingAdress-place__form=====*/

		$('.shippingAdress-place>.js-shippingAdress-place__form').not(':first').hide();  

		$('.shippingAdress-place>.js-shippingAdress-place__title').click(function(){

					let findForm = $(this).next('.js-shippingAdress-place__form');
					let findTitle = $(this).closest('.shippingAdress-place');


					if (findForm.is(':visible')) {
							findForm.slideUp();
					} else {
						findTitle.find('>.js-shippingAdress-place__form').slideUp();
						findForm.slideDown();
					}

		});

		/*==============product-nav===========*/

		$('.product-nav__ul>.js-product-nav__li>.js-product-nav__none').not(':first').hide();
		$('.product-nav__ul>.js-product-nav__li>').click(function(e){

					e.preventDefault();


					let findNone = $(this).next('.js-product-nav__none');
					let findUl = $(this).closest('.product-nav__ul');
					

					if (findNone.is(':visible')) {
							findNone.slideUp();
					} else {
						findUl.find('>.js-product-nav__none').slideUp();
						findNone.slideDown();
					}

		});



			/*==============iCheck===========*/

		$('input').iCheck({
			checkboxClass: 'icheckbox_minimal',
			radioClass: 'iradio_minimal',
		});


		$( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 600,
      values: [ 52, 400 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] );
        $( "#amount-two" ).val( "$" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 )  );
    $( "#amount-two" ).val( "$" + $( "#slider-range" ).slider( "values", 1 )  );

 
});