
window.onload = function () {

    // INITIALIZATION   

    var wins = 0;
    var userGuess = remaining;
    var letters = [];

    // HTML ELEMENT NODES
    var winSpan = document.getElementById("wins");
    var userSpan = document.getElementById("userGuess");
    var letterSpan = document.getElementById("letters");

    // WORD CHOICES FOR THE GAME
    var avengers = [
        "thanos",
        "hulk",
        "thor",
        "hawkeye",
        "loki"
    ];

    var selection = avengers[Math.floor(Math.random() * avengers.length)];
    var answers = [];
    for (var i = 0; i < selection.length; i++) {
        answers[i] = "_";
    }

    var remaining = selection.length;

    // GAME LOOP    
    // while (remaining > 0) {

    document.onkeydown = function (event) {
        var targetDiv = document.getElementById("startDiv");
        targetDiv.innerHTML = answers.join(" ");
        console.log(answers.join(" "));

// CURRENT BUG - CORRECT LETTER SHOWS UP IN THE BLANKS WHEN THE SECOND LETTER IS PRESSED

        var input = event.key;
        for (var j = 0; j < selection.length; j++) {
            if (selection[j] === input) {
            answers[j] = input;
            remaining--;
            }
        }
    }
// }

    winSpan.textContent = wins;
    userSpan.textContent = userGuess;
    letterSpan.textContent = letters;

}