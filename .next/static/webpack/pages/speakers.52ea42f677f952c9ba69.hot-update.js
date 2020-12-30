webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/components/Speakers/Speakers.js":
/*!*********************************************!*\
  !*** ./src/components/Speakers/Speakers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _withData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withData */ \"./src/components/Speakers/withData.js\");\n/* harmony import */ var _SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SpeakerSearchBar/SpeakerSearchBar */ \"./src/components/SpeakerSearchBar/SpeakerSearchBar.js\");\n/* harmony import */ var _Speaker_Speaker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Speaker/Speaker */ \"./src/components/Speaker/Speaker.js\");\n\n\n\nvar _jsxFileName = \"/Users/oj/Desktop/pluralsight/design-react/src/components/Speakers/Speakers.js\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar Speakers = function Speakers() {\n  var speakers = [{\n    imageSrc: 'speaker-component-1124',\n    name: 'Douglas Crockford',\n    id: 1124,\n    firstName: 'Douglas',\n    lastName: 'Crockford',\n    sat: true,\n    sun: false,\n    isFavorite: false,\n    bio: 'Douglas Crockford discovered the JSON Data Interchange Format. He is also the author of _JavaScript: The Good Parts_. He has been called a guru, but he is actually more of a mahatma.'\n  }, {\n    imageSrc: 'speaker-component-1530',\n    name: 'Tamara Baker',\n    id: 1530,\n    firstName: 'Tamara',\n    lastName: 'Baker',\n    sat: false,\n    sun: true,\n    isFavorite: true,\n    bio: 'Tammy has held a number of executive and management roles over the past 15 years, including VP engineering Roles at Molekule Inc., Cantaloupe Systems, E-Color, and Untangle Inc.'\n  }, {\n    imageSrc: 'speaker-component-10803',\n    name: 'Eugene Chuvyrov',\n    id: 10803,\n    firstName: 'Eugene',\n    lastName: 'Chuvyrov',\n    sat: true,\n    sun: false,\n    isFavorite: false,\n    bio: 'Eugene Chuvyrov is  a Senior Cloud Architect at Microsoft. He works directly with both startups and enterprises to enable their solutions in Microsoft cloud, and to make Azure better as a result of this work with partners.'\n  }];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"mb-6 \",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n        className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n        id: \"username\",\n        type: \"text\",\n        placeholder: \"Search by name\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12\",\n      children: speakers.map(function (speaker) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Speaker_Speaker__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _objectSpread({}, speaker), speaker.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 17\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\n\nvar _c;\n\n$RefreshReg$(_c, \"Speakers\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanM/MGJlYyJdLCJuYW1lcyI6WyJTcGVha2VycyIsInNwZWFrZXJzIiwiaW1hZ2VTcmMiLCJuYW1lIiwiaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInNhdCIsInN1biIsImlzRmF2b3JpdGUiLCJiaW8iLCJtYXAiLCJzcGVha2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNuQixNQUFNQyxRQUFRLEdBQUcsQ0FDYjtBQUNJQyxZQUFRLEVBQUUsd0JBRGQ7QUFFSUMsUUFBSSxFQUFFLG1CQUZWO0FBR0lDLE1BQUUsRUFBRSxJQUhSO0FBSUlDLGFBQVMsRUFBRSxTQUpmO0FBS0lDLFlBQVEsRUFBRSxXQUxkO0FBTUlDLE9BQUcsRUFBRSxJQU5UO0FBT0lDLE9BQUcsRUFBRSxLQVBUO0FBUUlDLGNBQVUsRUFBRSxLQVJoQjtBQVNJQyxPQUFHLEVBQ0g7QUFWSixHQURhLEVBYWI7QUFDSVIsWUFBUSxFQUFFLHdCQURkO0FBRUlDLFFBQUksRUFBRSxjQUZWO0FBR0lDLE1BQUUsRUFBRSxJQUhSO0FBSUlDLGFBQVMsRUFBRSxRQUpmO0FBS0lDLFlBQVEsRUFBRSxPQUxkO0FBTUlDLE9BQUcsRUFBRSxLQU5UO0FBT0lDLE9BQUcsRUFBRSxJQVBUO0FBUUlDLGNBQVUsRUFBRSxJQVJoQjtBQVNJQyxPQUFHLEVBQ0g7QUFWSixHQWJhLEVBeUJiO0FBQ0lSLFlBQVEsRUFBRSx5QkFEZDtBQUVJQyxRQUFJLEVBQUUsaUJBRlY7QUFHSUMsTUFBRSxFQUFFLEtBSFI7QUFJSUMsYUFBUyxFQUFFLFFBSmY7QUFLSUMsWUFBUSxFQUFFLFVBTGQ7QUFNSUMsT0FBRyxFQUFFLElBTlQ7QUFPSUMsT0FBRyxFQUFFLEtBUFQ7QUFRSUMsY0FBVSxFQUFFLEtBUmhCO0FBU0lDLE9BQUcsRUFDSDtBQVZKLEdBekJhLENBQWpCO0FBdUNBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUFBLDZCQUNJO0FBQ0ksaUJBQVMsRUFBQyw0SEFEZDtBQUVJLFVBQUUsRUFBQyxVQUZQO0FBR0ksWUFBSSxFQUFDLE1BSFQ7QUFJSSxtQkFBVyxFQUFDO0FBSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFVSTtBQUFLLGVBQVMsRUFBQyx1REFBZjtBQUFBLGdCQUNDVCxRQUFRLENBQUNVLEdBQVQsQ0FBYSxVQUFDQyxPQUFEO0FBQUEsNEJBQ1YscUVBQUMsd0RBQUQsb0JBQThCQSxPQUE5QixHQUFjQSxPQUFPLENBQUNSLEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFU7QUFBQSxPQUFiO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0JILENBMUREOztLQUFNSixRO0FBMkRTQSx1RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzL1NwZWFrZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4vd2l0aERhdGEnXG5pbXBvcnQgU3BlYWtlclNlYXJjaEJhciBmcm9tICcuLi9TcGVha2VyU2VhcmNoQmFyL1NwZWFrZXJTZWFyY2hCYXInXG5pbXBvcnQgU3BlYWtlciBmcm9tICcuLi9TcGVha2VyL1NwZWFrZXInXG5cbmNvbnN0IFNwZWFrZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNwZWFrZXJzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZVNyYzogJ3NwZWFrZXItY29tcG9uZW50LTExMjQnLFxuICAgICAgICAgICAgbmFtZTogJ0RvdWdsYXMgQ3JvY2tmb3JkJyxcbiAgICAgICAgICAgIGlkOiAxMTI0LFxuICAgICAgICAgICAgZmlyc3ROYW1lOiAnRG91Z2xhcycsXG4gICAgICAgICAgICBsYXN0TmFtZTogJ0Nyb2NrZm9yZCcsXG4gICAgICAgICAgICBzYXQ6IHRydWUsXG4gICAgICAgICAgICBzdW46IGZhbHNlLFxuICAgICAgICAgICAgaXNGYXZvcml0ZTogZmFsc2UsXG4gICAgICAgICAgICBiaW86XG4gICAgICAgICAgICAnRG91Z2xhcyBDcm9ja2ZvcmQgZGlzY292ZXJlZCB0aGUgSlNPTiBEYXRhIEludGVyY2hhbmdlIEZvcm1hdC4gSGUgaXMgYWxzbyB0aGUgYXV0aG9yIG9mIF9KYXZhU2NyaXB0OiBUaGUgR29vZCBQYXJ0c18uIEhlIGhhcyBiZWVuIGNhbGxlZCBhIGd1cnUsIGJ1dCBoZSBpcyBhY3R1YWxseSBtb3JlIG9mIGEgbWFoYXRtYS4nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZVNyYzogJ3NwZWFrZXItY29tcG9uZW50LTE1MzAnLFxuICAgICAgICAgICAgbmFtZTogJ1RhbWFyYSBCYWtlcicsXG4gICAgICAgICAgICBpZDogMTUzMCxcbiAgICAgICAgICAgIGZpcnN0TmFtZTogJ1RhbWFyYScsXG4gICAgICAgICAgICBsYXN0TmFtZTogJ0Jha2VyJyxcbiAgICAgICAgICAgIHNhdDogZmFsc2UsXG4gICAgICAgICAgICBzdW46IHRydWUsXG4gICAgICAgICAgICBpc0Zhdm9yaXRlOiB0cnVlLFxuICAgICAgICAgICAgYmlvOlxuICAgICAgICAgICAgJ1RhbW15IGhhcyBoZWxkIGEgbnVtYmVyIG9mIGV4ZWN1dGl2ZSBhbmQgbWFuYWdlbWVudCByb2xlcyBvdmVyIHRoZSBwYXN0IDE1IHllYXJzLCBpbmNsdWRpbmcgVlAgZW5naW5lZXJpbmcgUm9sZXMgYXQgTW9sZWt1bGUgSW5jLiwgQ2FudGFsb3VwZSBTeXN0ZW1zLCBFLUNvbG9yLCBhbmQgVW50YW5nbGUgSW5jLicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGltYWdlU3JjOiAnc3BlYWtlci1jb21wb25lbnQtMTA4MDMnLFxuICAgICAgICAgICAgbmFtZTogJ0V1Z2VuZSBDaHV2eXJvdicsXG4gICAgICAgICAgICBpZDogMTA4MDMsXG4gICAgICAgICAgICBmaXJzdE5hbWU6ICdFdWdlbmUnLFxuICAgICAgICAgICAgbGFzdE5hbWU6ICdDaHV2eXJvdicsXG4gICAgICAgICAgICBzYXQ6IHRydWUsXG4gICAgICAgICAgICBzdW46IGZhbHNlLFxuICAgICAgICAgICAgaXNGYXZvcml0ZTogZmFsc2UsXG4gICAgICAgICAgICBiaW86XG4gICAgICAgICAgICAnRXVnZW5lIENodXZ5cm92IGlzICBhIFNlbmlvciBDbG91ZCBBcmNoaXRlY3QgYXQgTWljcm9zb2Z0LiBIZSB3b3JrcyBkaXJlY3RseSB3aXRoIGJvdGggc3RhcnR1cHMgYW5kIGVudGVycHJpc2VzIHRvIGVuYWJsZSB0aGVpciBzb2x1dGlvbnMgaW4gTWljcm9zb2Z0IGNsb3VkLCBhbmQgdG8gbWFrZSBBenVyZSBiZXR0ZXIgYXMgYSByZXN1bHQgb2YgdGhpcyB3b3JrIHdpdGggcGFydG5lcnMuJyxcbiAgICAgICAgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNiBcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSBuYW1lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBncmlkLWNvbHMtMSBnYXAtMTJcIj5cbiAgICAgICAgICAgIHtzcGVha2Vycy5tYXAoKHNwZWFrZXIpID0+IChcbiAgICAgICAgICAgICAgICA8U3BlYWtlciBrZXk9e3NwZWFrZXIuaWR9IHsuLi5zcGVha2VyfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Speakers/Speakers.js\n");

/***/ })

})