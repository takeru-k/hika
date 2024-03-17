$(function () {
  $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
    $('.l-header__nav, .c-hamburger__line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })
});

// toggle
$(function(){
	$('.c-toggle__header').click(function(){
		$(this).toggleClass('selected');
		$(this).next().slideToggle();
	});
});

$(function () {
  var $slider5 = $('#js-slider');
 
  $slider5.slick({
    fade: true,
    speed: 1500,
    arrows: false, // 前・次のボタンを表示しない
    fade: true, // スライド切り替えをフェード
    slidesToShow: 1, // 表示させるスライド数
    autoplay: true
  });

});