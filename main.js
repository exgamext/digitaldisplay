function Mostrar() {
  let entrada = Number($('#entrada').val())
  $('.cell').removeClass('on')
  $('#entrada').val('')
  
  // let centenas = Math.trunc(entrada / 100)
  // let dezenas = Math.trunc((entrada % 100) / 10)
  // let unidades = Math.trunc((entrada % 100) % 10)

  let milhares = Math.trunc(entrada / 1000)
  let centenas = Math.trunc((entrada % 1000) / 100)
  let dezenas = Math.trunc((entrada % 100) / 10)
  let unidades = Math.trunc((entrada % 100) % 10)

  if (entrada <= 9) {
    NewNumber('n', unidades)
  }
  if (entrada >= 10 && entrada <= 99) {
    NewNumber('n', unidades)
    NewNumber('d', dezenas)
  }
  if (entrada >= 100 && entrada <= 999) {
    NewNumber('n', unidades)
    NewNumber('d', dezenas)
    NewNumber('c', centenas)
  }
  if (entrada >= 1000 && entrada <= 9999) {
    NewNumber('n', unidades)
    NewNumber('d', dezenas)
    NewNumber('c', centenas)
    NewNumber('m', milhares)
  }
}

function NewNumber(digit, number) {
  if (number == 0) {
    $(`#${digit}1, #${digit}2, #${digit}3, #${digit}4, #${digit}5, #${digit}6, #${digit}8, #${digit}9, #${digit}10, #${digit}11, #${digit}12, #${digit}13`).addClass('on');
  }
  if (number == 1) {
    $(`#${digit}3, #${digit}5, #${digit}8, #${digit}10, #${digit}13`).addClass('on');
  }
  if (number == 2) {
    $(`#${digit}1, #${digit}2, #${digit}3, #${digit}5, #${digit}6, #${digit}7, #${digit}8, #${digit}9, #${digit}11, #${digit}12, #${digit}13`).addClass('on');
  }
  if (number == 3) {
    $(`#${digit}1, #${digit}2, #${digit}3, #${digit}5, #${digit}6, #${digit}7, #${digit}8, #${digit}10, #${digit}11, #${digit}12, #${digit}13`).addClass('on');
  }
  if (number == 4) {
    $(`#${digit}1, #${digit}3, #${digit}4, #${digit}5, #${digit}6, #${digit}7, #${digit}8, #${digit}10, #${digit}13`).addClass('on');
  }
  if (number == 5) {
    $(`#${digit}1, #${digit}2, #${digit}3, #${digit}4, #${digit}6, #${digit}7, #${digit}8, #${digit}10, #${digit}11, #${digit}12, #${digit}13`).addClass('on');
  }
  if (number == 6) {
    $(`#${digit}1, #${digit}2, #${digit}3, #${digit}4, #${digit}6, #${digit}7, #${digit}8, #${digit}9, #${digit}10, #${digit}11, #${digit}12, #${digit}13`).addClass('on');
  }
  if (number == 7) {
    $(`#${digit}1, #${digit}2, #${digit}3, #${digit}5, #${digit}8, #${digit}10, #${digit}13`).addClass('on');
  }
  if (number == 8) {
    $(`#${digit}1, #${digit}2, #${digit}3, #${digit}4, #${digit}5, #${digit}6, #${digit}7, #${digit}8, #${digit}9, #${digit}10, #${digit}11, #${digit}12, #${digit}13`).addClass('on');
  }
  if (number == 9) {
    $(`#${digit}1, #${digit}2, #${digit}3, #${digit}4, #${digit}5, #${digit}6, #${digit}7, #${digit}8, #${digit}10, #${digit}11, #${digit}12, #${digit}13`).addClass('on');
  }
}

function Limpar() {
  $('.cell').removeClass('on')
}

function Color(cor) {
  $('body').attr('class', '');
  $('body').addClass(cor)
}