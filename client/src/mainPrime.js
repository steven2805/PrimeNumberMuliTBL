var PrimeCalculator = require("./PrimeCalc.js");

mainSetUp = function(){
    var prime = new PrimeCalculator(30);
    console.log(prime);
};


window.addEventListener("load", function(event){
    console.log("this is the new entry point");
    mainSetUp();
})