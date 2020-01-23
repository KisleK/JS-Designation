window.onload = function () {
    alert("Let's play! Think of rock, paper or scissors");

    document.getElementById('playButton').addEventListener('click', randomNum);
};

function randomNum(e) {
    var compAns = Math.floor((Math.random() * 3) + 1);
    console.log(compAns);

    if (compAns === 1){
        alert ("Rock");

    } else if (compAns === 2) {
        alert ("Paper");

    } else {
        alert ("Scissors");

    }
}

