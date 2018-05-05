
window.onload = function () {

    // WORD CHOICES FOR THE GAME
    var avengers = [
        "hulk",
        "thor",
        "hawkeye",
        "loki",
        "antman",
        "spiderman",
        "ironman",
        "blackpanther",
    ];

    var images = [
        "../images/hulk.jpeg",
        "../images/thor.png",
        "../images/hawkeye.png",
        "../images/loki.png",
        "../images/antman.png",
        "../images/spiderman.png",
        "../images/ironman.png",
        "../images/blackpanther.png",
    ];

    var wins = 0;
    var userGuess = remaining;
    var letters = [];

    // INITIALIZATION   
    var selection = avengers[Math.floor(Math.random() * avengers.length)];
    console.log(selection);
    // HTML ELEMENT NODES
    var winSpan = document.getElementById("wins");
    var userSpan = document.getElementById("userGuess");
    var letterSpan = document.getElementById("letters");

    // ANSWERS ARRAY THAT IS DISPLAYED
    var answers = [];
    for (var i = 0; i < selection.length; i++) {
        answers[i] = "_";
    }
    var remaining = selection.length;
    console.log(remaining)


    // CREATING FUNCTIONS FOR RESTARTING THE GAME AND UPDATING INFORMATION
    function restartGame() {
        selection = avengers[Math.floor(Math.random() * avengers.length)];
        userGuess = remaining;
        letters = [];
        updateHTML();
    }

    function updateHTML() {
        winSpan.textContent = wins;
        userSpan.textContent = userGuess;
        letterSpan.textContent = letters;
    }

    // GAME LOOP    

    //JS TO MAKE GAME START WITH BUTTON PRESS
    // document.getElementById("startDiv").addEventListener("click", function (event) {

    document.onkeydown = function (event) {
        var input = event.key;
        for (var j = 0; j < selection.length; j++) {
            if (selection[j] === input) {
                answers[j] = input;
                remaining--;
            }

            // NEED TO LOG VAR REMAINING TO LETTERS REMAINING
            // NEED TO LOG LETTERS USED

            var targetDiv = document.getElementById("startDiv");
            targetDiv.innerHTML = (answers.join(" ")).toUpperCase();
            console.log(selection);

            // WHEN CORRECT WORD IS GUESSED, DISPLAY DIV WITH CHARACTER PHOTO AND NAME
            // NEED TO SET ID AND CHANGE IMG AND P FOR CARD
            // IF STATEMENT THAT RESTARTS GAME WHEN COMPLETED
            //LOG WIN TO "wins"
        }
        userGuess--;
        letters.push(input);
        if (remaining = 0) {
            wins++;
            restartGame();
        }

        else {
            updateHTML();
        }

    }

}


