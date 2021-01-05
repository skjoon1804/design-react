webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/components/Speakers/Speakers.js":
/*!*********************************************!*\
  !*** ./src/components/Speakers/Speakers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _withData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./withData */ \"./src/components/Speakers/withData.js\");\n/* harmony import */ var _SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SpeakerSearchBar/SpeakerSearchBar */ \"./src/components/SpeakerSearchBar/SpeakerSearchBar.js\");\n/* harmony import */ var _Speaker_Speaker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Speaker/Speaker */ \"./src/components/Speaker/Speaker.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/oj/Desktop/pluralsight/design-react/src/components/Speakers/Speakers.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar Speakers = function Speakers() {\n  _s();\n\n  function toggleSpeakerFavorite(speakerRec) {\n    return _objectSpread(_objectSpread({}, speakerRec), {}, {\n      isFavorite: !speakerRec.isFavorite\n    });\n  }\n\n  function onFavoriteToggleHandler(_x) {\n    return _onFavoriteToggleHandler.apply(this, arguments);\n  }\n\n  function _onFavoriteToggleHandler() {\n    _onFavoriteToggleHandler = Object(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(speakerRec) {\n      var toggledSpeakerRec, speakerIndex;\n      return _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              toggledSpeakerRec = toggleSpeakerFavorite(speakerRec);\n              speakerIndex = speakers.map(function (speaker) {\n                return speaker.id;\n              }).indexOf(speakerRec.id);\n              _context2.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.put(\"http://localhost:3000/speakers/\".concat(speakerRec.id), toggledSpeakerRec);\n\n            case 4:\n              setSpeakers([].concat(Object(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(speakers.slice(0, speakerIndex)), [toggledSpeakerRec], Object(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(speakers.slice(speakerIndex + 1))));\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n    return _onFavoriteToggleHandler.apply(this, arguments);\n  }\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(''),\n      searchQuery = _useState[0],\n      setSearchQuery = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])([]),\n      speakers = _useState2[0],\n      setSpeakers = _useState2[1];\n\n  var REQUEST_STATUS = {\n    LOADING: 'loading',\n    SUCCESS: 'success',\n    ERROR: 'error'\n  };\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(REQUEST_STATUS.LOADING),\n      status = _useState3[0],\n      setStatus = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])({}),\n      error = _useState4[0],\n      setError = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref = Object(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var response;\n        return _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(\"http://localhost:3000/speakers\");\n\n              case 3:\n                response = _context.sent;\n                setSpeakers(response.data);\n                setStatus(REQUEST_STATUS.SUCCESS);\n                _context.next = 12;\n                break;\n\n              case 8:\n                _context.prev = 8;\n                _context.t0 = _context[\"catch\"](0);\n                setStatus(REQUEST_STATUS.ERROR);\n                setError(_context.t0);\n\n              case 12:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 8]]);\n      }));\n\n      return function fetchData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, [status]);\n  var success = status === REQUEST_STATUS.SUCCESS;\n  var isLoading = status === REQUEST_STATUS.LOADING;\n  var hasErrored = status === REQUEST_STATUS.ERROR;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      searchQuery: searchQuery,\n      setSearchQuery: setSearchQuery\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }, _this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 27\n    }, _this), hasErrored && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n      children: [\"Loading error...\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 21\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"b\", {\n        children: [\"Error: \", error.message]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 21\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 17\n    }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n      className: \"grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12\",\n      children: speakers.filter(function (rec) {\n        var targetString = \"\".concat(rec.firstName, \" \").concat(rec.lastName).toLowerCase();\n        return searchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());\n      }).map(function (speaker) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_Speaker_Speaker__WEBPACK_IMPORTED_MODULE_9__[\"default\"], _objectSpread(_objectSpread({}, speaker), {}, {\n          onFavoriteToggle: function onFavoriteToggle() {\n            return onFavoriteToggleHandler(speaker);\n          }\n        }), speaker.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 25\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 17\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Speakers, \"Jf6YJmCWqOSI0+I/qwxmnQXw9Fo=\");\n\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\n\nvar _c;\n\n$RefreshReg$(_c, \"Speakers\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanM/MGJlYyJdLCJuYW1lcyI6WyJTcGVha2VycyIsInRvZ2dsZVNwZWFrZXJGYXZvcml0ZSIsInNwZWFrZXJSZWMiLCJpc0Zhdm9yaXRlIiwib25GYXZvcml0ZVRvZ2dsZUhhbmRsZXIiLCJ0b2dnbGVkU3BlYWtlclJlYyIsInNwZWFrZXJJbmRleCIsInNwZWFrZXJzIiwibWFwIiwic3BlYWtlciIsImlkIiwiaW5kZXhPZiIsImF4aW9zIiwicHV0Iiwic2V0U3BlYWtlcnMiLCJzbGljZSIsInVzZVN0YXRlIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsIlJFUVVFU1RfU1RBVFVTIiwiTE9BRElORyIsIlNVQ0NFU1MiLCJFUlJPUiIsInN0YXR1cyIsInNldFN0YXR1cyIsImVycm9yIiwic2V0RXJyb3IiLCJ1c2VFZmZlY3QiLCJmZXRjaERhdGEiLCJnZXQiLCJyZXNwb25zZSIsImRhdGEiLCJzdWNjZXNzIiwiaXNMb2FkaW5nIiwiaGFzRXJyb3JlZCIsIm1lc3NhZ2UiLCJmaWx0ZXIiLCJyZWMiLCJ0YXJnZXRTdHJpbmciLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInRvTG93ZXJDYXNlIiwibGVuZ3RoIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ25CLFdBQVNDLHFCQUFULENBQStCQyxVQUEvQixFQUEyQztBQUN2QywyQ0FDT0EsVUFEUDtBQUVJQyxnQkFBVSxFQUFFLENBQUNELFVBQVUsQ0FBQ0M7QUFGNUI7QUFJSDs7QUFOa0IsV0FRSkMsdUJBUkk7QUFBQTtBQUFBOztBQUFBO0FBQUEsOFRBUW5CLGtCQUF1Q0YsVUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QVEsQ0FBQzZCLE1BQVQsQ0FBZ0IsVUFBQUMsR0FBRyxFQUFJO0FBQ3BCLFlBQU1DLFlBQVksR0FBRyxVQUFHRCxHQUFHLENBQUNFLFNBQVAsY0FBb0JGLEdBQUcsQ0FBQ0csUUFBeEIsRUFBbUNDLFdBQW5DLEVBQXJCO0FBQ0EsZUFBT3hCLFdBQVcsQ0FBQ3lCLE1BQVosS0FBdUIsQ0FBdkIsR0FBMkIsSUFBM0IsR0FBa0NKLFlBQVksQ0FBQ0ssUUFBYixDQUFzQjFCLFdBQVcsQ0FBQ3dCLFdBQVosRUFBdEIsQ0FBekM7QUFDSCxPQUhBLEVBR0VqQyxHQUhGLENBR00sVUFBQ0MsT0FBRDtBQUFBLDRCQUNILHFFQUFDLHdEQUFELGtDQUE4QkEsT0FBOUI7QUFBdUMsMEJBQWdCLEVBQUU7QUFBQSxtQkFBTUwsdUJBQXVCLENBQUNLLE9BQUQsQ0FBN0I7QUFBQTtBQUF6RCxZQUFjQSxPQUFPLENBQUNDLEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREc7QUFBQSxPQUhOO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBdUJILENBbkVEOztHQUFNVixROztLQUFBQSxRO0FBb0VTQSx1RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzL1NwZWFrZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmltcG9ydCB3aXRoRGF0YSBmcm9tICcuL3dpdGhEYXRhJ1xuaW1wb3J0IFNwZWFrZXJTZWFyY2hCYXIgZnJvbSAnLi4vU3BlYWtlclNlYXJjaEJhci9TcGVha2VyU2VhcmNoQmFyJ1xuaW1wb3J0IFNwZWFrZXIgZnJvbSAnLi4vU3BlYWtlci9TcGVha2VyJ1xuXG5jb25zdCBTcGVha2VycyA9ICgpID0+IHtcbiAgICBmdW5jdGlvbiB0b2dnbGVTcGVha2VyRmF2b3JpdGUoc3BlYWtlclJlYykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3BlYWtlclJlYyxcbiAgICAgICAgICAgIGlzRmF2b3JpdGU6ICFzcGVha2VyUmVjLmlzRmF2b3JpdGUsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25GYXZvcml0ZVRvZ2dsZUhhbmRsZXIoc3BlYWtlclJlYykge1xuICAgICAgICBjb25zdCB0b2dnbGVkU3BlYWtlclJlYyA9IHRvZ2dsZVNwZWFrZXJGYXZvcml0ZShzcGVha2VyUmVjKTtcbiAgICAgICAgY29uc3Qgc3BlYWtlckluZGV4ID0gc3BlYWtlcnMubWFwKChzcGVha2VyKSA9PiBzcGVha2VyLmlkKS5pbmRleE9mKHNwZWFrZXJSZWMuaWQpO1xuXG4gICAgICAgIGF3YWl0IGF4aW9zLnB1dChgaHR0cDovL2xvY2FsaG9zdDozMDAwL3NwZWFrZXJzLyR7c3BlYWtlclJlYy5pZH1gLCB0b2dnbGVkU3BlYWtlclJlYyk7XG4gICAgICAgIHNldFNwZWFrZXJzKFsuLi5zcGVha2Vycy5zbGljZSgwLCBzcGVha2VySW5kZXgpLCB0b2dnbGVkU3BlYWtlclJlYywgLi4uc3BlYWtlcnMuc2xpY2Uoc3BlYWtlckluZGV4KzEpXSk7XG4gICAgfVxuXG4gICAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3NwZWFrZXJzLCBzZXRTcGVha2Vyc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgUkVRVUVTVF9TVEFUVVMgPSB7XG4gICAgICAgIExPQURJTkc6ICdsb2FkaW5nJyxcbiAgICAgICAgU1VDQ0VTUzogJ3N1Y2Nlc3MnLFxuICAgICAgICBFUlJPUjogJ2Vycm9yJ1xuICAgIH07XG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFJFUVVFU1RfU1RBVFVTLkxPQURJTkcpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoe30pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zcGVha2Vyc1wiKTtcbiAgICAgICAgICAgICAgICBzZXRTcGVha2VycyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICBzZXRTdGF0dXMoUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgc2V0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLkVSUk9SKTtcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmZXRjaERhdGEoKTtcbiAgICB9LCBbc3RhdHVzXSk7XG5cbiAgICBjb25zdCBzdWNjZXNzID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5TVUNDRVNTO1xuICAgIGNvbnN0IGlzTG9hZGluZyA9IHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuTE9BRElORztcbiAgICBjb25zdCBoYXNFcnJvcmVkID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5FUlJPUjtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8U3BlYWtlclNlYXJjaEJhciBzZWFyY2hRdWVyeT17c2VhcmNoUXVlcnl9IHNldFNlYXJjaFF1ZXJ5PXtzZXRTZWFyY2hRdWVyeX0vPlxuICAgICAgICAgICAge2lzTG9hZGluZyAmJiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj59XG4gICAgICAgICAgICB7aGFzRXJyb3JlZCAmJiBcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nIGVycm9yLi4uXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8Yj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9iPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge3N1Y2Nlc3MgJiYgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdyaWQtY29scy0xIGdhcC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICB7c3BlYWtlcnMuZmlsdGVyKHJlYyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRTdHJpbmcgPSBgJHtyZWMuZmlyc3ROYW1lfSAke3JlYy5sYXN0TmFtZX1gLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VhcmNoUXVlcnkubGVuZ3RoID09PSAwID8gdHJ1ZSA6IHRhcmdldFN0cmluZy5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgfSkubWFwKChzcGVha2VyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BlYWtlciBrZXk9e3NwZWFrZXIuaWR9IHsuLi5zcGVha2VyfSBvbkZhdm9yaXRlVG9nZ2xlPXsoKSA9PiBvbkZhdm9yaXRlVG9nZ2xlSGFuZGxlcihzcGVha2VyKX0vPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTcGVha2VyczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Speakers/Speakers.js\n");

/***/ })

})