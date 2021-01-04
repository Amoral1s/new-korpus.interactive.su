jQuery(document).ready(function ($) {

  $('.i-yes').on('click', function () { 
    $('.overlay-first').fadeOut(200);
    $('.i-choice').fadeOut(200);

    $('.tz-yes').slideDown(200);
  });
  $('.i-no').on('click', function () { 
    $('.overlay-first').fadeOut(200);
    $('.i-choice').fadeOut(200);

    $('.tz-no').slideDown(200);
  });

  const plus = document.querySelectorAll('.plus'),
        minus = document.querySelectorAll('.minus');


  const ralTop = document.querySelector('#ral-top');
 
  if (plus) {

    

    plus.forEach((elem) => {
      elem.addEventListener('click', () => {
        let change = new Event ('change');
        elem.previousElementSibling.value++;
        elem.previousElementSibling.dispatchEvent(change);
      });
    });
    minus.forEach((elem) => {
      elem.addEventListener('click', () => {
        let change = new Event ('change');
        elem.nextElementSibling.value--;
        elem.nextElementSibling.dispatchEvent(change);
      });
    });
  }
  
  //4 экран
  ralTop.addEventListener('click', (e) => {
    e.preventDefault();
    $('.overlay').fadeIn(200);
    $('.top-ral-popup').fadeIn(200);

    const calcRalWrapTopp = document.querySelector('.calc-ral-top');

    calcRalWrapTopp.addEventListener('click', (e) => {
      let target = e.target;
      ralTop.value = target.textContent;
      
      $('.overlay').fadeOut(200);
      $('.calc-ral').fadeOut(200);
      if (ralBot.value != 0 && ralTop.value != 0) {
        calcSections[4].classList.remove('disabled');
        calcSections[5].classList.remove('disabled');
      }
    });
  });

  //4 экран
  const opt = document.querySelector('#options');


  

  const optClick = function() {
    const optInput = document.querySelectorAll('.options-wrap input');
    opt.value = '';
    optInput.forEach((elem) => {
      if (elem.checked) {
        
        opt.value += elem.value + ', ';
      }
    });

  };
  opt.addEventListener('click', (e) => {
    e.preventDefault();
    $('.overlay').fadeIn(200);
    $('.options').fadeIn(200);
    
  });

  $('.opt-overlay').on('click', function () { 
    $('.overlay').fadeOut(200);
    $('.options').fadeOut(200);

    optClick();
  });
   $('.close-opt').on('click', function () { 
    $('.overlay').fadeOut(200);
    $('.options').fadeOut(200);

    optClick();

   });


 



  

  
});