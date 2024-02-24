
$(window).on('load', function () {
    //page loading
    $('body').addClass('is-loaded');   
    AOS.init();  
}); 

//Browser and OS defined class on body
$('body').addClass($.browser.platform)
$('body').addClass($.browser.name);
if(($.browser.desktop) == true) {
    $('body').removeClass('mobile').removeClass('ipad').addClass('desktop');
}
if(($.browser.mobile) == true) {
    $('body').removeClass('desktop').removeClass('ipad').addClass('mobile');
}
if(($.browser.ipad) == true) {
    $('body').removeClass('mobile').removeClass('desktop').addClass('ipad');
}
if((navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 0) || navigator.platform === 'iPad') {
    $('body').removeClass('mobile').removeClass('desktop').addClass('ipad');
}

// Site related functions

//define a function 
function HeaderSticky(){
  if($('.header').length > 0){
    window.addEventListener('scroll', function() {
      if (window.scrollY > 1) {
          $('.header').addClass('is-sticky');
      } else {
          $('.header').removeClass('is-sticky');
      }
    });
  }
}
HeaderSticky();


  
  


  