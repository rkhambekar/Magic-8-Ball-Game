
window.onload = function () {
    var messages = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt',
        'Yes, definitely',
        'You may rely on it',
        'As I see it, yes',
        'Most likely',
        'Outlook good',
        'Yes!',
        'Signs point to yes',
        'Reply hazy try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        'Don\'t count on it',
        'My reply is no',
        'My sources say no',
        'Outlook not so good',
        'Very doubtful'
        ];

    var container = document.getElementById('magic'),
        opacityPercent,
        previousAnswer;
    function updateOpacity() {
        opacityPercent += 1;
        container.style.opacity = opacityPercent / 100;
        if (opacityPercent < 100) {
            window.requestAnimationFrame(updateOpacity);
        }
    }
    function makeVisible() {
        container.style.opacity = '0';
        opacityPercent = -1;
        updateOpacity();
    }
    opacityPercent = -1;
    document.getElementById('question').value = '';
    document.getElementById('prediction').onclick = function () {
        while (true) {
            var answer = messages[Math.floor(Math.random() * messages.length)];
            if (messages.length == 1 || answer != previousAnswer) {
                previousAnswer= answer;
                break;
            }
        }
        container.className = '';
        container.innerHTML = answer;
        makeVisible();
    };
};


