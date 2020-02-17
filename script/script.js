$(document).ready(function(){
  exitMenuOnClick();
  heroTyping();
  progressBar();
});


function progressBar() {
  $('.progress-bar').waypoint(function() {
    $('.progress-bar').css({
    animation: "animate-positive 2s",
    opacity: "1"
    });
    }, { offset: '75%' });
};

function exitMenuOnClick() {
  $('.drawer-list').on('click', 'li', function(){
    $('#hamburger').click();
  });
};

function heroTyping() {
  let pos = 0;
  let speed = 90;
  let str = $("#hero-text").text();

  $("#hero-text").empty();

  function type() {
    if (pos < str.length) {
      let addText = $("#hero-text").html();
      addText += str.charAt(pos);
      pos++;
      $("#hero-text").html(addText);
      setTimeout(type,speed);
      if (addText.length >= str.length) {
          setTimeout(function() {
              $('.button').css("opacity", "100");
          }, 800)
      }
    }
  }

  setTimeout(type,2500);
};


// About-me, slider
$('.responsive').slick({
  dots: false,
  arrows: false,
  infinite: true,
  pauseOnHover: false,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// END of About-me, slider
