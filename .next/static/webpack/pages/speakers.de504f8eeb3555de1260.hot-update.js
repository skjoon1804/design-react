webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/components/HOCs/withRequest.js":
/*!********************************************!*\
  !*** ./src/components/HOCs/withRequest.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _reducers_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reducers/request */ \"./src/reducers/request.js\");\n/* harmony import */ var _actions_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/request */ \"./src/actions/request.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/oj/Desktop/pluralsight/design-react/src/components/HOCs/withRequest.js\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar withRequest = function withRequest(baseUrl, routeName) {\n  return function (Component) {\n    var _s = $RefreshSig$();\n\n    return _s(function () {\n      _s();\n\n      var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useReducer\"])(_reducers_request__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        records: [],\n        status: _reducers_request__WEBPACK_IMPORTED_MODULE_6__[\"REQUEST_STATUS\"].LOADING,\n        error: null\n      }),\n          _useReducer$ = _useReducer[0],\n          speakers = _useReducer$.records,\n          status = _useReducer$.status,\n          error = _useReducer$.error,\n          dispatch = _useReducer[1];\n\n      Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n        var fetchData = /*#__PURE__*/function () {\n          var _ref = Object(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n            var response;\n            return _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n              while (1) {\n                switch (_context.prev = _context.next) {\n                  case 0:\n                    _context.prev = 0;\n                    _context.next = 3;\n                    return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(\"\".concat(baseUrl, \"/\").concat(routeName));\n\n                  case 3:\n                    response = _context.sent;\n                    dispatch({\n                      records: response.data,\n                      type: _actions_request__WEBPACK_IMPORTED_MODULE_7__[\"GET_ALL_SUCCESS\"]\n                    });\n                    _context.next = 10;\n                    break;\n\n                  case 7:\n                    _context.prev = 7;\n                    _context.t0 = _context[\"catch\"](0);\n                    dispatch({\n                      error: _context.t0,\n                      type: _actions_request__WEBPACK_IMPORTED_MODULE_7__[\"GET_ALL_FAILURE\"]\n                    });\n\n                  case 10:\n                  case \"end\":\n                    return _context.stop();\n                }\n              }\n            }, _callee, null, [[0, 7]]);\n          }));\n\n          return function fetchData() {\n            return _ref.apply(this, arguments);\n          };\n        }();\n\n        fetchData();\n      }, [baseUrl, routeName]);\n      var props = {\n        records: records,\n        status: status,\n        error: error,\n        put: function () {\n          var _put = Object(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(record) {\n            return _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n              while (1) {\n                switch (_context2.prev = _context2.next) {\n                  case 0:\n                    _context2.prev = 0;\n                    _context2.next = 3;\n                    return axios__WEBPACK_IMPORTED_MODULE_5___default.a.put(\"http://localhost:4000/speakers/\".concat(speakerRec.id), toggledSpeakerRec);\n\n                  case 3:\n                    dispatch({\n                      type: _actions_request__WEBPACK_IMPORTED_MODULE_7__[\"PUT_SUCCESS\"],\n                      record: record\n                    });\n                    _context2.next = 9;\n                    break;\n\n                  case 6:\n                    _context2.prev = 6;\n                    _context2.t0 = _context2[\"catch\"](0);\n                    dispatch({\n                      type: _actions_request__WEBPACK_IMPORTED_MODULE_7__[\"PUT_FAILURE\"],\n                      error: _context2.t0\n                    });\n\n                  case 9:\n                  case \"end\":\n                    return _context2.stop();\n                }\n              }\n            }, _callee2, null, [[0, 6]]);\n          }));\n\n          function put(_x) {\n            return _put.apply(this, arguments);\n          }\n\n          return put;\n        }()\n      };\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(Component, _objectSpread({}, props), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 12\n      }, _this);\n    }, \"fwtdJEhuC4YYSWKmqG0w6EYSr3A=\");\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (withRequest);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSE9Dcy93aXRoUmVxdWVzdC5qcz9hYTM1Il0sIm5hbWVzIjpbIndpdGhSZXF1ZXN0IiwiYmFzZVVybCIsInJvdXRlTmFtZSIsIkNvbXBvbmVudCIsInVzZVJlZHVjZXIiLCJyZXF1ZXN0UmVkdWNlciIsInJlY29yZHMiLCJzdGF0dXMiLCJSRVFVRVNUX1NUQVRVUyIsIkxPQURJTkciLCJlcnJvciIsInNwZWFrZXJzIiwiZGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJmZXRjaERhdGEiLCJheGlvcyIsImdldCIsInJlc3BvbnNlIiwiZGF0YSIsInR5cGUiLCJHRVRfQUxMX1NVQ0NFU1MiLCJHRVRfQUxMX0ZBSUxVUkUiLCJwcm9wcyIsInB1dCIsInJlY29yZCIsInNwZWFrZXJSZWMiLCJpZCIsInRvZ2dsZWRTcGVha2VyUmVjIiwiUFVUX1NVQ0NFU1MiLCJQVVRfRkFJTFVSRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLE9BQUQsRUFBVUMsU0FBVjtBQUFBLFNBQXdCLFVBQUNDLFNBQUQ7QUFBQTs7QUFBQSxjQUFlLFlBQU07QUFBQTs7QUFBQSx3QkFFTkMsd0RBQVUsQ0FBQ0MseURBQUQsRUFBaUI7QUFDOUVDLGVBQU8sRUFBRSxFQURxRTtBQUU5RUMsY0FBTSxFQUFFQyxnRUFBYyxDQUFDQyxPQUZ1RDtBQUc5RUMsYUFBSyxFQUFFO0FBSHVFLE9BQWpCLENBRko7QUFBQTtBQUFBLFVBRTVDQyxRQUY0QyxnQkFFckRMLE9BRnFEO0FBQUEsVUFFbENDLE1BRmtDLGdCQUVsQ0EsTUFGa0M7QUFBQSxVQUUxQkcsS0FGMEIsZ0JBRTFCQSxLQUYwQjtBQUFBLFVBRWxCRSxRQUZrQjs7QUFRN0RDLDZEQUFTLENBQUMsWUFBTTtBQUNaLFlBQU1DLFNBQVM7QUFBQSxvVEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRWFDLDRDQUFLLENBQUNDLEdBQU4sV0FBYWYsT0FBYixjQUF3QkMsU0FBeEIsRUFGYjs7QUFBQTtBQUVKZSw0QkFGSTtBQUdWTCw0QkFBUSxDQUFDO0FBQ0xOLDZCQUFPLEVBQUVXLFFBQVEsQ0FBQ0MsSUFEYjtBQUVMQywwQkFBSSxFQUFFQyxnRUFBZUE7QUFGaEIscUJBQUQsQ0FBUjtBQUhVO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBUVZSLDRCQUFRLENBQUM7QUFDTEYsMkJBQUssYUFEQTtBQUVMUywwQkFBSSxFQUFFRSxnRUFBZUE7QUFGaEIscUJBQUQsQ0FBUjs7QUFSVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFIOztBQUFBLDBCQUFUUCxTQUFTO0FBQUE7QUFBQTtBQUFBLFdBQWY7O0FBY0FBLGlCQUFTO0FBQ1osT0FoQlEsRUFnQk4sQ0FBQ2IsT0FBRCxFQUFVQyxTQUFWLENBaEJNLENBQVQ7QUFrQkEsVUFBTW9CLEtBQUssR0FBRztBQUNWaEIsZUFBTyxFQUFQQSxPQURVO0FBRVZDLGNBQU0sRUFBTkEsTUFGVTtBQUdWRyxhQUFLLEVBQUxBLEtBSFU7QUFJVmEsV0FBRztBQUFBLG9UQUFFLGtCQUFPQyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRVNULDRDQUFLLENBQUNRLEdBQU4sMENBQTRDRSxVQUFVLENBQUNDLEVBQXZELEdBQTZEQyxpQkFBN0QsQ0FGVDs7QUFBQTtBQUdHZiw0QkFBUSxDQUFDO0FBQ0xPLDBCQUFJLEVBQUVTLDREQUREO0FBRUxKLDRCQUFNLEVBQUVBO0FBRkgscUJBQUQsQ0FBUjtBQUhIO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBUUdaLDRCQUFRLENBQUM7QUFDTE8sMEJBQUksRUFBRVUsNERBREQ7QUFFTG5CLDJCQUFLO0FBRkEscUJBQUQsQ0FBUjs7QUFSSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFGOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBSk8sT0FBZDtBQW9CQSwwQkFBTyxxRUFBQyxTQUFELG9CQUFlWSxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUVILEtBaEQyQztBQUFBLEdBQXhCO0FBQUEsQ0FBcEI7O0FBaURldEIsMEVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IT0NzL3dpdGhSZXF1ZXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VSZWR1Y2VyfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHJlcXVlc3RSZWR1Y2VyLCB7IFJFUVVFU1RfU1RBVFVTIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcmVxdWVzdCc7XG5pbXBvcnQge1xuICAgIFBVVF9TVUNDRVNTLFxuICAgIFBVVF9GQUlMVVJFLFxuICAgIEdFVF9BTExfU1VDQ0VTUyxcbiAgICBHRVRfQUxMX0ZBSUxVUkUsXG59IGZyb20gJy4uLy4uL2FjdGlvbnMvcmVxdWVzdCc7XG5cbmNvbnN0IHdpdGhSZXF1ZXN0ID0gKGJhc2VVcmwsIHJvdXRlTmFtZSkgPT4gKENvbXBvbmVudCkgPT4gKCkgPT4ge1xuXG4gICAgY29uc3QgW3tyZWNvcmRzOiBzcGVha2Vycywgc3RhdHVzLCBlcnJvcn0sIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVxdWVzdFJlZHVjZXIsIHtcbiAgICAgICAgcmVjb3JkczogW10sXG4gICAgICAgIHN0YXR1czogUkVRVUVTVF9TVEFUVVMuTE9BRElORyxcbiAgICAgICAgZXJyb3I6IG51bGwsXG4gICAgfSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9LyR7cm91dGVOYW1lfWApO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkczogcmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogR0VUX0FMTF9TVUNDRVNTLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGUsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEdFVF9BTExfRkFJTFVSRSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmZXRjaERhdGEoKTtcbiAgICB9LCBbYmFzZVVybCwgcm91dGVOYW1lIF0pO1xuXG4gICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgIHJlY29yZHMsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgZXJyb3IsXG4gICAgICAgIHB1dDogYXN5bmMgKHJlY29yZCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBheGlvcy5wdXQoYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9zcGVha2Vycy8ke3NwZWFrZXJSZWMuaWR9YCwgdG9nZ2xlZFNwZWFrZXJSZWMpO1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogUFVUX1NVQ0NFU1MsXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZDogcmVjb3JkLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogUFVUX0ZBSUxVUkUsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfT48L0NvbXBvbmVudD47XG5cbn07XG5leHBvcnQgZGVmYXVsdCB3aXRoUmVxdWVzdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/HOCs/withRequest.js\n");

/***/ }),

/***/ "./src/components/Speakers/Speakers.js":
/*!*********************************************!*\
  !*** ./src/components/Speakers/Speakers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _withData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./withData */ \"./src/components/Speakers/withData.js\");\n/* harmony import */ var _SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SpeakerSearchBar/SpeakerSearchBar */ \"./src/components/SpeakerSearchBar/SpeakerSearchBar.js\");\n/* harmony import */ var _Speaker_Speaker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Speaker/Speaker */ \"./src/components/Speaker/Speaker.js\");\n/* harmony import */ var _reducers_request__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../reducers/request */ \"./src/reducers/request.js\");\n/* harmony import */ var _HOCs_withRequest__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../HOCs/withRequest */ \"./src/components/HOCs/withRequest.js\");\n/* harmony import */ var _actions_request__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../actions/request */ \"./src/actions/request.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/oj/Desktop/pluralsight/design-react/src/components/Speakers/Speakers.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar Speakers = function Speakers(_ref) {\n  _s();\n\n  var speakers = _ref.records,\n      status = _ref.status,\n      error = _ref.error,\n      put = _ref.put;\n\n  var onFavoriteToggleHandler = /*#__PURE__*/function () {\n    var _ref2 = Object(_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(speakerRec) {\n      return _Users_oj_Desktop_pluralsight_design_react_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              put(_objectSpread(_objectSpread({}, speakerRec), {}, {\n                isFavorite: !speakerRec.isFavorite\n              }));\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function onFavoriteToggleHandler(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(''),\n      searchQuery = _useState[0],\n      setSearchQuery = _useState[1];\n\n  var success = status === _reducers_request__WEBPACK_IMPORTED_MODULE_9__[\"REQUEST_STATUS\"].SUCCESS;\n  var isLoading = status === _reducers_request__WEBPACK_IMPORTED_MODULE_9__[\"REQUEST_STATUS\"].LOADING;\n  var hasErrored = status === _reducers_request__WEBPACK_IMPORTED_MODULE_9__[\"REQUEST_STATUS\"].ERROR;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      searchQuery: searchQuery,\n      setSearchQuery: setSearchQuery\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, _this), isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 27\n    }, _this), hasErrored && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n      children: [\"Loading error...\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 21\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"b\", {\n        children: [\"Error: \", error.message]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 21\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 17\n    }, _this), success && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n      className: \"grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12\",\n      children: speakers.filter(function (rec) {\n        var targetString = \"\".concat(rec.firstName, \" \").concat(rec.lastName).toLowerCase();\n        return searchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());\n      }).map(function (speaker) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(_Speaker_Speaker__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _objectSpread(_objectSpread({}, speaker), {}, {\n          onFavoriteToggle: function onFavoriteToggle() {\n            return onFavoriteToggleHandler(speaker);\n          }\n        }), speaker.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 25\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 17\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Speakers, \"uixqA8hxOTN7LqZPWxVzG2fnyhQ=\");\n\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_HOCs_withRequest__WEBPACK_IMPORTED_MODULE_10__[\"default\"])('http://localhost:4000', 'speakers')(Speakers));\n\nvar _c;\n\n$RefreshReg$(_c, \"Speakers\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanM/MGJlYyJdLCJuYW1lcyI6WyJTcGVha2VycyIsInNwZWFrZXJzIiwicmVjb3JkcyIsInN0YXR1cyIsImVycm9yIiwicHV0Iiwib25GYXZvcml0ZVRvZ2dsZUhhbmRsZXIiLCJzcGVha2VyUmVjIiwiaXNGYXZvcml0ZSIsInVzZVN0YXRlIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInN1Y2Nlc3MiLCJSRVFVRVNUX1NUQVRVUyIsIlNVQ0NFU1MiLCJpc0xvYWRpbmciLCJMT0FESU5HIiwiaGFzRXJyb3JlZCIsIkVSUk9SIiwibWVzc2FnZSIsImZpbHRlciIsInJlYyIsInRhcmdldFN0cmluZyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwidG9Mb3dlckNhc2UiLCJsZW5ndGgiLCJpbmNsdWRlcyIsIm1hcCIsInNwZWFrZXIiLCJpZCIsIndpdGhSZXF1ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQTZDO0FBQUE7O0FBQUEsTUFBbENDLFFBQWtDLFFBQTNDQyxPQUEyQztBQUFBLE1BQXhCQyxNQUF3QixRQUF4QkEsTUFBd0I7QUFBQSxNQUFoQkMsS0FBZ0IsUUFBaEJBLEtBQWdCO0FBQUEsTUFBVEMsR0FBUyxRQUFUQSxHQUFTOztBQUMxRCxNQUFNQyx1QkFBdUI7QUFBQSwrU0FBRyxpQkFBTUMsVUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzVCRixpQkFBRyxpQ0FDSUUsVUFESjtBQUVDQywwQkFBVSxFQUFFLENBQUNELFVBQVUsQ0FBQ0M7QUFGekIsaUJBQUg7O0FBRDRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQXZCRix1QkFBdUI7QUFBQTtBQUFBO0FBQUEsS0FBN0I7O0FBRDBELGtCQVFwQkcsc0RBQVEsQ0FBQyxFQUFELENBUlk7QUFBQSxNQVFuREMsV0FSbUQ7QUFBQSxNQVF0Q0MsY0FSc0M7O0FBVzFELE1BQU1DLE9BQU8sR0FBR1QsTUFBTSxLQUFLVSxnRUFBYyxDQUFDQyxPQUExQztBQUNBLE1BQU1DLFNBQVMsR0FBR1osTUFBTSxLQUFLVSxnRUFBYyxDQUFDRyxPQUE1QztBQUNBLE1BQU1DLFVBQVUsR0FBR2QsTUFBTSxLQUFLVSxnRUFBYyxDQUFDSyxLQUE3QztBQUVBLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsMEVBQUQ7QUFBa0IsaUJBQVcsRUFBRVIsV0FBL0I7QUFBNEMsb0JBQWMsRUFBRUM7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLEVBRUtJLFNBQVMsaUJBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGbEIsRUFHS0UsVUFBVSxpQkFDUDtBQUFBLGtEQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQUdJO0FBQUEsOEJBQVdiLEtBQUssQ0FBQ2UsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSlIsRUFVS1AsT0FBTyxpQkFDSjtBQUFLLGVBQVMsRUFBQyx1REFBZjtBQUFBLGdCQUNLWCxRQUFRLENBQUNtQixNQUFULENBQWdCLFVBQUNDLEdBQUQsRUFBUztBQUN0QixZQUFNQyxZQUFZLEdBQUcsVUFBR0QsR0FBRyxDQUFDRSxTQUFQLGNBQW9CRixHQUFHLENBQUNHLFFBQXhCLEVBQW1DQyxXQUFuQyxFQUFyQjtBQUNBLGVBQU9mLFdBQVcsQ0FBQ2dCLE1BQVosS0FBdUIsQ0FBdkIsR0FBMkIsSUFBM0IsR0FBa0NKLFlBQVksQ0FBQ0ssUUFBYixDQUFzQmpCLFdBQVcsQ0FBQ2UsV0FBWixFQUF0QixDQUF6QztBQUNILE9BSEEsRUFHRUcsR0FIRixDQUdNLFVBQUNDLE9BQUQ7QUFBQSw0QkFDSCxxRUFBQyx3REFBRCxrQ0FBOEJBLE9BQTlCO0FBQXVDLDBCQUFnQixFQUFFO0FBQUEsbUJBQU12Qix1QkFBdUIsQ0FBQ3VCLE9BQUQsQ0FBN0I7QUFBQTtBQUF6RCxZQUFjQSxPQUFPLENBQUNDLEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREc7QUFBQSxPQUhOO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBdUJILENBdENEOztHQUFNOUIsUTs7S0FBQUEsUTtBQXVDUytCLGlJQUFXLENBQUMsdUJBQUQsRUFBMEIsVUFBMUIsQ0FBWCxDQUFpRC9CLFFBQWpELENBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vycy9TcGVha2Vycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXJ9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4vd2l0aERhdGEnXG5pbXBvcnQgU3BlYWtlclNlYXJjaEJhciBmcm9tICcuLi9TcGVha2VyU2VhcmNoQmFyL1NwZWFrZXJTZWFyY2hCYXInXG5pbXBvcnQgU3BlYWtlciBmcm9tICcuLi9TcGVha2VyL1NwZWFrZXInXG5pbXBvcnQgcmVxdWVzdFJlZHVjZXIsIHsgUkVRVUVTVF9TVEFUVVMgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9yZXF1ZXN0JztcbmltcG9ydCB3aXRoUmVxdWVzdCBmcm9tICcuLi9IT0NzL3dpdGhSZXF1ZXN0JztcbmltcG9ydCB7XG4gICAgR0VUX0FMTF9GQUlMVVJFLFxuICAgIEdFVF9BTExfU1VDQ0VTUyxcbiAgICBQVVRfRkFJTFVSRSxcbiAgICBQVVRfU1VDQ0VTUyxcbn0gZnJvbSAnLi4vLi4vYWN0aW9ucy9yZXF1ZXN0JztcblxuY29uc3QgU3BlYWtlcnMgPSAoe3JlY29yZHM6IHNwZWFrZXJzLCBzdGF0dXMsIGVycm9yLCBwdXR9KSA9PiB7XG4gICAgY29uc3Qgb25GYXZvcml0ZVRvZ2dsZUhhbmRsZXIgPSBhc3luYyhzcGVha2VyUmVjKSA9PiB7XG4gICAgICAgIHB1dCh7XG4gICAgICAgICAgICAuLi5zcGVha2VyUmVjLFxuICAgICAgICAgICAgaXNGYXZvcml0ZTogIXNwZWFrZXJSZWMuaXNGYXZvcml0ZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG5cblxuICAgIGNvbnN0IHN1Y2Nlc3MgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1M7XG4gICAgY29uc3QgaXNMb2FkaW5nID0gc3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5MT0FESU5HO1xuICAgIGNvbnN0IGhhc0Vycm9yZWQgPSBzdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkVSUk9SO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxTcGVha2VyU2VhcmNoQmFyIHNlYXJjaFF1ZXJ5PXtzZWFyY2hRdWVyeX0gc2V0U2VhcmNoUXVlcnk9e3NldFNlYXJjaFF1ZXJ5fS8+XG4gICAgICAgICAgICB7aXNMb2FkaW5nICYmIDxkaXY+TG9hZGluZy4uLjwvZGl2Pn1cbiAgICAgICAgICAgIHtoYXNFcnJvcmVkICYmIFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmcgZXJyb3IuLi5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxiPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L2I+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7c3VjY2VzcyAmJiBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ3JpZC1jb2xzLTEgZ2FwLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtzcGVha2Vycy5maWx0ZXIoKHJlYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3RyaW5nID0gYCR7cmVjLmZpcnN0TmFtZX0gJHtyZWMubGFzdE5hbWV9YC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlYXJjaFF1ZXJ5Lmxlbmd0aCA9PT0gMCA/IHRydWUgOiB0YXJnZXRTdHJpbmcuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pLm1hcCgoc3BlYWtlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWFrZXIga2V5PXtzcGVha2VyLmlkfSB7Li4uc3BlYWtlcn0gb25GYXZvcml0ZVRvZ2dsZT17KCkgPT4gb25GYXZvcml0ZVRvZ2dsZUhhbmRsZXIoc3BlYWtlcil9Lz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgd2l0aFJlcXVlc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMCcsICdzcGVha2VycycpKFNwZWFrZXJzKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Speakers/Speakers.js\n");

/***/ })

})