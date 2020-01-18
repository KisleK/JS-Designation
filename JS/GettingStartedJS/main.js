window.onload = function () {
    document.getElementById('consoleButton').addEventListener('click', respondConsole);
    document.getElementById('browserButton').addEventListener('click', respondBrowser);
};

function respondConsole (e) {
    console.log('Thanks for clicking the Console Button');
}
function respondBrowser (e) {
    document.write('Thanks for clicking the Browser Button');
}