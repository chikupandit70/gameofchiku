const words = ['apple', 'artichoke', 'apricot', 'asparagus', 'avocado', 'beetroot', 'bell', 'pepper', 'blackberry', 'broccoli', 'blueberry', 'brussels', 'sprouts',
    'cabbage', 'carrot', 'cantaloupe', 'cauliflower', 'cherry'
]
targetText = words[Math.floor(Math.random() * words.length)]

function displayRandomText(targetText) {
    targetText = targetText.split("");
    textlen = targetText.length - 1;
    for (let i = 0; i <= textlen; i++) {
        tmp = targetText[i];
        randomIndex = Math.floor(Math.random() * textlen);
        targetText[i] = targetText[randomIndex];
        targetText[randomIndex] = tmp;
    }
    targetText = targetText.join('');
    document.getElementById('displayedText').innerHTML = targetText;
}

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');

    const guess = guessInput.value.toLowerCase();
    if (guess == targetText) {
        const utterance = new SpeechSynthesisUtterance(message.innerHTML = 'Congratulations! You Guessed the Word');
        window.speechSynthesis.speak(utterance);
        message.style.color = 'green';
    } else {
        const utterance = new SpeechSynthesisUtterance(message.innerHTML = 'Sorry! Wrong Guess. Please try Again');
        window.speechSynthesis.speak(utterance);
        message.style.color = 'red';
    }
}

displayRandomText(targetText);
