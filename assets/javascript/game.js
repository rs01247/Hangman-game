
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
    ];

    var images = {
        hulk: "./assets/images/hulk.jpeg",
        thor: "./assets/images/thor.png",
        hawkeye: "./assets/images/hawkeye.png",
        loki: "./assets/images/loki.png",
        antman: "./assets/images/antman.png",
        spiderman: "./assets/images/spiderman.png",
        ironman: "./assets/images/ironman.png",
    };

    var wins = 0;
    var userGuess = 12;
    var letters = [];

    // INITIALIZATION   
    var selection = avengers[Math.floor(Math.random() * avengers.length)];
    console.log(selection);

    // DECLARING VARIABLES
    var winSpan = document.getElementById("wins");
    var userSpan = document.getElementById("userGuess");
    var letterSpan = document.getElementById("letters");
    var startDiv = document.getElementById("startDiv");
    var character = document.getElementById("hero");
    var characterPic = document.getElementById("headShot");
    var startOver = document.getElementById("restartButton");

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
        startDiv.innerHTML = (answers.join(" ")).toUpperCase();
        userGuess = 12;
        letters = [];
        character.innerHTML = "GUESS THE HERO!";
        characterPic.src = "./assets/images/thumbnail.png";
        startOver.id = "restartButton";
        // updateHTML();
    }

    function superImage() {
        characterPic.src = images[selection];
        character.style.fontSize = "6vh";
        character.innerHTML = "AVENGERS ASSEMBLE";
    }

    function updateHTML() {
        winSpan.textContent = wins;
        userSpan.textContent = userGuess;
        letterSpan.textContent = letters;
    }

    function youLose() {
        characterPic.src = "./assets/images/thanos.jpg";
        character.style.textAlign = "center";
        character.innerHTML = "DISINTEGRATED!"
    }

    // GAME LOOP    

    // START GAME FROM BUTTON CLICK (Bug)
    // startDiv.onclick = function (event) {

    document.onkeyup = function (event) {
        var input = event.key;
        startDiv.innerHTML = (answers.join(" ")).toUpperCase();

        // MAKE SURE KEYS PRESSED ARE ONLY A-Z
        if (event.keyCode < 91 && event.keyCode > 64) {
            if (letters.indexOf(input.toUpperCase()) === -1) {
                userGuess--;
                letters.push(input.toUpperCase());

                for (var j = 0; j < selection.length; j++) {
                    if (selection[j] === input) {
                        answers[j] = input;
                        remaining--;
                        // And stop logging [j] input
                        console.log(remaining);
                    }
                    startDiv.innerHTML = (answers.join(" ")).toUpperCase();
                }

            }

            if (remaining === 0) {
                wins++;
                superImage();
                // Display Button to Restart Game
                startOver.id = "restartButtonChange";
                startOver.onclick = function (event) {
                    restartGame();
                }
                // if (button on click) {
                // restartGame()
                // }
            }

            else if (userGuess === 0) {
                youLose();
                // Display Button to Restart Game
                startOver.id = "restartButtonChange";
                startOver.onclick = function (event) {
                    restartGame();
                }
                // if (button on click) {
                // restartGame()
                // }
            }

            else {
                updateHTML();
            }

        }




    }

}

// CURRENTLY :

// COULD NOT GET STARTDIV BUTTON TO INITIATE GAME 
// RESTART GAME FUNCTION DOES NOT FULLY WORK
// WINS++ NOT LOGGED UNTIL REMAINING = -1
//     SUPPOSED TO LOG AT REMAINING = 0