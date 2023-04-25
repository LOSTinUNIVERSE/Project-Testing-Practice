/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"caesarCipher\": () => (/* binding */ caesarCipher),\n/* harmony export */   \"calculator\": () => (/* binding */ calculator),\n/* harmony export */   \"capitalize\": () => (/* binding */ capitalize),\n/* harmony export */   \"reverse\": () => (/* binding */ reverse)\n/* harmony export */ });\nfunction capitalize(string) {\n    let firstLetter = string.charAt(0)\n    firstLetter = firstLetter.toUpperCase()\n    const theRestOfWord = string.slice(1)\n    const capitalized = firstLetter + theRestOfWord\n    return capitalized\n}\nfunction reverse(string) {\n    string = string.split('')\n    string = string.reverse()\n    string = string.join('')\n    console.log(string);\n    return string\n}\nconst calculator = {\n    add(a, b) {\n        return a + b\n    },\n    subtrack(a, b) {\n        return a - b\n    },\n    multiply(a, b) {\n        return a * b\n    },\n    divide(a, b) {\n        return a / b\n    }\n}\nfunction caesarCipher(string) {\n    string = string.toLowerCase()\n    string = Array.from(string)\n    //! at this point we deleted type module from package json so webpack works fine \n    let indexLike = 0\n    string.forEach(item => {\n        const numbers = item.charCodeAt() - 64;\n        item = String.fromCharCode(65 + numbers)\n        if (item == '{') item = 'a'\n        if (item != '!') string[indexLike] = item\n        indexLike++\n    });\n    string = string.join('')\n    return string\n}\n\n//# sourceURL=webpack://template/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;