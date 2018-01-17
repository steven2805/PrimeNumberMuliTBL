var assert = require('assert');
var PrimeCalculator = require("../client/src/PrimeCalc.js");

describe('This is testing the Prime Calculator', function(){




    it('should return 100 values', function () {
        var primeCalc = new PrimeCalculator(100);
        var value = primeCalc.range;
        assert.deepEqual(value.length,100);
    });

    it('should return default to 1 if not a valid number', function (){
        var notvalid = new PrimeCalculator("something");
        var value = notvalid.range;
        assert.deepEqual(value.length,1)
    });

    // it('should default to 1 if negative number used', function(){
    //     var secondnotvalid = new PrimeCalculator(-100);
    //     assert.deepEqual(secondnotvalid.range.length ,1)
    // });


});