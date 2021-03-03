$(document).ready(function () {
  $(window).scroll(function () {
    $(".slider-item").each(function (i) {
      let bottom_of_object = $(this).offset().top + $(this).outerHeight() * 2;
      let bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_object) {
        $(this).addClass("slider__fadein");
        $(this).prev().removeClass("slider__fadein");
      } else {
        $(this).removeClass("slider__fadein");
      }
      if ($(this).hasClass("slider__fadein")) {
        $(".slider__fadein").prev().removeClass("slider__fadein--small");
        $(".slider__fadein").next().removeClass("slider__fadein--small");
      } else {
        $(".slider__fadein").prev().addClass("slider__fadein--small");
        $(".slider__fadein").next().addClass("slider__fadein--small");
      }
    });
  });
});
