webpackHotUpdate_N_E("pages/posts/[slug]",{

/***/ "./pages/posts/[slug].js":
/*!*******************************!*\
  !*** ./pages/posts/[slug].js ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! disqus-react */ "./node_modules/disqus-react/lib/index.js");
/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(disqus_react__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "/home/rubick/ws/Arthas.me/pages/posts/[slug].js",
    _s = $RefreshSig$();






var __N_SSG = true;
function Post(_ref) {
  _s();

  var post = _ref.post,
      prev = _ref.prev,
      next = _ref.next;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  if (!router.isFallback && !(post !== null && post !== void 0 && post.slug)) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_error__WEBPACK_IMPORTED_MODULE_2___default.a, {
      statusCode: 404
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "image",
        content: "/favicon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: [post.title, " -Arthas.me"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:url",
        content: "https://arthas.me/posts/".concat(post.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:type",
        content: "article"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: post.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image",
        content: "/favicon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:title",
        content: post.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:image",
        content: "/favicon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:creator",
        content: "@deadalusmask"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
        integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: post.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: new Date(post.date).toDateString()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "md-content",
      dangerouslySetInnerHTML: {
        __html: post.content
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
      className: "hr"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '24px'
      },
      children: [prev ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/posts/".concat(prev.slug),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          style: {
            marginRight: '24px'
          },
          children: prev.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }, this), next ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/posts/".concat(next.slug),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: next.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(disqus_react__WEBPACK_IMPORTED_MODULE_5__["DiscussionEmbed"], {
      shortname: "arthas-me",
      config: {
        url: "https://arthas.me/posts/".concat(post.slug),
        identifier: post.slug,
        title: post.title
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Post, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Post;

var _c;

$RefreshReg$(_c, "Post");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwicHJldiIsIm5leHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc0ZhbGxiYWNrIiwic2x1ZyIsInRpdGxlIiwiRGF0ZSIsImRhdGUiLCJ0b0RhdGVTdHJpbmciLCJfX2h0bWwiLCJjb250ZW50IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luQm90dG9tIiwibWFyZ2luUmlnaHQiLCJ1cmwiLCJpZGVudGlmaWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHZSxTQUFTQSxJQUFULE9BQW9DO0FBQUE7O0FBQUEsTUFBcEJDLElBQW9CLFFBQXBCQSxJQUFvQjtBQUFBLE1BQWRDLElBQWMsUUFBZEEsSUFBYztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUNqRCxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLE1BQUksQ0FBQ0QsTUFBTSxDQUFDRSxVQUFSLElBQXNCLEVBQUNMLElBQUQsYUFBQ0EsSUFBRCxlQUFDQSxJQUFJLENBQUVNLElBQVAsQ0FBMUIsRUFBdUM7QUFDckMsd0JBQU8scUVBQUMsaURBQUQ7QUFBVyxnQkFBVSxFQUFFO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztBQUVELHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFNLFlBQUksRUFBQyxPQUFYO0FBQW1CLGVBQU8sRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLG1CQUFRTixJQUFJLENBQUNPLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFLRTtBQUFNLGdCQUFRLEVBQUMsUUFBZjtBQUF3QixlQUFPLG9DQUE2QlAsSUFBSSxDQUFDTSxJQUFs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VUFDUEsscUQ7OztLQURPTCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1tzbHVnXS5jY2ZhY2YzY2JkMGFjMmU0YTI0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gJ25leHQvZXJyb3InXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBEaXNjdXNzaW9uRW1iZWQgfSBmcm9tICdkaXNxdXMtcmVhY3QnXG5pbXBvcnQgeyBnZXRQb3N0QnlTbHVnLCBnZXRBbGxQb3N0cyB9IGZyb20gJy4uLy4uL2xpYi9hcGknXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0LCBwcmV2LCBuZXh0IH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgaWYgKCFyb3V0ZXIuaXNGYWxsYmFjayAmJiAhcG9zdD8uc2x1Zykge1xuICAgIHJldHVybiA8RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwiaW1hZ2VcIiBjb250ZW50PVwiL2Zhdmljb24ucG5nXCIgLz5cbiAgICAgICAgPHRpdGxlPntwb3N0LnRpdGxlfSAtQXJ0aGFzLm1lPC90aXRsZT5cbiAgICAgICAgey8qIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJyYW5kb20gc2hpdHNcIiAvPiAqL31cblxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e2BodHRwczovL2FydGhhcy5tZS9wb3N0cy8ke3Bvc3Quc2x1Z31gfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwiYXJ0aWNsZVwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtwb3N0LnRpdGxlfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cIi9mYXZpY29uLnBuZ1wiIC8+XG4gICAgICAgIHsvKiA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cInJhbmRvbSBzaGl0c1wiIC8+ICovfVxuXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17cG9zdC50aXRsZX0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PVwiL2Zhdmljb24ucG5nXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9XCJAZGVhZGFsdXNtYXNrXCIgLz5cbiAgICAgICAgey8qIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD1cInJhbmRvbSBzaGl0c1wiIC8+ICovfVxuXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0va2F0ZXhAMC4xMi4wL2Rpc3Qva2F0ZXgubWluLmNzc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUFmRWowcjQvT0ZyT281dDdObk5lNDZ6Vy90RmdXNngvYkNKRzhGcVFDRW8zK0FybzZFWVVHNCtjVStLSld1L1hcIlxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICA8c3Bhbj57bmV3IERhdGUocG9zdC5kYXRlKS50b0RhdGVTdHJpbmcoKX08L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kLWNvbnRlbnRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuY29udGVudCB9fT48L2Rpdj5cbiAgICAgIDxociBjbGFzc05hbWU9XCJoclwiIC8+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgbWFyZ2luQm90dG9tOiAnMjRweCcgfX0+XG4gICAgICAgIHtwcmV2ID8gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvJHtwcmV2LnNsdWd9YH0+XG4gICAgICAgICAgICA8YSBzdHlsZT17eyBtYXJnaW5SaWdodDogJzI0cHgnIH19PntwcmV2LnRpdGxlfTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGE+PC9hPlxuICAgICAgICApfVxuICAgICAgICB7bmV4dCA/IChcbiAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RzLyR7bmV4dC5zbHVnfWB9PlxuICAgICAgICAgICAgPGE+e25leHQudGl0bGV9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8YT48L2E+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxEaXNjdXNzaW9uRW1iZWRcbiAgICAgICAgc2hvcnRuYW1lPVwiYXJ0aGFzLW1lXCJcbiAgICAgICAgY29uZmlnPXt7XG4gICAgICAgICAgdXJsOiBgaHR0cHM6Ly9hcnRoYXMubWUvcG9zdHMvJHtwb3N0LnNsdWd9YCxcbiAgICAgICAgICBpZGVudGlmaWVyOiBwb3N0LnNsdWcsXG4gICAgICAgICAgdGl0bGU6IHBvc3QudGl0bGVcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgcG9zdCA9IGF3YWl0IGdldFBvc3RCeVNsdWcocGFyYW1zLnNsdWcsIFsndGl0bGUnLCAnZGF0ZScsICdzbHVnJywgJ2NvbnRlbnQnXSlcbiAgaWYgKCFwb3N0KSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0cyhbJ3NsdWcnLCAndGl0bGUnXSlcbiAgY29uc3QgaW5kZXggPSBwb3N0cy5maW5kSW5kZXgodiA9PiB2LnNsdWcgPT09IHBhcmFtcy5zbHVnKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3QsXG4gICAgICBwcmV2OiBpbmRleCArIDEgPCBwb3N0cy5sZW5ndGggPyBwb3N0c1tpbmRleCArIDFdIDogbnVsbCxcbiAgICAgIG5leHQ6IGluZGV4IC0gMSA+PSAwID8gcG9zdHNbaW5kZXggLSAxXSA6IG51bGxcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKFsnc2x1ZyddKVxuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IHBvc3RzLm1hcChwb3N0ID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHNsdWc6IHBvc3Quc2x1Z1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSksXG4gICAgZmFsbGJhY2s6IGZhbHNlXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=