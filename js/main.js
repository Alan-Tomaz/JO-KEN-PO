localStorage.clear();

function registerUser() {
    var playerName = document.getElementById("player-name");
    localStorage.playerName = playerName.value;
}