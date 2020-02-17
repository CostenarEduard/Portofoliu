let curentTimer = 0;
let interval = 0;
let lastUpdateTime = new Date().getTime();
let $start = $('button.start');
let $stop = $('button.stop');
let $reset = $('button.reset');
let minutes = $('span.minutes');
let seconds = $('span.seconds');
let miliseconds = $('span.miliseconds');

$start.click(startTimer);
$stop.click(stopTimer);
$reset.click(resetTimer);

function pad(number) {
    return ('00' + number).substr(-2);
}

function update() {
    let newTime = new Date().getTime();
    let dt = newTime - lastUpdateTime;

    curentTimer += dt;

    let time = new Date(curentTimer);

    mins = pad(time.getMinutes());
    secs = pad(time.getSeconds());
    msecs = pad(Math.floor(time.getMilliseconds() / 10));

    minutes.text(mins);
    seconds.text(secs);
    miliseconds.text(msecs);


    lastUpdateTime = newTime;
}

function startTimer() {
    if (!interval) {
        lastUpdateTime = new Date().getTime();
        interval = setInterval(update, 1);
    }
}

function stopTimer() {
    clearInterval(interval);
    interval = 0;
}

function resetTimer() {
    stopTimer();

    curentTimer = 0;

    minutes.text('00');
    seconds.text('00'); 
    miliseconds.text('00'); 
}