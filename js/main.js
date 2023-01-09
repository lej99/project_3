$(document).ready(function () {

    $('.slider_control .pagination .swiper-pagination-bullet').eq(0)
        .html('<span class="bullet_text">NEW-NEWUSE</span>');
    $('.slider_control .pagination .swiper-pagination-bullet').eq(1)
        .html('<span class="bullet_text">NEW-THE NATURAL</span>');
    $('.slider_control .pagination .swiper-pagination-bullet').eq(2)
        .html('<span class="bullet_text">DOOSUNG PAPER</span>');

    $('.side_door').click(function () {
        $('.close').toggleClass('off');
        $('.open').toggleClass('off');

        if ($('#side_menu').css('margin-right') == '-400px') {
            $('#side_menu').stop().animate({ marginRight: 0 }, 400);
        } else {
            $('#side_menu').stop().animate({ marginRight: -400 }, 400);
        }
    });

    if ($('.swiper-slide').hasClass('swiper-slide-active')) {
        $('.swiper-slide.swiper-slide-active .sli_tit').delay(1000).animate({ marginTop: -150 }, 800, "swing");
        $('.swiper-slide.swiper-slide-active .sli_stit').delay(1500).animate({ marginTop: -150 }, 800, "swing");
        $('.swiper-slide.swiper-slide-active .sli_desc').delay(2000).animate({ marginTop: -150 }, 800, "swing");
        $('.swiper-slide.swiper-slide-active .btn_box').delay(2500).animate({ marginTop: -150 }, 800, "swing");
    }

});