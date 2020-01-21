window.onload = function () {
    document.getElementById('addingButton').addEventListener('click', addFunction);
    document.getElementById('multButton').addEventListener('click', multFunction);
};

function addFunction(a) {
    var add = "";

    add += + document.getElementById('inputOne').value + + document.getElementById('inputTwo').value;
    alert('add ' + add);
}


