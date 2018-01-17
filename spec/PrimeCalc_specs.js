var assert = require('assert');
var PrimeCalculator = require("../public/PrimeCalc.js");

describe('This is testing the Prime Calculator', function(){


    it('should return 20', function () {
        var primeCalc = new PrimeCalculator(20);
        var value = primeCalc.calc();
        assert.deepEqual(value,40);


    });


})