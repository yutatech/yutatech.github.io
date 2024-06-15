/*!
* Start Bootstrap - Bare v5.0.9 (https://startbootstrap.com/template/bare)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener('DOMContentLoaded', function() {
  // var scroll_container = document.querySelector('.scroll-container');

  //---- 横スクロールの矢印表示 ----
  // Intersection Observerのコールバック関数
  function onIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $(entry.target).find('.arrow').each(function () {
          var $arrow = $(this);
          $arrow.css('display', 'flex');
          setTimeout(function() {
            $arrow.fadeOut(1000);
          }, 1000);
        })
      }
    });
  }

  // Intersection Observerのオプション
  var options = {
    root: null, // nullの場合、ビューポートがルート
    rootMargin: '0px',
    threshold: 0.8 // 80%以上表示された時にコールバックを実行
  };

  // Intersection Observerのインスタンスを作成
  var observer = new IntersectionObserver(onIntersection, options);

  // 対象要素を監視
  // observer.observe(scroll_container);
  document.querySelectorAll('.scroll-container').forEach(function (scroll_container) {
    observer.observe(scroll_container);
  });



  //---- ドロップダウンのアニメーション ----
  $('.dropdown').on('show.bs.dropdown', function () {
    $(this).find('.dropdown-menu').each(function(){
      $(this).fadeIn(500);
    })
  })
  $('.dropdown').on('hidden.bs.dropdown', function () {
    $(this).find('.dropdown-menu').each(function(){
      $(this).fadeOut(500);
    })
  })

  //---- 動画の自動再生と再生ボタン -----
  const containers = document.querySelectorAll('.video-container');

  containers.forEach(function(container){
    const video = container.querySelector('.buttoned-video');
    const button = container.querySelector('.play-button');

    // 動画が終了したときの処理
    video.addEventListener('ended', function () {
      button.style.display = 'block';
    });

    // 動画が再生される前の処理
    video.addEventListener('play', function () {
      button.style.display = 'none';
    });

    container.addEventListener('click', function() {
      if (video.paused) {
          video.play(); // 動画を再生
      }
    });
  });

});

