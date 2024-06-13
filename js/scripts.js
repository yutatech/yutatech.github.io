/*!
* Start Bootstrap - Bare v5.0.9 (https://startbootstrap.com/template/bare)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// 横スクロールの矢印表示
document.addEventListener('DOMContentLoaded', function() {
  const scrollContainer = document.querySelector('.scroll-container .row');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');

  // 横スクロールできるヒントの矢印  
  $('.scroll-container').hover(
    function () {
      console.log("hover");
      $(this).find('.arrow').each(function () {
        $(this).css('display', 'flex');
        $(this).fadeOut(1500);
      })
    },
    function (){}
  );

  // ドロップダウンのアニメーション
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

