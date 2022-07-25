webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var C_Users_Michael_Documents_reactJS_stax_of_stories_2_stax2_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _SubHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubHeader */ "./components/SubHeader.js");
/* harmony import */ var _src_utilities_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../src/utilities/helpers */ "./src/utilities/helpers.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _SignOut__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SignOut */ "./components/SignOut.js");
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");




var _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories-2\\stax2\\frontend\\components\\Nav.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Michael_Documents_reactJS_stax_of_stories_2_stax2_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].header.withConfig({
  displayName: "Nav__StyledHeader",
  componentId: "sc-33q90q-0"
})([".multi-border li:nth-child(1){background:", ";}.navy-blue{color:", ";}.blue{color:", ";}.navbar .svg-inline--fa{font-size:", ";}.stax-logo{max-width:", ";cursor:pointer;}.multi-border-wrapper{margin-top:92px;padding:0;}ul.multi-border{list-style:none;width:100%;font-size:0;padding:0;}.multi-border li{display:inline-block;width:100%;height:7px;}button:focus{outline:none !important}.active:after{content:'';}.left-margin{margin-left:1rem;}.right-margin{margin-right:1rem;}.navbar-light .navbar-nav .nav-link{text-decoration:none;padding:10px !important;display:block;color:", ";background-color:", ";font-weight:700;}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:", ";}.nav-link.active{color:", " !important;}.nav-link.user.active{color:", " !important;}a{cursor:pointer;}"], function (props) {
  return props.theme.purple;
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.mainBlue;
}, function (props) {
  return props.theme.fontSize;
}, function (props) {
  return props.theme.logoStaxWidth;
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.transparent;
}, function (props) {
  return props.theme.transparent;
}, function (props) {
  return props.theme.purple;
}, function (props) {
  return props.theme.black;
});
_c = StyledHeader;
function Nav() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      prevScrollPos = _useState[0],
      setPrevScrollPos = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var MainNavbarStyles = {
    position: 'fixed',
    height: '95px',
    width: '100%',
    textAlign: 'center',
    transition: 'top 0.6s',
    zIndex: '1030'
  };
  var MultiSubNavbarStyles = {
    position: 'fixed',
    height: '0px',
    width: '100%',
    textAlign: 'center',
    transition: 'top 0.6s'
  };
  var SubNavbarStyles = {
    position: 'fixed',
    height: '95px',
    width: '100%',
    textAlign: 'center',
    transition: 'top 0.6s',
    zIndex: '1000'
  };
  var handleScroll = Object(_src_utilities_helpers__WEBPACK_IMPORTED_MODULE_6__["debounce"])(function () {
    var currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70 || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, 100);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible, handleScroll]);
  var user = Object(_User__WEBPACK_IMPORTED_MODULE_7__["useUser"])(); // console.log(user);

  var _useCart = Object(_lib_cartState__WEBPACK_IMPORTED_MODULE_9__["useCart"])(),
      openCart = _useCart.openCart;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(StyledHeader, {
    "data-test": "nav",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("nav", {
      style: _objectSpread(_objectSpread({}, MainNavbarStyles), {}, {
        top: visible ? '0' : '-95px'
      }),
      className: "navbar navbar-expand-lg navbar-light bg-light fixed-top px-0 col-lg-12",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: "container col-lg-12 col-md-12 col-sm-12",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "navbar-brand left-margin",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              className: "stax-logo",
              src: "/static/logo.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 6
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 5
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          className: "navbar-toggler right-margin collapsed",
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarSupportedContent",
          "aria-controls": "navbarSupportedContent",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: "navbar-toggler-icon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 6
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "collapse navbar-collapse",
          id: "navbarSupportedContent",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
            className: "navbar-nav bg-light ml-auto mt-4 mt-lg-0",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
              className: "nav-item",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                activeClassName: "active",
                href: "/",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                  className: "nav-link",
                  children: "Home"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 8
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 8
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 7
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
              className: "nav-item",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                activeClassName: "active",
                href: "/aboutUs",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                  className: "nav-link",
                  children: "About Me"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 8
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 166,
                columnNumber: 8
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 7
            }, this), user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
                className: "nav-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  activeClassName: "active",
                  href: "/account",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                    className: "nav-link",
                    children: "Account"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 180,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
                className: "nav-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  activeClassName: "active",
                  href: "http://localhost:7777/static/michaelsokan-cv4.pdf",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                    className: "nav-link",
                    children: "Resume/CV"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 185,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 9
              }, this)]
            }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                activeClassName: "active",
                href: "/contactUs",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                  className: "nav-link",
                  children: "Contact Me"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 193,
                  columnNumber: 8
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 8
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 7
            }, this), user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
              className: "nav-item",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_SignOut__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 8
            }, this), !user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {
                className: "nav-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
                  activeClassName: "active",
                  href: "/signin",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                    className: "nav-link",
                    children: "Sign In"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 207,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 206,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 9
              }, this)
            }, void 0, false)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 6
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      style: _objectSpread(_objectSpread({}, MultiSubNavbarStyles), {}, {
        top: visible ? '0' : '-95px'
      }),
      className: "multi-border-wrapper col-lg-12 px-0 fixed-top",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("ul", {
        className: "multi-border",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("li", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 4
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      style: _objectSpread(_objectSpread({}, SubNavbarStyles), {}, {
        top: visible ? '0' : '-95px'
      }),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_SubHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 4
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 3
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 145,
    columnNumber: 3
  }, this);
}

_s(Nav, "7YSWI+s4UQ+cyVrleQppv0RKYMA=", false, function () {
  return [_User__WEBPACK_IMPORTED_MODULE_7__["useUser"], _lib_cartState__WEBPACK_IMPORTED_MODULE_9__["useCart"]];
});

_c2 = Nav;

var _c, _c2;

$RefreshReg$(_c, "StyledHeader");
$RefreshReg$(_c2, "Nav");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOlsiU3R5bGVkSGVhZGVyIiwic3R5bGVkIiwiaGVhZGVyIiwicHJvcHMiLCJ0aGVtZSIsInB1cnBsZSIsImJsYWNrIiwibWFpbkJsdWUiLCJmb250U2l6ZSIsImxvZ29TdGF4V2lkdGgiLCJ0cmFuc3BhcmVudCIsIk5hdiIsInVzZVN0YXRlIiwicHJldlNjcm9sbFBvcyIsInNldFByZXZTY3JvbGxQb3MiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsIk1haW5OYXZiYXJTdHlsZXMiLCJwb3NpdGlvbiIsImhlaWdodCIsIndpZHRoIiwidGV4dEFsaWduIiwidHJhbnNpdGlvbiIsInpJbmRleCIsIk11bHRpU3ViTmF2YmFyU3R5bGVzIiwiU3ViTmF2YmFyU3R5bGVzIiwiaGFuZGxlU2Nyb2xsIiwiZGVib3VuY2UiLCJjdXJyZW50U2Nyb2xsUG9zIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVzZXIiLCJ1c2VVc2VyIiwidXNlQ2FydCIsIm9wZW5DYXJ0IiwidG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsWUFBWSxHQUFHQyx5REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLCt6QkFHQSxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQWhCO0FBQUEsQ0FITCxFQU9QLFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsS0FBaEI7QUFBQSxDQVBFLEVBV1AsVUFBQUgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxRQUFoQjtBQUFBLENBWEUsRUFlQSxVQUFB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Q0M7QUFBSSx5QkFBUyxFQUFDLFVBQWQ7QUFBQSx1Q0FDQyxxRUFBQyxnREFBRDtBQUFNLGlDQUFlLEVBQUMsUUFBdEI7QUFBK0Isc0JBQUksRUFBQyxTQUFwQztBQUFBLHlDQUNBO0FBQUcsNkJBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERCw2QkE3Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkEsZUF1RUE7QUFBSyxXQUFLLGtDQUFPVixvQkFBUDtBQUE2QmMsV0FBRyxFQUFFdkIsT0FBTyxHQUFHLEdBQUgsR0FBUztBQUFsRCxRQUFWO0FBQXVFLGVBQVMsRUFBQywrQ0FBakY7QUFBQSw2QkFDQztBQUFJLGlCQUFTLEVBQUMsY0FBZDtBQUFBLCtCQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZFQSxlQTRFQTtBQUFLLFdBQUssa0NBQU9VLGVBQVA7QUFBd0JhLFdBQUcsRUFBRXZCLE9BQU8sR0FBRyxHQUFILEdBQVM7QUFBN0MsUUFBVjtBQUFBLDZCQUNDLHFFQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBa0ZBOztHQXBJdUJKLEc7VUE2Q1Z3Qiw2QyxFQUdRQyxzRDs7O01BaERFekIsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjU3YzY2MzM0ZTRkNmQwOGM5MWM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBTdWJIZWFkZXIgZnJvbSAnLi9TdWJIZWFkZXInO1xyXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJy4vLi4vc3JjL3V0aWxpdGllcy9oZWxwZXJzJztcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJy4vVXNlcic7XHJcbmltcG9ydCBTaWduT3V0IGZyb20gJy4vU2lnbk91dCc7XHJcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tICcuLi9saWIvY2FydFN0YXRlJztcclxuXHJcblxyXG5jb25zdCBTdHlsZWRIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG5cclxuXHQubXVsdGktYm9yZGVyIGxpOm50aC1jaGlsZCgxKSB7XHJcbiAgXHRcdGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHVycGxlfTtcclxuXHR9XHJcblxyXG5cdC5uYXZ5LWJsdWV7XHJcblx0XHRjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ibGFja307XHJcblx0fVxyXG5cclxuXHQuYmx1ZXtcclxuXHRcdGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1haW5CbHVlfTtcclxuXHR9XHJcblxyXG5cdC5uYXZiYXIgLnN2Zy1pbmxpbmUtLWZhIHtcclxuXHQgICAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvbnRTaXplfTtcclxuXHR9XHJcblxyXG5cdC5zdGF4LWxvZ28ge1xyXG4gICAgXHRtYXgtd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubG9nb1N0YXhXaWR0aH07XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0fVxyXG5cclxuXHQubXVsdGktYm9yZGVyLXdyYXBwZXIge1xyXG5cdFx0bWFyZ2luLXRvcDogOTJweDtcclxuXHRcdHBhZGRpbmc6MDtcclxuXHR9XHJcblxyXG5cdHVsLm11bHRpLWJvcmRlciB7XHJcblx0ICBcdGxpc3Qtc3R5bGU6bm9uZTtcclxuXHQgIFx0d2lkdGg6MTAwJTtcclxuXHQgIFx0Zm9udC1zaXplOjA7XHJcblx0ICBcdHBhZGRpbmc6MDtcclxuXHR9XHJcblxyXG5cdC5tdWx0aS1ib3JkZXIgbGkge1xyXG5cdCAgXHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHQgIFx0d2lkdGg6MTAwJTtcclxuXHQgIFx0aGVpZ2h0OjdweDtcclxuXHR9XHJcblxyXG5cdGJ1dHRvbjpmb2N1cyB7XHJcbiAgICBcdG91dGxpbmU6IG5vbmUgIWltcG9ydGFudFxyXG5cdH1cclxuXHJcblx0LmFjdGl2ZTphZnRlciB7XHJcblx0XHRjb250ZW50OiAnJztcclxuXHR9XHJcblxyXG5cdC5sZWZ0LW1hcmdpbiB7XHJcblx0XHRtYXJnaW4tbGVmdDogMXJlbTtcclxuXHR9XHJcblxyXG5cdC5yaWdodC1tYXJnaW4ge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG5cdH1cclxuXHJcbiAgXHQubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgICBcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIFx0cGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgXHRkaXNwbGF5OiBibG9jaztcclxuICAgIFx0Y29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYmxhY2t9O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50cmFuc3BhcmVudH07XHJcblx0XHRmb250LXdlaWdodDogNzAwO1xyXG4gIFx0fVxyXG5cclxuXHRhLmJnLWxpZ2h0OmZvY3VzLCBhLmJnLWxpZ2h0OmhvdmVyLCBidXR0b24uYmctbGlnaHQ6Zm9jdXMsIGJ1dHRvbi5iZy1saWdodDpob3ZlciB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRyYW5zcGFyZW50fTtcclxuXHR9XHJcblxyXG4gIFx0Lm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICBcdGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnB1cnBsZX0gIWltcG9ydGFudDtcclxuICBcdH1cclxuICBcdC5uYXYtbGluay51c2VyLmFjdGl2ZSB7XHJcbiAgICBcdGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJsYWNrfSAhaW1wb3J0YW50O1xyXG4gIFx0fVxyXG5cclxuICBcdGEge1xyXG4gIFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcbiAgXHR9XHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCkge1xyXG5cdGNvbnN0IFtwcmV2U2Nyb2xsUG9zLCBzZXRQcmV2U2Nyb2xsUG9zXSA9IHVzZVN0YXRlKDApO1xyXG4gIFx0Y29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7ICBcclxuXHQgIFxyXG5cdGNvbnN0IE1haW5OYXZiYXJTdHlsZXMgPSB7XHJcblx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcclxuXHRcdGhlaWdodDogJzk1cHgnLFxyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXHJcblx0XHR0cmFuc2l0aW9uOiAndG9wIDAuNnMnLFxyXG5cdFx0ekluZGV4OiAnMTAzMCdcclxuXHR9XHJcblxyXG5cdGNvbnN0IE11bHRpU3ViTmF2YmFyU3R5bGVzID0ge1xyXG5cdFx0cG9zaXRpb246ICdmaXhlZCcsXHJcblx0XHRoZWlnaHQ6ICcwcHgnLFxyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXHJcblx0XHR0cmFuc2l0aW9uOiAndG9wIDAuNnMnLFxyXG5cdH1cclxuXHJcblx0Y29uc3QgU3ViTmF2YmFyU3R5bGVzID0ge1xyXG5cdFx0cG9zaXRpb246ICdmaXhlZCcsXHJcblx0XHRoZWlnaHQ6ICc5NXB4JyxcclxuXHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHR0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG5cdFx0dHJhbnNpdGlvbjogJ3RvcCAwLjZzJyxcclxuXHRcdHpJbmRleDogJzEwMDAnXHJcblx0fVxyXG5cdFxyXG5cdGNvbnN0IGhhbmRsZVNjcm9sbCA9IGRlYm91bmNlKCgpID0+IHtcclxuXHRjb25zdCBjdXJyZW50U2Nyb2xsUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRzZXRWaXNpYmxlKChwcmV2U2Nyb2xsUG9zID4gY3VycmVudFNjcm9sbFBvcyAmJiBwcmV2U2Nyb2xsUG9zIC0gY3VycmVudFNjcm9sbFBvcyA+IDcwKSB8fCBjdXJyZW50U2Nyb2xsUG9zIDwgMTApO1xyXG5cclxuXHRzZXRQcmV2U2Nyb2xsUG9zKGN1cnJlbnRTY3JvbGxQb3MpO1xyXG5cdH0sIDEwMCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcblxyXG5cdHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuXHJcblx0fSwgW3ByZXZTY3JvbGxQb3MsIHZpc2libGUsIGhhbmRsZVNjcm9sbF0pO1xyXG5cclxuXHRjb25zdCB1c2VyID0gdXNlVXNlcigpO1xyXG5cdC8vIGNvbnNvbGUubG9nKHVzZXIpO1xyXG5cclxuXHRjb25zdCB7IG9wZW5DYXJ0IH0gPSB1c2VDYXJ0KCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8U3R5bGVkSGVhZGVyIGRhdGEtdGVzdD1cIm5hdlwiPlxyXG5cdFx0ey8qIHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfS0VZfSAqL31cclxuXHRcdDxuYXYgc3R5bGU9e3sgLi4uTWFpbk5hdmJhclN0eWxlcywgdG9wOiB2aXNpYmxlID8gJzAnIDogJy05NXB4JyB9fSBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItbGlnaHQgYmctbGlnaHQgZml4ZWQtdG9wIHB4LTAgY29sLWxnLTEyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbC1sZy0xMiBjb2wtbWQtMTIgY29sLXNtLTEyXCI+XHJcblx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZCBsZWZ0LW1hcmdpblwiPlxyXG5cdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJzdGF4LWxvZ29cIiBzcmM9XCIvc3RhdGljL2xvZ28ucG5nXCIgLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblxyXG5cdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXIgcmlnaHQtbWFyZ2luIGNvbGxhcHNlZFwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XHJcblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBiZy1saWdodCBtbC1hdXRvIG10LTQgbXQtbGctMFwiPlxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZScgaHJlZj1cIi9cIj5cclxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkhvbWU8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZScgaHJlZj1cIi9hYm91dFVzXCI+XHJcblx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5BYm91dCBNZTwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdDwvbGk+XHJcblxyXG5cdFx0XHRcdFx0XHR7IHVzZXIgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0XHR7LyogPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJyBocmVmPVwiL3NlbGxcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5DcmVhdGUgYSBQcm9kdWN0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPiAqL31cclxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZScgaHJlZj1cIi9hY2NvdW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+QWNjb3VudDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZScgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6Nzc3Ny9zdGF0aWMvbWljaGFlbHNva2FuLWN2NC5wZGZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5SZXN1bWUvQ1Y8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0XHQ8bGk+ICAgICAgXHJcblx0XHRcdFx0XHRcdFx0PExpbmsgYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnIGhyZWY9XCIvY29udGFjdFVzXCI+XHJcblx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5Db250YWN0IE1lPC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PC9saT5cclxuXHJcblx0XHRcdFx0XHRcdHsgdXNlciAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8U2lnbk91dCAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0XHR7IXVzZXIgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnIGhyZWY9XCIvc2lnbmluXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+U2lnbiBJbjwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9uYXY+XHJcblx0XHQ8ZGl2IHN0eWxlPXt7IC4uLk11bHRpU3ViTmF2YmFyU3R5bGVzLCB0b3A6IHZpc2libGUgPyAnMCcgOiAnLTk1cHgnIH19IGNsYXNzTmFtZT1cIm11bHRpLWJvcmRlci13cmFwcGVyIGNvbC1sZy0xMiBweC0wIGZpeGVkLXRvcFwiPlxyXG5cdFx0XHQ8dWwgY2xhc3NOYW1lPVwibXVsdGktYm9yZGVyXCI+XHJcblx0XHRcdDxsaT48L2xpPlxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IHN0eWxlPXt7IC4uLlN1Yk5hdmJhclN0eWxlcywgdG9wOiB2aXNpYmxlID8gJzAnIDogJy05NXB4JyB9fT5cclxuXHRcdFx0PFN1YkhlYWRlciAvPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8L1N0eWxlZEhlYWRlcj5cclxuICBcdCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==