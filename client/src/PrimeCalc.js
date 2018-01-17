
function PrimeCalculator(n){
    if(isNaN(n) || n < 1){
        this.number = 1;
    }else{
        this.number = n;
    }
    this.range = this.rangeGeneration();
    this.primes = primeFinder(this.range);
}


PrimeCalculator.prototype.rangeGeneration = function(){
    var counter = 1;

    var rangeArray = [];
    while(counter <= this.number){
        rangeArray.push(counter);
        counter++;
    }
    return rangeArray;

};



primeFinder = function(array){
    var primeArray = array.slice(0);
    var value = findValues(primeArray, 0);
    // console.log(array);
    var result = clearUpPrimesArray(value);
    return result;
};

findValues = function(array, offset){
    array[0] = 0;

    for(var i = 0 + offset ; i < array.length; i++){

        if(array[i] !== 0){
            primar(array,array[i]);
            break;
        }
    }
    return array;
};

primar = function(array, value) {
    var holdingArray = array;
    if(value * value > array.length){
        return array.length;
    }
    var currentvalue = value * value;

    while (currentvalue <= array.length){
        holdingArray[currentvalue - 1] = 0;
        currentvalue += value;
    }
    findValues(holdingArray, value);

};

clearUpPrimesArray = function(array){
    for(var i = array.length; i >= 0; i--){
        // console.log(array[4]);
        if(array[i] == 0){
             array.splice(i,1);
        }
    }
     return array;
};




module.exports = PrimeCalculator;

