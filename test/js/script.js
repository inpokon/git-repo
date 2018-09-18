$(function () {

    /* Fixed header when scroll*/
    var headerH = $('#js-description').height();

    $(document).on('scroll', function () {

        var documentScroll = $(this).scrollTop();

        if (documentScroll > headerH) {
            $('#js-nav').addClass("fixed");
        } else {
            $('#js-nav').removeClass("fixed");
        }
    });

    /* Form */

    $('#js-form-btn').on('click', function (e) {
        e.preventDefault();
        $('#js-form').fadeToggle(500).toggleClass('d-block');

    });

    $('#js-review-look').on('click', function (e) {
        e.preventDefault();
        $('#hide').fadeIn(1000).addClass('d-block');

    });

});