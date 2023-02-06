$(document).ready(function(){

    // add슬라이드
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

    // 헤더 메뉴
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

    // 스크롤 이벤트 헤더
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
    });

    // 푸터 패밀리사이트 버튼
    $('.fam_box ul').hide();
    $('.fam_btn').click(function () {
        $(this).toggleClass('click');
        $('.fam_box ul').stop().slideToggle();
    });

    // 푸터 top 버튼
    $('.top_btn').click(function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});