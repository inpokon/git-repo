$(document).ready(function () {
    const menuBtn = $('.top-nav_btn');
    const menu = $('.top-nav_menu');
    const sideBarBtn = $('.left-sidebar_btn');
    const sideBarMenu = $('.left-sidebar_menu');

    menuBtn.on('click', function (event) {
        event.preventDefault();
        menu.toggleClass('top-nav_menu__active');
    });
    sideBarBtn.on('click', function (event) {
        event.preventDefault();
        sideBarMenu.toggleClass('left-sidebar_menu__active');
    });


    $('.directions-blocks').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });

    let elem = document.querySelector('.calc-range');
    let init = new Powerange(elem, { min: 100000, max: 3000000, start: 1200000, hideRange: true, step: 100000 });
    let per, month, result, total, monthly;
    let money = +$('.calc-range').val();

    $('input[name="programms"]').on('change', function () {
        month = +$(this).attr('data-month');
        per = +$(this).attr('data-per');
        result = Math.round(per / 12 * month * money);
        total = result + money;
        monthly = Math.round(result / month);
        $('#total').text(total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
        $('.calc-monthly span').text(monthly.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
        $('#month').text(month)
    });

    $('.calc-range').on('change', function (event) {
        $('.calc-summ_invest_num span').text($(this).val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
        let radio = $('input[name="programms"]:checked');
        money = +$(this).val();
        month = +radio.attr('data-month');
        per = +radio.attr('data-per');
        result = Math.round(per / 12 * month * money);
        total = result + money;
        monthly = Math.round(result / month);
        $('#total').text(total.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
        $('.calc-monthly span').text(monthly.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
    });

});


