let  $navSection = $('nav').find('.side-nav-selection');


$('.hamburgher').find('.menu').click(function() {
    $(this).css("display", "none");
    $('.close').css("display", "block");
    $navSection.addClass('side-nav');
    $navSection.find('.black-bg').css("width", "60%");
})

$('.hamburgher').find('.close').click(function() {
    $(this).css("display", "none");
    $('.menu').css("display", "block");
    $navSection.removeClass('side-nav');
    $navSection.find('.black-bg').css("width", "0%");
})

$(window).scroll(function() {
    let $navTop = $('nav');
    
    let distanceFromTop = $navTop.offset().top;
    console.log(distanceFromTop)
   
    if(($(window)).scrollTop() !== 0) {
        $navTop.addClass('black')
    } else {
        $navTop.removeClass('black')
    }
});