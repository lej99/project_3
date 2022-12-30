$(document).ready(function () {

    var swiper = new Swiper(".slider_full", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".slide_pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".slide_next",
          prevEl: ".slide_prev",
        },
      });

});