
function PrimeCalculator(n){
    this.number = n;
    this.range = this.rangeGeneration();
}

PrimeCalculator.prototype.calc  = function () {
    return this.number * 2;
};

PrimeCalculator.prototype.rangeGeneration = function(){

};






module.exports = PrimeCalculator;

