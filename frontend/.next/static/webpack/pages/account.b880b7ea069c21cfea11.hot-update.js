webpackHotUpdate_N_E("pages/account",{

/***/ "./components/Account.js":
/*!*******************************!*\
  !*** ./components/Account.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Account; });
/* harmony import */ var C_Users_Michael_Documents_reactJS_stax_of_stories_2_stax2_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_OrderStyles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/OrderStyles */ "./components/styles/OrderStyles.js");
/* harmony import */ var _components_SubHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/SubHeader */ "./components/SubHeader.js");
/* harmony import */ var _DeleteUser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./DeleteUser */ "./components/DeleteUser.js");



var _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories-2\\stax2\\frontend\\components\\Account.js",
    _s = $RefreshSig$();

function _templateObject2() {
  var data = Object(C_Users_Michael_Documents_reactJS_stax_of_stories_2_stax2_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query {\n        authenticatedItem {\n            ... on User {\n                id\n                email\n                name\n                role {\n                    id\n                    name\n                    canManageProducts\n                    canSeeOtherUsers\n                    canManageUsers\n                    canManageRoles\n                    canManageCart\n                    canManageOrders\n                    canManageReviews\n                }\n            }\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(C_Users_Michael_Documents_reactJS_stax_of_stories_2_stax2_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tquery SINGLE_ORDER_QUERY($id: ID!) {\n\t\torder(id: $id) {\n\t\t\tid\n\t\t\tcharge\n\t\t\ttotal\n\t\t\tcreatedAt\n\t\t\tuser {\n\t\t\t\tid\n\t\t\t}\n\t\t\titems {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tdescription\n\t\t\t\tprice\n\t\t\t\timage\n\t\t\t\tquantity\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// import NavLink from './Link'












var SINGLE_ORDER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_7___default()(_templateObject());
var CURRENT_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_7___default()(_templateObject2());
var StyledLinked = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "Account__StyledLinked",
  componentId: "ev7y8w-0"
})(["a{color:", ";}a:hover{color:", ";text-decoration:none;}"], function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.black;
});
_c = StyledLinked;
function Account(_ref) {
  _s();

  var _data$authenticatedIt, _data$authenticatedIt2, _data$authenticatedIt3;

  var id = _ref.id;
  var user = Object(_User__WEBPACK_IMPORTED_MODULE_3__["useUser"])();

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(CURRENT_USER_QUERY, {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data,
      error = _useQuery.error,
      loading = _useQuery.loading;

  console.log(data);
  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 22
  }, this);
  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
    children: ["Error: ", error.message]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 23
  }, this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(StyledLinked, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_OrderStyles__WEBPACK_IMPORTED_MODULE_11__["default"], {
        "data-test": "user",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: "User ID:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: data === null || data === void 0 ? void 0 : (_data$authenticatedIt = data.authenticatedItem) === null || _data$authenticatedIt === void 0 ? void 0 : _data$authenticatedIt.id
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 10
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: "Email:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: data === null || data === void 0 ? void 0 : (_data$authenticatedIt2 = data.authenticatedItem) === null || _data$authenticatedIt2 === void 0 ? void 0 : _data$authenticatedIt2.email
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 10
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: "Account Action:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_DeleteUser__WEBPACK_IMPORTED_MODULE_13__["default"], {
                id: data === null || data === void 0 ? void 0 : (_data$authenticatedIt3 = data.authenticatedItem) === null || _data$authenticatedIt3 === void 0 ? void 0 : _data$authenticatedIt3.id,
                children: "Delete Account"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 12
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 10
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: "Orders:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
              activeClassName: "active",
              href: "/orders",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("u", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                  href: "",
                  children: "Purchased Orders"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 16
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 12
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 10
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 8
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 3
  }, this);
}

_s(Account, "2WkuDOyXI9ysOveml3ryr62YFLM=", false, function () {
  return [_User__WEBPACK_IMPORTED_MODULE_3__["useUser"], _apollo_client__WEBPACK_IMPORTED_MODULE_4__["useQuery"]];
});

_c2 = Account;

var _c, _c2;

$RefreshReg$(_c, "StyledLinked");
$RefreshReg$(_c2, "Account");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvdW50LmpzIl0sIm5hbWVzIjpbIlNJTkdMRV9PUkRFUl9RVUVSWSIsImdxbCIsIkNVUlJFTlRfVVNFUl9RVUVSWSIsIlN0eWxlZExpbmtlZCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJibGFjayIsIkFjY291bnQiLCJpZCIsInVzZXIiLCJ1c2VVc2VyIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJhdXRoZW50aWNhdGVkSXRlbSIsImVtYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLGtEQUFILG1CQUF4QjtBQXVCQSxJQUFNQyxrQkFBa0IsR0FBR0Qsa0RBQUgsb0JBQXhCO0FBdUJBLElBQU1FLFlBQVksR0FBR0MsMERBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxnRUFHSixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEtBQWhCO0FBQUEsQ0FIRCxFQU9KLFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsS0FBaEI7QUFBQSxDQVBELENBQWxCO0tBQU1MLFk7QUFhUyxTQUFTTSxPQUFULE9BQXlCO0FBQUE7O0FBQUE7O0FBQUEsTUFBTkMsRUFBTSxRQUFOQSxFQUFNO0FBQ3ZDLE1BQU1DLElBQUksR0FBR0MscURBQU8sRUFBcEI7O0FBRHVDLGtCQUdOQywrREFBUSxDQUFDWCxrQkFBRCxFQUFxQjtBQUN2RFksYUFBUyxFQUFFO0FBQ1BKLFFBQUUsRUFBRkE7QUFETztBQUQ0QyxHQUFyQixDQUhGO0FBQUEsTUFHL0JLLElBSCtCLGFBRy9CQSxJQUgrQjtBQUFBLE1BR3pCQyxLQUh5QixhQUd6QkEsS0FIeUI7QUFBQSxNQUdsQkMsT0FIa0IsYUFHbEJBLE9BSGtCOztBQVN2Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlKLElBQVo7QUFFQSxNQUFJRSxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNWLE1BQUlELEtBQUosRUFBVyxvQkFBTztBQUFBLDBCQUFXQSxLQUFLLENBQUNJLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBRWQsc0JBQ0MscUVBQUMsWUFBRDtBQUFBLDJCQVFLO0FBQUEsNkJBQ0MscUVBQUMsNERBQUQ7QUFBYSxxQkFBVSxNQUF2QjtBQUFBLGdDQUNDO0FBQUEsa0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFFQztBQUFBLHNCQUFPTCxJQUFQLGFBQU9BLElBQVAsZ0RBQU9BLElBQUksQ0FBRU0saUJBQWIsMERBQU8sc0JBQXlCWDtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQUtDO0FBQUEsa0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFFQztBQUFBLHNCQUFPSyxJQUFQLGFBQU9BLElBQVAsaURBQU9BLElBQUksQ0FBRU0saUJBQWIsMkRBQU8sdUJBQXlCQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRCxlQVVDO0FBQUEsa0NBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFFQztBQUFBLG1DQUNDO0FBQUEscUNBQUcscUVBQUMsb0RBQUQ7QUFBWSxrQkFBRSxFQUFFUCxJQUFGLGFBQUVBLElBQUYsaURBQUVBLElBQUksQ0FBRU0saUJBQVIsMkRBQUUsdUJBQXlCWCxFQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRCxlQWlCQztBQUFBLGtDQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGVBRUM7QUFBQSxtQ0FDQyxxRUFBQyxnREFBRDtBQUFNLDZCQUFlLEVBQUMsUUFBdEI7QUFBK0Isa0JBQUksRUFBQyxTQUFwQztBQUFBLHFDQUNDO0FBQUEsdUNBQUc7QUFBRyxzQkFBSSxFQUFDLEVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBdUVBOztHQXJGdUJELE87VUFDVkcsNkMsRUFFb0JDLHVEOzs7TUFIVkosTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hY2NvdW50LmI4ODBiN2VhMDY5YzIxY2ZlYTExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgTmF2TGluayBmcm9tICcuL0xpbmsnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICcuL1VzZXInO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gJy4uL2xpYi9mb3JtYXRNb25leSc7XHJcbmltcG9ydCBFcnJvciBmcm9tICcuL0Vycm9yTWVzc2FnZSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgT3JkZXJTdHlsZXMgZnJvbSAnLi9zdHlsZXMvT3JkZXJTdHlsZXMnO1xyXG5pbXBvcnQgU3ViSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvU3ViSGVhZGVyJztcclxuaW1wb3J0IERlbGV0ZVVzZXIgZnJvbSAnLi9EZWxldGVVc2VyJzsgXHJcblxyXG5jb25zdCBTSU5HTEVfT1JERVJfUVVFUlkgPSBncWxgXHJcblx0cXVlcnkgU0lOR0xFX09SREVSX1FVRVJZKCRpZDogSUQhKSB7XHJcblx0XHRvcmRlcihpZDogJGlkKSB7XHJcblx0XHRcdGlkXHJcblx0XHRcdGNoYXJnZVxyXG5cdFx0XHR0b3RhbFxyXG5cdFx0XHRjcmVhdGVkQXRcclxuXHRcdFx0dXNlciB7XHJcblx0XHRcdFx0aWRcclxuXHRcdFx0fVxyXG5cdFx0XHRpdGVtcyB7XHJcblx0XHRcdFx0aWRcclxuXHRcdFx0XHR0aXRsZVxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uXHJcblx0XHRcdFx0cHJpY2VcclxuXHRcdFx0XHRpbWFnZVxyXG5cdFx0XHRcdHF1YW50aXR5XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG5cclxuY29uc3QgQ1VSUkVOVF9VU0VSX1FVRVJZID0gZ3FsYFxyXG4gICAgcXVlcnkge1xyXG4gICAgICAgIGF1dGhlbnRpY2F0ZWRJdGVtIHtcclxuICAgICAgICAgICAgLi4uIG9uIFVzZXIge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICByb2xlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBjYW5NYW5hZ2VQcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgICAgIGNhblNlZU90aGVyVXNlcnNcclxuICAgICAgICAgICAgICAgICAgICBjYW5NYW5hZ2VVc2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbk1hbmFnZVJvbGVzXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuTWFuYWdlQ2FydFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbk1hbmFnZU9yZGVyc1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbk1hbmFnZVJldmlld3NcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZExpbmtlZCA9IHN0eWxlZC5kaXZgXHJcblxyXG4gIFx0YSB7XHJcbiAgICBcdGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJsYWNrfTtcclxuICBcdH1cclxuXHJcbiAgXHRhOmhvdmVyIHtcclxuICAgIFx0Y29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYmxhY2t9O1xyXG4gICAgXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgXHR9XHJcblxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjb3VudCh7IGlkIH0pIHtcclxuXHRjb25zdCB1c2VyID0gdXNlVXNlcigpO1xyXG5cclxuXHRjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShDVVJSRU5UX1VTRVJfUVVFUlksIHtcclxuICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG5cdGNvbnNvbGUubG9nKGRhdGEpXHJcblxyXG5cdGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcclxuXHRcdFxyXG5cdHJldHVybiAoXHJcblx0XHQ8U3R5bGVkTGlua2VkPlxyXG5cdFx0XHR7LyogPFF1ZXJ5IHF1ZXJ5PXtDVVJSRU5UX1VTRVJfUVVFUll9IHZhcmlhYmxlcz17eyBpZDogdGhpcy5wcm9wcy5pZCB9fT4gKi99XHJcblx0XHRcdFx0ey8qIHsoeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9KSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZXJyb3IpIHJldHVybiA8RXJyb3IgZXJyb3I9e2Vycm9yfSAvPjtcclxuXHRcdFx0XHRcdGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZzwvcD47XHJcblx0XHRcdFx0XHRjb25zdCB1c2VyID0gZGF0YS5tZTtcclxuXHRcdFx0XHRcdGNvbnN0IG1lID0gZGF0YSA/IGRhdGEubWUgOiBudWxsOyAqL31cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxPcmRlclN0eWxlcyBkYXRhLXRlc3Q9XCJ1c2VyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPlVzZXIgSUQ6PC9zcGFuPiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57ZGF0YT8uYXV0aGVudGljYXRlZEl0ZW0/LmlkfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5FbWFpbDo8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e2RhdGE/LmF1dGhlbnRpY2F0ZWRJdGVtPy5lbWFpbH08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPkFjY291bnQgQWN0aW9uOjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPjxEZWxldGVVc2VyIGlkPXtkYXRhPy5hdXRoZW50aWNhdGVkSXRlbT8uaWR9PkRlbGV0ZSBBY2NvdW50PC9EZWxldGVVc2VyPjwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPk9yZGVyczo8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZScgaHJlZj1cIi9vcmRlcnNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHU+PGEgaHJlZj1cIlwiPlB1cmNoYXNlZCBPcmRlcnM8L2E+PC91PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsvKiB7bWUgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e21lLnBlcm1pc3Npb25zLmluY2x1ZGVzKFwiQURNSU5cIikgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+QWxsIFVzZXIgUGVybWlzc2lvbnM6PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rIGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJyBwcmVmZXRjaD1cInRydWVcIiBocmVmPVwiL3Blcm1pc3Npb25zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHU+PGEgaHJlZj1cIlwiPlBlcm1pc3Npb25zPC9hPjwvdT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5EZWxpdmVyeSBNZXRob2Q6PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PE5hdkxpbmsgYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnIHByZWZldGNoPVwidHJ1ZVwiIGhyZWY9XCIvY3JlYXRlRGVsaXZlcnlNZXRob2RcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+Q3JlYXRlIERlbGl2ZXJ5PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9OYXZMaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KX0gKi99XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9PcmRlclN0eWxlcz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0ey8qIH19ICovfVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR7LyogPC9RdWVyeT4gKi99XHJcblx0XHQ8L1N0eWxlZExpbmtlZD5cclxuXHQpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==