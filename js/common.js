$(document).ready(function(){

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