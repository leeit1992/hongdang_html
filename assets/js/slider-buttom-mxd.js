var windowWidth = window.outerWidth;
var numberslide = 3;
if (windowWidth == 425 ) {
  numberslide = 1;
}
  $(document).ready(function(){
    $('.bxslider').bxSlider({
      mode: 'horizontal',
      moveSlides: 1,
      slideMargin: 40,
      infiniteLoop: true,
      slideWidth: 660,
      minSlides : numberslide,
      maxSlides : numberslide,
      speed: 800,
    });
  });
