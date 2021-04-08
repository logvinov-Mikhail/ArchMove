$(function(){

$('.gallery__slider').slick({
    arrows:true,
    nextArrow:'<button class="slick-arrow slick-next"> <img src="../images/next.svg" alt="next arrow"></button>',
    prevArrow:'<button class="slick-arrow slick-prev"> <img src="../images/prev.svg" alt="prev arrow"></button>',
    dots: false,
    infinite: true,
    speed: 300,
    // slidesToShow: 4,
    // centerMode: true,
    // variableWidth: true,
    slidesToShow: 3.5,
    slidesToScroll: 3
  });
});
