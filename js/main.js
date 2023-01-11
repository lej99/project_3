$(document).ready(function () {

    $('.slider_control .pagination .swiper-pagination-bullet').eq(0)
        .html('<span class="bullet_text">NEW-NEWUSE</span>');
    $('.slider_control .pagination .swiper-pagination-bullet').eq(1)
        .html('<span class="bullet_text">NEW-THE NATURAL</span>');
    $('.slider_control .pagination .swiper-pagination-bullet').eq(2)
        .html('<span class="bullet_text">DOOSUNG PAPER</span>');

    
    
        $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('header').addClass('active');
            $('#scr_btn').stop().fadeIn();
            $('.close').addClass('off');
            $('.open').removeClass('off');
            $('#side_menu').addClass('scroll').stop().animate({ right: -450 }, 400);
        } else {
            $('header').removeClass('active');
            $('#scr_btn').stop().fadeOut();
            $('#side_menu').removeClass('scroll').stop().animate({ right: -400 }, 400);
        }
    });

    $('#scr_btn').click(function () {
        $('.close').removeClass('off');
        $('.open').addClass('off');
        $('#side_menu').stop().animate({ right: 0 }, 400);
    });

    //$(window).scroll(function () {
        if ($('#side_menu').hasClass('scroll')) {
            $('.side_door').click(function () {
                $('.close').addClass('off');
                $('.open').removeClass('off');
                $('#side_menu').stop().animate({ right: -450 }, 400);
            });
        } else {
            $('.side_door').click(function () {
                $('.close').toggleClass('off');
                $('.open').toggleClass('off');

                if ($('#side_menu').css('right') == '-400px') {
                    $('#side_menu').stop().animate({ right: 0 }, 400);
                } else {
                    $('#side_menu').stop().animate({ right: -400 }, 400);
                }
            });
        }
    //});
});