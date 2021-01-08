webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/components/Speakers/Speakers.js":
/*!*********************************************!*\
  !*** ./src/components/Speakers/Speakers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _withData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./withData */ \"./src/components/Speakers/withData.js\");\n/* harmony import */ var _SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SpeakerSearchBar/SpeakerSearchBar */ \"./src/components/SpeakerSearchBar/SpeakerSearchBar.js\");\n/* harmony import */ var _Speaker_Speaker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Speaker/Speaker */ \"./src/components/Speaker/Speaker.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/oj/Desktop/pluralsight/design-react/src/components/Speakers/Speakers.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar Speakers = function Speakers() {\n  _s();\n\n  function toggleSpeakerFavorite(speakerRec) {\n    return _objectSpread(_objectSpread({}, speakerRec), {}, {\n      isFavorite: !speakerRec.isFavorite\n    });\n  }\n\n  function onFavoriteToggleHandler(_x) {\n    return _onFavoriteToggleHandler.apply(this, arguments);\n  }\n\n  function _onFavoriteToggleHandler() {\n    _onFavoriteToggleHandler = Object(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(speakerRec) {\n      var toggledSpeakerRec, speakerIndex;\n      return _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              toggledSpeakerRec = toggleSpeakerFavorite(speakerRec);\n              speakerIndex = speakers.map(function (speaker) {\n                return speaker.id;\n              }).indexOf(speakerRec.id);\n              _context2.prev = 2;\n              _context2.next = 5;\n              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.put(\"http://localhost:4000/speakers/\".concat(speakerRec.id), toggledSpeakerRec);\n\n            case 5:\n              dispatch([].concat(Object(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(speakers.slice(0, speakerIndex)), [toggledSpeakerRec], Object(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(speakers.slice(speakerIndex + 1))));\n              _context2.next = 12;\n              break;\n\n            case 8:\n              _context2.prev = 8;\n              _context2.t0 = _context2[\"catch\"](2);\n              dispatch({\n                status: REQUEST_STATUS.ERROR,\n                type: 'UPDATE_STATUS'\n              });\n              setError(_context2.t0);\n\n            case 12:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[2, 8]]);\n    }));\n    return _onFavoriteToggleHandler.apply(this, arguments);\n  }\n\n  var reducer = function reducer(state, action) {\n    switch (action.type) {\n      case 'GET_ALL_SUCCESS':\n        return _objectSpread(_objectSpread({}, state), {}, {\n          status: REQUEST_STATUS.SUCCESS,\n          speakers: action.speakers\n        });\n\n      case 'UPDATE_STATUS':\n        return _objectSpread(_objectSpread({}, state), {}, {\n          status: action.status\n        });\n    }\n  };\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useReducer\"])(reducer, {\n    status: REQUEST_STATUS.LOADING,\n    speakers: []\n  }),\n      _useReducer$ = _useReducer[0],\n      speakers = _useReducer$.speakers,\n      status = _useReducer$.status,\n      dispatch = _useReducer[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(''),\n      searchQuery = _useState[0],\n      setSearchQuery = _useState[1];\n\n  var REQUEST_STATUS = {\n    LOADING: 'loading',\n    SUCCESS: 'success',\n    ERROR: 'error'\n  };\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])({}),\n      error = _useState2[0],\n      setError = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref = Object(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var response;\n        return _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                _context.next = 3;\n                return axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(\"http://localhost:4000/speakers\");\n\n              case 3:\n                response = _context.sent;\n                dispatch({\n                  speakers: response.data,\n                  type: 'GET_ALL_SUCCESS'\n                });\n                _context.next = 11;\n                break;\n\n              case 7:\n                _context.prev = 7;\n                _context.t0 = _context[\"catch\"](0);\n                dispatch({\n                  status: REQUEST_STATUS.ERROR,\n                  type: 'UPDATE_STATUS'\n                });\n                setError(_context.t0);\n\n              case 11:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 7]]);\n      }));\n\n      return function fetchData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, [status]);\n  var success = status === REQUEST_STATUS.SUCCESS;\n  var isLoading = status === REQUEST_STATUS.LOADING;\n  var hasErrored = status === REQUEST_STATUS.ERROR;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      searchQuery: searchQuery,\n      setSearchQuery: setSearchQuery\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }, _this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 27\n    }, _this), hasErrored && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n      children: [\"Loading error...\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 21\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"b\", {\n        children: [\"Error: \", error.message]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 21\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 17\n    }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"div\", {\n      className: \"grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12\",\n      children: speakers.filter(function (rec) {\n        var targetString = \"\".concat(rec.firstName, \" \").concat(rec.lastName).toLowerCase();\n        return searchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());\n      }).map(function (speaker) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(_Speaker_Speaker__WEBPACK_IMPORTED_MODULE_9__[\"default\"], _objectSpread(_objectSpread({}, speaker), {}, {\n          onFavoriteToggle: function onFavoriteToggle() {\n            return onFavoriteToggleHandler(speaker);\n          }\n        }), speaker.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 25\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 17\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 84,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Speakers, \"9Nle5gbEJlrj+shB1S81YMId260=\");\n\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\n\nvar _c;\n\n$RefreshReg$(_c, \"Speakers\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanM/MGJlYyJdLCJuYW1lcyI6WyJTcGVha2VycyIsInRvZ2dsZVNwZWFrZXJGYXZvcml0ZSIsInNwZWFrZXJSZWMiLCJpc0Zhdm9yaXRlIiwib25GYXZvcml0ZVRvZ2dsZUhhbmRsZXIiLCJ0b2dnbGVkU3BlYWtlclJlYyIsInNwZWFrZXJJbmRleCIsInNwZWFrZXJzIiwibWFwIiwic3BlYWtlciIsImlkIiwiaW5kZXhPZiIsImF4aW9zIiwicHV0IiwiZGlzcGF0Y2giLCJzbGljZSIsInN0YXR1cyIsIlJFUVVFU1RfU1RBVFVTIiwiRVJST1IiLCJ0eXBlIiwic2V0RXJyb3IiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJTVUNDRVNTIiwidXNlUmVkdWNlciIsIkxPQURJTkciLCJ1c2VTdGF0ZSIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJlcnJvciIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsImdldCIsInJlc3BvbnNlIiwiZGF0YSIsInN1Y2Nlc3MiLCJpc0xvYWRpbmciLCJoYXNFcnJvcmVkIiwibWVzc2FnZSIsImZpbHRlciIsInJlYyIsInRhcmdldFN0cmluZyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwidG9Mb3dlckNhc2UiLCJsZW5ndGgiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDbkIsV0FBU0MscUJBQVQsQ0FBK0JDLFVBQS9CLEVBQTJDO0FBQ3ZDLDJDQUNPQSxVQURQO0FBRUlDLGdCQUFVLEVBQUUsQ0FBQ0QsVUFBVSxDQUFDQztBQUY1QjtBQUlIOztBQU5rQixXQVFKQyx1QkFSSTtBQUFBO0FBQUE7O0FBQUE7QUFBQSw4VEFRbkIsa0JBQXVDRixV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RCxDQUE3QjtBQUFBO0FBQXpELFlBQWNBLE9BQU8sQ0FBQ0MsRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERztBQUFBLE9BSE47QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF1QkgsQ0FsR0Q7O0dBQU1WLFE7O0tBQUFBLFE7QUFtR1NBLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4vd2l0aERhdGEnXG5pbXBvcnQgU3BlYWtlclNlYXJjaEJhciBmcm9tICcuLi9TcGVha2VyU2VhcmNoQmFyL1NwZWFrZXJTZWFyY2hCYXInXG5pbXBvcnQgU3BlYWtlciBmcm9tICcuLi9TcGVha2VyL1NwZWFrZXInXG5cbmNvbnN0IFNwZWFrZXJzID0gKCkgPT4ge1xuICAgIGZ1bmN0aW9uIHRvZ2dsZVNwZWFrZXJGYXZvcml0ZShzcGVha2VyUmVjKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zcGVha2VyUmVjLFxuICAgICAgICAgICAgaXNGYXZvcml0ZTogIXNwZWFrZXJSZWMuaXNGYXZvcml0ZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBvbkZhdm9yaXRlVG9nZ2xlSGFuZGxlcihzcGVha2VyUmVjKSB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZWRTcGVha2VyUmVjID0gdG9nZ2xlU3BlYWtlckZhdm9yaXRlKHNwZWFrZXJSZWMpO1xuICAgICAgICBjb25zdCBzcGVha2VySW5kZXggPSBzcGVha2Vycy5tYXAoKHNwZWFrZXIpID0+IHNwZWFrZXIuaWQpLmluZGV4T2Yoc3BlYWtlclJlYy5pZCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLnB1dChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL3NwZWFrZXJzLyR7c3BlYWtlclJlYy5pZH1gLCB0b2dnbGVkU3BlYWtlclJlYyk7XG4gICAgICAgICAgICBkaXNwYXRjaChbLi4uc3BlYWtlcnMuc2xpY2UoMCwgc3BlYWtlckluZGV4KSwgdG9nZ2xlZFNwZWFrZXJSZWMsIC4uLnNwZWFrZXJzLnNsaWNlKHNwZWFrZXJJbmRleCsxKV0pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgc3RhdHVzOiBSRVFVRVNUX1NUQVRVUy5FUlJPUixcbiAgICAgICAgICAgICAgICB0eXBlOiAnVVBEQVRFX1NUQVRVUycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldEVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0dFVF9BTExfU1VDQ0VTUyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUyxcbiAgICAgICAgICAgICAgICAgICAgc3BlYWtlcnM6IGFjdGlvbi5zcGVha2VycyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSAnVVBEQVRFX1NUQVRVUyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogYWN0aW9uLnN0YXR1cyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgWyB7c3BlYWtlcnMsIHN0YXR1c30sIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwge1xuICAgICAgICBzdGF0dXM6IFJFUVVFU1RfU1RBVFVTLkxPQURJTkcsXG4gICAgICAgIHNwZWFrZXJzOiBbXSxcbiAgICB9KTtcblxuICAgIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFJFUVVFU1RfU1RBVFVTID0ge1xuICAgICAgICBMT0FESU5HOiAnbG9hZGluZycsXG4gICAgICAgIFNVQ0NFU1M6ICdzdWNjZXNzJyxcbiAgICAgICAgRVJST1I6ICdlcnJvcidcbiAgICB9O1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoe30pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9zcGVha2Vyc1wiKTtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHNwZWFrZXJzOiByZXNwb25zZS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnR0VUX0FMTF9TVUNDRVNTJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogUkVRVUVTVF9TVEFUVVMuRVJST1IsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdVUERBVEVfU1RBVFVTJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmZXRjaERhdGEoKTtcbiAgICB9LCBbc3RhdHVzXSk7XG5cbiAgICBjb25zdCBzdWNjZXNzID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5TVUNDRVNTO1xuICAgIGNvbnN0IGlzTG9hZGluZyA9IHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuTE9BRElORztcbiAgICBjb25zdCBoYXNFcnJvcmVkID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5FUlJPUjtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8U3BlYWtlclNlYXJjaEJhciBzZWFyY2hRdWVyeT17c2VhcmNoUXVlcnl9IHNldFNlYXJjaFF1ZXJ5PXtzZXRTZWFyY2hRdWVyeX0vPlxuICAgICAgICAgICAge2lzTG9hZGluZyAmJiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj59XG4gICAgICAgICAgICB7aGFzRXJyb3JlZCAmJiBcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nIGVycm9yLi4uXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8Yj5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9iPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge3N1Y2Nlc3MgJiYgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdyaWQtY29scy0xIGdhcC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICB7c3BlYWtlcnMuZmlsdGVyKChyZWMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFN0cmluZyA9IGAke3JlYy5maXJzdE5hbWV9ICR7cmVjLmxhc3ROYW1lfWAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWFyY2hRdWVyeS5sZW5ndGggPT09IDAgPyB0cnVlIDogdGFyZ2V0U3RyaW5nLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgICAgICB9KS5tYXAoKHNwZWFrZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVha2VyIGtleT17c3BlYWtlci5pZH0gey4uLnNwZWFrZXJ9IG9uRmF2b3JpdGVUb2dnbGU9eygpID0+IG9uRmF2b3JpdGVUb2dnbGVIYW5kbGVyKHNwZWFrZXIpfS8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Speakers/Speakers.js\n");

/***/ })

})