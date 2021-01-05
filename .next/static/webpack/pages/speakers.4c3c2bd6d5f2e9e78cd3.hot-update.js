webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/components/Speakers/Speakers.js":
/*!*********************************************!*\
  !*** ./src/components/Speakers/Speakers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _withData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./withData */ \"./src/components/Speakers/withData.js\");\n/* harmony import */ var _SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SpeakerSearchBar/SpeakerSearchBar */ \"./src/components/SpeakerSearchBar/SpeakerSearchBar.js\");\n/* harmony import */ var _Speaker_Speaker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Speaker/Speaker */ \"./src/components/Speaker/Speaker.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/oj/Desktop/pluralsight/design-react/src/components/Speakers/Speakers.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar Speakers = function Speakers() {\n  _s();\n\n  function toggleSpeakerFavorite(speakerRec) {\n    return _objectSpread(_objectSpread({}, speakerRec), {}, {\n      isFavorite: !speakerRec.isFavorite\n    });\n  }\n\n  function onFavoriteToggleHandler(_x) {\n    return _onFavoriteToggleHandler.apply(this, arguments);\n  }\n\n  function _onFavoriteToggleHandler() {\n    _onFavoriteToggleHandler = Object(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(speakerRec) {\n      var toggledSpeakerRec, speakerIndex;\n      return _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              toggledSpeakerRec = toggleSpeakerFavorite(speakerRec);\n              speakerIndex = speakers.map(function (speaker) {\n                return speaker.id;\n              }).indexOf(speakerRec.id);\n              _context2.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.put(\"http://localhost:3000/speakers/\".concat(speakerRec.id), toggledSpeakerRec);\n\n            case 4:\n              setSpeakers([].concat(Object(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(speakers.slice(0, speakerIndex)), [toggledSpeakerRec], Object(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(speakers.slice(speakerIndex + 1))));\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n    return _onFavoriteToggleHandler.apply(this, arguments);\n  }\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(\"\"),\n      searchQuery = _useState[0],\n      setSearchQuery = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])([]),\n      speakers = _useState2[0],\n      setSpeakers = _useState2[1];\n\n  var REQUEST_STATUS = {\n    LOADING: 'loading',\n    SUCCESS: 'success',\n    ERROR: 'error'\n  };\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(REQUEST_STATUS.LOADING),\n      status = _useState3[0],\n      setStatus = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])({}),\n      error = _useState4[0],\n      setError = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref = Object(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var response;\n        return _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(\"http://localhost:3000/speakers\");\n\n              case 2:\n                response = _context.sent;\n                setSpeakers(response.data);\n                setStatus(REQUEST_STATUS.SUCCESS);\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, []);\n  var success = status === REQUEST_STATUS.SUCCESS;\n  var isLoading = status === REQUEST_STATUS.LOADING;\n  var hasErrored = status === REQUEST_STATUS.ERROR;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      searchQuery: searchQuery,\n      setSearchQuery: setSearchQuery\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }, _this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 27\n    }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n      className: \"grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12\",\n      children: speakers.filter(function (rec) {\n        var targetString = \"\".concat(rec.firstName, \" \").concat(rec.lastName).toLowerCase();\n        return searchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());\n      }).map(function (speaker) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_Speaker_Speaker__WEBPACK_IMPORTED_MODULE_9__[\"default\"], _objectSpread(_objectSpread({}, speaker), {}, {\n          onFavoriteToggle: function onFavoriteToggle() {\n            return onFavoriteToggleHandler(speaker);\n          }\n        }), speaker.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Speakers, \"jOG2GPLcf2o3VQ9/B5wIWgXQX/A=\");\n\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\n\nvar _c;\n\n$RefreshReg$(_c, \"Speakers\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanM/MGJlYyJdLCJuYW1lcyI6WyJTcGVha2VycyIsInRvZ2dsZVNwZWFrZXJGYXZvcml0ZSIsInNwZWFrZXJSZWMiLCJpc0Zhdm9yaXRlIiwib25GYXZvcml0ZVRvZ2dsZUhhbmRsZXIiLCJ0b2dnbGVkU3BlYWtlclJlYyIsInNwZWFrZXJJbmRleCIsInNwZWFrZXJzIiwibWFwIiwic3BlYWtlciIsImlkIiwiaW5kZXhPZiIsImF4aW9zIiwicHV0Iiwic2V0U3BlYWtlcnMiLCJzbGljZSIsInVzZVN0YXRlIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsIlJFUVVFU1RfU1RBVFVTIiwiTE9BRElORyIsIlNVQ0NFU1MiLCJFUlJPUiIsInN0YXR1cyIsInNldFN0YXR1cyIsImVycm9yIiwic2V0RXJyb3IiLCJ1c2VFZmZlY3QiLCJmZXRjaERhdGEiLCJnZXQiLCJyZXNwb25zZSIsImRhdGEiLCJzdWNjZXNzIiwiaXNMb2FkaW5nIiwiaGFzRXJyb3JlZCIsImZpbHRlciIsInJlYyIsInRhcmdldFN0cmluZyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwidG9Mb3dlckNhc2UiLCJsZW5ndGgiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDbkIsV0FBU0MscUJBQVQsQ0FBK0JDLFVBQS9CLEVBQTJDO0FBQ3ZDLDJDQUNPQSxVQURQO0FBRUlDLGdCQUFVLEVBQUUsQ0FBQ0QsVUFBVSxDQUFDQztBQUY1QjtBQUlIOztBQU5rQixXQVFKQyx1QkFSSTtBQUFBO0FBQUE7O0FBQUE7QUFBQSw4VEFRbkIsa0JBQXVDRixVQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVUcsK0JBRFYsR0FDOEJKLHFCQUFxQixDQUFDQyxVQUFELENBRG5EO0FBRVVJLDBCQUZWLEdBRXlCQyxRQUFRLENBQUNDLEdBQVQsQ0FBYSxVQUFDQyxPQUFEO0FBQUEsdUJBQWFBLE9BQU8sQ0FBQ0MsRUFBckI7QUFBQSxlQUFiLEVBQXNDQyxPQUF0QyxDQUE4Q1QsVUFBVSxDQUFDUSxFQUF6RCxDQUZ6QjtBQUFBO0FBQUEscUJBSVVFLDRDQUFLLENBQUNDLEdBQU4sMENBQTRDWCxVQUFVLENBQUNRLEVBQXZELEdBQTZETCxpQkFBN0QsQ0FKVjs7QUFBQTtBQUtJUyx5QkFBVywrSkFBS1AsUUFBUSxDQUFDUSxLQUFULENBQWUsQ0FBZixFQUFrQlQsWUFBbEIsQ0FBTCxJQUFzQ0QsaUJBQXRDLHVKQUE0REUsUUFBUSxDQUFDUSxLQUFULENBQWVULFlBQVksR0FBQyxDQUE1QixDQUE1RCxHQUFYOztBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUm1CO0FBQUE7QUFBQTs7QUFBQSxrQkFnQm1CVSxzREFBUSxDQUFDLEVBQUQsQ0FoQjNCO0FBQUEsTUFnQlpDLFdBaEJZO0FBQUEsTUFnQkNDLGNBaEJEOztBQUFBLG1CQWlCYUYsc0RBQVEsQ0FBQyxFQUFELENBakJyQjtBQUFBLE1BaUJaVCxRQWpCWTtBQUFBLE1BaUJGTyxXQWpCRTs7QUFrQm5CLE1BQU1LLGNBQWMsR0FBRztBQUNuQkMsV0FBTyxFQUFFLFNBRFU7QUFFbkJDLFdBQU8sRUFBRSxTQUZVO0FBR25CQyxTQUFLLEVBQUU7QUFIWSxHQUF2Qjs7QUFsQm1CLG1CQXVCU04sc0RBQVEsQ0FBQ0csY0FBYyxDQUFDQyxPQUFoQixDQXZCakI7QUFBQSxNQXVCWkcsTUF2Qlk7QUFBQSxNQXVCSkMsU0F2Qkk7O0FBQUEsbUJBd0JPUixzREFBUSxDQUFDLEVBQUQsQ0F4QmY7QUFBQSxNQXdCWlMsS0F4Qlk7QUFBQSxNQXdCTEMsUUF4Qks7O0FBeUJuQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsU0FBUztBQUFBLGdUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ1NoQiw0Q0FBSyxDQUFDaUIsR0FBTixDQUFVLGdDQUFWLENBRFQ7O0FBQUE7QUFDUkMsd0JBRFE7QUFFZGhCLDJCQUFXLENBQUNnQixRQUFRLENBQUNDLElBQVYsQ0FBWDtBQUNBUCx5QkFBUyxDQUFDTCxjQUFjLENBQUNFLE9BQWhCLENBQVQ7O0FBSGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVE8sU0FBUztBQUFBO0FBQUE7QUFBQSxPQUFmOztBQUtBQSxhQUFTO0FBQ1osR0FQUSxFQU9OLEVBUE0sQ0FBVDtBQVNBLE1BQU1JLE9BQU8sR0FBR1QsTUFBTSxLQUFLSixjQUFjLENBQUNFLE9BQTFDO0FBQ0EsTUFBTVksU0FBUyxHQUFHVixNQUFNLEtBQUtKLGNBQWMsQ0FBQ0MsT0FBNUM7QUFDQSxNQUFNYyxVQUFVLEdBQUdYLE1BQU0sS0FBS0osY0FBYyxDQUFDRyxLQUE3QztBQUVBLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsMEVBQUQ7QUFBa0IsaUJBQVcsRUFBRUwsV0FBL0I7QUFBNEMsb0JBQWMsRUFBRUM7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBRUtlLFNBQVMsaUJBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGbEIsRUFHS0QsT0FBTyxpQkFDUjtBQUFLLGVBQVMsRUFBQyx1REFBZjtBQUFBLGdCQUNLekIsUUFBUSxDQUFDNEIsTUFBVCxDQUFnQixVQUFBQyxHQUFHLEVBQUk7QUFDcEIsWUFBTUMsWUFBWSxHQUFHLFVBQUdELEdBQUcsQ0FBQ0UsU0FBUCxjQUFvQkYsR0FBRyxDQUFDRyxRQUF4QixFQUFtQ0MsV0FBbkMsRUFBckI7QUFDQSxlQUFPdkIsV0FBVyxDQUFDd0IsTUFBWixLQUF1QixDQUF2QixHQUEyQixJQUEzQixHQUFrQ0osWUFBWSxDQUFDSyxRQUFiLENBQXNCekIsV0FBVyxDQUFDdUIsV0FBWixFQUF0QixDQUF6QztBQUNILE9BSEEsRUFHRWhDLEdBSEYsQ0FHTSxVQUFDQyxPQUFEO0FBQUEsNEJBQ0gscUVBQUMsd0RBQUQsa0NBQThCQSxPQUE5QjtBQUF1QywwQkFBZ0IsRUFBRTtBQUFBLG1CQUFNTCx1QkFBdUIsQ0FBQ0ssT0FBRCxDQUE3QjtBQUFBO0FBQXpELFlBQWNBLE9BQU8sQ0FBQ0MsRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERztBQUFBLE9BSE47QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFlSCxDQXJERDs7R0FBTVYsUTs7S0FBQUEsUTtBQXNEU0EsdUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vycy9TcGVha2Vycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5pbXBvcnQgd2l0aERhdGEgZnJvbSAnLi93aXRoRGF0YSdcbmltcG9ydCBTcGVha2VyU2VhcmNoQmFyIGZyb20gJy4uL1NwZWFrZXJTZWFyY2hCYXIvU3BlYWtlclNlYXJjaEJhcidcbmltcG9ydCBTcGVha2VyIGZyb20gJy4uL1NwZWFrZXIvU3BlYWtlcidcblxuY29uc3QgU3BlYWtlcnMgPSAoKSA9PiB7XG4gICAgZnVuY3Rpb24gdG9nZ2xlU3BlYWtlckZhdm9yaXRlKHNwZWFrZXJSZWMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnNwZWFrZXJSZWMsXG4gICAgICAgICAgICBpc0Zhdm9yaXRlOiAhc3BlYWtlclJlYy5pc0Zhdm9yaXRlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIG9uRmF2b3JpdGVUb2dnbGVIYW5kbGVyKHNwZWFrZXJSZWMpIHtcbiAgICAgICAgY29uc3QgdG9nZ2xlZFNwZWFrZXJSZWMgPSB0b2dnbGVTcGVha2VyRmF2b3JpdGUoc3BlYWtlclJlYyk7XG4gICAgICAgIGNvbnN0IHNwZWFrZXJJbmRleCA9IHNwZWFrZXJzLm1hcCgoc3BlYWtlcikgPT4gc3BlYWtlci5pZCkuaW5kZXhPZihzcGVha2VyUmVjLmlkKTtcblxuICAgICAgICBhd2FpdCBheGlvcy5wdXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zcGVha2Vycy8ke3NwZWFrZXJSZWMuaWR9YCwgdG9nZ2xlZFNwZWFrZXJSZWMpO1xuICAgICAgICBzZXRTcGVha2VycyhbLi4uc3BlYWtlcnMuc2xpY2UoMCwgc3BlYWtlckluZGV4KSwgdG9nZ2xlZFNwZWFrZXJSZWMsIC4uLnNwZWFrZXJzLnNsaWNlKHNwZWFrZXJJbmRleCsxKV0pO1xuICAgIH1cblxuICAgIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3NwZWFrZXJzLCBzZXRTcGVha2Vyc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgUkVRVUVTVF9TVEFUVVMgPSB7XG4gICAgICAgIExPQURJTkc6ICdsb2FkaW5nJyxcbiAgICAgICAgU1VDQ0VTUzogJ3N1Y2Nlc3MnLFxuICAgICAgICBFUlJPUjogJ2Vycm9yJ1xuICAgIH07XG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFJFUVVFU1RfU1RBVFVTLkxPQURJTkcpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoe30pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3NwZWFrZXJzXCIpO1xuICAgICAgICAgICAgc2V0U3BlYWtlcnMocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICBzZXRTdGF0dXMoUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUyk7XG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2hEYXRhKCk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3Qgc3VjY2VzcyA9IHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUztcbiAgICBjb25zdCBpc0xvYWRpbmcgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkxPQURJTkc7XG4gICAgY29uc3QgaGFzRXJyb3JlZCA9IHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuRVJST1I7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFNwZWFrZXJTZWFyY2hCYXIgc2VhcmNoUXVlcnk9e3NlYXJjaFF1ZXJ5fSBzZXRTZWFyY2hRdWVyeT17c2V0U2VhcmNoUXVlcnl9Lz5cbiAgICAgICAgICAgIHtpc0xvYWRpbmcgJiYgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+fVxuICAgICAgICAgICAge3N1Y2Nlc3MgJiYgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ3JpZC1jb2xzLTEgZ2FwLTEyXCI+XG4gICAgICAgICAgICAgICAge3NwZWFrZXJzLmZpbHRlcihyZWMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRTdHJpbmcgPSBgJHtyZWMuZmlyc3ROYW1lfSAke3JlYy5sYXN0TmFtZX1gLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWFyY2hRdWVyeS5sZW5ndGggPT09IDAgPyB0cnVlIDogdGFyZ2V0U3RyaW5nLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgIH0pLm1hcCgoc3BlYWtlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8U3BlYWtlciBrZXk9e3NwZWFrZXIuaWR9IHsuLi5zcGVha2VyfSBvbkZhdm9yaXRlVG9nZ2xlPXsoKSA9PiBvbkZhdm9yaXRlVG9nZ2xlSGFuZGxlcihzcGVha2VyKX0vPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Speakers/Speakers.js\n");

/***/ })

})