
function PrimeCalculator(n){
    this.number = n;
    this.range = this.rangeGeneration();
}

PrimeCalculator.prototype.calc  = function () {
    return this.number * 2;
};

PrimeCalculator.prototype.rangeGeneration = function(){
    var counter = 1;

    var array = [];
    while(counter <= this.number){
        array.push(counter);
        counter++;
    }

    return array;

};






module.exports = PrimeCalculator;

