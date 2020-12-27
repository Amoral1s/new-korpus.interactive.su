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
  const type = document.querySelectorAll('input[name="type"]');

  type.forEach((elem) => {
    elem.addEventListener('click', () => {

      console.log(elem.value);

      calcSections[2].classList.remove('disabled');
      calcSections[3].classList.remove('disabled');
    });
  });

  //3 экран
  let actTopActual;
  let actLeftActual;
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

  });

  actTop.addEventListener('change', () => {
    if (actTop.value < 35) {
      alert('Значение не может быть меньше 35мм!');
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
    if (actLeft.value < 35) {
      alert('Значение не может быть меньше 35мм!');
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
  ralNone.addEventListener('change', () => {
    calcSections[4].classList.remove('disabled');
    calcSections[5].classList.remove('disabled');

  });


  //5 экран


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






  //Подсчет
  calculadetBtn.addEventListener('click', () => {
    $('.calc-overlay').fadeIn(200);
    $('.calc-popup').fadeIn(200);


  });

  const resultWidth = document.querySelectorAll


});