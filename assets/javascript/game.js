// INITIALIZATION
var wins = 0;
var userGuess = 0;
var choose = "";

// HTML ELEMENT NODES
var winSpan = document.getElementById("wins");
var userSpan = document.getElementById("userGuess");
var chooseSpan = document.getElementById("choose");

// WORD CHOICES FOR THE GAME
var avengers = [
    "thanos", 
    "hulk", 
    "thor", 
    "hawkeye", 
    "loki"];

// PICKS A RANDOM WORD    
var selection = avengers[Math.floor(Math.random() * avengers.length)];

// CREATES THE BLANKS FOR WORD GUESS ACCORDING TO LENGTH OF WORD
var answers = [];
for (var i = 0; i < selection.length; i++) {
    answers[i] = "_";
}

var remaining = selection.length;

// WHILE LOOP THAT CONTINUES UNTIL THERE ARE NO MORE REMAINING LETTERS

while (remaining > 0) {
    var targetDiv = document.getElementById("startDiv");
    targetDiv.textContent = "Hello";
}

answers.join(" ");