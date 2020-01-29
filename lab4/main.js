window.onload = function () {
  document.getElementById('findNameBtn').addEventListener('click', findName);

};

function findName(e) {

    var name = "Joe";
    var count = [];
    var inputText= document.getElementById('inputNameBox').value;

    for ( var i = 0; i < inputText.length; i++) {
        if (inputText[i] === "J") {
            for (var j = i; j < (name.length + i); j++) {
                count.push(inputText[j]);
            }
        }
    }

    if (count.length === 0) {
        alert("name not found");

    } else {
        alert(count);
        console.log(count);

    }
}