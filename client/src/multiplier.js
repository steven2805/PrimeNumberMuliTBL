

function Multiplier(primes){
    this.output = runMultiplier(primes)
}

runMultiplier = function(primes){
    var totalnumber = primes.length;
    var valueArray = [];
    for(var i = 0; i < totalnumber; i++){
        var innerValues = [];
        innerValues.push(primes[i]);
        for(var j = 0; j < totalnumber;j++){
            innerValues.push(primes[i] * primes[j]);
        }
        valueArray.push(innerValues);
    }
    return valueArray;

};



module.exports = Multiplier;