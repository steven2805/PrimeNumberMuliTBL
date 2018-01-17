/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var PrimeCalculator = __webpack_require__(1);

var i = "testing the this is seen in the console";

var prime = new PrimeCalculator(100);



console.log(prime);

/***/ }),
/* 1 */
/***/ (function(module, exports) {


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



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map