var player1 = "Player 1";
var player2 = "Player 2";

function editNames() {
    player1 = prompt ("Change the name of Player 1");
    player2 = prompt ("Change the name of Player 2");

    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
}

function rollTheDice () {
    setTimeout(function () {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".img1").setAttribute("src",
        "dice images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src",
        "dice images/dice" + randomNumber2 + ".png");
        if (randomNumber1 == randomNumber2) {
            document.querySelector("h1").innerHTML = "Draw!";
        }
        else if (randomNumber1 > randomNumber2) {
            document.querySelector("h1").innerHTML = player1 + " WINS!";
        }
        else {
            document.querySelector("h1").innerHTML = player2 + " WINS!";   
        }
    }, 2500);
}