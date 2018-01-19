

function Multiplier(primes){
    this.output = runMultiplier(primes)
}

runMultiplier = function(primes){
    var totalnumber = primes.length;
    console.log(totalnumber,"this is the value you are looking for ");
    var copyPrimes = primes.slice(0);

    var valueArray = [];
    for(var i = 0; i < totalnumber; i++){
        var innerValues = [];
        for(var j = 0; j < totalnumber;j++){
            innerValues.push(primes[i] * primes[j]);
        }
        valueArray.push(innerValues);
    }
    return valueArray;

};



module.exports = Multiplier;