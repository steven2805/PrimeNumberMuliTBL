var assert = require('assert');
var PrimeCalculator = require("../client/src/PrimeCalc.js");

describe('This is testing the Prime Calculator', function(){


    it('should return 7000 values', function () {
        var primeCalc = new PrimeCalculator(10);
        var value = primeCalc.range;
        assert.deepEqual(value.length,7000);
    });

    it('should return default to 1 if not a valid number', function (){
        var notvalid = new PrimeCalculator("something");
        var value = notvalid.primes;
        assert.deepEqual(value.length,1)
    });

    it('should default to 1 if negative number used', function(){
        var secondnotvalid = new PrimeCalculator(-100);
        assert.deepEqual(secondnotvalid.primes.length ,1)
    });

    it('should be returning 8 primes', function (){
        var twentyprimes = new PrimeCalculator(8);
        assert.deepEqual(twentyprimes.primes, [2,3,5,7,11,13,17,19])
    })


});