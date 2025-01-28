$(document).ready(function () {
  $(".acco__btn").click(function () {
    // ボタンの次の要素（acco_content）をスライドトグル
    $(this).next(".acco__content").slideToggle(300);

    // ボタンの矢印を回転
    $(this).toggleClass("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".header__menu-toggle");
  const navLinks = document.querySelector(".header__nav");
  const navItems = document.querySelectorAll(".header__nav-links a"); 

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active"); // メニューを閉じる
    });
  });


// keyvisualの表示アニメーション
  $(document).ready(function () {
    const $keyvisual = $('.keyvisual .inner--s');
    $(window).on('scroll', function () {
      const scrollTop = $(window).scrollTop(); // 現在のスクロール位置
      const windowHeight = $(window).height(); // ウィンドウの高さ
      const offsetTop = $keyvisual.offset().top; // 要素の位置
      // 要素が画面内に入ったらvisibleクラスを追加
      if (scrollTop + windowHeight > offsetTop) {
        $keyvisual.addClass('show');
      }
    });
    // 初期表示でチェック（最初から表示される場合に対応）
    $(window).trigger('scroll');
  });

  // 各セクションのアニメーション
  $(document).ready(function() {
    // スクロール時に処理を実行
    $(window).on("scroll", function() {
      $(".section .inner").each(function() {
        // 要素の位置を取得
        const elementTop = $(this).offset().top;
        const windowBottom = $(window).scrollTop() + $(window).height();
        // 要素が画面内に入ったらクラスを追加
        if (elementTop < windowBottom - 50) { // 50pxのマージンを持たせる
          $(this).addClass("show");
        }
      });
    });
  });

  // 各セクションのアニメーション
  $(document).ready(function() {
    // スクロール時に処理を実行
    $(window).on("scroll", function() {
      $(".fea_content").each(function() {
        // 要素の位置を取得
        const elementTop = $(this).offset().top;
        const windowBottom = $(window).scrollTop() + $(window).height();
        // 要素が画面内に入ったらクラスを追加
        if (elementTop < windowBottom - 50) { // 50pxのマージンを持たせる
          $(this).addClass("show");
        }
      });
    });
  });

});

