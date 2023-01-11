$(document).ready(function () {

    // 첫번째 슬라이더 불렛 콘덴츠
    $('.slider_control .pagination .swiper-pagination-bullet').eq(0)
        .html('<span class="bullet_text">NEW-NEWUSE</span>');
    $('.slider_control .pagination .swiper-pagination-bullet').eq(1)
        .html('<span class="bullet_text">NEW-THE NATURAL</span>');
    $('.slider_control .pagination .swiper-pagination-bullet').eq(2)
        .html('<span class="bullet_text">DOOSUNG PAPER</span>');

    // 사이드메뉴 스크롤 이벤트
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#scr_btn').stop().fadeIn();
            $('.close').addClass('off');
            $('.open').removeClass('off');
            $('#side_menu').addClass('scroll').stop().animate({ right: -450 }, 400);
        } else {
            $('#scr_btn').stop().fadeOut();
            $('#side_menu').removeClass('scroll').stop().animate({ right: -400 }, 400);
        }
    });

    // 사이드메뉴 클릭 이벤트
    $('.side_door').click(function () {
        if ($('#side_menu').hasClass('scroll')) {
            $('.close').addClass('off');
            $('.open').removeClass('off');
            $('#side_menu').stop().animate({ right: -450 }, 400);
        } else {
            $('.close').toggleClass('off');
            $('.open').toggleClass('off');
            if ($('#side_menu').css('right') == '-400px') {
                $('#side_menu').stop().animate({ right: 0 }, 400);
            } else {
                $('#side_menu').stop().animate({ right: -400 }, 400);
            }
        }
    });
    
    // 동그란 사이드메뉴 버튼
    $('#scr_btn').click(function () {
        $('.close').removeClass('off');
        $('.open').addClass('off');
        $('#side_menu').stop().animate({ right: 0 }, 400);
    });

});