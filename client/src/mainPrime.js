var PrimeCalculator = require("./PrimeCalc.js");
var Multiplier = require("./multiplier.js");

mainSetUp = function(){
    var inputAreaDIV = setUpInput();
    var inputBox = document.getElementById("InputBox");
    var button = setUpConfirmBox(inputAreaDIV);

    button.addEventListener('click', function(){
        var prime = new PrimeCalculator(inputBox.value);
        var multiplierValues = new Multiplier(prime.primes);
        buildTable(prime, multiplierValues.output);
        console.log(prime);
        console.log(multiplierValues.output);
    })

};

setUpInput = function(){
    var inputArea = document.getElementById("inputArea");
    var inputBox = document.createElement('input');
    inputBox.id = "InputBox";
    inputBox.name = "Input Number";
    inputBox.type = "number";
    inputBox.min = "1";
    inputBox.max = "5133";
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

buildTable = function (headers, multiValues) {
    var div = document.getElementById("table");
    var table = document.createElement("table");
    var tr = document.createElement("tr");
    var counter = 0;
    var spacing = document.createElement('th');
    spacing.innerHTML = "#";
    tr.appendChild(spacing);

    while(counter < headers.primes.length){
        var th = document.createElement('th');
        th.innerHTML = headers.primes[counter];
        tr.appendChild(th);
        table.appendChild(tr);
        counter++;
    }


    for(var i = 0; i < multiValues.length; i++){
        var tr2 = document.createElement('tr');
        for(var j = 0; j < multiValues[i].length; j++) {
            var td = document.createElement('td');
            if(j === 0) {
                td.bgColor = "4CAF50";
                td.color = "white";
            }
            td.innerHTML = multiValues[i][j];
            tr2.appendChild(td);
        }
        table.appendChild(tr2);
    }

    div.appendChild(table);

};

window.addEventListener("load", function(event){
    console.log("this is the new entry point");
    mainSetUp();
});