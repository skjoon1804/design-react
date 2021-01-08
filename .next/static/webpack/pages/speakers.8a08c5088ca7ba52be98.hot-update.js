webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/actions/request.js":
/*!********************************!*\
  !*** ./src/actions/request.js ***!
  \********************************/
/*! exports provided: GET_ALL_SUCCESS, GET_ALL_FAILURE, PUT_SUCCESS, PUT_FAILURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_ALL_SUCCESS\", function() { return GET_ALL_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_ALL_FAILURE\", function() { return GET_ALL_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PUT_SUCCESS\", function() { return PUT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PUT_FAILURE\", function() { return PUT_FAILURE; });\n/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar GET_ALL_SUCCESS = 'GET_ALL_SUCCESS';\nvar GET_ALL_FAILURE = 'GET_ALL_FAILURE';\nvar PUT_SUCCESS = 'PUT_SUCCESS';\nvar PUT_FAILURE = 'PUT_FAILURE';\nvar REQUEST_STATUS = {\n  LOADING: 'loading',\n  SUCCESS: 'success',\n  ERROR: 'error'\n};\n\nvar requestReducer = function requestReducer(state, action) {\n  switch (action.type) {\n    case 'GET_ALL_SUCCESS':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        status: REQUEST_STATUS.SUCCESS,\n        speakers: action.speakers\n      });\n\n    case 'UPDATE_STATUS':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        status: action.status\n      });\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FjdGlvbnMvcmVxdWVzdC5qcz85YWZmIl0sIm5hbWVzIjpbIkdFVF9BTExfU1VDQ0VTUyIsIkdFVF9BTExfRkFJTFVSRSIsIlBVVF9TVUNDRVNTIiwiUFVUX0ZBSUxVUkUiLCJSRVFVRVNUX1NUQVRVUyIsIkxPQURJTkciLCJTVUNDRVNTIiwiRVJST1IiLCJyZXF1ZXN0UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInN0YXR1cyIsInNwZWFrZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUVQLElBQU1DLGNBQWMsR0FBRztBQUNuQkMsU0FBTyxFQUFFLFNBRFU7QUFFbkJDLFNBQU8sRUFBRSxTQUZVO0FBR25CQyxPQUFLLEVBQUU7QUFIWSxDQUF2Qjs7QUFNQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUN0QyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSSxTQUFLLGlCQUFMO0FBQ0ksNkNBQ09GLEtBRFA7QUFFSUcsY0FBTSxFQUFFUixjQUFjLENBQUNFLE9BRjNCO0FBR0lPLGdCQUFRLEVBQUVILE1BQU0sQ0FBQ0c7QUFIckI7O0FBS0osU0FBSyxlQUFMO0FBQ0ksNkNBQ09KLEtBRFA7QUFFSUcsY0FBTSxFQUFFRixNQUFNLENBQUNFO0FBRm5CO0FBUlI7QUFhSCxDQWREIiwiZmlsZSI6Ii4vc3JjL2FjdGlvbnMvcmVxdWVzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBHRVRfQUxMX1NVQ0NFU1MgPSAnR0VUX0FMTF9TVUNDRVNTJztcbmV4cG9ydCBjb25zdCBHRVRfQUxMX0ZBSUxVUkUgPSAnR0VUX0FMTF9GQUlMVVJFJztcbmV4cG9ydCBjb25zdCBQVVRfU1VDQ0VTUyA9ICdQVVRfU1VDQ0VTUyc7XG5leHBvcnQgY29uc3QgUFVUX0ZBSUxVUkUgPSAnUFVUX0ZBSUxVUkUnO1xuXG5jb25zdCBSRVFVRVNUX1NUQVRVUyA9IHtcbiAgICBMT0FESU5HOiAnbG9hZGluZycsXG4gICAgU1VDQ0VTUzogJ3N1Y2Nlc3MnLFxuICAgIEVSUk9SOiAnZXJyb3InXG59O1xuXG5jb25zdCByZXF1ZXN0UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdHRVRfQUxMX1NVQ0NFU1MnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1MsXG4gICAgICAgICAgICAgICAgc3BlYWtlcnM6IGFjdGlvbi5zcGVha2VycyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgJ1VQREFURV9TVEFUVVMnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IGFjdGlvbi5zdGF0dXMsXG4gICAgICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/actions/request.js\n");

/***/ })

})