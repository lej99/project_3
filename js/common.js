$(document).ready(function(){

    // 광고슬라이드
    let i = 0;
    function addSlide(){
        i++;
        if(i>$('.add_text > li:last').index()){
            i = 0;
        }
        $('.add_text > li').eq(i).stop().fadeIn('slow');
        $('.add_text > li').eq(i-1).stop().fadeOut();
    };
    setInterval(addSlide,5000);

    // 메뉴
    $('.top_menu > li').hover(function(){
        $(this).children('ul').show();
    }, function(){
        $(this).children('ul').hide();
    });

    $('.top_menu > li > ul > li').hover(function(){
        $(this).find('a').wrap('<b class="point" />');
    }, function(){
        $(this).find('a').unwrap();
    });
});