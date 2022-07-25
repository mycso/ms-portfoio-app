webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/*! exports provided: PAGINATION_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGINATION_QUERY", function() { return PAGINATION_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pagination; });
/* harmony import */ var C_Users_Michael_Documents_reactJS_stax_of_stories_2_stax2_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/PaginationStyles */ "./components/styles/PaginationStyles.js");
/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ "./config.js");



var _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories-2\\stax2\\frontend\\components\\Pagination.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_Users_Michael_Documents_reactJS_stax_of_stories_2_stax2_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query PAGINATION_QUERY {\n        _allProductsMeta {\n            count\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var PAGINATION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());
function Pagination(_ref) {
  _s();

  var page = _ref.page;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(PAGINATION_QUERY),
      error = _useQuery.error,
      loading = _useQuery.loading,
      data = _useQuery.data;

  if (loading) return 'Loading...';
  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__["default"], {
    error: error
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 22
  }, this);
  var count = data._allProductsMeta.count;
  var pageCount = Math.ceil(count / _config__WEBPACK_IMPORTED_MODULE_8__["perPage"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
        children: ["MS Portfolio - Page ", page, " of ", pageCount]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this), page !== 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/products/".concat(page - 1),
      children: "Prev"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 28
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      children: ["Page ", page, " of ", pageCount]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      children: [count, " Items Total"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this), page !== pageCount && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/products/".concat(page + 1),
      children: "Next"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 36
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, this);
}

_s(Pagination, "MadqETWYtkFh3dDWW9IjxDLlwQw=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

_c = Pagination;

var _c;

$RefreshReg$(_c, "Pagination");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzIl0sIm5hbWVzIjpbIlBBR0lOQVRJT05fUVVFUlkiLCJncWwiLCJQYWdpbmF0aW9uIiwicGFnZSIsInVzZVF1ZXJ5IiwiZXJyb3IiLCJsb2FkaW5nIiwiZGF0YSIsImNvdW50IiwiX2FsbFByb2R1Y3RzTWV0YSIsInBhZ2VDb3VudCIsIk1hdGgiLCJjZWlsIiwicGVyUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxnQkFBZ0IsR0FBR0Msa0RBQUgsbUJBQXRCO0FBUVEsU0FBU0MsVUFBVCxPQUE4QjtBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxrQkFDUkMsK0RBQVEsQ0FBQ0osZ0JBQUQsQ0FEQTtBQUFBLE1BQ2pDSyxLQURpQyxhQUNqQ0EsS0FEaUM7QUFBQSxNQUMxQkMsT0FEMEIsYUFDMUJBLE9BRDBCO0FBQUEsTUFDakJDLElBRGlCLGFBQ2pCQSxJQURpQjs7QUFFekMsTUFBR0QsT0FBSCxFQUFZLE9BQU8sWUFBUDtBQUNaLE1BQUdELEtBQUgsRUFBVSxvQkFBTyxxRUFBQyxnRUFBRDtBQUFjLFNBQUssRUFBRUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBSCtCLE1BSWpDRyxLQUppQyxHQUl2QkQsSUFBSSxDQUFDRSxnQkFKa0IsQ0FJakNELEtBSmlDO0FBS3pDLE1BQU1FLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVKLEtBQUssR0FBR0ssK0NBQWxCLENBQWxCO0FBRUEsc0JBQ0kscUVBQUMsZ0VBQUQ7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLDZCQUNJO0FBQUEsMkNBQTRCVixJQUE1QixVQUFzQ08sU0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBSUtQLElBQUksS0FBSyxDQUFULGlCQUFjLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxzQkFBZUEsSUFBSSxHQUFHLENBQXRCLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKbkIsZUFLSTtBQUFBLDBCQUFTQSxJQUFULFVBQW1CTyxTQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixlQU1JO0FBQUEsaUJBQUlGLEtBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkosRUFPS0wsSUFBSSxLQUFLTyxTQUFULGlCQUFzQixxRUFBQyxnREFBRDtBQUFNLFVBQUksc0JBQWVQLElBQUksR0FBRyxDQUF0QixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBWUg7O0dBbkJ1QkQsVTtVQUNhRSx1RDs7O0tBRGJGLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzM0MWVjM2Q5NDY1YWM3MWYwOGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IFBhZ2luYXRpb25TdHlsZXMgZnJvbSAnLi9zdHlsZXMvUGFnaW5hdGlvblN0eWxlcyc7XHJcbmltcG9ydCBEaXNwbGF5RXJyb3IgZnJvbSAnLi4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UnXHJcbmltcG9ydCB7IHBlclBhZ2UgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBBR0lOQVRJT05fUVVFUlkgPSBncWwgYFxyXG4gICAgcXVlcnkgUEFHSU5BVElPTl9RVUVSWSB7XHJcbiAgICAgICAgX2FsbFByb2R1Y3RzTWV0YSB7XHJcbiAgICAgICAgICAgIGNvdW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW5hdGlvbih7IHBhZ2UgfSkge1xyXG4gICAgY29uc3QgeyBlcnJvciwgbG9hZGluZywgZGF0YSB9ID0gdXNlUXVlcnkoUEFHSU5BVElPTl9RVUVSWSk7XHJcbiAgICBpZihsb2FkaW5nKSByZXR1cm4gJ0xvYWRpbmcuLi4nO1xyXG4gICAgaWYoZXJyb3IpIHJldHVybiA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvcn0gLz47XHJcbiAgICBjb25zdCB7IGNvdW50IH0gPSBkYXRhLl9hbGxQcm9kdWN0c01ldGE7XHJcbiAgICBjb25zdCBwYWdlQ291bnQgPSBNYXRoLmNlaWwoY291bnQgLyBwZXJQYWdlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQYWdpbmF0aW9uU3R5bGVzPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5NUyBQb3J0Zm9saW8gLSBQYWdlIHtwYWdlfSBvZiB7cGFnZUNvdW50fTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAge3BhZ2UgIT09IDEgJiYgPExpbmsgaHJlZj17YC9wcm9kdWN0cy8ke3BhZ2UgLSAxfWB9PlByZXY8L0xpbms+fVxyXG4gICAgICAgICAgICA8cD5QYWdlIHtwYWdlfSBvZiB7cGFnZUNvdW50fTwvcD5cclxuICAgICAgICAgICAgPHA+e2NvdW50fSBJdGVtcyBUb3RhbDwvcD5cclxuICAgICAgICAgICAge3BhZ2UgIT09IHBhZ2VDb3VudCAmJiA8TGluayBocmVmPXtgL3Byb2R1Y3RzLyR7cGFnZSArIDF9YH0+TmV4dDwvTGluaz59XHJcbiAgICAgICAgPC9QYWdpbmF0aW9uU3R5bGVzPlxyXG4gICAgKTtcclxuICAgIFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==