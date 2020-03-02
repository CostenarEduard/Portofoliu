let $box =  $('.grey-section').find($('.box'))

function addRemoveClass(e) {
    if ($box.hasClass('active')) {
        $box.removeClass('active');
    }

    if (!$(e).hasClass('active')) {
        $(e).addClass('active');
    }
}

$('.grey-section').find($('.box')).click(function() {    
    addRemoveClass(this)
})
