let $nav = $('.small-nav');
let $navImg = $("header").find("img");
let $sponsorLogos = $('.sponsors').find('img');
let $sponsorSection = $('.section4').offset().top;

$sponsorSection -= 150;

function nav() {
    if ($(window).scrollTop() < 212) {
        $nav.css({"background": "none", "border-bottom": "none"});
        $navImg.css("display", "none");
    } else if ($(window).scrollTop() >= 212) {
        $nav.css({"background": "white", "border-bottom": "1px solid #eaeaea"});
        $navImg.css("display", "block");
    };
}

function sponsor() {
    if ($(window).scrollTop() < $sponsorSection) {
        $sponsorLogos.css({"filter": "grayscale(100%", "opacity": "0.66"})
    } else if ($(window).scrollTop() >= $sponsorSection) {
        $sponsorLogos.css({"filter": "none", "opacity": "1"})
    }
}

$(window).scroll(function() {
    nav();
    sponsor();
});

$($nav).find(".menu").click(function() {
    $('.side-nav').css("left", "0");
})

$(document).mouseup(function(e) 
{
    let $container = $('.side-nav');

    if (!$container.is(e.target) && $container.has(e.target).length === 0) 
    {
        $('.side-nav').css("left", "-260px");
    }
});
