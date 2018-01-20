var betweenRange = false ;//This is unused but allows changing the application to find primes between a range


function PrimeCalculator(inputNumber){
    if(isNaN(inputNumber) || inputNumber < 1){
        this.number = 1;
    }else{
        this.number = inputNumber;
    }

    this.range = this.rangeGeneration();
    this.primes = primeFinder(this.range, this.number);
}


PrimeCalculator.prototype.rangeGeneration = function(){
    var counter = 1;
    var rangeArray = [];
    if(betweenRange){
        var upto = this.number;
    }else{
        var upto = 6000;
    }
    while(counter <= upto){
        rangeArray.push(counter);
        counter++;
    }
    return rangeArray;

};

primeFinder = function(range, inputNumber){
    var rangeArray = range.slice(0);
    var unSortedPrimes = findValues(rangeArray, 0);
    var sortedPrimes = clearUpPrimesArray(unSortedPrimes,inputNumber);
    return sortedPrimes;
};



findValues = function(rangeArray, offset){
    rangeArray[0] = 0;
    for(var i = 0 + offset ; i < rangeArray.length; i++){

        if(rangeArray[i] !== 0){
            primer(rangeArray,rangeArray[i]);
            break;
        }
    }
    return rangeArray;
};

primer = function(array, value) {
    var holdingArray = array;
    if(value * value > array.length){
        return array.length;
    }
    var currentValue = value * value;

    while (currentValue <= array.length){
        holdingArray[currentValue - 1] = 0;
        currentValue += value;
    }
    findValues(holdingArray, value);
};

clearUpPrimesArray = function(array, number){
    var tempArray = [];
    for(var i = 0; i < array.length; i++){
        if(array[i] !== 0){
            tempArray.push(array[i]);
            if(tempArray.length >= number && !betweenRange){
                break;
            }
        }
    }
     return tempArray;
};

module.exports = PrimeCalculator;