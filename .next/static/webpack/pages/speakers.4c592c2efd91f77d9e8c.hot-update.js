webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/components/Speakers/withData.js":
/*!*********************************************!*\
  !*** ./src/components/Speakers/withData.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/oj/Desktop/pluralsight/design-react/src/components/Speakers/withData.js\";\n\nfunction withData(maxSpeakersToShow) {\n  return function (Component) {\n    var speakers = [{\n      imageSrc: 'speaker-component-1124',\n      name: 'Douglas Crockford',\n      id: 1124,\n      firstName: 'Douglas',\n      lastName: 'Crockford',\n      sat: true,\n      sun: false,\n      isFavorite: false,\n      bio: 'Douglas Crockford discovered the JSON Data Interchange Format. He is also the author of _JavaScript: The Good Parts_. He has been called a guru, but he is actually more of a mahatma.'\n    }, {\n      imageSrc: 'speaker-component-1530',\n      name: 'Tamara Baker',\n      id: 1530,\n      firstName: 'Tamara',\n      lastName: 'Baker',\n      sat: false,\n      sun: true,\n      isFavorite: true,\n      bio: 'Tammy has held a number of executive and management roles over the past 15 years, including VP engineering Roles at Molekule Inc., Cantaloupe Systems, E-Color, and Untangle Inc.'\n    }, {\n      imageSrc: 'speaker-component-10803',\n      name: 'Eugene Chuvyrov',\n      id: 10803,\n      firstName: 'Eugene',\n      lastName: 'Chuvyrov',\n      sat: true,\n      sun: false,\n      isFavorite: false,\n      bio: 'Eugene Chuvyrov is  a Senior Cloud Architect at Microsoft. He works directly with both startups and enterprises to enable their solutions in Microsoft cloud, and to make Azure better as a result of this work with partners.'\n    }];\n    return function () {\n      /*#__PURE__*/\n      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: \"Test!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 13\n      }, this);\n\n      var limitSpeakers = speakers.slice(0, maxSpeakersToShow);\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: \"TEST!!!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, {\n          speakers: limitSpeakers\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 20\n      }, this);\n    };\n  };\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (withData);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvd2l0aERhdGEuanM/Y2UzNSJdLCJuYW1lcyI6WyJ3aXRoRGF0YSIsIm1heFNwZWFrZXJzVG9TaG93IiwiQ29tcG9uZW50Iiwic3BlYWtlcnMiLCJpbWFnZVNyYyIsIm5hbWUiLCJpZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwic2F0Iiwic3VuIiwiaXNGYXZvcml0ZSIsImJpbyIsImxpbWl0U3BlYWtlcnMiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsU0FBU0EsUUFBVCxDQUFrQkMsaUJBQWxCLEVBQXFDO0FBQ2pDLFNBQU8sVUFBU0MsU0FBVCxFQUFvQjtBQUN2QixRQUFNQyxRQUFRLEdBQUcsQ0FDYjtBQUNJQyxjQUFRLEVBQUUsd0JBRGQ7QUFFSUMsVUFBSSxFQUFFLG1CQUZWO0FBR0lDLFFBQUUsRUFBRSxJQUhSO0FBSUlDLGVBQVMsRUFBRSxTQUpmO0FBS0lDLGNBQVEsRUFBRSxXQUxkO0FBTUlDLFNBQUcsRUFBRSxJQU5UO0FBT0lDLFNBQUcsRUFBRSxLQVBUO0FBUUlDLGdCQUFVLEVBQUUsS0FSaEI7QUFTSUMsU0FBRyxFQUNEO0FBVk4sS0FEYSxFQWFYO0FBQ0VSLGNBQVEsRUFBRSx3QkFEWjtBQUVFQyxVQUFJLEVBQUUsY0FGUjtBQUdFQyxRQUFFLEVBQUUsSUFITjtBQUlFQyxlQUFTLEVBQUUsUUFKYjtBQUtFQyxjQUFRLEVBQUUsT0FMWjtBQU1FQyxTQUFHLEVBQUUsS0FOUDtBQU9FQyxTQUFHLEVBQUUsSUFQUDtBQVFFQyxnQkFBVSxFQUFFLElBUmQ7QUFTRUMsU0FBRyxFQUNEO0FBVkosS0FiVyxFQXlCWDtBQUNFUixjQUFRLEVBQUUseUJBRFo7QUFFRUMsVUFBSSxFQUFFLGlCQUZSO0FBR0VDLFFBQUUsRUFBRSxLQUhOO0FBSUVDLGVBQVMsRUFBRSxRQUpiO0FBS0VDLGNBQVEsRUFBRSxVQUxaO0FBTUVDLFNBQUcsRUFBRSxJQU5QO0FBT0VDLFNBQUcsRUFBRSxLQVBQO0FBUUVDLGdCQUFVLEVBQUUsS0FSZDtBQVNFQyxTQUFHLEVBQ0Q7QUFWSixLQXpCVyxDQUFqQjtBQXVDQSxXQUFPLFlBQVc7QUFDZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBLFVBQU1DLGFBQWEsR0FBR1YsUUFBUSxDQUFDVyxLQUFULENBQWUsQ0FBZixFQUFrQmIsaUJBQWxCLENBQXRCO0FBQ0EsMEJBQU87QUFBQSxnQ0FDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERyxlQUVILHFFQUFDLFNBQUQ7QUFBVyxrQkFBUSxFQUFFWTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBSUgsS0FWRDtBQVdILEdBbkREO0FBb0RIOztBQUFBO0FBQ2NiLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvd2l0aERhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3aXRoRGF0YShtYXhTcGVha2Vyc1RvU2hvdykge1xuICAgIHJldHVybiBmdW5jdGlvbihDb21wb25lbnQpIHtcbiAgICAgICAgY29uc3Qgc3BlYWtlcnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1hZ2VTcmM6ICdzcGVha2VyLWNvbXBvbmVudC0xMTI0JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnRG91Z2xhcyBDcm9ja2ZvcmQnLFxuICAgICAgICAgICAgICAgIGlkOiAxMTI0LFxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogJ0RvdWdsYXMnLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnQ3JvY2tmb3JkJyxcbiAgICAgICAgICAgICAgICBzYXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgc3VuOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpc0Zhdm9yaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBiaW86XG4gICAgICAgICAgICAgICAgICAnRG91Z2xhcyBDcm9ja2ZvcmQgZGlzY292ZXJlZCB0aGUgSlNPTiBEYXRhIEludGVyY2hhbmdlIEZvcm1hdC4gSGUgaXMgYWxzbyB0aGUgYXV0aG9yIG9mIF9KYXZhU2NyaXB0OiBUaGUgR29vZCBQYXJ0c18uIEhlIGhhcyBiZWVuIGNhbGxlZCBhIGd1cnUsIGJ1dCBoZSBpcyBhY3R1YWxseSBtb3JlIG9mIGEgbWFoYXRtYS4nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1hZ2VTcmM6ICdzcGVha2VyLWNvbXBvbmVudC0xNTMwJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnVGFtYXJhIEJha2VyJyxcbiAgICAgICAgICAgICAgICBpZDogMTUzMCxcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU6ICdUYW1hcmEnLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnQmFrZXInLFxuICAgICAgICAgICAgICAgIHNhdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3VuOiB0cnVlLFxuICAgICAgICAgICAgICAgIGlzRmF2b3JpdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYmlvOlxuICAgICAgICAgICAgICAgICAgJ1RhbW15IGhhcyBoZWxkIGEgbnVtYmVyIG9mIGV4ZWN1dGl2ZSBhbmQgbWFuYWdlbWVudCByb2xlcyBvdmVyIHRoZSBwYXN0IDE1IHllYXJzLCBpbmNsdWRpbmcgVlAgZW5naW5lZXJpbmcgUm9sZXMgYXQgTW9sZWt1bGUgSW5jLiwgQ2FudGFsb3VwZSBTeXN0ZW1zLCBFLUNvbG9yLCBhbmQgVW50YW5nbGUgSW5jLicsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbWFnZVNyYzogJ3NwZWFrZXItY29tcG9uZW50LTEwODAzJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnRXVnZW5lIENodXZ5cm92JyxcbiAgICAgICAgICAgICAgICBpZDogMTA4MDMsXG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiAnRXVnZW5lJyxcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogJ0NodXZ5cm92JyxcbiAgICAgICAgICAgICAgICBzYXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgc3VuOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpc0Zhdm9yaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBiaW86XG4gICAgICAgICAgICAgICAgICAnRXVnZW5lIENodXZ5cm92IGlzICBhIFNlbmlvciBDbG91ZCBBcmNoaXRlY3QgYXQgTWljcm9zb2Z0LiBIZSB3b3JrcyBkaXJlY3RseSB3aXRoIGJvdGggc3RhcnR1cHMgYW5kIGVudGVycHJpc2VzIHRvIGVuYWJsZSB0aGVpciBzb2x1dGlvbnMgaW4gTWljcm9zb2Z0IGNsb3VkLCBhbmQgdG8gbWFrZSBBenVyZSBiZXR0ZXIgYXMgYSByZXN1bHQgb2YgdGhpcyB3b3JrIHdpdGggcGFydG5lcnMuJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICBcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBUZXN0IVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIGNvbnN0IGxpbWl0U3BlYWtlcnMgPSBzcGVha2Vycy5zbGljZSgwLCBtYXhTcGVha2Vyc1RvU2hvdyk7XG4gICAgICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgICA8cD5URVNUISEhPC9wPlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgc3BlYWtlcnM9e2xpbWl0U3BlYWtlcnN9PjwvQ29tcG9uZW50PlxuICAgICAgICAgICAgPC9kaXY+O1xuICAgICAgICB9O1xuICAgIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgd2l0aERhdGE7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Speakers/withData.js\n");

/***/ })

})