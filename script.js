var startButton = document.querySelector("#startButton");
var resetButton = document.querySelector("#resetButton");
var guessText = document.querySelector("#guessBox");
var winsText = document.querySelector("#wins");
var lossesText = document.querySelector("#losses");
var timeCount = document.querySelector("#timeCount");

var wordArray = ["array", "node", "javascript", "python", "frontend", "backend"];
var wins = 0;
var losses = 0;

function countdown() {
    var count = 10;
    var timeInterval = setInterval(function (){
        count --;
        timeCount.textContent = count;

        if( count === 0 && !winResult) {
            clearInterval(timeInterval);
            gameOver();
        } else {
            clearInterval(timeInterval);
            goodJob();
        }

    }, 1000)
}

function gameOver() {
    guessText.textContent = "GAME OVER";
    losses += 1;
    localStorage.setItem("storedLosses", losses);
}

function goodJob () {
    guessText.textContent = "YOU WON!!!";
    wins += 1;
    localStorage.setItem("storedWins", wins);
}

function renderMessage() {
    var lastWin = JSON.parse(localStorage.getItem("storedWins"));
    var lastloss = JSON.parse(localStorage.getItem("storedLosses"));
    if (lastWin !== null) {
        
    }
}