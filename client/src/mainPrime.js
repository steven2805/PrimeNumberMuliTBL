var PrimeCalculator = require("./PrimeCalc.js");
var Multiplier = require("./multiplier.js");

mainSetUp = function(){
    var inputAreaDIV = setUpInput();
    var inputBox = document.getElementById("InputBox");
    var button = setUpConfirmBox(inputAreaDIV);

    button.addEventListener('click', function(){
        if(inputBox.value > 500){
            window.alert("WARNING...Performance may be slow when large values are used !");
        }
        var prime = new PrimeCalculator(inputBox.value);
        var multiplierValues = new Multiplier(prime.primes);
        buildTable(prime, multiplierValues.output);
    })

};

setUpInput = function(){
    var inputDiv = document.getElementById("inputArea");
    var inputBox = document.createElement('input');
    inputBox.id = "InputBox";
    inputBox.name = "Input Number";
    inputBox.type = "number";
    inputBox.min = "1";
    inputBox.max = "700";
    inputBox.defaultValue = "1";
    inputDiv.appendChild(inputBox);
    return inputDiv;
};

setUpConfirmBox = function(area){
    var button = document.createElement('button');
    button.innerHTML = "Submit";
    button.class = "button";
    area.appendChild(button);
    return button;
};

buildTable = function (headers, multiValues) {
    var fragment = document.createDocumentFragment();
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
            }
            td.innerHTML = multiValues[i][j];
            td.title = headers.primes[i] + "X" + headers.primes[j - 1];
            fragment.appendChild(td);
        }
        tr2.appendChild(fragment);
        table.appendChild(tr2);
    }

    div.appendChild(table);

};

window.addEventListener("load", function(event){
    console.log("Entry point");
    mainSetUp();
});