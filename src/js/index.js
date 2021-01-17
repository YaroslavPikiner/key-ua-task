import "../scss/main.scss";

const mySwiper = new Swiper(".swiper-container", {
  // Optional parameters

  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  spaceBetween: 40,

  breakpoints: {
    // when window width is >= 375px
    374: {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1440: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".slider__btn--next",
    prevEl: ".slider__btn--prev",
  },
});

document.querySelector(".header__burger--btn").addEventListener("click", () => {
  document.querySelector(".header__burger--btn")
    .classList.toggle("header__navigation");
});
