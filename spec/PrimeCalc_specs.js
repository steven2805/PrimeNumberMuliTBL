var assert = require('assert');
var PrimeCalculator = require("../public/PrimeCalc.js");

describe('This is testing the Prime Calculator', function(){


    it('should return 100 values', function () {
        var primeCalc = new PrimeCalculator(100);
        var value = primeCalc.range;
        assert.deepEqual(value.length,100);
    });


});