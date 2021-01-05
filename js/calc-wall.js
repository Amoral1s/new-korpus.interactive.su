jQuery(document).ready(function ($) {

  
  
  //Валидаци
  const calcSections = document.querySelectorAll('.calc-section');


  //Элементы 1 экрана
  const selectDiag = document.querySelector('#all-height'),
        inputHeight = document.querySelector("#input-height"),
        inputWidth = document.querySelector('#input-width'),
        textHeight = document.querySelector('.calc-wrap-right__height'),
        textWidth = document.querySelector('.calc-wrap-right__width');

  const plus = document.querySelectorAll('.plus'),
        minus = document.querySelectorAll('.minus');

  //Элементы 3 экрана (активная область)
  const actHeight = document.querySelector('#act-height'),
        actWidth = document.querySelector('#act-width'),
        actLeft = document.querySelector('#act-left'),
        actTop = document.querySelector('#act-top'),
        actObl = document.querySelector('.act-obl');
  //Элементы 4 экрана (покраска)

  const ralNone = document.querySelector('#ral-none'),
        ralTop = document.querySelector('#ral-top'),
        ralBot = document.querySelector('#ral-bot');
  //Элементы 6 экрана (Контактные данные)
  const iOrg = document.querySelector('.i-org'),
        iName = document.querySelector('.i-name'),
        iPhone = document.querySelector('.i-phone'),
        iEmail = document.querySelector('.i-email'),
        calculadetBtn = document.querySelector('.calculated');
  //1 экран
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

  selectDiag.addEventListener('change', () => {
    if (selectDiag.value == 1) {
      inputHeight.value = 447;
      inputWidth.value = 459;

      textHeight.textContent = 447;
      textWidth.textContent = 459;

    } else if (selectDiag.value == 2) {
      inputHeight.value = 445;
      inputWidth.value = 625;
      
      textHeight.textContent = 445;
      textWidth.textContent = 625;

    } else if (selectDiag.value == 3) {
      inputHeight.value = 414;
      inputWidth.value = 644;
      
      textHeight.textContent = 414;
      textWidth.textContent = 644;

    } else if (selectDiag.value == 4) {
      inputHeight.value = 368;
      inputWidth.value = 630;
      
      textHeight.textContent = 368;
      textWidth.textContent = 630;

    } else if (selectDiag.value == 5) {
      inputHeight.value = 514;
      inputWidth.value = 815;
      
      textHeight.textContent = 514;
      textWidth.textContent = 815;

    } else if (selectDiag.value == 6) {
      inputHeight.value = 665;
      inputWidth.value = 1075;
      
      textHeight.textContent = 665;
      textWidth.textContent = 1075;

    } else if (selectDiag.value == 7) {
      inputHeight.value = 750;
      inputWidth.value = 1230;
      
      textHeight.textContent = 750;
      textWidth.textContent = 1230;

    } else if (selectDiag.value == 8) {
      inputHeight.value = 820;
      inputWidth.value = 1338;
      
      textHeight.textContent = 820;
      textWidth.textContent = 1338;

    } else if (selectDiag.value == 9) {
      inputHeight.value = 940;
      inputWidth.value = 1552;
      
      textHeight.textContent = 940;
      textWidth.textContent = 1552;

    } else if (selectDiag.value == 10) {
      inputHeight.value = 100;
      inputWidth.value = 100;
      
      textHeight.textContent = 100;
      textWidth.textContent = 100;

    }
    actHeight.value = inputHeight.value - 70;
    actWidth.value = inputWidth.value - 70;

    calcSections[1].classList.remove('disabled');
  });

  inputHeight.addEventListener('change', () => {
    textHeight.textContent = inputHeight.value;
    actHeight.value = inputHeight.value - 70;
    selectDiag.value = 10;

    calcSections[1].classList.remove('disabled');
  });

  inputWidth.addEventListener('change', () => {
    textWidth.textContent = inputWidth.value;
    actWidth.value = inputWidth.value - 70;
    selectDiag.value = 10;
    calcSections[1].classList.remove('disabled');
  });

  //2 экран
  const typeImg = document.querySelector('.type-img');
  const type = document.querySelectorAll('input[name="type"]');
  let deep = 70;
  type.forEach((elem) => {
    elem.addEventListener('click', () => {
      typeImg.src = elem.dataset.src;
      deep = elem.value;
      calcSections[2].classList.remove('disabled');
      calcSections[3].classList.remove('disabled');
    });
  });

  

  typeImg.addEventListener('click', () => {
    $('.img-popup').fadeIn(200);
    $('.img-popup img').attr('src', typeImg.src);
  });

  $('.img-popup').on('click', function () { 
    $(this).fadeOut(200);
  });

  //3 экран
  let actTopActual = 35;
  let actLeftActual = 35;
  actWidth.addEventListener('change', () => {
    if (actWidth.value > inputWidth.value - 70) {
      alert('Значение активной ширины экрана не может быть больше ширины корпуса (Ширина корпуса - 35мм)');
      actWidth.value = inputWidth.value - 70;
    } else {
      actLeft.value = Math.round((inputWidth.value - actWidth.value) / 2);
    }
    actLeftActual = actLeft.value;

    calcSections[3].classList.remove('disabled');
  });
  
  actHeight.addEventListener('change', () => {
    if (actHeight.value > inputHeight.value - 70) {
      alert('Значение активной высоты экрана не может быть больше высоты корпуса (Высота корпуса - 35мм)');
      actHeight.value = inputHeight.value - 70;
    } else {
      actTop.value = Math.round((inputHeight.value - actHeight.value) / 2);
    }
    actTopActual = actTop.value;

    calcSections[3].classList.remove('disabled');
    console.log(actTopActual)
  });

  actTop.addEventListener('change', () => {
    if (actTopActual == 35 || actTop.value == 34) {
      alert('Значение не может быть меньше 35мм!');
      actTop.value = 35;
    } else if (actTop.value > inputHeight.value - actHeight.value - 35) {
      alert(`Значение не может быть больше ${inputHeight.value - actHeight.value - 35}мм!`);
      actTop.value = inputHeight.value - actHeight.value - 35;
    } else {
      if (actTopActual > actTop.value) {
        if (actTopActual == actTop.value) {
          actObl.style.top = 35 + 'px';
        } else {
          actObl.style.top = 25 + 'px';
        }
      } else {
        if (actTopActual == actTop.value) {
          actObl.style.top = 38 + 'px';
        } else {
          actObl.style.top = 50 + 'px';
        }
      }
    }

    calcSections[3].classList.remove('disabled');

  });
  actLeft.addEventListener('change', () => {
    console.log(inputWidth.value - actWidth.value - 35)
    if (actLeftActual == 35 || actLeft.value == 34) {
      alert('Значение не может быть меньше 35мм!');
      actLeft.value = 35;
    } else if (actLeft.value > inputWidth.value - actWidth.value - 35) {
      alert(`Значение не может быть больше ${inputWidth.value - actWidth.value - 35}мм!`);
      actLeft.value = inputWidth.value - actWidth.value - 35;
    } else {
      if (actLeftActual > actLeft.value) {
        if (actLeftActual == actLeft.value) {
          actObl.style.left = 35 + 'px';
        } else {
          actObl.style.left = 25 + 'px';
        }
        
      } else {
        if (actLeftActual == actLeft.value) {
          actObl.style.left = 38 + 'px';
        } else {
          actObl.style.left = 50 + 'px';
        }
      }
    }

    calcSections[3].classList.remove('disabled');

  });
  
  


  //4 экран
  ralTop.addEventListener('click', (e) => {
    e.preventDefault();
    $('.overlay').fadeIn(200);
    $('.top-ral-popup').fadeIn(200);

    const calcRalWrapTopp = document.querySelector('.calc-ral-topp');

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

  ralBot.addEventListener('click', (e) => {
    e.preventDefault();
    $('.overlay').fadeIn(200);
    $('.bot-ral-popup').fadeIn(200);


    const calcRalWrapBott = document.querySelector('.calc-ral-bott');

    calcRalWrapBott.addEventListener('click', (e) => {
      let target = e.target;
      ralBot.value = target.textContent;
      
      $('.overlay').fadeOut(200);
      $('.calc-ral').fadeOut(200);
      if (ralBot.value != 0 && ralTop.value != 0) {
        calcSections[4].classList.remove('disabled');
        calcSections[5].classList.remove('disabled');
      }
    });
  });


  ralNone.addEventListener('change', () => {
    if (ralNone.checked) {
      ralBot.classList.add('disabled');
      ralTop.classList.add('disabled');
    } else {
      ralBot.classList.remove('disabled');
      ralTop.classList.remove('disabled');
    }
    calcSections[4].classList.remove('disabled');
    calcSections[5].classList.remove('disabled');

  });


  //5 экран
  const dopStand = document.querySelector('#dop-stand'),
        dopDiod = document.querySelector('#diod'),
        dopSecur = document.querySelector('#secur'),
        dopCompl = document.querySelector('#compl');

  //6 экран
  let validation = 4;
  iOrg.addEventListener('change', () => {
    if(iOrg.value.length > 0) {
      validation--;
    } 
    if (validation <= 0) {
      calculadetBtn.classList.remove('disabled');
    }
  });

  iName.addEventListener('change', () => {
    if(iName.value.length > 0) {
      validation--;
    }
    if (validation <= 0) {
      calculadetBtn.classList.remove('disabled');
    }
  });

  iPhone.addEventListener('change', () => {
    if(iPhone.value.length > 0) {
      validation--;
    }
    if (validation <= 0) {
      calculadetBtn.classList.remove('disabled');
    }
  });

  iEmail.addEventListener('change', () => {
    if(iEmail.value.length > 0) {
      validation--;
    }
    if (validation <= 0) {
      calculadetBtn.classList.remove('disabled');
    }
  });




  //Поля подсчета в попап
  const resWidth = document.querySelector('.res-width'),
        resHeight = document.querySelector('.res-height'),
        resDeep = document.querySelector('.res-deep'),
        resActWidth = document.querySelector('.res-act-width'),
        resActHeight = document.querySelector('.res-act-height'),
        resActLeft = document.querySelector('.res-act-left'),
        resActRight = document.querySelector('.res-act-right'),
        resActTop = document.querySelector('.res-act-top'),
        resActBot = document.querySelector('.res-act-bot'),
        resRalTop = document.querySelector('.res-ral-top'),
        resRalBot = document.querySelector('.res-ral-bot'),
        resSecur = document.querySelector('.res-sec'),
        resStand = document.querySelector('.res-krepl'),
        resDiod = document.querySelector('.res-diod'),
        resCompl = document.querySelector('.res-compl'),
        resCountInput = document.querySelector('.res-count'),
        resTime = document.querySelector('#res-time'),
        resPriceOnce = document.querySelector('.res-price-once'),
        resPriceAll = document.querySelector('.res-price-all');


  //Подсчет
  calculadetBtn.addEventListener('click', () => {
    $('.calc-overlay').fadeIn(200);
    $('.calc-popup').fadeIn(200);
    resWidth.textContent = inputWidth.value;
    resHeight.textContent = inputHeight.value;
    resDeep.textContent = deep;
    resActWidth.textContent = actWidth.value;
    resActHeight.textContent = actHeight.value;
    resActLeft.textContent = actLeft.value;
    resActRight.textContent = Math.round(inputWidth.value - actWidth.value - actLeft.value);
    resActTop.textContent = actTop.value;
    resActBot.textContent = Math.round(inputHeight.value - actHeight.value - actTop.value);
    

    if (ralNone.checked) {
      resRalTop.textContent = 'Нет';
    resRalBot.textContent = 'Нет';
    } else {
      resRalTop.textContent = ralTop.value;
      resRalBot.textContent = ralBot.value;
    }

    if (dopStand.value == 0) {
      resStand.textContent = 'Нет';
    } else if (dopStand.value == 1) {
      resStand.textContent = 'Напольное';
    } else if (dopStand.value == 2) {
      resStand.textContent = 'Настенное';
    }

    if (dopSecur.checked) {
      resSecur.textContent = 'Да';
    } else {
      resSecur.textContent = 'Нет';
    }

    if (dopDiod.checked) {
      resDiod.textContent = 'Да';
    } else {
      resDiod.textContent = 'Нет';
    }

    if (dopCompl.checked) {
      resCompl.textContent = 'Да';
    } else {
      resCompl.textContent = 'Нет';
    }

    calcStart();
  });
  let result;

  const calcStart = () => {
    //Вневшние габариты (расчет профиля)
    const gabarity = Math.round((+inputWidth.value * 2 + +inputHeight.value * 2) / 1000 * 300 /*11 300 берется из погонного метра*/);

    const fix = 800 + 1200; //11 Уголок *4 + Резка

    const rezOuter = Math.round(
      +inputWidth.value * +inputHeight.value / 10000 * 10 /*11 10 - резка лицевая */
    );

    const rezInner = Math.round(
      +inputWidth.value * +inputHeight.value / 10000 * 15 /*11 10 - резка внутренняя */
    );

    const kron = Math.round(
     (+inputHeight.value * 0.3) * 2
    );

    const E = Math.round(
     4 * 15 //Цена кронштейна
    );
    
    let typePlate;

    if (deep == 70) {
      typePlate = 300;
    } else if (deep == 125) {
      typePlate = 800;
    } else if (deep == 177) {
      typePlate = 1000;
    }

    let pokraska;

    if (ralNone.checked) {
      pokraska = 0;
    } else {
      pokraska = Math.round(inputWidth.value * inputHeight.value / 10000 * 35);/*Значение цены покраски*/
    }
    result = Math.round(
      +gabarity + +fix + +rezOuter + +rezInner + +kron + +E + +typePlate + +pokraska
    );

    if (dopStand.value == 1) {
      result = +result + 4500;
    } else if (dopStand.value == 2) {
      result = +result + 1500;
    }

    if (dopDiod.checked) {
      result = +result + 1200;
    }

    if (dopSecur.checked) {
      result = +result + 1000;
    }
    
    resPriceOnce.textContent = +result + ' руб.';
    resPriceAll.textContent = +result * +resCountInput.value + ' руб.';
    console.log(typePlate)
  };
  resCountInput.addEventListener('change', () => {
    if (resCountInput.value <= 4) {
      resPriceAll.textContent = +result * +resCountInput.value + ' руб.';
      resPriceOnce.textContent = +result + ' руб.';
    } else if (resCountInput.value >= 5 && resCountInput.value <= 10) {
      resPriceAll.textContent = Math.round((+result * +resCountInput.value) / 100 * 97) + ' руб.';
      resPriceOnce.textContent =  Math.round(+result / 100 * 97) + ' руб.';
    } else if (resCountInput.value >= 11 && resCountInput.value <= 15) {
      resPriceAll.textContent = Math.round((+result * +resCountInput.value) / 100 * 95) + ' руб.';
      resPriceOnce.textContent =  Math.round(+result / 100 * 95) + ' руб.';

    } else if (resCountInput.value >= 16 && resCountInput.value <= 30) {
      resPriceAll.textContent = Math.round((+result * +resCountInput.value) / 100 * 93) + ' руб.';
      resPriceOnce.textContent =  Math.round(+result / 100 * 93) + ' руб.';

    } else if (resCountInput.value >= 31) {
      resPriceAll.textContent = Math.round((+result * +resCountInput.value) / 100 * 90) + ' руб.';
      resPriceOnce.textContent =  Math.round(+result / 100 * 90) + ' руб.';

    }
  });
  resTime.addEventListener('change', () => {
    if (resTime.value == 1) {

      resPriceAll.textContent = Math.round((+result * +resCountInput.value) / 100 * 110) + ' руб.';
      resPriceOnce.textContent = Math.round((+result) / 100 * 110) + ' руб.';

    } else if (resTime.value == 2) {

      resPriceAll.textContent = Math.round((+result * +resCountInput.value) / 100 * 105) + ' руб.';
      resPriceOnce.textContent = Math.round((+result) / 100 * 105) + ' руб.';

    } else if (resTime.value == 3) {

      resPriceAll.textContent = +result * +resCountInput.value + ' руб.';
      resPriceOnce.textContent = +result + ' руб.';
    }
  })
});