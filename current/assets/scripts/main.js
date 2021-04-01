$(document).ready(function(){

  function CloseMenu () {
    $('.header-mobile').removeClass('header-mobile_open');
  }
  //* Якоря
  $('.header-nav__link, .footer__CTA, .footer-nav__link, .header-right__CTA, .header__logo').on('click', function(e){
    e.preventDefault();
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - 120}, 1000);
    CloseMenu();
  });


  //* Хедер-подложка
  let windowOnTop = true;
  if($(window).scrollTop() != 0){
    windowOnTop = false;
    $('.header').addClass('header_moved');
  }
  $(window).on('scroll', function() {
    if($(window).scrollTop() == 0 && !windowOnTop) {
      $('.header').removeClass('header_moved');
      windowOnTop = true;
    } else if ($(window).scrollTop() != 0 && windowOnTop) {
      $('.header').addClass('header_moved');
      windowOnTop = false;
    }
  })


  //* Модалка на отправку формы
  
  //$('.successForm').bind('mousewheel DOMMouseScroll', function (e) { return false; });

  function ValidationInput(input) {
    var pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(input.attr('data-required') && input.attr('data-type') == 'email' && !pattern.test(input.val())){
      input.addClass('inp-err');
      return false;
    }
    if(input.attr('data-required') && input.val() == '') {
      input.addClass('inp-err');
      return false;
    }
    input.removeClass('inp-err');
    return true


  }

  function Validation(form) {
    let inputs = form.find('input');
    let oneInvalid = false;
    inputs.each(function() {
      if(!ValidationInput($(this))){
        oneInvalid = true;
      }
    }) 
    return !oneInvalid;
  } 


  function cleanForm (form) {
    
    let inputs = form.find('input');
    inputs.each(function() {
      $(this).val('')
    }) 
  }


  $(document).on('blur', 'input', function() {
    ValidationInput($(this));
  });

  $(document).on('click', '[data-modal]', function(e){
    e.preventDefault();
    let validForm = false;
    if(Validation($(this).closest('form'))){
      validForm = true;
    }

    if(validForm) {
      cleanForm($(this).closest('form'))
      $('.successForm').fadeIn().css('display', 'flex');
    }
  })
  $(document).on('click', '.popup__btn', function(){
    $(this).closest('.popup').fadeOut();
  })



  //* Поп-апы

  $(document).on('click', '.popup', function(){
    $(this).fadeOut();
  })


  $(document).on('click', '.successForm-content, .policity-content', function(e){
    e.stopPropagation();
  })


  $(document).on('click', '[data-policity]', function(e){
    e.preventDefault();
    $('.policity').fadeIn();
  })



  //* Бургер

  $(document).on('click', '.header__burger', function(){
    $('.header-mobile').toggleClass('header-mobile_open');
  })
});