// let cuvinteArr = ['pisica', 'pepene', 'roata', 'caine', 'bere', 'pantof', 'telefon', 'apa', 'foc'];
// let cuvinteRandom = cuvinteArr[Math.floor(Math.random() * cuvinteArr.length)];
// let $nr = $('#nr').find('span').html();
// let raspunsArr = [];
// let $litera = $('input').val();
// const alfabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// $('#cuvant').ready(start());
// function start() {
// 	for (let i = 0; i < cuvinteRandom.length; i++) {
// 		raspunsArr[i] = "_";
// 	};
// 	let i = raspunsArr.join(' ');
// 	$('#cuvant').text(i);
// };

// function decrement() {
// 	if ($nr === 1) {
// 		generatePopover('You Lose!');
// 	} else {
// 		$nr--;
// 		$('#nr').find('span').html($nr);
// 		if ($nr > 4) {
// 			$('#color').css("background-color", "green");
// 		} else if ($nr > 2) {
// 			$('#color').css("background-color", "orange");
// 		} else if ($nr > 0) {
// 			$('#color').css("background-color", "red");
// 		};
// 	};
// };

// function litera() {
// 	let $litera = $('input').val();
// 	if ($litera.length == 1) {
// 		for (let i = 0; i < cuvinteRandom.length; i++) {
// 			if (cuvinteRandom[i] === $litera) {
// 				raspunsArr[i] = $litera;
// 			};
// 		};
// 		for (var i = 0; i < cuvinteRandom.length; i++) {
// 			if (cuvinteRandom[i] === $litera) {
// 				$('#corect').append('<p>' + $litera + '</p>');
// 				break;
// 			};
// 		};
// 		if (!cuvinteRandom.includes($litera)) {
// 			$('#gresit').append('<p>' + $litera + '</p>');
// 		}
	
// 		$('#cuvant').html(raspunsArr.join(' '));
// 		$('input').val('');

// 		if (!raspunsArr.includes('_')) {
// 			generatePopover('YOU WIN!');
// 		};
// 	} else if (!$('div').hasClass('cover')) {
// 		alert('Scrie o litera in input.')
// 	}
// };

// function generatePopover(text) {
// 	const $cover = $('<div />', {
// 		class: 'cover'
// 	});

// 	const $popoverItem = $('<div />', {
// 		html: '<p>' + text + '</p>',
// 		class: 'popover-item'
// 	});

// 	const $closeBtn = $('<div />', {
// 		class: 'btn btn-danger',
// 		text: 'PLAY AGAIN'
// 	});

// 	$popoverItem.append($closeBtn);

// 	$cover.append($popoverItem);

// 	$closeBtn.click(function() {
// 		closePopover();
// 	});

// 	$('input').keypress(function (e) {
//  		let key = e.which;
//  		if(key == 13) {
//     		$closeBtn.click();
//   		};
// 	});   

// 	$('body').append($cover);
// };

// function closePopover() {
// 	location.reload();
// }

// $('button').click(function() {
// 	let $litera = $('input').val();
// 	litera();
// 	if (!cuvinteRandom.includes($litera)) {
// 		decrement();
// 	};
// });

// $('input').keypress(function (e) {
//  	let key = e.which;
//  	if(key == 13) {
//     	$('button').click();
//   	};
// });   

// console.log(cuvinteRandom);

const letters = ['A','B','C','D','E','F','G', 'H', 'I', 'J', 'K', 'L', 'M', 'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

let cuvinteArr = ['PISICA', 'PEPENE', 'ROATA', 'CAINE', 'BERE', 'PANTOF', 'TELEFON', 'APA', 'FOC'];
let randomWord = cuvinteArr[Math.floor(Math.random() * cuvinteArr.length)];
let $nr = $('.count').find('span').text();
let placeholder = generatePlaceholder(randomWord);

const $section = $('.letters-section');


console.log(randomWord);

$('.letters-section').on('click', '.item', function() {
    if ($(this).attr('data-checked') === "true") {
        return false;
    }

    const letter = $(this).attr('data-value');

    checkLetter(letter, this);

	$(this).attr('data-checked', true);
	
	win()
})

letters.forEach(function(letter) {
    const $span = $('<span />', {
        'html': '<span>' + letter + '</span>',
        'class': 'item',
        'data-value': letter
    })

    $section.append($span);
})

function checkLetter(letter, element) {
    if (randomWord.includes(letter)) {
        $(element).css('color', 'green');
        const indexes = findAllIndexes(randomWord, letter)
        
        placeholder = placeholder.split('');
        indexes.forEach(index => {
            placeholder[index] = letter
        })
        placeholder = placeholder.join('');

        $('.placeholder').text(placeholder);
    } else {
        $(element).css('color', 'red');
        decrement()
    }
}

function generatePlaceholder(word) {
    let placeholder = "";

    for (let i = 0; i < word.length; i++) {
        placeholder = placeholder + '_';
    }

    $('.placeholder').text(placeholder);

    return placeholder;
}

function findAllIndexes(str, letter) {
    let indexes = [];

    for(let i = 0; i < str.length; i++) {
        if (str[i] === letter) 
            indexes.push(i);
    }

    return indexes;
}

function win() {
	if (placeholder === randomWord) {
		generatePopover('You Win!')
	}
}

function generatePopover(text) {
	const $cover = $('<div />', {
		class: 'cover'
	});

	const $popoverItem = $('<div />', {
		html: '<p>' + text + '</p>',
		class: 'popover-item'
	});

	const $closeBtn = $('<div />', {
		class: 'btn btn-danger',
		text: 'PLAY AGAIN'
	});

	$popoverItem.append($closeBtn);

	$cover.append($popoverItem);

	$closeBtn.click(function() {
		closePopover();
	});

	$('input').keypress(function (e) {
 		let key = e.which;
 		if(key == 13) {
    		$closeBtn.click();
  		};
	});   

	$('body').append($cover);
};

function closePopover() {
	location.reload();
}

function decrement() {
	if ($nr === 1) {
		generatePopover('You Lose!');
	} else {
		$nr--;
        $('.count').find('span').html($nr);
		if ($nr > 4) {
			$('.color').css("color", "green");
		} else if ($nr > 2) {
			$('.color').css("color", "orange");
		} else if ($nr > 0) {
			$('.color').css("color", "red");
		};
	};
};