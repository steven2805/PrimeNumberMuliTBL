
function PrimeCalculator(n){
    if(isNaN(n) || n < 1){
        this.number = 1;
    }else{
        this.number = n;
    }
    this.range = this.rangeGeneration();
    this.primes = primeFinder(this.range, this.number);
}



PrimeCalculator.prototype.rangeGeneration = function(){
    var counter = 1;
    var rangeArray = [];
    while(counter <= 50000){
        rangeArray.push(counter);
        counter++;
    }
    return rangeArray;

};

primeFinder = function(array, number){
    var primeArray = array.slice(0);
    var value = findValues(primeArray, 0);
    var result = clearUpPrimesArray(value,number);
    return result;
};



findValues = function(array, offset){
    array[0] = 0;
    for(var i = 0 + offset ; i < array.length; i++){

        if(array[i] !== 0){
            primer(array,array[i]);
            break;
        }
    }
    return array;
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
            if(tempArray.length >= number){
                break;
            }
        }
    }
     return tempArray;
};

module.exports = PrimeCalculator;