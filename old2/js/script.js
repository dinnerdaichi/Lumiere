// Swiperの初期化
const swiper = new Swiper('.swiper1', {
  autoplay: {
    delay: 3000,
  },
  speed: 3000,
  slidesPerView: 1, // 5枚表示
  spaceBetween: 0, // スライド間の間隔
  centeredSlides: true,
  loop: true, // ループ設定
  slideToClickedSlide: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  }, // クリックしたスライドに移動
  breakpoints: {
    // 画面幅が小さい場合のレスポンシブ設定
    1080: {
      slidesPerView: 3.5, // 3枚表示
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1.5, // 3枚表示
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1.5, // 1枚表示
      spaceBetween: 0,
    }
  },

});