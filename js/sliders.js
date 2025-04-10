const swiperBlock = new Swiper(".swiper-block", {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    880: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

const swiperReviews = new Swiper(".swiper-reviews", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
});
