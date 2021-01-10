webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/components/Speakers/Speakers.js":
/*!*********************************************!*\
  !*** ./src/components/Speakers/Speakers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _withData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./withData */ \"./src/components/Speakers/withData.js\");\n/* harmony import */ var _SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SpeakerSearchBar/SpeakerSearchBar */ \"./src/components/SpeakerSearchBar/SpeakerSearchBar.js\");\n/* harmony import */ var _Speaker_Speaker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Speaker/Speaker */ \"./src/components/Speaker/Speaker.js\");\n/* harmony import */ var _reducers_request__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reducers/request */ \"./src/reducers/request.js\");\n/* harmony import */ var _HOCs_withRequest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../HOCs/withRequest */ \"./src/components/HOCs/withRequest.js\");\n/* harmony import */ var _HOCs_withSpecialMessage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../HOCs/withSpecialMessage */ \"./src/components/HOCs/withSpecialMessage.js\");\n/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recompose */ \"./node_modules/recompose/dist/Recompose.esm.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/oj/Desktop/pluralsight/design-react/src/components/Speakers/Speakers.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar Speakers = function Speakers(_ref) {\n  _s();\n\n  var speakers = _ref.records,\n      status = _ref.status,\n      error = _ref.error,\n      put = _ref.put,\n      bgColor = _ref.bgColor,\n      specialMessage = _ref.specialMessage;\n\n  var onFavoriteToggleHandler = /*#__PURE__*/function () {\n    var _ref2 = Object(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(speakerRec) {\n      return _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              put(_objectSpread(_objectSpread({}, speakerRec), {}, {\n                isFavorite: !speakerRec.isFavorite\n              }));\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function onFavoriteToggleHandler(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      searchQuery = _useState[0],\n      setSearchQuery = _useState[1];\n\n  var success = status === _reducers_request__WEBPACK_IMPORTED_MODULE_8__[\"REQUEST_STATUS\"].SUCCESS;\n  var isLoading = status === _reducers_request__WEBPACK_IMPORTED_MODULE_8__[\"REQUEST_STATUS\"].LOADING;\n  var hasErrored = status === _reducers_request__WEBPACK_IMPORTED_MODULE_8__[\"REQUEST_STATUS\"].ERROR;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n    className: bgColor,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      searchQuery: searchQuery,\n      setSearchQuery: setSearchQuery\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, _this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 27\n    }, _this), hasErrored && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n      children: [\"Loading error...\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 21\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"b\", {\n        children: [\"Error: \", error.message]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 21\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n      className: \"grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12\",\n      children: speakers.filter(function (rec) {\n        var targetString = \"\".concat(rec.firstName, \" \").concat(rec.lastName).toLowerCase();\n        return searchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());\n      }).map(function (speaker) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_Speaker_Speaker__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _objectSpread(_objectSpread({}, speaker), {}, {\n          onFavoriteToggle: function onFavoriteToggle() {\n            return onFavoriteToggleHandler(speaker);\n          }\n        }), speaker.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 25\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 17\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Speakers, \"uixqA8hxOTN7LqZPWxVzG2fnyhQ=\");\n\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_11__[\"compose\"])(Object(_HOCs_withRequest__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('http://localhost:4000', 'speakers'), Object(_HOCs_withSpecialMessage__WEBPACK_IMPORTED_MODULE_10__[\"default\"])())(Speakers));\n\nvar _c;\n\n$RefreshReg$(_c, \"Speakers\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanM/MGJlYyJdLCJuYW1lcyI6WyJTcGVha2VycyIsInNwZWFrZXJzIiwicmVjb3JkcyIsInN0YXR1cyIsImVycm9yIiwicHV0IiwiYmdDb2xvciIsInNwZWNpYWxNZXNzYWdlIiwib25GYXZvcml0ZVRvZ2dsZUhhbmRsZXIiLCJzcGVha2VyUmVjIiwiaXNGYXZvcml0ZSIsInVzZVN0YXRlIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInN1Y2Nlc3MiLCJSRVFVRVNUX1NUQVRVUyIsIlNVQ0NFU1MiLCJpc0xvYWRpbmciLCJMT0FESU5HIiwiaGFzRXJyb3JlZCIsIkVSUk9SIiwibWVzc2FnZSIsImZpbHRlciIsInJlYyIsInRhcmdldFN0cmluZyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwidG9Mb3dlckNhc2UiLCJsZW5ndGgiLCJpbmNsdWRlcyIsIm1hcCIsInNwZWFrZXIiLCJpZCIsImNvbXBvc2UiLCJ3aXRoUmVxdWVzdCIsIndpdGhTcGVjaWFsTWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQXNFO0FBQUE7O0FBQUEsTUFBM0RDLFFBQTJELFFBQXBFQyxPQUFvRTtBQUFBLE1BQWpEQyxNQUFpRCxRQUFqREEsTUFBaUQ7QUFBQSxNQUF6Q0MsS0FBeUMsUUFBekNBLEtBQXlDO0FBQUEsTUFBbENDLEdBQWtDLFFBQWxDQSxHQUFrQztBQUFBLE1BQTdCQyxPQUE2QixRQUE3QkEsT0FBNkI7QUFBQSxNQUFwQkMsY0FBb0IsUUFBcEJBLGNBQW9COztBQUNuRixNQUFNQyx1QkFBdUI7QUFBQSwrU0FBRyxpQkFBTUMsVUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzVCSixpQkFBRyxpQ0FDSUksVUFESjtBQUVDQywwQkFBVSxFQUFFLENBQUNELFVBQVUsQ0FBQ0M7QUFGekIsaUJBQUg7O0FBRDRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQXZCRix1QkFBdUI7QUFBQTtBQUFBO0FBQUEsS0FBN0I7O0FBRG1GLGtCQVE3Q0csc0RBQVEsQ0FBQyxFQUFELENBUnFDO0FBQUEsTUFRNUVDLFdBUjRFO0FBQUEsTUFRL0RDLGNBUitEOztBQVduRixNQUFNQyxPQUFPLEdBQUdYLE1BQU0sS0FBS1ksZ0VBQWMsQ0FBQ0MsT0FBMUM7QUFDQSxNQUFNQyxTQUFTLEdBQUdkLE1BQU0sS0FBS1ksZ0VBQWMsQ0FBQ0csT0FBNUM7QUFDQSxNQUFNQyxVQUFVLEdBQUdoQixNQUFNLEtBQUtZLGdFQUFjLENBQUNLLEtBQTdDO0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVkLE9BQWhCO0FBQUEsNEJBQ0kscUVBQUMsMEVBQUQ7QUFBa0IsaUJBQVcsRUFBRU0sV0FBL0I7QUFBNEMsb0JBQWMsRUFBRUM7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBRUtJLFNBQVMsaUJBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGbEIsRUFHS0UsVUFBVSxpQkFDUDtBQUFBLGtEQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJO0FBQUEsOEJBQVdmLEtBQUssQ0FBQ2lCLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpSLEVBVUtQLE9BQU8saUJBQ0o7QUFBSyxlQUFTLEVBQUMsdURBQWY7QUFBQSxnQkFDS2IsUUFBUSxDQUFDcUIsTUFBVCxDQUFnQixVQUFDQyxHQUFELEVBQVM7QUFDdEIsWUFBTUMsWUFBWSxHQUFHLFVBQUdELEdBQUcsQ0FBQ0UsU0FBUCxjQUFvQkYsR0FBRyxDQUFDRyxRQUF4QixFQUFtQ0MsV0FBbkMsRUFBckI7QUFDQSxlQUFPZixXQUFXLENBQUNnQixNQUFaLEtBQXVCLENBQXZCLEdBQTJCLElBQTNCLEdBQWtDSixZQUFZLENBQUNLLFFBQWIsQ0FBc0JqQixXQUFXLENBQUNlLFdBQVosRUFBdEIsQ0FBekM7QUFDSCxPQUhBLEVBR0VHLEdBSEYsQ0FHTSxVQUFDQyxPQUFEO0FBQUEsNEJBQ0gscUVBQUMsd0RBQUQsa0NBQThCQSxPQUE5QjtBQUF1QywwQkFBZ0IsRUFBRTtBQUFBLG1CQUFNdkIsdUJBQXVCLENBQUN1QixPQUFELENBQTdCO0FBQUE7QUFBekQsWUFBY0EsT0FBTyxDQUFDQyxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURHO0FBQUEsT0FITjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXVCSCxDQXRDRDs7R0FBTWhDLFE7O0tBQUFBLFE7QUF1Q1NpQyx5SEFBTyxDQUNsQkMsaUVBQVcsQ0FBQyx1QkFBRCxFQUEwQixVQUExQixDQURPLEVBRWxCQyx5RUFBa0IsRUFGQSxDQUFQLENBR2JuQyxRQUhhLENBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vycy9TcGVha2Vycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXJ9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4vd2l0aERhdGEnXG5pbXBvcnQgU3BlYWtlclNlYXJjaEJhciBmcm9tICcuLi9TcGVha2VyU2VhcmNoQmFyL1NwZWFrZXJTZWFyY2hCYXInXG5pbXBvcnQgU3BlYWtlciBmcm9tICcuLi9TcGVha2VyL1NwZWFrZXInXG5pbXBvcnQgcmVxdWVzdFJlZHVjZXIsIHsgUkVRVUVTVF9TVEFUVVMgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9yZXF1ZXN0JztcbmltcG9ydCB3aXRoUmVxdWVzdCBmcm9tICcuLi9IT0NzL3dpdGhSZXF1ZXN0JztcbmltcG9ydCB3aXRoU3BlY2lhbE1lc3NhZ2UgZnJvbSAnLi4vSE9Dcy93aXRoU3BlY2lhbE1lc3NhZ2UnO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5cblxuY29uc3QgU3BlYWtlcnMgPSAoe3JlY29yZHM6IHNwZWFrZXJzLCBzdGF0dXMsIGVycm9yLCBwdXQsIGJnQ29sb3IsIHNwZWNpYWxNZXNzYWdlfSkgPT4ge1xuICAgIGNvbnN0IG9uRmF2b3JpdGVUb2dnbGVIYW5kbGVyID0gYXN5bmMoc3BlYWtlclJlYykgPT4ge1xuICAgICAgICBwdXQoe1xuICAgICAgICAgICAgLi4uc3BlYWtlclJlYyxcbiAgICAgICAgICAgIGlzRmF2b3JpdGU6ICFzcGVha2VyUmVjLmlzRmF2b3JpdGVcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoJycpO1xuIFxuXG4gICAgY29uc3Qgc3VjY2VzcyA9IHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUztcbiAgICBjb25zdCBpc0xvYWRpbmcgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkxPQURJTkc7XG4gICAgY29uc3QgaGFzRXJyb3JlZCA9IHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuRVJST1I7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YmdDb2xvcn0+XG4gICAgICAgICAgICA8U3BlYWtlclNlYXJjaEJhciBzZWFyY2hRdWVyeT17c2VhcmNoUXVlcnl9IHNldFNlYXJjaFF1ZXJ5PXtzZXRTZWFyY2hRdWVyeX0vPlxuICAgICAgICAgICAge2lzTG9hZGluZyAmJiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj59XG4gICAgICAgICAgICB7aGFzRXJyb3JlZCAmJiBcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nIGVycm9yLi4uXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8Yj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9iPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge3N1Y2Nlc3MgJiYgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdyaWQtY29scy0xIGdhcC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICB7c3BlYWtlcnMuZmlsdGVyKChyZWMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFN0cmluZyA9IGAke3JlYy5maXJzdE5hbWV9ICR7cmVjLmxhc3ROYW1lfWAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWFyY2hRdWVyeS5sZW5ndGggPT09IDAgPyB0cnVlIDogdGFyZ2V0U3RyaW5nLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgICAgICB9KS5tYXAoKHNwZWFrZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVha2VyIGtleT17c3BlYWtlci5pZH0gey4uLnNwZWFrZXJ9IG9uRmF2b3JpdGVUb2dnbGU9eygpID0+IG9uRmF2b3JpdGVUb2dnbGVIYW5kbGVyKHNwZWFrZXIpfS8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gICAgd2l0aFJlcXVlc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMCcsICdzcGVha2VycycpLFxuICAgIHdpdGhTcGVjaWFsTWVzc2FnZSgpXG4pKFNwZWFrZXJzKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Speakers/Speakers.js\n");

/***/ })

})