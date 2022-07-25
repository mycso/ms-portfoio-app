module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/aboutUs.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AboutSplash.js":
/*!***********************************!*\
  !*** ./components/AboutSplash.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_SplashImageStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/SplashImageStyles */ "./components/styles/SplashImageStyles.js");

var _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories-2\\stax2\\frontend\\components\\AboutSplash.js";




const StyledAboutSplash = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AboutSplash__StyledAboutSplash",
  componentId: "hh28mm-0"
})([".hi-five{background-image:url('static/pc-image.jpg');background-size:cover;width:100%;height:100%;background-position:top;}"]);

const AboutSplash = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SplashImageStyles__WEBPACK_IMPORTED_MODULE_4__["default"], {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyledAboutSplash, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        id: "carouselExampleIndicators",
        className: "carousel slide",
        "data-ride": "carousel",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ol", {
          className: "carousel-indicators d-none",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            "data-target": "#carouselExampleIndicators",
            "data-slide-to": "0",
            className: "active"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 10
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            "data-target": "#carouselExampleIndicators",
            "data-slide-to": "1"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 10
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            "data-target": "#carouselExampleIndicators",
            "data-slide-to": "2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 10
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 8
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "social-button-main",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-xs-12 col-sm-12 col-md-12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              className: "list-unstyled list-inline social text-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "list-inline-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "https://www.facebook.com/staxofstories/",
                  target: "_blank",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFacebook"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 35,
                    columnNumber: 113
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 47
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 14
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "list-inline-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "#",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTwitter"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                    columnNumber: 59
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 47
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 14
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                className: "list-inline-item",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "https://www.instagram.com/staxofstories/",
                  target: "_blank",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faInstagram"]
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 114
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 47
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 14
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 12
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 10
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 8
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "carousel-inner",
          role: "listbox",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "carousel-item active",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "hi-five"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 11
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "carousel-caption heading d-md-block",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                className: "display-4",
                children: "About Us!"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 14
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                className: "display-5",
                children: "Discover who we really are."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 14
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 12
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 10
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 8
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "carousel-control-prev d-none",
          href: "#carouselExampleIndicators",
          role: "button",
          "data-slide": "prev",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "carousel-control-prev-icon",
            "aria-hidden": "true"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 10
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "sr-only",
            children: "Previous"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 10
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 8
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "carousel-control-next d-none",
          href: "#carouselExampleIndicators",
          role: "button",
          "data-slide": "next",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "carousel-control-next-icon",
            "aria-hidden": "true"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 10
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "sr-only",
            children: "Next"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 10
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 8
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 6
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 3
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 23,
  columnNumber: 2
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (AboutSplash);

/***/ }),

/***/ "./components/styles/SplashImageStyles.js":
/*!************************************************!*\
  !*** ./components/styles/SplashImageStyles.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SplashImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "SplashImageStyles__SplashImage",
  componentId: "kt87yg-0"
})([".carousel-item:after{content:\"\";display:block;position:", " !important;top:0;bottom:0;left:0;right:0;background:rgba(96,96,96,0.61);}.social-button-main{position:", ";z-index:99;top:30px;right:2px;}.social-button-main .svg-inline--fa{font-size:40px;color:#fff;@media (max-width:767px){font-size:30px;}}"], props => props.theme.carouselPosition, props => props.theme.carouselPosition);
/* harmony default export */ __webpack_exports__["default"] = (SplashImage);

/***/ }),

/***/ "./pages/aboutUs.js":
/*!**************************!*\
  !*** ./pages/aboutUs.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AboutPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AboutSplash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AboutSplash */ "./components/AboutSplash.js");

var _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\stax-of-stories-2\\stax2\\frontend\\pages\\aboutUs.js";


const Inner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "aboutUs__Inner",
  componentId: "sc-1xbjb23-0"
})(["max-width:", ";margin:0 auto;padding:2rem;font-size:20px;"], props => props.theme.maxWidth);
function AboutPage() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AboutSplash__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inner, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "So Who Am I?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "A Creative Coder and UI designer or a special unicorn hybrid lol! I am always willing to learn and not afraid to try new things. I enjoy participating in groups creating multimedia elements and designing interfaces and progamming using different design software. I have high knowledge building and designing single page applications and traditional page applications. With the initial skillset of UI/UX designing the look and experience of the software applications and coding with languages such as HTML5, CSS3, Bootstrap 3.0, ReactJS, Angular JS, NodeJs, Vanilla Javascript, Jquery, Wordpress, Figma, PhotoShop, Invision, Zeplin.io and After Effects etc."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "I am a very hard working man when it comes to work or anything that involves or appeals to the basis of responsibility. I have the desire to succeed in everything I do putting in 100%. I am target driven and very direct therefore I like to deliver when I have been set a task. I always aim for the best within me and the people I work with. I thrive on challenges, and I am always looking to exceed my previous success. My main goal is to become an individual who works amongst people in an innovative and creative environment and also has the skillset of a backend developer."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        target: "_blank",
        href: "http://localhost:7777/static/michaelsokan-cv4.pdf",
        children: "See my CV"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BYm91dFNwbGFzaC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlcy9TcGxhc2hJbWFnZVN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hYm91dFVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIlN0eWxlZEFib3V0U3BsYXNoIiwic3R5bGVkIiwiZGl2IiwiQWJvdXRTcGxhc2giLCJmYUZhY2Vib29rIiwiZmFUd2l0dGVyIiwiZmFJbnN0YWdyYW0iLCJTcGxhc2hJbWFnZSIsInByb3BzIiwidGhlbWUiLCJjYXJvdXNlbFBvc2l0aW9uIiwiSW5uZXIiLCJtYXhXaWR0aCIsIkFib3V0UGFnZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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LEtBQU4sQ0FBWUMsZ0JBSmxCLEVBYUFGLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLGdCQWJyQixDQUFqQjtBQTZCZUgsMEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFFQSxNQUFNSSxLQUFLLEdBQUdWLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0VBQ0lNLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlHLFFBRHpCLENBQVg7QUFPZSxTQUFTQyxTQUFULEdBQXFCO0FBQ2xDLHNCQUFPO0FBQUEsNEJBQ0wscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURLLGVBRUwscUVBQUMsS0FBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRixlQW1CRTtBQUFHLGNBQU0sRUFBQyxRQUFWO0FBQW1CLFlBQUksRUFBQyxtREFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQkYsZUFvQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQXlCRCxDOzs7Ozs7Ozs7OztBQ3BDRCwrRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9hYm91dFVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hYm91dFVzLmpzXCIpO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IFxyXG4gICAgZmFGYWNlYm9vayxcclxuICAgIGZhVHdpdHRlcixcclxuICAgIGZhSW5zdGFncmFtXHJcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XHJcbmltcG9ydCBTcGxhc2hJbWFnZSBmcm9tICcuL3N0eWxlcy9TcGxhc2hJbWFnZVN0eWxlcyc7XHJcblxyXG5jb25zdCBTdHlsZWRBYm91dFNwbGFzaCA9IHN0eWxlZC5kaXZgXHJcblxyXG5cdC5oaS1maXZlIHtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3RhdGljL3BjLWltYWdlLmpwZycpO1xyXG5cdFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG5cdH1cclxuXHRcclxuYDtcclxuXHJcbmNvbnN0IEFib3V0U3BsYXNoID0gKCkgPT4gKFxyXG5cdDxTcGxhc2hJbWFnZT5cclxuXHRcdDxTdHlsZWRBYm91dFNwbGFzaD5cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0ICA8ZGl2IGlkPVwiY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIGNsYXNzTmFtZT1cImNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIj5cclxuXHRcdFx0ICAgIDxvbCBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbmRpY2F0b3JzIGQtbm9uZVwiPlxyXG5cdFx0XHQgICAgICA8bGkgZGF0YS10YXJnZXQ9XCIjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9yc1wiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+PC9saT5cclxuXHRcdFx0ICAgICAgPGxpIGRhdGEtdGFyZ2V0PVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiBkYXRhLXNsaWRlLXRvPVwiMVwiPjwvbGk+XHJcblx0XHRcdCAgICAgIDxsaSBkYXRhLXRhcmdldD1cIiNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzXCIgZGF0YS1zbGlkZS10bz1cIjJcIj48L2xpPlxyXG5cdFx0XHQgICAgPC9vbD5cclxuXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLWJ1dHRvbi1tYWluXCI+XHJcblx0XHRcdCAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMTJcIj5cclxuXHRcdFx0ICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZCBsaXN0LWlubGluZSBzb2NpYWwgdGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0ICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWlubGluZS1pdGVtXCI+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zdGF4b2ZzdG9yaWVzL1wiIHRhcmdldD1cIl9ibGFua1wiPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFGYWNlYm9va30gLz48L2E+PC9saT5cclxuXHRcdFx0ICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWlubGluZS1pdGVtXCI+PGEgaHJlZj1cIiNcIj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVHdpdHRlcn0gLz48L2E+PC9saT5cclxuXHRcdFx0ICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWlubGluZS1pdGVtXCI+PGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vc3RheG9mc3Rvcmllcy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhSW5zdGFncmFtfSAvPjwvYT48L2xpPlxyXG5cdFx0XHQgICAgICAgIDwvdWw+XHJcblx0XHRcdCAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgPC9kaXY+IFxyXG5cdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1pbm5lclwiIHJvbGU9XCJsaXN0Ym94XCI+XHJcblx0XHRcdCAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIj5cclxuXHRcdFx0ICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImhpLWZpdmVcIj48L2Rpdj5cclxuXHRcdFx0ICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWNhcHRpb24gaGVhZGluZyBkLW1kLWJsb2NrXCI+IFxyXG5cdFx0XHQgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImRpc3BsYXktNFwiPkFib3V0IFVzITwvaDI+XHJcblx0XHRcdCAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZGlzcGxheS01XCI+RGlzY292ZXIgd2hvIHdlIHJlYWxseSBhcmUuPC9oMz5cclxuXHRcdFx0ICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICA8L2Rpdj5cclxuXHRcdFx0ICAgIDxhIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtcHJldiBkLW5vbmVcIiBocmVmPVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj5cclxuXHRcdFx0ICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcblx0XHRcdCAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj5cclxuXHRcdFx0ICAgIDwvYT5cclxuXHRcdFx0ICAgIDxhIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtbmV4dCBkLW5vbmVcIiBocmVmPVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj5cclxuXHRcdFx0ICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XHJcblx0XHRcdCAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPlxyXG5cdFx0XHQgICAgPC9hPlxyXG5cdFx0XHQgIDwvZGl2PlxyXG5cdFx0ICBcdDwvZGl2PlxyXG5cdFx0ICA8L1N0eWxlZEFib3V0U3BsYXNoPlxyXG5cdCAgPC9TcGxhc2hJbWFnZT5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0U3BsYXNoOyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgU3BsYXNoSW1hZ2UgPSBzdHlsZWQuZGl2YFxyXG5cdC5jYXJvdXNlbC1pdGVtOmFmdGVyIHtcclxuXHQgIGNvbnRlbnQ6XCJcIjtcclxuXHQgIGRpc3BsYXk6YmxvY2s7XHJcblx0ICBwb3NpdGlvbjoke3Byb3BzID0+IHByb3BzLnRoZW1lLmNhcm91c2VsUG9zaXRpb259ICFpbXBvcnRhbnQ7XHJcblx0ICB0b3A6MDtcclxuXHQgIGJvdHRvbTowO1xyXG5cdCAgbGVmdDowO1xyXG5cdCAgcmlnaHQ6MDtcclxuXHQgIGJhY2tncm91bmQ6IHJnYmEoOTYsIDk2LCA5NiwgMC42MSk7XHJcblx0fVxyXG5cclxuXHQuc29jaWFsLWJ1dHRvbi1tYWluIHtcclxuXHQgICAgcG9zaXRpb246ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY2Fyb3VzZWxQb3NpdGlvbn07XHJcblx0ICAgIHotaW5kZXg6IDk5O1xyXG5cdCAgICB0b3A6IDMwcHg7XHJcblx0XHRyaWdodDogMnB4O1xyXG5cdH1cclxuXHJcblx0LnNvY2lhbC1idXR0b24tbWFpbiAuc3ZnLWlubGluZS0tZmEge1xyXG5cdCAgICBmb250LXNpemU6IDQwcHg7XHJcblx0ICAgIGNvbG9yOiAjZmZmO1xyXG5cdFx0QG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgXHRcdFx0Zm9udC1zaXplOiAzMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGxhc2hJbWFnZTsiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEFib3V0U3BsYXNoIGZyb20gJy4uL2NvbXBvbmVudHMvQWJvdXRTcGxhc2gnO1xyXG5cclxuY29uc3QgSW5uZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tYXhXaWR0aH07XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dFBhZ2UoKSB7XHJcbiAgcmV0dXJuIDxkaXY+XHJcbiAgICA8QWJvdXRTcGxhc2ggLz5cclxuICAgIDxJbm5lcj5cclxuICAgICAgPGJyLz5cclxuICAgICAgPGgyPlNvIFdobyBBbSBJPzwvaDI+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIEEgQ3JlYXRpdmUgQ29kZXIgYW5kIFVJIGRlc2lnbmVyIG9yIGEgc3BlY2lhbCB1bmljb3JuIGh5YnJpZCBsb2whIEkgYW0gYWx3YXlzIHdpbGxpbmcgdG8gbGVhcm4gYW5kIG5vdCBhZnJhaWQgdG8gdHJ5IG5ldyB0aGluZ3MuIFxyXG4gICAgICAgIEkgZW5qb3kgcGFydGljaXBhdGluZyBpbiBncm91cHMgY3JlYXRpbmcgbXVsdGltZWRpYSBlbGVtZW50cyBhbmQgZGVzaWduaW5nIGludGVyZmFjZXMgYW5kIHByb2dhbW1pbmcgdXNpbmcgZGlmZmVyZW50IFxyXG4gICAgICAgIGRlc2lnbiBzb2Z0d2FyZS4gSSBoYXZlIGhpZ2gga25vd2xlZGdlIGJ1aWxkaW5nIGFuZCBkZXNpZ25pbmcgc2luZ2xlIHBhZ2UgYXBwbGljYXRpb25zIGFuZCB0cmFkaXRpb25hbCBcclxuICAgICAgICBwYWdlIGFwcGxpY2F0aW9ucy4gV2l0aCB0aGUgaW5pdGlhbCBza2lsbHNldCBvZiBVSS9VWCBkZXNpZ25pbmcgdGhlIGxvb2sgYW5kIGV4cGVyaWVuY2Ugb2YgdGhlIHNvZnR3YXJlIFxyXG4gICAgICAgIGFwcGxpY2F0aW9ucyBhbmQgY29kaW5nIHdpdGggbGFuZ3VhZ2VzIHN1Y2ggYXMgSFRNTDUsIENTUzMsIEJvb3RzdHJhcCAzLjAsIFJlYWN0SlMsIEFuZ3VsYXIgXHJcbiAgICAgICAgSlMsIE5vZGVKcywgVmFuaWxsYSBKYXZhc2NyaXB0LCBKcXVlcnksIFdvcmRwcmVzcywgRmlnbWEsIFBob3RvU2hvcCwgSW52aXNpb24sIFplcGxpbi5pbyBhbmQgQWZ0ZXIgRWZmZWN0cyBldGMuXHJcbiAgICAgIDwvcD5cclxuICAgICAgPHA+XHJcbiAgICAgICAgSSBhbSBhIHZlcnkgaGFyZCB3b3JraW5nIG1hbiB3aGVuIGl0IGNvbWVzIHRvIHdvcmsgb3IgYW55dGhpbmcgdGhhdCBpbnZvbHZlcyBvciBhcHBlYWxzIHRvIHRoZSBiYXNpcyBvZiByZXNwb25zaWJpbGl0eS4gXHJcbiAgICAgICAgSSBoYXZlIHRoZSBkZXNpcmUgdG8gc3VjY2VlZCBpbiBldmVyeXRoaW5nIEkgZG8gcHV0dGluZyBpbiAxMDAlLiBJIGFtIHRhcmdldCBkcml2ZW4gYW5kIHZlcnkgXHJcbiAgICAgICAgZGlyZWN0IHRoZXJlZm9yZSBJIGxpa2UgdG8gZGVsaXZlciB3aGVuIEkgaGF2ZSBiZWVuIHNldCBhIHRhc2suIEkgYWx3YXlzIGFpbSBmb3IgdGhlIGJlc3Qgd2l0aGluIFxyXG4gICAgICAgIG1lIGFuZCB0aGUgcGVvcGxlIEkgd29yayB3aXRoLiBJIHRocml2ZSBvbiBjaGFsbGVuZ2VzLCBhbmQgSSBhbSBhbHdheXMgbG9va2luZyB0byBleGNlZWQgbXkgXHJcbiAgICAgICAgcHJldmlvdXMgc3VjY2Vzcy4gTXkgbWFpbiBnb2FsIGlzIHRvIGJlY29tZSBhbiBpbmRpdmlkdWFsIHdobyB3b3JrcyBhbW9uZ3N0IHBlb3BsZSBpbiBhbiBcclxuICAgICAgICBpbm5vdmF0aXZlIGFuZCBjcmVhdGl2ZSBlbnZpcm9ubWVudCBhbmQgYWxzbyBoYXMgdGhlIHNraWxsc2V0IG9mIGEgYmFja2VuZCBkZXZlbG9wZXIuXHJcbiAgICAgIDwvcD5cclxuICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6Nzc3Ny9zdGF0aWMvbWljaGFlbHNva2FuLWN2NC5wZGZcIj5TZWUgbXkgQ1Y8L2E+XHJcbiAgICAgIDxici8+XHJcbiAgICA8L0lubmVyPlxyXG4gIDwvZGl2PlxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9