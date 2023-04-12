let result = document.getElementById("result");
let gameTitle = document.getElementById("game-title");
let playerScore = document.getElementById("score-l");
let opponentScore = document.getElementById("score-r");
let player = document.getElementById("player");
let section = document.getElementById("section");
let isRunning = false;
let random;
let playerScoreValue = 0;
let opponentScoreValue = 0;



if (localStorage.playerName != undefined) {
    var playerName = localStorage.playerName;
    if (playerName == "") {
        playerName = "Player"
        result.innerHTML = `Welcome ${playerName}, are you ready? Choose an option above!`;

    } else {
        result.innerHTML = `Welcome ${playerName}, are you ready? Choose an option above!`;
    }
} else {
    playerName = "Player"
    result.innerHTML = `Welcome ${playerName}, are you ready? Choose an option above!`;
}

player.innerHTML = playerName;


let leftOptions = [];

leftOptions[0] = document.getElementById("option-1-l");
leftOptions[1] = document.getElementById("option-2-l");
leftOptions[2] = document.getElementById("option-3-l");


let rightOptions = [];


rightOptions[0] = document.getElementById("option-1-r");
rightOptions[1] = document.getElementById("option-2-r");
rightOptions[2] = document.getElementById("option-3-r");

function ifClicked(id) {
    if (isRunning == false) {
        rightOptions.forEach(i => i.style.opacity = "0.5");
        isRunning = true;
        leftOptions[id].classList.add("option-active");
        leftOptions.forEach(i => i.classList.remove("option-hover"));
        opponentOption = Math.floor(Math.random() * (3 - 0)) + 0;
        setTimeout(function () {
            rightOptions[opponentOption].style.opacity = "1"
            gamePossibilitys(id, opponentOption);

        }, 1000);
        setTimeout(function () {
                leftOptions[id].classList.remove("option-active");
                leftOptions.forEach(i => i.classList.add("option-hover"));
                rightOptions.forEach(i => i.style.opacity = "0");
                gameTitle.innerHTML = "Jo-Ken-Po"
                result.innerHTML = `Choose an option above to play again!`;
                isRunning = false;
            },
            5000);
    }
}

function gamePossibilitys(a, b) {
    if (a == b) {
        gameTitle.innerHTML = "DRAW!"
        result.innerHTML = `No points were distributed in this round`;
        return;
    } else if (a == 0) {
        if (b == 1) {
            gameTitle.innerHTML = "YOU LOSE!"
            result.innerHTML = `Point to Opponent`;
            opponentScoreValue++
            opponentScore.innerHTML = opponentScoreValue;
            return;
        } else if (b == 2) {
            gameTitle.innerHTML = "YOU WIN!"
            result.innerHTML = `Point to ${playerName}`;
            playerScoreValue++
            playerScore.innerHTML = playerScoreValue;
            return;
        };
    } else if (a == 1) {
        if (b == 0) {
            gameTitle.innerHTML = "YOU WIN!"
            result.innerHTML = `Point to ${playerName}`;
            playerScoreValue++
            playerScore.innerHTML = playerScoreValue;
            return;
        } else if (b == 2) {
            gameTitle.innerHTML = "YOU LOSE!"
            result.innerHTML = `Point to Opponent`;
            opponentScoreValue++
            opponentScore.innerHTML = opponentScoreValue;
            return;
        };
    } else if (a == 2) {
        if (b == 0) {
            gameTitle.innerHTML = "YOU LOSE!"
            result.innerHTML = `Point to Opponent`;
            opponentScoreValue++
            opponentScore.innerHTML = opponentScoreValue;
            return;
        } else if (b == 1) {
            gameTitle.innerHTML = "YOU WIN!"
            result.innerHTML = `Point to ${playerName}`;
            playerScoreValue++
            playerScore.innerHTML = playerScoreValue;
            return;
        };
    }
}

let finishButton = document.getElementById("finish-btn");
finishButton.addEventListener("click", finishGame);

let startButton = document.getElementById("start-btn");

function finishGame() {
    if (isRunning == false) {
        isRunning = true;
        leftOptions.forEach(i => i.classList.remove("option-hover"));


        if (playerScoreValue == opponentScoreValue) {

            gameTitle.innerHTML = "It's a Draw";
            result.innerHTML = `Nobody won the game!`;
            startButton.style.display = "inline-block";
            finishButton.style.display = "none";

        } else if (playerScoreValue > opponentScoreValue) {
            gameTitle.innerHTML = "You Won The Game";
            result.innerHTML = `The Player ${playerName} Won The Game!`;
            startButton.style.display = "inline-block";
            finishButton.style.display = "none";
            party.confetti(section);

        } else if (playerScoreValue < opponentScoreValue) {
            gameTitle.innerHTML = "You Lose The Game";
            result.innerHTML = `The Opponent Won The Game!`;
            startButton.style.display = "inline-block";
            finishButton.style.display = "none";
            section.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
            setTimeout(function () {
                section.style.backgroundColor = "transparent";
            }, 1000)
        }
    } else {
        result.innerHTML = "Wait The Round End!";
    }
}

startButton.addEventListener("click", () => {
    leftOptions.forEach(i => i.classList.add("option-hover"));
    playerScoreValue = 0;
    playerScore.innerHTML = playerScoreValue;
    opponentScoreValue = 0;
    opponentScore.innerHTML = opponentScoreValue;
    gameTitle.innerHTML = "Jo-Ken-Po";
    result.innerHTML = `Welcome ${playerName}, are you ready? Choose an option above!`;
    startButton.style.display = "none";
    finishButton.style.display = "inline-block";
    isRunning = false;
});