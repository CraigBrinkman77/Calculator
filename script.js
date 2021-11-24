// $("button").click(function () {
//     alert("button clicked");
// });


function press(element){
    var displayDiv = document.querySelector("#display");
    displayDiv.innerText = displayDiv.innerText + element;
}

function clr(){
    var displayDiv = document.querySelector("#display");
    displayDiv.innerText = 0;
}

var storedValue = 0

function setOP(element){
    var displayDiv = document.querySelector("#display");
    storedValue = parseInt(displayDiv.innerText) + element;
    console.log(storedValue)
    displayDiv.innerText = 0;
}

function calculate(){
    var displayDiv = document.querySelector("#display");
    displayDiv.innerText = parseInt(storedValue + parseInt(displayDiv.innerText));
}