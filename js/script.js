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

    var color1 = $('.color1');
    var color2 = $('.color2');
    var color3 = $('.color3'),

    scroll_color = $(window).scrollTop();
    if ((scroll_color > 900) & (scroll_color < 3400)){color1.addClass('colour');}
        else color1.removeClass('colour');
    if ((scroll_color > 3400) & (scroll_color < 4000)){color2.addClass('colour');}
      else color2.removeClass('colour');
    if ((scroll_color > 4000) & (scroll_color < 5000)){color3.addClass('colour');}
      else color3.removeClass('colour');
    
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

    //Animation barres compétences
    var skillsDiv = jQuery('#skills');

    jQuery(window).on('scroll', function() {
      var winT = jQuery(window).scrollTop(),
        winH = jQuery(window).height(),
        skillsT = skillsDiv.offset().top;
      if (winT + winH > skillsT) {
        jQuery('.skillbar').each(function() {
          jQuery(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
          }, 1000);
        });
      }
    });
});