$(document).ready(function(){
  $('.header-nav__link, .footer-nav__link, .header-right__CTA, .header__logo').on('click', function(e){
    e.preventDefault();

    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - 120}, 1000);
  });
});