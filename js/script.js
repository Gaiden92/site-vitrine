$(document ).ready(function() {

  $(window).on('load', function () {
      $("#splash").fadeOut('swing');
    });
  

  //Menu sticky
  
  $(window).scroll(function(){
    var sticky = $('.sticky'),
    scroll = $(window).scrollTop();
      if (scroll >= 907) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

    //Animation texte 'typing'
    $("[data-typer]").attr("data-typer", function(i, txt) {

        var $typer = $(this),
          tot = txt.length,
          pauseMax = 300,
          pauseMin = 60,
          ch = 0;
      
        (function typeIt() {
          if (ch > tot) return;
          $typer.text(txt.substring(0, ch++));
          setTimeout(typeIt, ~~(Math.random() * (pauseMax - pauseMin + 1) + pauseMin));
        }());
      
      });
    //Animation flèches
    
    $('.fleches').delay(3000).fadeIn('swing');
    $('a.slideshow_arr').on('click', function() {
      $('html, body').animate({'scrollTop': $('.en-tete').innerHeight() });
    });
    
});


