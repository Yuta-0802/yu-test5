
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('#page-top');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });


//ヘッダー透過設定

  var header = $('.mv').height();

  $(window).scroll(function() {
    var top = $(window).scrollTop();
    if (header < top) {
      $('header').css('background-color', 'rgba(17,17,17,1.0)');
      } else {
      $('header').css('background-color', 'rgba(17,17,17,0.5)');
    }
  });


  
  //ドロワーメニュー
  $(".MenuButton").click(function () {
    $(this).toggleClass('active');
    $(".g-nav").toggleClass('panelactive');
  });

  $(".g-nav a").click(function () {
    $(".MenuButton").removeClass('active');
    $(".g-nav").removeClass('panelactive');
});



  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });


  
 //MV slider
 let swipeOption = {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
}
new Swiper('.swiper-container', swipeOption);



  //works-slider
  $('.slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		speed:1000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
    });

});
