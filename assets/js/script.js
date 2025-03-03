// Swiperの初期化
const swiper = new Swiper('.swiper1', {
  autoplay: {
    delay: 3000,
  },
  speed: 1000,
  slidesPerView: 1, //
  spaceBetween: 20, // スライド間の間隔
  loop: true, // ループ設定
  centeredSlides: true, // アクティブなスラ
  slideToClickedSlide: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  }, // クリックしたスライドに移動
  // breakpoints: {
  //   // 画面幅が小さい場合のレスポンシブ設定
  //   1080: {
  //     slidesPerView: 1.5, // 3枚表示
  //     spaceBetween: 10,
  //   },
    736: {
      slidesPerView: 1.75, // 3枚表示
      spaceBetween: 10,
    },
  //   480: {
  //     slidesPerView: 1.5, // 1枚表示
  //     spaceBetween: 0,
  //   }
  // },

});


gsap.utils.toArray(".fade-in").forEach((el) => {
  gsap.to(el, {
    opacity: 1,
    duration: 1,
    y: 0,
    scrollTrigger: {
      trigger: el,
      start: "top 80%", // 画面の80%位置にきたら開始
      toggleActions: "play none none none",
    },
  });
});