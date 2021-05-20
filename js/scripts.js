
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
