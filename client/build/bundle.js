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
var Multiplier = __webpack_require__(2);

mainSetUp = function(){
    var inputAreaDIV = setUpInput();
    var inputBox = document.getElementById("InputBox");
    var button = setUpConfirmBox(inputAreaDIV);

    button.addEventListener('click', function(){
        if(inputBox.value > 500){
            window.alert("WARNING...Performance may be slow when large values are used !");
        }
        var prime = new PrimeCalculator(inputBox.value);
        var multiplierValues = new Multiplier(prime.primes);
        buildTable(prime, multiplierValues.output);
        console.log(prime);
        console.log(multiplierValues.output);
    })

};

setUpInput = function(){
    var inputDiv = document.getElementById("inputArea");
    var inputBox = document.createElement('input');
    inputBox.id = "InputBox";
    inputBox.name = "Input Number";
    inputBox.type = "number";
    inputBox.min = "1";
    inputBox.max = "700";
    inputBox.defaultValue = "1";
    inputDiv.appendChild(inputBox);
    console.log(inputBox);
    return inputDiv;
};

setUpConfirmBox = function(area){
    var button = document.createElement('button');
    button.innerHTML = "Submit";
    button.class = "button";
    area.appendChild(button);
    return button;
};

buildTable = function (headers, multiValues) {
    var fragment = document.createDocumentFragment();
    var div = document.getElementById("table");
    var table = document.createElement("table");
    var tr = document.createElement("tr");
    var counter = 0;
    var spacing = document.createElement('th');
    spacing.innerHTML = "#";
    tr.appendChild(spacing);

    while(counter < headers.primes.length){
        var th = document.createElement('th');
        th.innerHTML = headers.primes[counter];
        tr.appendChild(th);
        table.appendChild(tr);
        counter++;
    }


    for(var i = 0; i < multiValues.length; i++){
        var tr2 = document.createElement('tr');
        for(var j = 0; j < multiValues[i].length; j++) {
            var td = document.createElement('td');
            if(j === 0) {
                td.bgColor = "4CAF50";
            }
            td.innerHTML = multiValues[i][j];
            td.title = headers.primes[i] + "X" + headers.primes[j - 1];
            fragment.appendChild(td);
        }
        tr2.appendChild(fragment);
        table.appendChild(tr2);
    }

    div.appendChild(table);

};

window.addEventListener("load", function(event){
    console.log("Entry point");
    mainSetUp();
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var betweenRange = false ;//This is unused but allows changing the application to find primes between a range


function PrimeCalculator(inputNumber){
    if(isNaN(inputNumber) || inputNumber < 1){
        this.number = 1;
    }else{
        this.number = inputNumber;
    }

    this.range = this.rangeGeneration();
    this.primes = primeFinder(this.range, this.number);
}


PrimeCalculator.prototype.rangeGeneration = function(){
    var counter = 1;
    var rangeArray = [];
    if(betweenRange){
        var upto = this.number;
    }else{
        var upto = 7000;
    }
    while(counter <= upto){
        rangeArray.push(counter);
        counter++;
    }
    return rangeArray;

};

primeFinder = function(range, inputNumber){
    var rangeArray = range.slice(0);
    var unSortedPrimes = findValues(rangeArray, 0);
    var sortedPrimes = clearUpPrimesArray(unSortedPrimes,inputNumber);
    return sortedPrimes;
};



findValues = function(rangeArray, offset){
    rangeArray[0] = 0;
    for(var i = 0 + offset ; i < rangeArray.length; i++){

        if(rangeArray[i] !== 0){
            primer(rangeArray,rangeArray[i]);
            break;
        }
    }
    return rangeArray;
};

primer = function(array, value) {
    var holdingArray = array;
    if(value * value > array.length){
        return array.length;
    }
    var currentValue = value * value;

    while (currentValue <= array.length){
        holdingArray[currentValue - 1] = 0;
        currentValue += value;
    }
    findValues(holdingArray, value);
};

clearUpPrimesArray = function(array, number){
    var tempArray = [];
    for(var i = 0; i < array.length; i++){
        if(array[i] !== 0){
            tempArray.push(array[i]);
            if(tempArray.length >= number && !betweenRange){
                break;
            }
        }
    }
     return tempArray;
};

module.exports = PrimeCalculator;

/***/ }),
/* 2 */
/***/ (function(module, exports) {



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

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map