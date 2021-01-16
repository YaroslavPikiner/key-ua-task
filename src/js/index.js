import '../scss/main.scss';

const mySwiper = new Swiper('.swiper-container', {
  // Optional parameters

  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 40,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider__btn--next',
    prevEl: '.slider__btn--prev',
  },
})