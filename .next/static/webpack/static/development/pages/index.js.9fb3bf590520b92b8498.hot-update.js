webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/modal/index.js":
/*!***********************************!*\
  !*** ./components/modal/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _pages_oniContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/oniContext */ "./pages/oniContext.js");
/* harmony import */ var _data_business_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/business-services */ "./data/business-services/index.js");
/* harmony import */ var _cards_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cards/card */ "./components/cards/card.js");
/* harmony import */ var _carousel_packageCarousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../carousel/packageCarousel */ "./components/carousel/packageCarousel.js");
/* harmony import */ var _modal_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal.scss */ "./components/modal/modal.scss");
/* harmony import */ var _modal_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modal_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_common_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/common/button */ "./components/common/button/index.js");
/* harmony import */ var _common_button_prevButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/button/prevButton */ "./components/common/button/prevButton.js");
/* harmony import */ var _selectAddons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../selectAddons */ "./components/selectAddons.js");
/* harmony import */ var _selectPackage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../selectPackage */ "./components/selectPackage.js");
/* harmony import */ var _scheduleConsultation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../scheduleConsultation */ "./components/scheduleConsultation.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _quoteSteps__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../quoteSteps */ "./components/quoteSteps.js");
/* harmony import */ var _finalQuote__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../finalQuote */ "./components/finalQuote.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\modal\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















var ModalExample = function ModalExample(props) {
  var productConsumer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_oniContext__WEBPACK_IMPORTED_MODULE_2__["ProductContext"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      packageShowing = _useState[0],
      setpackageShowing = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(productConsumer.isModalOpen, 'Modal');
  }, [productConsumer.activePackage]);
  var buttonLabel = props.buttonLabel,
      className = props.className;

  var setRButton = function setRButton() {
    if (!productConsumer.messageSent) {
      return 'Next';
    } else {
      return 'Sent';
    }
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(_components_common_button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    color: "danger",
    onClick: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, buttonLabel), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: productConsumer.isModalOpen,
    toggle: productConsumer.handleModal,
    className: "modal_div",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
    toggle: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, {
    0: 'Choose Your Packages',
    33.33: 'Select Additional Add Ons',
    66.66: 'Your Final Quote',
    99.99: 'Schedule A Consultation'
  }[productConsumer.progress]), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, {
    0: __jsx(_selectPackage__WEBPACK_IMPORTED_MODULE_10__["SelectPackage"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 18
      }
    }),
    33.33: __jsx(_selectAddons__WEBPACK_IMPORTED_MODULE_9__["SelectAddons"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 22
      }
    }),
    66.66: __jsx(_finalQuote__WEBPACK_IMPORTED_MODULE_14__["FinalQuote"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 22
      }
    }),
    99.99: __jsx(_scheduleConsultation__WEBPACK_IMPORTED_MODULE_11__["ScheduleConsultation"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 22
      }
    })
  }[productConsumer.progress], __jsx(_quoteSteps__WEBPACK_IMPORTED_MODULE_13__["QuoteSteps"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalFooter"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "prev-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx(_common_button_prevButton__WEBPACK_IMPORTED_MODULE_8__["PrevButton"], {
    Class: "button2-left btn button2 gradient-color",
    Name: 'Previous',
    Clickble: function Clickble() {
      return productConsumer.decrProgress(33.33);
    },
    BtnIcon: "btn-icon",
    type: "navigation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx(_components_common_button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    Class: "button1 btn button2 gradient-color",
    Name: setRButton(),
    Clickble: function Clickble() {
      return productConsumer.incrProgress(33.33);
    },
    send: productConsumer.messageSent,
    BtnIcon: "btn-icon",
    type: "contact",
    onClick: productConsumer.handleModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalExample);

/***/ })

})
//# sourceMappingURL=index.js.9fb3bf590520b92b8498.hot-update.js.map