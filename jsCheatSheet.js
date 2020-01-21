/*---------------------------Basics---------------------------*/
// Functions
function fucntionName (parameter) {
    //code
}
function addNumbers(a, b) {
    return a + b;
}
x = addNumbers(1, 2);


// Edit Dom element
document.getElementById("elementID")// gets the whole element from opening to closing tags and everything inbetween

document.getElementById("elementID").innerHTML = "Hello World!"; // .innerHTML = will modify what is in the element .innerHTML += will append to div


// Output
console.log(a);             // write to the browser console
document.write(a);          // write to the HTML AVOID THIS*************************
alert(a);                   // output in an alert box
confirm("Really?");         // yes/no dialog, returns true/false depending on user click
prompt("Your age?","0");    // input dialog. Second argument is the initial value


// Delay function
setTimeout(function () {
    //functions and code here
}, 1000);


/*---------------------------EndBasics---------------------------*/

/*---------------------------Loops---------------------------*/
// For Loop
for (var i = 0; i < 10; i++) {
    document.write(i + ": " + i*3 + "<br />");
}
var sum = 0;
for (var i = 0; i < a.length; i++) {
    sum + = a[i];
}               // parsing an array
html = "";
for (var i of custOrder) {
    html += "<li>" + i + "</li>";
}


// While Loop
var i = 1;                      // initialize
while (i < 100) {               // enters the cycle if statement is true
    i *= 2;                     // increment to avoid infinite loop
    document.write(i + ", ");   // output
}


// Do While Loop
var i = 1;                      // initialize
do {                            // enters cycle at least once
    i *= 2;                     // increment to avoid infinite loop
    document.write(i + ", ");   // output
} while (i < 100)               // repeats cycle if statement is true at the end


// Break
for (var i = 0; i < 10; i++) {
    if (i == 5) { break; }          // stops and exits the cycle
    document.write(i + ", ");       // last output number is 4
}


// Continue
for (var i = 0; i < 10; i++) {
    if (i == 5) { continue; }       // skips the rest of the cycle
    document.write(i + ", ");       // skips 5
}
/*---------------------------EndLoops---------------------------*/

/*---------------------------If Else---------------------------*/

// If - Else⇵
if ((age >= 14) && (age < 19)) {        // logical condition
    status = "Eligible.";               // executed if condition is true
} else {                                // else block is optional
    status = "Not eligible.";           // executed if condition is false
}


// Switch Statement
switch (new Date().getDay()) {      // input is current day
    case 6:                         // if (day == 6)
        text = "Saturday";
        break;
    case 0:                         // if (day == 0)
        text = "Sunday";
        break;
    default:                        // else...
        text = "Whatever";
}
/*---------------------------End If Else---------------------------*/

/*---------------------------Variables---------------------------*/
//var is a variable only available in the function it is written *Function Scope*
// var written outside of all functions and in script tags is *Public or Script Scope* **This can be a bad idea
var a;                          // variable
var b = "init";                 // string
var c = "Hi" + " " + "Joe";     // = "Hi Joe"
var d = 1 + 2 + "3";            // = "33"
var e = [2,3,5,8];              // array
var f = false;                  // boolean
var g = /()/;                   // RegEx
var h = function(){};           // function object
const PI = 3.14;                // constant
var a = 1, b = 2, c = a + b;    // one line
let z = 'zzz';                  // block scope local variable
/*---------------------------EndVariables---------------------------*/


/*---------------------------Errors---------------------------*/

try {                           // block of code to try
    undefinedFunction();
}
catch(err) {                    // block to handle errors
    console.log(err.message);
}


// Throw error
throw "My error message";    // throw a text

// Input validation
var x = document.getElementById("mynum").value; // get input value
try {
    if(x == "")  throw "empty";                 // error cases
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x > 10)   throw "too high";
}
catch(err) {                                    // if there's an error
    document.write("Input is " + err);          // output error
    console.error(err);                         // write the error in console
}
finally {
    document.write("</br />Done");              // executed regardless of the try / catch result
}

// Error name values
// RangeErrorA number is "out of range"
// ReferenceErrorAn illegal reference has occurred
// SyntaxErrorA syntax error has occurred
// TypeErrorA type error has occurred
// URIErrorAn encodeURI() error has occurred

/*---------------------------ENDErrors---------------------------*/
