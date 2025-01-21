$(document).ready(function () {
  $(".acco_btn").click(function () {
    // ボタンの次の要素（acco_content）をスライドトグル
    $(this).next(".acco_content").slideToggle(300);

    // ボタンの矢印を回転
    $(this).toggleClass("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".header_nav");
  const navItems = document.querySelectorAll(".nav_links a"); 

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active"); // メニューを閉じる
    });
  });



  $(document).ready(function () {
    const $keyvisual = $('.keyvisual .inner');

    // スクロールイベント
    $(window).on('scroll', function () {
      const scrollTop = $(window).scrollTop(); // 現在のスクロール位置
      const windowHeight = $(window).height(); // ウィンドウの高さ
      const offsetTop = $keyvisual.offset().top; // 要素の位置

      // 要素が画面内に入ったらvisibleクラスを追加
      if (scrollTop + windowHeight > offsetTop) {
        $keyvisual.addClass('visible');
      }
    });

    // 初期表示でチェック（最初から表示される場合に対応）
    $(window).trigger('scroll');
  });

});

