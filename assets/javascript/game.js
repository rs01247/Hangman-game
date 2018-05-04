
document.onload = function () {

    // INITIALIZATION

    var wins = 0;
    var userGuess = 0;
    var answers = [];

    // HTML ELEMENT NODES
    var winSpan = document.getElementById("wins");
    var userSpan = document.getElementById("userGuess");
    var answerSpan = document.getElementById("answers");

    // WORD CHOICES FOR THE GAME
    var avengers = [
        "thanos",
        "hulk",
        "thor",
        "hawkeye",
        "loki"
    ];

    // var targetDiv = document.getElementById("startDiv");
    // targetDiv.innerHTML = avengers;

    // GAME LOOP
    document.onkeydown = function (event) {
        var keyPress = event.key.toLowerCase();
        var userChoice = event.key;
        var selection = avengers[Math.floor(Math.random() * avengers.length)];

        var answers = [];
        for (var i = 0; i < selection.length; i++) {
            answers[i] = "_";
        }

        var remaining = selection.length;

        while (remaining > 0) {

            targetDiv.innerHTML = answers.join(" ");

            if (userChoice === selection) {

            }
        }

        answerSpan.textContent = answers;

    }

}
