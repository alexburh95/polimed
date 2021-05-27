
var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 5000,
      },
    slidesPerView: 1,
    loop: true,
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".mySwipermob1", {

  autoplay: {
    delay: 3000,
  },
  slidesPerView: 2,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    }
  }

});
var swiper = new Swiper(".mySwipermob2", {

  autoplay: {
    delay: 3000,
  },
  slidesPerView: 3,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
  
    // when window width is >= 320px
    576: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    }
  }

});