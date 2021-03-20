$(document).ready(function(){
    $('.slide').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    });
  });


// Переназначил действие кнопок
$('.prew').on('click', function() {
    $('.slide').slick('slickPrev');
});

$('.next').on('click', function() {
    $('.slide').slick('slickNext');
});
// ----------------------------------

