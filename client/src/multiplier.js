

function Multiplier(primes){
    this.output = runMultiplier(primes)
}

runMultiplier = function(primes){
    console.log(primes);
    var copyPrimes = primes.slice(0);

    var valueArray = [];
    for(var i = 0; i < primes.length; i++){
        console.log(i);
        var innerValues = [];
        for(var j = 0; j < primes.length;j++){
            innerValues.push(primes[i] * primes[j]);
        }
        valueArray.push(innerValues);
    }
    return valueArray;

};



module.exports = Multiplier;