webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/quoteSteps.js":
/*!**********************************!*\
  !*** ./components/quoteSteps.js ***!
  \**********************************/
/*! exports provided: QuoteSteps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteSteps", function() { return QuoteSteps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_sweet_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-sweet-progress */ "./node_modules/react-sweet-progress/lib/index.js");
/* harmony import */ var react_sweet_progress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_sweet_progress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_sweet_progress_lib_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sweet-progress/lib/style.css */ "./node_modules/react-sweet-progress/lib/style.css");
/* harmony import */ var react_sweet_progress_lib_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_sweet_progress_lib_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/oniContext */ "./pages/oniContext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\quoteSteps.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 //pCR = Product Consumer

var QuoteSteps = function QuoteSteps() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('active'),
      status = _useState[0],
      setstatus = _useState[1];

  var pCR = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_oniContext__WEBPACK_IMPORTED_MODULE_3__["ProductContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (pCR.progress >= 99.99) {
      setstatus('success');
    } else {
      setstatus('active');
    }
  }, [pCR.progress]);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(react_sweet_progress__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
    percent: pCR.progress,
    status: status,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.7ef449d77e2c04e061dc.hot-update.js.map