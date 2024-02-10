
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
function example_function() { 
    console.log("function called") 
} 

//call the function 
example_function();

//menu toggle
window.addEventListener("DOMContentLoaded", (event) => {
  const navToggle= document.querySelector('#Toggle');
  const nav = document.querySelector('.menu-items');
  navToggle.addEventListener("click",()=>{
      nav.classList.toggle('menu-open')
  });
});

window.addEventListener("DOMContentLoaded", (event) => {
const navShop = document.querySelector('#shopbar');
navShop.addEventListener("click", () => {
    alert("You have no items in your shopping cart. Please add cart");
});
});

//back to top button
window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
    // const blur = document.getElementById('video');
    
  }
  
  function scrollToTop() {
     window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  //show password
  function mypassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  $(document).ready(function() {
    $(window).scroll(function() {
      var scrollPosition = $(this).scrollTop();
      var video = $('#background-video');
  
      if (scrollPosition > 0) {
        video.addClass('video--blur');
      } else {
        video.removeClass('video--blur');
      }
    });
  });


  
  


  