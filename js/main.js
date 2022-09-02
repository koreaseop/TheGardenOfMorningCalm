$(function () {
    AOS.init();
});

// main-visual slide

$(function () {
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      autoplay: true,
      speed: 1000,
  
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
  
    });
  });

// mobile menu
$(function () {
  $('#toggle-btn').click(function () {
    // $('#gnb').css('display','block');
    $('#menu').slideDown();
  });
  $('.gnb-close').click(function () {
    // $('#gnb').css('display','none');
    $('#menu').slideUp();
  });
});