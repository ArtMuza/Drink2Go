const getSwiper = () => {
  const swiper = new Swiper('.swiper', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

}

export { getSwiper }


  // const swiper = new Swiper('.swiper', {
  //   loop: true,
  //   grabCursor: true,

  //   pagination: {
  //     el: '.swiper__pagination',
  //     bulletElement: 'button',
  //     bulletClass: 'swiper__bullet button',
  //     bulletActiveClass: 'swiper__bullet--active',
  //     clickable: true,
  //   },

  //   navigation: {
  //     nextEl: '.swiper__button--next',
  //     prevEl: '.swiper__button--prev',
  //   },

  //   wrapperClass: 'swipper__wrapper',
  //   slideClass: 'swipper__slide',
  //   slideActiveClass: 'swiper__slide--active',
  //   slideNextClass: 'swiper__slide--next',
  //   slidePrevClass: 'swiper__slide--prev',

  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: true,
  //   },
  // });
