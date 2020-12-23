module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/speakers.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/speakers.js":
/*!***************************!*\
  !*** ./pages/speakers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Header/Header */ \"./src/components/Header/Header.js\");\n/* harmony import */ var _src_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Footer/Footer */ \"./src/components/Footer/Footer.js\");\n/* harmony import */ var _src_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Menu/Menu */ \"./src/components/Menu/Menu.js\");\n/* harmony import */ var _src_components_SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/SpeakerSearchBar/SpeakerSearchBar */ \"./src/components/SpeakerSearchBar/SpeakerSearchBar.js\");\n/* harmony import */ var _src_components_Speakers_Speakers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Speakers/Speakers */ \"./src/components/Speakers/Speakers.js\");\n\nvar _jsxFileName = \"/Users/oj/Desktop/pluralsight/design-react/pages/speakers.js\";\n\n\n\n\n\n\nfunction Page() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Speakers_Speakers__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zcGVha2Vycy5qcz9lYjU5Il0sIm5hbWVzIjpbIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFDWixzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJLHFFQUFDLHlGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQUlJLHFFQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQUtJLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVNIOztBQUNjQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3NwZWFrZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTWVudS9NZW51J1xuaW1wb3J0IFNwZWFrZXJTZWFyY2hCYXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvU3BlYWtlclNlYXJjaEJhci9TcGVha2VyU2VhcmNoQmFyJ1xuaW1wb3J0IFNwZWFrZXJzIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzL1NwZWFrZXJzJ1xuXG5mdW5jdGlvbiBQYWdlKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICA8TWVudSAvPlxuICAgICAgICAgICAgPFNwZWFrZXJTZWFyY2hCYXIgLz5cbiAgICAgICAgICAgIDxTcGVha2VycyAvPlxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuZXhwb3J0IGRlZmF1bHQgUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/speakers.js\n");

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/oj/Desktop/pluralsight/design-react/src/components/Footer/Footer.js\";\n\n\nconst Footer = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n  src: \"images/footer.png\"\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 4,\n  columnNumber: 5\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzPzA4ZGYiXSwibmFtZXMiOlsiRm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLG1CQUNYO0FBQUssS0FBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKOztBQUdlQSxxRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IFxuICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2Zvb3Rlci5wbmdcIiAvPlxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Footer/Footer.js\n");

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/oj/Desktop/pluralsight/design-react/src/components/Header/Header.js\";\n\n\nconst Header = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n  src: \"images/header.png\"\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 4,\n  columnNumber: 5\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzPzY4MjkiXSwibmFtZXMiOlsiSGVhZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLG1CQUNYO0FBQUssS0FBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKOztBQUdlQSxxRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiBcbiAgICA8aW1nIHNyYz1cImltYWdlcy9oZWFkZXIucG5nXCIgLz47XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/Header.js\n");

/***/ }),

/***/ "./src/components/Menu/Menu.js":
/*!*************************************!*\
  !*** ./src/components/Menu/Menu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/oj/Desktop/pluralsight/design-react/src/components/Menu/Menu.js\";\n\n\nconst Menu = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n  src: \"images/menu.gif\"\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 4,\n  columnNumber: 5\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZW51L01lbnUuanM/NzUzMyJdLCJuYW1lcyI6WyJNZW51Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLG1CQUNUO0FBQUssS0FBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKOztBQUdlQSxtRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL01lbnUvTWVudS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IE1lbnUgPSAoKSA9PiBcbiAgICA8aW1nIHNyYz1cImltYWdlcy9tZW51LmdpZlwiIC8+XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Menu/Menu.js\n");

/***/ }),

/***/ "./src/components/SpeakerSearchBar/SpeakerSearchBar.js":
/*!*************************************************************!*\
  !*** ./src/components/SpeakerSearchBar/SpeakerSearchBar.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/oj/Desktop/pluralsight/design-react/src/components/SpeakerSearchBar/SpeakerSearchBar.js\";\n\n\nconst SpeakerSearchBar = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n  src: \"images/searchbar.gif\"\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 4,\n  columnNumber: 5\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerSearchBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcGVha2VyU2VhcmNoQmFyL1NwZWFrZXJTZWFyY2hCYXIuanM/NWE2MyJdLCJuYW1lcyI6WyJTcGVha2VyU2VhcmNoQmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsZ0JBQWdCLEdBQUcsbUJBQ3JCO0FBQUssS0FBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKOztBQUdlQSwrRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NwZWFrZXJTZWFyY2hCYXIvU3BlYWtlclNlYXJjaEJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNwZWFrZXJTZWFyY2hCYXIgPSAoKSA9PlxuICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3NlYXJjaGJhci5naWZcIiAvPjtcblxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlclNlYXJjaEJhcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SpeakerSearchBar/SpeakerSearchBar.js\n");

/***/ }),

/***/ "./src/components/Speakers/Speakers.js":
/*!*********************************************!*\
  !*** ./src/components/Speakers/Speakers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/oj/Desktop/pluralsight/design-react/src/components/Speakers/Speakers.js\";\n\n\nconst Speakers = () => {\n  const speakers = [{\n    imageSrc: 'speaker-component-1124'\n  }, {\n    imageSrc: 'speaker-component-1530'\n  }, {\n    imageSrc: 'speaker-component-10803'\n  }];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: speakers.map(speaker => {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: `images/${speaker.imageSrc}.png`\n      }, speaker.imageSrc, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 24\n      }, undefined);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcGVha2Vycy9TcGVha2Vycy5qcz8wYmVjIl0sIm5hbWVzIjpbIlNwZWFrZXJzIiwic3BlYWtlcnMiLCJpbWFnZVNyYyIsIm1hcCIsInNwZWFrZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUNuQixRQUFNQyxRQUFRLEdBQUcsQ0FDYjtBQUNJQyxZQUFRLEVBQUc7QUFEZixHQURhLEVBSWI7QUFDSUEsWUFBUSxFQUFHO0FBRGYsR0FKYSxFQU9iO0FBQ0lBLFlBQVEsRUFBRztBQURmLEdBUGEsQ0FBakI7QUFZQSxzQkFDSTtBQUFBLGNBQ0tELFFBQVEsQ0FBQ0UsR0FBVCxDQUFjQyxPQUFELElBQWE7QUFDdkIsMEJBQU87QUFBSyxXQUFHLEVBQUcsVUFBU0EsT0FBTyxDQUFDRixRQUFTO0FBQXJDLFNBQWlERSxPQUFPLENBQUNGLFFBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVA7QUFDSCxLQUZBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBT0gsQ0FwQkQ7O0FBcUJlRix1RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzL1NwZWFrZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBTcGVha2VycyA9ICgpID0+IHtcbiAgICBjb25zdCBzcGVha2VycyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2VTcmMgOiAnc3BlYWtlci1jb21wb25lbnQtMTEyNCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2VTcmMgOiAnc3BlYWtlci1jb21wb25lbnQtMTUzMCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2VTcmMgOiAnc3BlYWtlci1jb21wb25lbnQtMTA4MDMnXG4gICAgICAgIH1cbiAgICBdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtzcGVha2Vycy5tYXAoKHNwZWFrZXIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGltZyBzcmM9e2BpbWFnZXMvJHtzcGVha2VyLmltYWdlU3JjfS5wbmdgfSBrZXk9e3NwZWFrZXIuaW1hZ2VTcmN9IC8+O1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5leHBvcnQgZGVmYXVsdCBTcGVha2VyczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Speakers/Speakers.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });