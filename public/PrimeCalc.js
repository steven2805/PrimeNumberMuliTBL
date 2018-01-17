
function PrimeCalculator(n){
    this.number = n;
}

PrimeCalculator.prototype.calc  = function () {
    return this.number * 2;
};

module.exports = PrimeCalculator;

