document.addEventListener("DOMContentLoaded", function() {

    // Initializing the swiper plugin for the slider.
    // Read more here: http://idangero.us/swiper/api/
    
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 10,
        breakpoints: {
          992: {
            slidesPerView: 6,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          }
        },
        
        
        paginationClickable: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
    
});