webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/scheduleConsultation.js":
/*!********************************************!*\
  !*** ./components/scheduleConsultation.js ***!
  \********************************************/
/*! exports provided: ScheduleConsultation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleConsultation", function() { return ScheduleConsultation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_calendly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-calendly */ "./node_modules/react-calendly/dist/index.es.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\13054\\Documents\\GitHub\\OniDev\\components\\scheduleConsultation.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var ScheduleConsultation = function ScheduleConsultation(_ref) {
  var url = _ref.url,
      prefill = _ref.prefill,
      pageSettings = _ref.pageSettings,
      utm = _ref.utm;

  var onClick = function onClick() {
    return Object(react_calendly__WEBPACK_IMPORTED_MODULE_1__["openPopupWidget"])({
      url: url,
      prefill: prefill,
      pageSettings: pageSettings,
      utm: utm
    });
  };

  return __jsx("button", {
    onClick: onClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, "Custom Button");
};

/***/ }),

/***/ "./node_modules/react-calendly/dist/index.es.js":
/*!******************************************************!*\
  !*** ./node_modules/react-calendly/dist/index.es.js ***!
  \******************************************************/
/*! exports provided: InlineWidget, PopupText, PopupWidget, CalendlyEventListener, openPopupWidget, closePopupWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlineWidget", function() { return InlineWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupText", function() { return PopupText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupWidget", function() { return PopupWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendlyEventListener", function() { return CalendlyEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openPopupWidget", function() { return openPopupWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closePopupWidget", function() { return closePopupWidget; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

// @ts-nocheck
/* eslint-disable  @typescript-eslint/no-unused-expressions */
/* eslint-disable  no-restricted-globals */
var initializeCalendly = (function () { return (
/*
code is extracted from Calendly's embed script: https://assets.calendly.com/assets/external/widget.js
*/
function () {
    (window.Calendly = {}), (window.Calendly._util = {});
}.call(window),
    (window.Calendly._util.domReady = function (t) {
        var e = !1, n = function () {
            document.addEventListener
                ? (document.removeEventListener("DOMContentLoaded", o),
                    window.removeEventListener("load", o))
                : (document.detachEvent("onreadystatechange", o),
                    window.detachEvent("onload", o));
        }, o = function () {
            e ||
                (!document.addEventListener &&
                    "load" !== event.type &&
                    "complete" !== document.readyState) ||
                ((e = !0), n(), t());
        };
        if ("complete" === document.readyState)
            t();
        else if (document.addEventListener)
            document.addEventListener("DOMContentLoaded", o),
                window.addEventListener("load", o);
        else {
            document.attachEvent("onreadystatechange", o),
                window.attachEvent("onload", o);
            var i = !1;
            try {
                i = null == window.frameElement && document.documentElement;
            }
            catch (r) { }
            i &&
                i.doScroll &&
                !(function l() {
                    if (!e) {
                        try {
                            i.doScroll("left");
                        }
                        catch (o) {
                            return setTimeout(l, 50);
                        }
                        (e = !0), n(), t();
                    }
                })();
        }
    }),
    (window.Calendly._util.assign = function (t) {
        if (null == t)
            throw new TypeError("Cannot convert undefined or null to object");
        for (var e = Object(t), n = 1; n < arguments.length; n++) {
            var o = arguments[n];
            if (null != o)
                for (var i in o)
                    Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
        }
        return e;
    }),
    function () {
        (window.Calendly._url = {}),
            (window.Calendly._url.extractQueryStringParams = function (t) {
                var e, n, o, i, r, l, a, d, u, s;
                for (a = document.createElement("a"),
                    a.href = t,
                    r = a.search.substr(1),
                    l = {},
                    d = r.split("&"),
                    e = 0,
                    o = d.length; o > e; e++)
                    (i = d[e]),
                        (u = i.split("=")),
                        (n = u[0]),
                        (s = u[1]),
                        void 0 !== s && (l[n.toLowerCase()] = decodeURIComponent(s));
                return l;
            }),
            (window.Calendly._url.stripQuery = function (t) {
                return t.split("?")[0];
            });
    }.call(window),
    function () {
        (window.Calendly._util.snakeCaseKeys = function (t) {
            var e, n, o;
            o = {};
            for (n in t)
                (e = n
                    .split(/(?=[A-Z])/)
                    .join("_")
                    .toLowerCase()),
                    (o[e] = t[n]);
            return o;
        }),
            (window.Calendly._util.pick = function (t, e) {
                var n, o, i, r;
                if (t) {
                    for (r = {}, n = 0, i = e.length; i > n; n++)
                        (o = e[n]), t[o] && (r[o] = t[o]);
                    return r;
                }
            });
    }.call(window),
    (function (t, e) {
        var n = { exports: {} };
        "function" == typeof define && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")
            ? define(["exports"], e)
            : "undefined" != typeof exports && (n.exports = exports),
            e(n.exports),
            (t.bodyScrollLock = n.exports);
    })(window, function (t) {
        function e(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++)
                    n[e] = t[e];
                return n;
            }
            return Array.from(t);
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = !1;
        if ("undefined" != typeof window) {
            var o = {
                get passive() {
                    n = !0;
                },
            };
            window.addEventListener("testPassive", null, o),
                window.removeEventListener("testPassive", null, o);
        }
        var i = "undefined" != typeof window &&
            window.navigator &&
            window.navigator.platform &&
            /iP(ad|hone|od)/.test(window.navigator.platform), r = [], l = !1, a = -1, d = void 0, u = void 0, s = function (t) {
            return r.some(function (e) {
                return !(!e.options.allowTouchMove || !e.options.allowTouchMove(t));
            });
        }, c = function (t) {
            var e = t || window.event;
            return s(e.target)
                ? !0
                : e.touches.length > 1
                    ? !0
                    : (e.preventDefault && e.preventDefault(), !1);
        }, p = function (t) {
            setTimeout(function () {
                if (void 0 === u) {
                    var e = !!t && t.reserveScrollBarGap === !0, n = window.innerWidth - document.documentElement.clientWidth;
                    e &&
                        n > 0 &&
                        ((u = document.body.style.paddingRight),
                            (document.body.style.paddingRight = n + "px"));
                }
                void 0 === d &&
                    ((d = document.body.style.overflow),
                        (document.body.style.overflow = "hidden"));
            });
        }, h = function () {
            setTimeout(function () {
                void 0 !== u &&
                    ((document.body.style.paddingRight = u), (u = void 0)),
                    void 0 !== d && ((document.body.style.overflow = d), (d = void 0));
            });
        }, y = function (t) {
            return t ? t.scrollHeight - t.scrollTop <= t.clientHeight : !1;
        }, m = function (t, e) {
            var n = t.targetTouches[0].clientY - a;
            return s(t.target)
                ? !1
                : e && 0 === e.scrollTop && n > 0
                    ? c(t)
                    : y(e) && 0 > n
                        ? c(t)
                        : (t.stopPropagation(), !0);
        };
        (t.disableBodyScroll = function (t, o) {
            if (i) {
                if (!t)
                    return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
                if (t &&
                    !r.some(function (e) {
                        return e.targetElement === t;
                    })) {
                    var d = { targetElement: t, options: o || {} };
                    (r = [].concat(e(r), [d])),
                        (t.ontouchstart = function (t) {
                            1 === t.targetTouches.length && (a = t.targetTouches[0].clientY);
                        }),
                        (t.ontouchmove = function (e) {
                            1 === e.targetTouches.length && m(e, t);
                        }),
                        l ||
                            (document.addEventListener("touchmove", c, n ? { passive: !1 } : void 0),
                                (l = !0));
                }
            }
            else {
                p(o);
                var u = { targetElement: t, options: o || {} };
                r = [].concat(e(r), [u]);
            }
        }),
            (t.clearAllBodyScrollLocks = function () {
                i
                    ? (r.forEach(function (t) {
                        (t.targetElement.ontouchstart = null),
                            (t.targetElement.ontouchmove = null);
                    }),
                        l &&
                            (document.removeEventListener("touchmove", c, n ? { passive: !1 } : void 0),
                                (l = !1)),
                        (r = []),
                        (a = -1))
                    : (h(), (r = []));
            }),
            (t.enableBodyScroll = function (t) {
                if (i) {
                    if (!t)
                        return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
                    (t.ontouchstart = null),
                        (t.ontouchmove = null),
                        (r = r.filter(function (e) {
                            return e.targetElement !== t;
                        })),
                        l &&
                            0 === r.length &&
                            (document.removeEventListener("touchmove", c, n ? { passive: !1 } : void 0),
                                (l = !1));
                }
                else
                    (r = r.filter(function (e) {
                        return e.targetElement !== t;
                    })),
                        r.length || h();
            });
    }),
    function () {
        var t, e, n, o, i;
        (window.Calendly._autoLoadInlineWidgets = function () {
            return window.Calendly._util.domReady(function () {
                return e();
            });
        }),
            (window.Calendly.initBadgeWidget = function (e) {
                return window.Calendly._util.domReady(function () {
                    return t(e);
                });
            }),
            (window.Calendly.destroyBadgeWidget = function () {
                return window.Calendly.badgeWidget
                    ? (window.Calendly.badgeWidget.destroy(),
                        delete window.Calendly.badgeWidget)
                    : void 0;
            }),
            (window.Calendly.initPopupWidget = function (t) {
                return window.Calendly._util.domReady(function () {
                    return window.Calendly.showPopupWidget(t.url, "PopupText", t);
                });
            }),
            (window.Calendly.initInlineWidget = function (t) {
                return t.url
                    ? (t.parentElement || (t.parentElement = o()),
                        window.Calendly._util.domReady(function () {
                            return (t.embedType = "Inline"), new window.Calendly.Iframe(t);
                        }))
                    : void 0;
            }),
            (window.Calendly.showPopupWidget = function (t, e, n) {
                var o;
                return (null == e && (e = "PopupText"),
                    null == n && (n = {}),
                    window.Calendly.closePopupWidget(),
                    (o = function () {
                        return delete window.Calendly.popupWidget;
                    }),
                    (window.Calendly.popupWidget = new window.Calendly.PopupWidget(t, o, e, n)),
                    window.Calendly.popupWidget.show());
            }),
            (window.Calendly.closePopupWidget = function () {
                return window.Calendly.popupWidget
                    ? window.Calendly.popupWidget.close()
                    : void 0;
            }),
            (o = function () {
                var t;
                return ((t = document.scripts[document.scripts.length - 1]), t.parentNode);
            }),
            (e = function () {
                var t, e, n, o, r;
                for (e = document.querySelectorAll(".calendly-inline-widget"),
                    r = [],
                    n = 0,
                    o = e.length; o > n; n++)
                    (t = e[n]),
                        i(t)
                            ? r.push(void 0)
                            : (t.setAttribute("data-processed", !0),
                                r.push(new window.Calendly.Iframe({
                                    parentElement: t,
                                    inlineStyles: !0,
                                    embedType: "Inline",
                                })));
                return r;
            }),
            (i = function (t) {
                return (t.getAttribute("data-processed") ||
                    "false" === t.getAttribute("data-auto-load"));
            }),
            (t = function (t) {
                var e, o, i;
                return (window.Calendly.destroyBadgeWidget(),
                    (e = n(t)),
                    (i = function () {
                        return window.Calendly.showPopupWidget(t.url, "PopupWidget", t);
                    }),
                    (o = window.Calendly._util.assign({ onClick: i }, e)),
                    (window.Calendly.badgeWidget = new window.Calendly.BadgeWidget(o)));
            }),
            (n = function (t) {
                var e, n;
                return ((e = ["color", "textColor", "text", "branding"]),
                    (n = {}),
                    e.forEach(function (e) {
                        return (n[e] = t[e]), delete t[e];
                    }),
                    n);
            });
    }.call(window),
    function () {
        window.Calendly.Iframe = (function () {
            function t(t) {
                (this.options = t), this.parseOptions(), this.build(), this.inject();
            }
            return ((t.prototype.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)),
                (t.prototype.parseOptions = function () {
                    var t;
                    if (((t = { inlineStyles: !1 }),
                        (this.options = window.Calendly._util.assign({}, t, this.options)),
                        (this.parent = this.options.parentElement),
                        !this.parent))
                        throw "Calendly: Parent element not set";
                    if ((this.parent.jquery && (this.parent = this.parent[0]),
                        (this.inlineStyles = this.options.inlineStyles),
                        (this.embedType = this.options.embedType),
                        (this.url = (this.options.url || this.getUrlFromParent()).split("#")[0]),
                        !this.url))
                        throw "Calendly: Widget URL not set";
                }),
                (t.prototype.build = function () {
                    return ((this.node = document.createElement("iframe")),
                        (this.node.src = this.getSource()),
                        (this.node.width = "100%"),
                        (this.node.height = "100%"),
                        (this.node.frameBorder = "0"));
                }),
                (t.prototype.inject = function () {
                    return (this.format(),
                        this.parent.appendChild(this.buildSpinner()),
                        this.parent.appendChild(this.node));
                }),
                (t.prototype.getSource = function () {
                    var t;
                    return ((t =
                        window.Calendly._url.stripQuery(this.url) +
                            "?" +
                            this.getParams()),
                        this.filterConsentParam(t));
                }),
                (t.prototype.getUrlFromParent = function () {
                    return this.parent.getAttribute("data-url");
                }),
                (t.prototype.getParams = function () {
                    var t, e, n, o;
                    (e = { embed_domain: this.getDomain(), embed_type: this.embedType }),
                        (e = window.Calendly._util.assign(e, this.getUtmParamsFromHost(), this.getParamsFromUrl(), this.getParamsFromOptions())),
                        (n = []);
                    for (t in e)
                        (o = e[t]), n.push(t + "=" + encodeURIComponent(o));
                    return n.join("&");
                }),
                (t.prototype.getUtmParamsFromHost = function () {
                    var t, e;
                    return ((t = [
                        "utm_campaign",
                        "utm_source",
                        "utm_medium",
                        "utm_content",
                        "utm_term",
                    ]),
                        (e = window.Calendly._url.extractQueryStringParams(window.location.href)),
                        window.Calendly._util.pick(e, t));
                }),
                (t.prototype.getParamsFromUrl = function () {
                    return window.Calendly._url.extractQueryStringParams(this.url);
                }),
                (t.prototype.getParamsFromOptions = function () {
                    return window.Calendly._util.assign({}, this.getPrefillParams(), this.getUtmParams());
                }),
                (t.prototype.getUtmParams = function () {
                    var t;
                    return this.options.utm
                        ? ((t = [
                            "utmCampaign",
                            "utmSource",
                            "utmMedium",
                            "utmContent",
                            "utmTerm",
                        ]),
                            window.Calendly._util.snakeCaseKeys(window.Calendly._util.pick(this.options.utm, t)))
                        : null;
                }),
                (t.prototype.getPrefillParams = function () {
                    var t, e, n, o, i;
                    if (!this.options.prefill)
                        return null;
                    if (((e = ["name", "firstName", "lastName", "email"]),
                        (n = window.Calendly._util.snakeCaseKeys(window.Calendly._util.pick(this.options.prefill, e))),
                        this.options.prefill.customAnswers)) {
                        o = this.options.prefill.customAnswers;
                        for (t in o)
                            (i = o[t]), t.match(/^a\d{1,2}$/) && (n[t] = i);
                    }
                    return n;
                }),
                (t.prototype.getDomain = function () {
                    return document.location.host;
                }),
                (t.prototype.filterConsentParam = function (t) {
                    return t.replace(/consent_accept=1&?/g, "");
                }),
                (t.prototype.format = function () {
                    return this.isMobile ? this.formatMobile() : this.formatDesktop();
                }),
                (t.prototype.formatDesktop = function () {
                    return this.inlineStyles
                        ? this.parent.setAttribute("style", "position: relative;" + this.parent.getAttribute("style"))
                        : void 0;
                }),
                (t.prototype.formatMobile = function () {
                    return this.inlineStyles
                        ? this.parent.setAttribute("style", "position: relative;overflow-y:auto;-webkit-overflow-scrolling:touch;" +
                            this.parent.getAttribute("style"))
                        : (this.parent.className += " calendly-mobile");
                }),
                (t.prototype.buildSpinner = function () {
                    var t;
                    return ((t = document.createElement("div")),
                        (t.className = "calendly-spinner"),
                        t.appendChild(this.buildBounce(1)),
                        t.appendChild(this.buildBounce(2)),
                        t.appendChild(this.buildBounce(3)),
                        t);
                }),
                (t.prototype.buildBounce = function (t) {
                    var e;
                    return ((e = document.createElement("div")),
                        (e.className = "calendly-bounce" + t),
                        e);
                }),
                t);
        })();
    }.call(window),
    function () {
        var t = function (t, e) {
            return function () {
                return t.apply(e, arguments);
            };
        };
        window.Calendly.PopupWidget = (function () {
            function e(e, n, o, i) {
                (this.url = e),
                    (this.onClose = n),
                    (this.embedType = o),
                    (this.options = null != i ? i : {}),
                    (this.close = t(this.close, this));
            }
            return ((e.prototype.show = function () {
                return (this.buildOverlay(), this.insertOverlay(), this.lockPageScroll());
            }),
                (e.prototype.close = function () {
                    return this.unlockPageScroll(), this.destroyOverlay(), this.onClose();
                }),
                (e.prototype.buildOverlay = function () {
                    return ((this.overlay = document.createElement("div")),
                        (this.overlay.className = "calendly-overlay"),
                        this.overlay.appendChild(this.buildCloseOverlay()),
                        this.overlay.appendChild(this.buildPopup()),
                        this.overlay.appendChild(this.buildCloseButton()));
                }),
                (e.prototype.insertOverlay = function () {
                    return document.body.appendChild(this.overlay);
                }),
                (e.prototype.buildCloseOverlay = function () {
                    var t;
                    return ((t = document.createElement("div")),
                        (t.className = "calendly-close-overlay"),
                        (t.onclick = this.close),
                        t);
                }),
                (e.prototype.buildPopup = function () {
                    var t;
                    return ((t = document.createElement("div")),
                        (t.className = "calendly-popup"),
                        t.appendChild(this.buildPopupContent()),
                        t);
                }),
                (e.prototype.buildPopupContent = function () {
                    var t;
                    return ((t = document.createElement("div")),
                        (t.className = "calendly-popup-content"),
                        t.setAttribute("data-url", this.url),
                        (this.options.parentElement = t),
                        (this.options.embedType = this.embedType),
                        new window.Calendly.Iframe(this.options),
                        t);
                }),
                (e.prototype.buildCloseButton = function () {
                    var t;
                    return ((t = document.createElement("div")),
                        (t.className = "calendly-popup-close"),
                        (t.onclick = this.close),
                        t);
                }),
                (e.prototype.destroyOverlay = function () {
                    return this.overlay.parentNode.removeChild(this.overlay);
                }),
                (e.prototype.lockPageScroll = function () {
                    return (bodyScrollLock.disableBodyScroll(this.overlay),
                        document.addEventListener("touchmove", this.handleLockedTouchmove, {
                            passive: !1,
                        }));
                }),
                (e.prototype.unlockPageScroll = function () {
                    return (bodyScrollLock.enableBodyScroll(this.overlay),
                        document.removeEventListener("touchmove", this.handleLockedTouchmove, { passive: !1 }));
                }),
                (e.prototype.handleLockedTouchmove = function (t) {
                    return t.preventDefault();
                }),
                e);
        })();
    }.call(window),
    function () {
        window.Calendly.BadgeWidget = (function () {
            function t(t) {
                (this.options = t), this.buildWidget(), this.insertWidget();
            }
            return ((t.prototype.destroy = function () {
                return this.widget.parentNode.removeChild(this.widget);
            }),
                (t.prototype.buildWidget = function () {
                    return ((this.widget = document.createElement("div")),
                        (this.widget.className = "calendly-badge-widget"),
                        this.widget.appendChild(this.buildContent()));
                }),
                (t.prototype.insertWidget = function () {
                    return document.body.insertBefore(this.widget, document.body.firstChild);
                }),
                (t.prototype.buildContent = function () {
                    var t;
                    return ((t = document.createElement("div")),
                        (t.className = "calendly-badge-content"),
                        "#ffffff" === this.options.color &&
                            (t.className += " calendly-white"),
                        (t.onclick = this.options.onClick),
                        (t.innerHTML = this.options.text),
                        (t.style.background = this.options.color),
                        (t.style.color = this.options.textColor),
                        this.options.branding && t.appendChild(this.buildBranding()),
                        t);
                }),
                (t.prototype.buildBranding = function () {
                    var t;
                    return ((t = document.createElement("span")),
                        (t.innerHTML = "powered by Calendly"),
                        t);
                }),
                t);
        })();
    }.call(window),
    window.Calendly._autoLoadInlineWidgets()); });

var CALENDLY_STYLESHEET_SOURCE = "https://assets.calendly.com/assets/external/widget.css";

var CalendlyEvent;
(function (CalendlyEvent) {
    CalendlyEvent["PROFILE_PAGE_VIEWED"] = "calendly.profile_page_viewed";
    CalendlyEvent["EVENT_TYPE_VIEWED"] = "calendly.event_type_viewed";
    CalendlyEvent["DATE_AND_TIME_SELECTED"] = "calendly.date_and_time_selected";
    CalendlyEvent["EVENT_SCHEDULED"] = "calendly.event_scheduled";
})(CalendlyEvent || (CalendlyEvent = {}));
var loadScript = function () {
    if (!window.Calendly) {
        initializeCalendly();
    }
};
var loadStyleSheet = function () {
    if (!document.querySelector("link[href=\"" + CALENDLY_STYLESHEET_SOURCE + "\"]")) {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = CALENDLY_STYLESHEET_SOURCE;
        document.body.appendChild(link);
    }
};
var withPageSettings = function (url, pageSettings) {
    if (!pageSettings)
        return url;
    var backgroundColor = pageSettings.backgroundColor, hideEventTypeDetails = pageSettings.hideEventTypeDetails, hideLandingPageDetails = pageSettings.hideLandingPageDetails, primaryColor = pageSettings.primaryColor, textColor = pageSettings.textColor;
    var queryStringIndex = url.indexOf("?");
    var hasQueryString = queryStringIndex > -1;
    var queryString = url.slice(queryStringIndex + 1);
    var baseUrl = hasQueryString ? url.slice(0, queryStringIndex) : url;
    var updatedQueryString = [
        queryString,
        backgroundColor ? "background_color=" + backgroundColor : null,
        hideEventTypeDetails ? "hide_event_type_details=1" : null,
        hideLandingPageDetails ? "hide_landing_page_details=1" : null,
        primaryColor ? "primary_color=" + primaryColor : null,
        textColor ? "text_color=" + textColor : null,
    ]
        .filter(function (item) { return item !== null; })
        .join("&");
    return baseUrl + "?" + updatedQueryString;
};
var openPopupWidget = function (options) {
    loadStyleSheet();
    loadScript();
    var widgetOptions = {
        url: withPageSettings(options.url, options.pageSettings),
        prefill: options.prefill,
        utm: options.utm,
    };
    window.Calendly.initPopupWidget(widgetOptions);
};
var closePopupWidget = function () {
    loadStyleSheet();
    loadScript();
    window.Calendly.closePopupWidget();
};

var defaultStyles = {
    minWidth: "320px",
    height: "630px",
};
var InlineWidget = /** @class */ (function (_super) {
    __extends(InlineWidget, _super);
    function InlineWidget(props) {
        var _this = _super.call(this, props) || this;
        _this.widgetParentContainerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
        _this.destroyInlineWidget = _this.destroyInlineWidget.bind(_this);
        return _this;
    }
    InlineWidget.prototype.componentDidUpdate = function () {
        this.destroyInlineWidget();
        window.Calendly.initInlineWidget({
            url: withPageSettings(this.props.url, this.props.pageSettings),
            parentElement: this.widgetParentContainerRef.current,
            prefill: this.props.prefill,
            utm: this.props.utm,
        });
    };
    InlineWidget.prototype.componentDidMount = function () {
        loadScript();
        loadStyleSheet();
        window.Calendly.initInlineWidget({
            url: withPageSettings(this.props.url, this.props.pageSettings),
            parentElement: this.widgetParentContainerRef.current,
            prefill: this.props.prefill,
            utm: this.props.utm,
        });
    };
    InlineWidget.prototype.render = function () {
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { className: "calendly-inline-widget", style: this.props.styles || defaultStyles, ref: this.widgetParentContainerRef, "data-auto-load": "false" }));
    };
    InlineWidget.prototype.destroyInlineWidget = function () {
        this.widgetParentContainerRef.current.innerHTML = "";
    };
    return InlineWidget;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var initWidget = function (options) {
    window.Calendly.initPopupWidget(options);
};
var createClickHandler = function (widgetOptions) { return function (e) {
    e.preventDefault();
    return initWidget(widgetOptions);
}; };
var PopupText = /** @class */ (function (_super) {
    __extends(PopupText, _super);
    function PopupText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PopupText.prototype.componentWillUnmount = function () {
        window.Calendly.closePopupWidget();
    };
    PopupText.prototype.componentDidMount = function () {
        loadScript();
        loadStyleSheet();
    };
    PopupText.prototype.render = function () {
        var widgetOptions = {
            url: withPageSettings(this.props.url, this.props.pageSettings),
            prefill: this.props.prefill,
            utm: this.props.utm,
        };
        return (Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", { href: "", onClick: createClickHandler(widgetOptions), style: this.props.styles || {} }, this.props.text));
    };
    return PopupText;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var defaultProps = {
    branding: false,
    color: "#00a2ff",
    textColor: "#ffffff",
    text: "Schedule time with me",
};
var PopupWidget = /** @class */ (function (_super) {
    __extends(PopupWidget, _super);
    function PopupWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PopupWidget.prototype.componentDidUpdate = function () {
        var options = __assign(__assign(__assign({}, defaultProps), this.props), { url: withPageSettings(this.props.url, this.props.pageSettings) });
        window.Calendly.initBadgeWidget(options);
    };
    PopupWidget.prototype.componentDidMount = function () {
        loadScript();
        loadStyleSheet();
        var options = __assign(__assign(__assign({}, defaultProps), this.props), { url: withPageSettings(this.props.url, this.props.pageSettings) });
        window.Calendly.initBadgeWidget(options);
    };
    PopupWidget.prototype.componentWillUnmount = function () {
        window.Calendly.destroyBadgeWidget();
        window.Calendly.closePopupWidget();
    };
    PopupWidget.prototype.render = function () {
        return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null);
    };
    return PopupWidget;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var CalendlyEventListener = /** @class */ (function (_super) {
    __extends(CalendlyEventListener, _super);
    function CalendlyEventListener(props) {
        var _this = _super.call(this, props) || this;
        _this.handleEvent = _this.handleEvent.bind(_this);
        return _this;
    }
    CalendlyEventListener.prototype.componentDidMount = function () {
        window.addEventListener("message", this.handleEvent);
    };
    CalendlyEventListener.prototype.componentWillUnmount = function () {
        window.removeEventListener("message", this.handleEvent);
    };
    CalendlyEventListener.prototype.handleEvent = function (e) {
        var eventName = e.data.event;
        if (eventName === CalendlyEvent.DATE_AND_TIME_SELECTED) {
            this.props.onDateAndTimeSelected && this.props.onDateAndTimeSelected(e);
        }
        else if (eventName === CalendlyEvent.EVENT_SCHEDULED) {
            this.props.onEventScheduled && this.props.onEventScheduled(e);
        }
        else if (eventName === CalendlyEvent.EVENT_TYPE_VIEWED) {
            this.props.onEventTypeViewed && this.props.onEventTypeViewed(e);
        }
        else if (eventName === CalendlyEvent.PROFILE_PAGE_VIEWED) {
            this.props.onProfilePageViewed && this.props.onProfilePageViewed(e);
        }
    };
    CalendlyEventListener.prototype.render = function () {
        return this.props.children;
    };
    return CalendlyEventListener;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));


//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ })

})
//# sourceMappingURL=index.js.4af03c643ac2bfaf2594.hot-update.js.map