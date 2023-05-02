$('.carousel').owlCarousel({
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

    const popupScreen = document.querySelector(".popup-screen");
    const popupBox = document.querySelector(".popup-box");
    const closeBtn = document.querySelector(".close-btn");

    window.addEventListener("load", () => {
      setTimeout(() => {
        popupScreen.classList.add("active");
      }, 100);
    });

    closeBtn.addEventListener("click", () => {
      popupScreen.classList.remove("active"); 
      document.cookie = "WebsiteName=testWebsite; max-age=" + 24 * 60 * 60; 
    });

    
    const WebsiteCookie = document.cookie.indexOf("WebsiteName=");

    if(WebsiteCookie != -1){
      popupScreen.style.display = "none"; 
    }
    else{
      popupScreen.style.display = "flex";
    }

$(document).ready(function() {
  var scroll_pos = 0;
  $(document).scroll(function() {
      scroll_pos = $(this).scrollTop();
      if(scroll_pos > 50) {
          $('footer').css('background-color', '#333');
      } else {
          $('footer').css('background-color', '#f8f8f8');
      }
  });
});
