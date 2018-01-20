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
        var prime = new PrimeCalculator(inputBox.value);
        var multiplierValues = new Multiplier(prime.primes);
        buildTable(prime, multiplierValues.output);
        console.log(prime);
        console.log(multiplierValues.output);
    })

};

setUpInput = function(){
    var inputArea = document.getElementById("inputArea");
    var inputBox = document.createElement('input');
    inputBox.id = "InputBox";
    inputBox.name = "Input Number";
    inputBox.type = "number";
    inputBox.min = "1";
    inputBox.max = "5133";
    inputBox.defaultValue = 1;
    inputArea.appendChild(inputBox);
    console.log(inputBox);
    return inputArea;
};

setUpConfirmBox = function(area){
    var button = document.createElement('button');
    button.innerHTML = "Submit";
    area.appendChild(button);
    return button;
};

buildTable = function (headers, multiValues) {
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
                td.color = "white";
            }
            td.innerHTML = multiValues[i][j];
            tr2.appendChild(td);
        }
        table.appendChild(tr2);
    }

    div.appendChild(table);

};

window.addEventListener("load", function(event){
    console.log("this is the new entry point");
    mainSetUp();
});

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
    this.primes = primeFinder(this.range, this.number);
}



PrimeCalculator.prototype.rangeGeneration = function(){
    var counter = 1;
    var rangeArray = [];
    while(counter <= 21000){
        rangeArray.push(counter);
        counter++;
    }
    return rangeArray;

};

primeFinder = function(array, number){
    var primeArray = array.slice(0);
    var value = findValues(primeArray, 0);
    var result = clearUpPrimesArray(value,number);
    return result;
};



findValues = function(array, offset){
    array[0] = 0;
    for(var i = 0 + offset ; i < array.length; i++){

        if(array[i] !== 0){
            primer(array,array[i]);
            break;
        }
    }
    return array;
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
            if(tempArray.length >= number){
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