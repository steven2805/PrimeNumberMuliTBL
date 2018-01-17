var Multiplier = require("../client/src/multiplier");
var assert = require ("assert");


describe('Should be testing the multiplier functions', function(){


    it('should take one value from array and multiply it with all other numebrs including self', function () {
        var muli = new Multiplier([1,2,3,4,5]);
        assert.deepEqual(multi.output)
    });


});