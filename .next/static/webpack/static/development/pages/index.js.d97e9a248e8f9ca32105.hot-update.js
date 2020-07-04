webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/selectAddons.js":
/*!************************************!*\
  !*** ./components/selectAddons.js ***!
  \************************************/
/*! exports provided: SelectAddons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectAddons", function() { return SelectAddons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./firebaseConfig.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\selectAddons.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var SelectAddons = function SelectAddons() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, productConsumer.activePackage.map(function (service, index) {
    return __jsx(CardComp, {
      key: index,
      title: service.title,
      text: service.content,
      addOns: service.addOns,
      image: service.src,
      "package": service,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 11
      }
    });
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.d97e9a248e8f9ca32105.hot-update.js.map