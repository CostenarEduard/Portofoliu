

// function email(item) {
//     let emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if ($(item).attr('data') === 'email') {
//         if ($(item).val().match(emailRe)) {
//             $(item).css('border-color', 'green');
//             $(item).next('p').remove();
//         } else {
//             $(item).css('border-color', 'red');
//             $(item).after("<p>The email address you supplied is invalid.</p>");
//         }
//         // if () {

//         // } else {

//         // }
//     }
// }

let emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function email(item) {
    if (item.val().match(emailRe) && item.attr('data') === 'email') {
        item.css('border-color', '#dfe0e6');
    } else {
        item.css('border-color', 'red');    
    }
}

function confEmail(item) {
    if ($('input:eq(0)').css('border-color', '#dfe0e6')) {
        if (item.attr('data') === 'confirm-data' && item.val() === $('input:eq(1)').val()) {
            console.log('sunt bune')
        } else {
            console.log('nu sunt bune')
        }
    }
}

function requiredColor(item) {

    if (item.val().length == 0 || item.val() === 'month') { 
        item.css('border-color', 'red');    
    } else {
        item.css('border-color', '#dfe0e6');
    }

    email(item);
    confEmail(item);
}

function requiredAll() {
    $('form').find('input, select').each(function() {
        let item = $(this);
        requiredColor(item);
    })
} 

$('form').find('input, select').keyup(function() {
    $(this).blur(() => {
        requiredColor($(this));
    })
})

$('form').find('select').blur(function() {
    requiredColor($(this));
})

$('.btn-grn').on('click', function() {
    requiredAll();
})

