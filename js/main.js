$(document).ready(function () {

    $('.slider_control .pagination .swiper-pagination-bullet').eq(0)
    .html('<span class="bullet_text">NEW-NEWUSE</span>');
    $('.slider_control .pagination .swiper-pagination-bullet').eq(1)
    .html('<span class="bullet_text">NEW-THE NATURAL</span>');
    $('.slider_control .pagination .swiper-pagination-bullet').eq(2)
    .html('<span class="bullet_text">DOOSUNG PAPER</span>');

    $('.side_door').click(function(){
        $('.close').toggleClass('off');
        $('.open').toggleClass('off');

        if($('#side_menu').css('margin-right') == '-400px') {
            $('#side_menu').stop().animate({ marginRight: 0}, 400);
        } else {
            $('#side_menu').stop().animate({ marginRight: -400}, 400);
        }
        
    });

});