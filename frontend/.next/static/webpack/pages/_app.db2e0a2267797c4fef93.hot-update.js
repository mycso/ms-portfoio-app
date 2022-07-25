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
                  target: "_blank",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOlsiU3R5bGVkSGVhZGVyIiwic3R5bGVkIiwiaGVhZGVyIiwicHJvcHMiLCJ0aGVtZSIsInB1cnBsZSIsImJsYWNrIiwibWFpbkJsdWUiLCJmb250U2l6ZSIsImxvZ29TdGF4V2lkdGgiLCJ0cmFuc3BhcmVudCIsIk5hdiIsInVzZVN0YXRlIiwicHJldlNjcm9sbFBvcyIsInNldFByZXZTY3JvbGxQb3MiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsIk1haW5OYXZiYXJTdHlsZXMiLCJwb3NpdGlvbiIsImhlaWdodCIsIndpZHRoIiwidGV4dEFsaWduIiwidHJhbnNpdGlvbiIsInpJbmRleCIsIk11bHRpU3ViTmF2YmFyU3R5bGVzIiwiU3ViTmF2YmFyU3R5bGVzIiwiaGFuZGxlU2Nyb2xsIiwiZGVib3VuY2UiLCJjdXJyZW50U2Nyb2xsUG9zIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVzZXIiLCJ1c2VVc2VyIiwidXNlQ2FydCIsIm9wZW5DYXJ0IiwidG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsWUFBWSxHQUFHQyx5REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLCt6QkFHQSxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQWhCO0FBQUEsQ0FITCxFQU9QLFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsS0FBaEI7QUFBQSxDQVBFLEVBV1AsVUFBQUgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxRQUFoQjtBQUFBLENBWEUsRUFlQSxVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlJLFFBQWhCO0FBQUEsQ0FmTCxFQW1CQSxVQUFBTCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlLLGFBQWhCO0FBQUEsQ0FuQkwsRUE2REosVUFBQU4sS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxLQUFoQjtBQUFBLENBN0RELEVBOERJLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWU0sV0FBaEI7QUFBQSxDQTlEVCxFQW1FSSxVQUFBUCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlNLFdBQWhCO0FBQUEsQ0FuRVQsRUF1RUosVUFBQVAsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFoQjtBQUFBLENBdkVELEVBMEVKLFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsS0FBaEI7QUFBQSxDQTFFRCxDQUFsQjtLQUFNTixZO0FBbUZTLFNBQVNXLEdBQVQsR0FBZTtBQUFBOztBQUFBLGtCQUNhQyxzREFBUSxDQUFDLENBQUQsQ0FEckI7QUFBQSxNQUN0QkMsYUFEc0I7QUFBQSxNQUNQQyxnQkFETzs7QUFBQSxtQkFFR0Ysc0RBQVEsQ0FBQyxJQUFELENBRlg7QUFBQSxNQUVwQkcsT0FGb0I7QUFBQSxNQUVYQyxVQUZXOztBQUk3QixNQUFNQyxnQkFBZ0IsR0FBRztBQUN4QkMsWUFBUSxFQUFFLE9BRGM7QUFFeEJDLFVBQU0sRUFBRSxNQUZnQjtBQUd4QkMsU0FBSyxFQUFFLE1BSGlCO0FBSXhCQyxhQUFTLEVBQUUsUUFKYTtBQUt4QkMsY0FBVSxFQUFFLFVBTFk7QUFNeEJDLFVBQU0sRUFBRTtBQU5nQixHQUF6QjtBQVNBLE1BQU1DLG9CQUFvQixHQUFHO0FBQzVCTixZQUFRLEVBQUUsT0FEa0I7QUFFNUJDLFVBQU0sRUFBRSxLQUZvQjtBQUc1QkMsU0FBSyxFQUFFLE1BSHFCO0FBSTVCQyxhQUFTLEVBQUUsUUFKaUI7QUFLNUJDLGNBQVUsRUFBRTtBQUxnQixHQUE3QjtBQVFBLE1BQU1HLGVBQWUsR0FBRztBQUN2QlAsWUFBUSxFQUFFLE9BRGE7QUFFdkJDLFVBQU0sRUFBRSxNQUZlO0FBR3ZCQyxTQUFLLEVBQUUsTUFIZ0I7QUFJdkJDLGFBQVMsRUFBRSxRQUpZO0FBS3ZCQyxjQUFVLEVBQUUsVUFMVztBQU12QkMsVUFBTSxFQUFFO0FBTmUsR0FBeEI7QUFTQSxNQUFNRyxZQUFZLEdBQUdDLHVFQUFRLENBQUMsWUFBTTtBQUNwQyxRQUFNQyxnQkFBZ0IsR0FBR0MsTUFBTSxDQUFDQyxXQUFoQztBQUVBZCxjQUFVLENBQUVILGFBQWEsR0FBR2UsZ0JBQWhCLElBQW9DZixhQUFhLEdBQUdlLGdCQUFoQixHQUFtQyxFQUF4RSxJQUErRUEsZ0JBQWdCLEdBQUcsRUFBbkcsQ0FBVjtBQUVBZCxvQkFBZ0IsQ0FBQ2MsZ0JBQUQsQ0FBaEI7QUFDQyxHQU40QixFQU0xQixHQU4wQixDQUE3QjtBQVFBRyx5REFBUyxDQUFDLFlBQU07QUFDaEJGLFVBQU0sQ0FBQ0csZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NOLFlBQWxDO0FBRUEsV0FBTztBQUFBLGFBQU1HLE1BQU0sQ0FBQ0ksbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNQLFlBQXJDLENBQU47QUFBQSxLQUFQO0FBRUMsR0FMUSxFQUtOLENBQUNiLGFBQUQsRUFBZ0JFLE9BQWhCLEVBQXlCVyxZQUF6QixDQUxNLENBQVQ7QUFPQSxNQUFNUSxJQUFJLEdBQUdDLHFEQUFPLEVBQXBCLENBN0M2QixDQThDN0I7O0FBOUM2QixpQkFnRFJDLDhEQUFPLEVBaERDO0FBQUEsTUFnRHJCQyxRQWhEcUIsWUFnRHJCQSxRQWhEcUI7O0FBa0Q3QixzQkFDQyxxRUFBQyxZQUFEO0FBQWMsaUJBQVUsS0FBeEI7QUFBQSw0QkFFQTtBQUFLLFdBQUssa0NBQU9wQixnQkFBUDtBQUF5QnFCLFdBQUcsRUFBRXZCLE9BQU8sR0FBRyxHQUFILEdBQVM7QUFBOUMsUUFBVjtBQUFtRSxlQUFTLEVBQUMsd0VBQTdFO0FBQUEsNkJBQ0M7QUFBSyxpQkFBUyxFQUFDLHlDQUFmO0FBQUEsZ0NBQ0MscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsR0FBWDtBQUFBLGlDQUNBO0FBQUsscUJBQVMsRUFBQywwQkFBZjtBQUFBLG1DQUNDO0FBQUssdUJBQVMsRUFBQyxXQUFmO0FBQTJCLGlCQUFHLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBT0M7QUFBUSxtQkFBUyxFQUFDLHVDQUFsQjtBQUEwRCxjQUFJLEVBQUMsUUFBL0Q7QUFBd0UseUJBQVksVUFBcEY7QUFBK0YseUJBQVkseUJBQTNHO0FBQXFJLDJCQUFjLHdCQUFuSjtBQUE0SywyQkFBYyxPQUExTDtBQUFrTSx3QkFBVyxtQkFBN007QUFBQSxpQ0FDQztBQUFNLHFCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEQsZUFVQztBQUFLLG1CQUFTLEVBQUMsMEJBQWY7QUFBMEMsWUFBRSxFQUFDLHdCQUE3QztBQUFBLGlDQUNDO0FBQUkscUJBQVMsRUFBQywwQ0FBZDtBQUFBLG9DQUNDO0FBQUksdUJBQVMsRUFBQyxVQUFkO0FBQUEscUNBQ0MscUVBQUMsZ0RBQUQ7QUFBTSwrQkFBZSxFQUFDLFFBQXRCO0FBQStCLG9CQUFJLEVBQUMsR0FBcEM7QUFBQSx1Q0FDQTtBQUFHLDJCQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURELGVBTUM7QUFBSSx1QkFBUyxFQUFDLFVBQWQ7QUFBQSxxQ0FDQyxxRUFBQyxnREFBRDtBQUFNLCtCQUFlLEVBQUMsUUFBdEI7QUFBK0Isb0JBQUksRUFBQyxVQUFwQztBQUFBLHVDQUNBO0FBQUcsMkJBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTkQsRUFZR21CLElBQUksaUJBQ0w7QUFBQSxzQ0FNQztBQUFJLHlCQUFTLEVBQUMsVUFBZDtBQUFBLHVDQUNDLHFFQUFDLGdEQUFEO0FBQU0saUNBQWUsRUFBQyxRQUF0QjtBQUErQixzQkFBSSxFQUFDLFVBQXBDO0FBQUEseUNBQ0E7QUFBRyw2QkFBUyxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFORCxlQVdDO0FBQUkseUJBQVMsRUFBQyxVQUFkO0FBQUEsdUNBQ0MscUVBQUMsZ0RBQUQ7QUFBTSxpQ0FBZSxFQUFDLFFBQXRCO0FBQStCLHdCQUFNLEVBQUMsUUFBdEM7QUFBK0Msc0JBQUksRUFBQyxtREFBcEQ7QUFBQSx5Q0FDQTtBQUFHLDZCQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVhEO0FBQUEsNEJBYkYsZUFnQ0M7QUFBQSxxQ0FDQyxxRUFBQyxnREFBRDtBQUFNLCtCQUFlLEVBQUMsUUFBdEI7QUFBK0Isb0JBQUksRUFBQyxZQUFwQztBQUFBLHVDQUNBO0FBQUcsMkJBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBaENELEVBc0NHQSxJQUFJLGlCQUNMO0FBQUksdUJBQVMsRUFBQyxVQUFkO0FBQUEscUNBQ0MscUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBdkNGLEVBNENFLENBQUNBLElBQUQsaUJBQ0E7QUFBQSxxQ0FDQztBQUFJLHlCQUFTLEVBQUMsVUFBZDtBQUFBLHVDQUNDLHFFQUFDLGdEQUFEO0FBQU0saUNBQWUsRUFBQyxRQUF0QjtBQUErQixzQkFBSSxFQUFDLFNBQXBDO0FBQUEseUNBQ0E7QUFBRyw2QkFBUyxFQUFDLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELDZCQTdDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGQSxlQXVFQTtBQUFLLFdBQUssa0NBQU9WLG9CQUFQO0FBQTZCYyxXQUFHLEVBQUV2QixPQUFPLEdBQUcsR0FBSCxHQUFTO0FBQWxELFFBQVY7QUFBdUUsZUFBUyxFQUFDLCtDQUFqRjtBQUFBLDZCQUNDO0FBQUksaUJBQVMsRUFBQyxjQUFkO0FBQUEsK0JBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkVBLGVBNEVBO0FBQUssV0FBSyxrQ0FBT1UsZUFBUDtBQUF3QmEsV0FBRyxFQUFFdkIsT0FBTyxHQUFHLEdBQUgsR0FBUztBQUE3QyxRQUFWO0FBQUEsNkJBQ0MscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFrRkE7O0dBcEl1QkosRztVQTZDVndCLDZDLEVBR1FDLHNEOzs7TUFoREV6QixHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZGIyZTBhMjI2Nzc5N2M0ZmVmOTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFN1YkhlYWRlciBmcm9tICcuL1N1YkhlYWRlcic7XHJcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnLi8uLi9zcmMvdXRpbGl0aWVzL2hlbHBlcnMnO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnLi9Vc2VyJztcclxuaW1wb3J0IFNpZ25PdXQgZnJvbSAnLi9TaWduT3V0JztcclxuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gJy4uL2xpYi9jYXJ0U3RhdGUnO1xyXG5cclxuXHJcbmNvbnN0IFN0eWxlZEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcblxyXG5cdC5tdWx0aS1ib3JkZXIgbGk6bnRoLWNoaWxkKDEpIHtcclxuICBcdFx0YmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wdXJwbGV9O1xyXG5cdH1cclxuXHJcblx0Lm5hdnktYmx1ZXtcclxuXHRcdGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJsYWNrfTtcclxuXHR9XHJcblxyXG5cdC5ibHVle1xyXG5cdFx0Y29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWFpbkJsdWV9O1xyXG5cdH1cclxuXHJcblx0Lm5hdmJhciAuc3ZnLWlubGluZS0tZmEge1xyXG5cdCAgICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udFNpemV9O1xyXG5cdH1cclxuXHJcblx0LnN0YXgtbG9nbyB7XHJcbiAgICBcdG1heC13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sb2dvU3RheFdpZHRofTtcclxuXHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHR9XHJcblxyXG5cdC5tdWx0aS1ib3JkZXItd3JhcHBlciB7XHJcblx0XHRtYXJnaW4tdG9wOiA5MnB4O1xyXG5cdFx0cGFkZGluZzowO1xyXG5cdH1cclxuXHJcblx0dWwubXVsdGktYm9yZGVyIHtcclxuXHQgIFx0bGlzdC1zdHlsZTpub25lO1xyXG5cdCAgXHR3aWR0aDoxMDAlO1xyXG5cdCAgXHRmb250LXNpemU6MDtcclxuXHQgIFx0cGFkZGluZzowO1xyXG5cdH1cclxuXHJcblx0Lm11bHRpLWJvcmRlciBsaSB7XHJcblx0ICBcdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdCAgXHR3aWR0aDoxMDAlO1xyXG5cdCAgXHRoZWlnaHQ6N3B4O1xyXG5cdH1cclxuXHJcblx0YnV0dG9uOmZvY3VzIHtcclxuICAgIFx0b3V0bGluZTogbm9uZSAhaW1wb3J0YW50XHJcblx0fVxyXG5cclxuXHQuYWN0aXZlOmFmdGVyIHtcclxuXHRcdGNvbnRlbnQ6ICcnO1xyXG5cdH1cclxuXHJcblx0LmxlZnQtbWFyZ2luIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG5cdH1cclxuXHJcblx0LnJpZ2h0LW1hcmdpbiB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDFyZW07XHJcblx0fVxyXG5cclxuICBcdC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgIFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgXHRwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBcdGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgXHRjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ibGFja307XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRyYW5zcGFyZW50fTtcclxuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgXHR9XHJcblxyXG5cdGEuYmctbGlnaHQ6Zm9jdXMsIGEuYmctbGlnaHQ6aG92ZXIsIGJ1dHRvbi5iZy1saWdodDpmb2N1cywgYnV0dG9uLmJnLWxpZ2h0OmhvdmVyIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudHJhbnNwYXJlbnR9O1xyXG5cdH1cclxuXHJcbiAgXHQubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgIFx0Y29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHVycGxlfSAhaW1wb3J0YW50O1xyXG4gIFx0fVxyXG4gIFx0Lm5hdi1saW5rLnVzZXIuYWN0aXZlIHtcclxuICAgIFx0Y29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYmxhY2t9ICFpbXBvcnRhbnQ7XHJcbiAgXHR9XHJcblxyXG4gIFx0YSB7XHJcbiAgXHRcdGN1cnNvcjogcG9pbnRlcjtcclxuICBcdH1cclxuYDtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoKSB7XHJcblx0Y29uc3QgW3ByZXZTY3JvbGxQb3MsIHNldFByZXZTY3JvbGxQb3NdID0gdXNlU3RhdGUoMCk7XHJcbiAgXHRjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTsgIFxyXG5cdCAgXHJcblx0Y29uc3QgTWFpbk5hdmJhclN0eWxlcyA9IHtcclxuXHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxyXG5cdFx0aGVpZ2h0OiAnOTVweCcsXHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdHRyYW5zaXRpb246ICd0b3AgMC42cycsXHJcblx0XHR6SW5kZXg6ICcxMDMwJ1xyXG5cdH1cclxuXHJcblx0Y29uc3QgTXVsdGlTdWJOYXZiYXJTdHlsZXMgPSB7XHJcblx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcclxuXHRcdGhlaWdodDogJzBweCcsXHJcblx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcclxuXHRcdHRyYW5zaXRpb246ICd0b3AgMC42cycsXHJcblx0fVxyXG5cclxuXHRjb25zdCBTdWJOYXZiYXJTdHlsZXMgPSB7XHJcblx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcclxuXHRcdGhlaWdodDogJzk1cHgnLFxyXG5cdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdHRleHRBbGlnbjogJ2NlbnRlcicsXHJcblx0XHR0cmFuc2l0aW9uOiAndG9wIDAuNnMnLFxyXG5cdFx0ekluZGV4OiAnMTAwMCdcclxuXHR9XHJcblx0XHJcblx0Y29uc3QgaGFuZGxlU2Nyb2xsID0gZGVib3VuY2UoKCkgPT4ge1xyXG5cdGNvbnN0IGN1cnJlbnRTY3JvbGxQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdHNldFZpc2libGUoKHByZXZTY3JvbGxQb3MgPiBjdXJyZW50U2Nyb2xsUG9zICYmIHByZXZTY3JvbGxQb3MgLSBjdXJyZW50U2Nyb2xsUG9zID4gNzApIHx8IGN1cnJlbnRTY3JvbGxQb3MgPCAxMCk7XHJcblxyXG5cdHNldFByZXZTY3JvbGxQb3MoY3VycmVudFNjcm9sbFBvcyk7XHJcblx0fSwgMTAwKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuXHJcblx0cmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG5cclxuXHR9LCBbcHJldlNjcm9sbFBvcywgdmlzaWJsZSwgaGFuZGxlU2Nyb2xsXSk7XHJcblxyXG5cdGNvbnN0IHVzZXIgPSB1c2VVc2VyKCk7XHJcblx0Ly8gY29uc29sZS5sb2codXNlcik7XHJcblxyXG5cdGNvbnN0IHsgb3BlbkNhcnQgfSA9IHVzZUNhcnQoKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxTdHlsZWRIZWFkZXIgZGF0YS10ZXN0PVwibmF2XCI+XHJcblx0XHR7Lyoge3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9LRVl9ICovfVxyXG5cdFx0PG5hdiBzdHlsZT17eyAuLi5NYWluTmF2YmFyU3R5bGVzLCB0b3A6IHZpc2libGUgPyAnMCcgOiAnLTk1cHgnIH19IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodCBiZy1saWdodCBmaXhlZC10b3AgcHgtMCBjb2wtbGctMTJcIj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtc20tMTJcIj5cclxuXHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kIGxlZnQtbWFyZ2luXCI+XHJcblx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cInN0YXgtbG9nb1wiIHNyYz1cIi9zdGF0aWMvbG9nby5wbmdcIiAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlciByaWdodC1tYXJnaW4gY29sbGFwc2VkXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcblx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IGJnLWxpZ2h0IG1sLWF1dG8gbXQtNCBtdC1sZy0wXCI+XHJcblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJyBocmVmPVwiL1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+SG9tZTwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJyBocmVmPVwiL2Fib3V0VXNcIj5cclxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkFib3V0IE1lPC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0PC9saT5cclxuXHJcblx0XHRcdFx0XHRcdHsgdXNlciAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdHsvKiA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgYWN0aXZlQ2xhc3NOYW1lPSdhY3RpdmUnIGhyZWY9XCIvc2VsbFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkNyZWF0ZSBhIFByb2R1Y3Q8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+ICovfVxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJyBocmVmPVwiL2FjY291bnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5BY2NvdW50PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGFjdGl2ZUNsYXNzTmFtZT0nYWN0aXZlJyB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cDovL2xvY2FsaG9zdDo3Nzc3L3N0YXRpYy9taWNoYWVsc29rYW4tY3Y0LnBkZlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlJlc3VtZS9DVjwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0XHRcdDxsaT4gICAgICBcclxuXHRcdFx0XHRcdFx0XHQ8TGluayBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZScgaHJlZj1cIi9jb250YWN0VXNcIj5cclxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkNvbnRhY3QgTWU8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8L2xpPlxyXG5cclxuXHRcdFx0XHRcdFx0eyB1c2VyICYmIChcclxuXHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxTaWduT3V0IC8+XHJcblx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0XHRcdHshdXNlciAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBhY3RpdmVDbGFzc05hbWU9J2FjdGl2ZScgaHJlZj1cIi9zaWduaW5cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5TaWduIEluPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L25hdj5cclxuXHRcdDxkaXYgc3R5bGU9e3sgLi4uTXVsdGlTdWJOYXZiYXJTdHlsZXMsIHRvcDogdmlzaWJsZSA/ICcwJyA6ICctOTVweCcgfX0gY2xhc3NOYW1lPVwibXVsdGktYm9yZGVyLXdyYXBwZXIgY29sLWxnLTEyIHB4LTAgZml4ZWQtdG9wXCI+XHJcblx0XHRcdDx1bCBjbGFzc05hbWU9XCJtdWx0aS1ib3JkZXJcIj5cclxuXHRcdFx0PGxpPjwvbGk+XHJcblx0XHRcdDwvdWw+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgc3R5bGU9e3sgLi4uU3ViTmF2YmFyU3R5bGVzLCB0b3A6IHZpc2libGUgPyAnMCcgOiAnLTk1cHgnIH19PlxyXG5cdFx0XHQ8U3ViSGVhZGVyIC8+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDwvU3R5bGVkSGVhZGVyPlxyXG4gIFx0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9