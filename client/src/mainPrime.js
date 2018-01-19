var PrimeCalculator = require("./PrimeCalc.js");
var Muliplier = require("./multiplier.js");

mainSetUp = function(){
    var inputArea = setUpInput();
    var inputBox = document.getElementById("InputBox");
    var button = setUpConfirmBox(inputArea);

    button.addEventListener('click', function(){
        var prime = new PrimeCalculator(inputBox.value);
        buildTable(prime);
        var muliplier = new Muliplier(prime.primes);
        console.log(prime);
        console.log(muliplier.output);
    })

};

setUpInput = function(){
    var inputArea = document.getElementById("inputArea");
    var inputBox = document.createElement('input');
    inputBox.id = "InputBox";
    inputBox.name = "Input Number";
    inputBox.type = "number";
    inputBox.defaultValue = 1;
    inputArea.appendChild(inputBox);
    console.log(inputBox);
    return inputArea;
};

setUpConfirmBox = function(area){
    var button = document.createElement('button');
    button.innerHTML = "Submit";
    area.appendChild(button);
    return button;
};

buildTable = function (headers) {
    var div = document.getElementById("table");


}

window.addEventListener("load", function(event){
    console.log("this is the new entry point");
    mainSetUp();
});