jQuery(document).ready(function ($) {

  
  $('.calc-close').on('click', function () { 
    $('.calc-overlay').fadeOut(200);
    $('.calc-popup').fadeOut(200);
   });

  $(".up").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top - 110;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);
    return false;
  });
  //Действие при кролле
  $(window).scroll(function() { 
    if ($(window).scrollTop() > 520) {
      $('.up').fadeIn(300);
    } else {
      $('.up').fadeOut(300);
    }
  });

  $('.constructor-wrap-item').on('click', function() {
    $('.constructor-wrap-item').removeClass('constructor-wrap-item-active');
    $('.constructor-buttons .notice').fadeOut(200);
    $('.constructor-buttons .button').removeClass('deactive');
    $(this).addClass('constructor-wrap-item-active');

    $('.constructor-buttons .button').attr('href', $(this).attr('data-src'));
    
  });
  
  $('.play').on('click', function() { 
    $('.play img').fadeOut(200);
    $('.play iframe').fadeIn(300);
    $('.play iframe').attr('src', $('.play iframe').attr('data-src'));
  });

  /* $('.assets-d').on('click', function() { 
    $('.overlay').fadeIn(200);
    $('.popup').fadeIn(200);
  }); */

  if ($(window).width() > 992) {

    //Действие при кролле
    /* $(window).scroll(function() { 
      if ($(window).scrollTop() > 160) {
      } else {
      }
    }); */

    $(".header__menu ul li a").click(function () {
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top - 110;
      $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 300);
      return false;
    });

    $(".offer a").click(function () {
      var elementClick = $(this).attr("href");
      var destination = $(elementClick).offset().top - 110;
      $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 300);
      return false;
    });

  } else {
    jQuery('.burger').on('click', function() {
      jQuery(this).toggleClass('burger-active');
      jQuery('.header__menu').slideToggle(150);
      jQuery('.header__call').fadeToggle(150);
    });

    jQuery(".header__menu ul li a").click(function () {
      var elementClick = jQuery(this).attr("href");
      var destination = jQuery(elementClick).offset().top - 110;
      jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 300);
      jQuery('.header__menu').slideUp(200);
      jQuery('.burger').removeClass('burger-active');
      jQuery('.header__call').fadeOut(150);

      return false;
    });
    jQuery(".offer a").click(function () {
      var elementClick = jQuery(this).attr("href");
      var destination = jQuery(elementClick).offset().top - 110;
      jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 300);
      jQuery('.header__menu').slideUp(200);
      jQuery('.burger').removeClass('burger-active');
      return false;
    });
  }

  $('.close').on('click', function() {
    $('.overlay').fadeOut(200);
    $('.popup').fadeOut(200);
  });
  $('.wall-video').on('click', function() {
    $('.popup-gif .content video').attr('src', $(this).attr('data-src'));
    
    $('.overlay').fadeIn(200);
    $('.popup-gif').fadeIn(200);
  });
  $('.header__call').on('click', function() {
    $('.overlay').fadeIn(200);
    $('.popup-call').fadeIn(200);
  });
  $('.overlay').on('click', function() {
    $('.overlay').fadeOut(200);
    $('.popup').fadeOut(200);
  });

  $(".wpcf7").on('wpcf7mailsent', function(event){
    //alert('GOOD');
    $('#thx').fadeIn(200);
    //Скрытие поп окна автоматически, через 5,5 секнд
    $('.overlay').fadeIn(300);

    setTimeout(function(){
      $('.overlay').fadeOut(300);
      $('.popup').fadeOut(300);
      $('#thx').fadeOut(200);
    },2500);  //3500 = 3,5 секунды
    
    setTimeout(function(){$('.popup').fadeOut(300);},2700); 
    setTimeout(function(){$('#calc').fadeOut(300);},2700); 
    
    setTimeout(function(){$('.overlay').fadeOut(300);},2700);
  });

  $(".wpcf7").on('wpcf7invalid', function(event){
    alert('Ошибка! Заполните все поля правильно и поторите попытку.');
  });
  $(".wpcf7").on('wpcf7mailfailed', function(event){
    alert('Ошибка! Попробуйте отправить еще раз!');
  });

    


});