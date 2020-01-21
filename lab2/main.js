window.onload = function () {
    document.getElementById('addingButton').addEventListener('click', addFunction)
};

function addFunction(a) {
    var answer = "";

    answer += + document.getElementById('inputOne').value + + document.getElementById('inputTwo').value;
    alert(answer);
}