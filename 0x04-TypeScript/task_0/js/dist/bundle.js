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

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/***/ (() => {

eval("\nvar student1 = {\n    firstName: \"John\",\n    lastName: \"Doe\",\n    age: 20,\n    location: \"New York\",\n};\nvar student2 = {\n    firstName: \"Jane\",\n    lastName: \"Smith\",\n    age: 22,\n    location: \"Los Angeles\",\n};\nvar studentsList = [student1, student2];\nvar table = document.createElement(\"table\");\nstudentsList.forEach(function (student) {\n    var row = table.insertRow();\n    var cell1 = row.insertCell();\n    var cell2 = row.insertCell();\n    cell1.textContent = student.firstName;\n    cell2.textContent = student.location;\n});\ndocument.body.appendChild(table);\n\n\n//# sourceURL=webpack://js/./main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./main.ts"]();
/******/ 	
/******/ })()
;