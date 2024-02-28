
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


function menuActive() {
    if ($('.header__menu').length > 0) {
        var lastId,
            topMenu = $("#jsMenu"),
            topMenuHeight = topMenu.outerHeight() + 1,
            menuItems = topMenu.find("a"),
            scrollItems = menuItems.map(function() {
                var item = $($(this).attr("href"));
                if (item.length) { return item; }
            });

        menuItems.click(function(e) {
            var href = $(this).attr("href"),
                offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
            $('html, body').stop().animate({
                scrollTop: offsetTop
            }, 650);
            e.preventDefault();
        });

        $(window).scroll(function() {
            var fromTop = $(this).scrollTop() + topMenuHeight;

            var cur = scrollItems.map(function() {
                if ($(this).offset().top < fromTop)
                    return this;
            });

            cur = cur[cur.length - 1];
            var id = cur && cur.length ? cur[0].id : "";

            if (lastId !== id) {
                lastId = id;
                menuItems.removeClass("is-active");
                menuItems.filter("[href='#" + id + "']").addClass("is-active");
            }
        });
    }
}

menuActive();



  
  


  