var Multiplier = require("../client/src/multiplier");
var assert = require ("assert");


describe('Should be testing the multiplier functions', function(){


    it('should take one value from array and multiply it with all other numbers including self', function () {
        var multi = new Multiplier([2,3,5]);
        var values = [[2,4,6,10],[3,6,9,15],[5,10,15,25]];
        assert.deepEqual(multi.output, values)
    });


});