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
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: new Date(post.date).toDateString()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "md-content",
      dangerouslySetInnerHTML: {
        __html: post.content
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
      className: "hr"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
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
          lineNumber: 53,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }, this), next ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/posts/".concat(next.slug),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: next.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
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
      lineNumber: 66,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwicHJldiIsIm5leHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc0ZhbGxiYWNrIiwic2x1ZyIsInRpdGxlIiwiRGF0ZSIsImRhdGUiLCJ0b0RhdGVTdHJpbmciLCJfX2h0bWwiLCJjb250ZW50IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luQm90dG9tIiwibWFyZ2luUmlnaHQiLCJ1cmwiLCJpZGVudGlmaWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHZSxTQUFTQSxJQUFULE9BQW9DO0FBQUE7O0FBQUEsTUFBcEJDLElBQW9CLFFBQXBCQSxJQUFvQjtBQUFBLE1BQWRDLElBQWMsUUFBZEEsSUFBYztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUNqRCxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLE1BQUksQ0FBQ0QsTUFBTSxDQUFDRSxVQUFSLElBQXNCLEVBQUNMLElBQUQsYUFBQ0EsSUFBRCxlQUFDQSxJQUFJLENBQUVNLElBQVAsQ0FBMUIsRUFBdUM7QUFDckMsd0JBQU8scUVBQUMsaURBQUQ7QUFBVyxnQkFBVSxFQUFFO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztBQUVELHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFNLFlBQUksRUFBQyxPQUFYO0FBQW1CLGVBQU8sRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLG1CQUFRTixJQUFJLENBQUNPLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFLRTtBQUFNLGdCQUFRLEVBQUMsUUFBZjtBQUF3QixlQUFPLG9DQUE2QlAsSUFBSSxDQUFDTSxJQUFs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VUFDUEsscUQ7OztLQURPTCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1tzbHVnXS4wNzMwODYyYzBjMzcxNzAyNDM4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gJ25leHQvZXJyb3InXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBEaXNjdXNzaW9uRW1iZWQgfSBmcm9tICdkaXNxdXMtcmVhY3QnXG5pbXBvcnQgeyBnZXRQb3N0QnlTbHVnLCBnZXRBbGxQb3N0cyB9IGZyb20gJy4uLy4uL2xpYi9hcGknXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0LCBwcmV2LCBuZXh0IH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgaWYgKCFyb3V0ZXIuaXNGYWxsYmFjayAmJiAhcG9zdD8uc2x1Zykge1xuICAgIHJldHVybiA8RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwiaW1hZ2VcIiBjb250ZW50PVwiL2Zhdmljb24ucG5nXCIgLz5cbiAgICAgICAgPHRpdGxlPntwb3N0LnRpdGxlfSAtQXJ0aGFzLm1lPC90aXRsZT5cbiAgICAgICAgey8qIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJyYW5kb20gc2hpdHNcIiAvPiAqL31cblxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e2BodHRwczovL2FydGhhcy5tZS9wb3N0cy8ke3Bvc3Quc2x1Z31gfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwiYXJ0aWNsZVwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtwb3N0LnRpdGxlfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cIi9mYXZpY29uLnBuZ1wiIC8+XG4gICAgICAgIHsvKiA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cInJhbmRvbSBzaGl0c1wiIC8+ICovfVxuXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17cG9zdC50aXRsZX0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PVwiL2Zhdmljb24ucG5nXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9XCJAZGVhZGFsdXNtYXNrXCIgLz5cbiAgICAgICAgey8qIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD1cInJhbmRvbSBzaGl0c1wiIC8+ICovfVxuXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0va2F0ZXhAMC4xMi4wL2Rpc3Qva2F0ZXgubWluLmNzc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUFmRWowcjQvT0ZyT281dDdObk5lNDZ6Vy90RmdXNngvYkNKRzhGcVFDRW8zK0FybzZFWVVHNCtjVStLSld1L1hcIlxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHsvKiA8aDM+XG4gICAgICA8TGluayBocmVmPVwiL1wiPjxhPkFydGhhcy5tZTwvYT48L0xpbms+XG4gICAgICB7JyAvICd9XG4gICAgICA8TGluayBocmVmPVwiL3Bvc3RzXCI+PGE+UG9zdHM8L2E+PC9MaW5rPlxuICAgICAgeycgLyd9XG4gICAgPC9oMz4gKi99XG4gICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cbiAgICAgIDxzcGFuPntuZXcgRGF0ZShwb3N0LmRhdGUpLnRvRGF0ZVN0cmluZygpfTwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQtY29udGVudFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5jb250ZW50IH19PjwvZGl2PlxuICAgICAgPGhyIGNsYXNzTmFtZT1cImhyXCIgLz5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBtYXJnaW5Cb3R0b206ICcyNHB4JyB9fT5cbiAgICAgICAge3ByZXYgPyAoXG4gICAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0cy8ke3ByZXYuc2x1Z31gfT5cbiAgICAgICAgICAgIDxhIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMjRweCcgfX0+e3ByZXYudGl0bGV9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8YT48L2E+XG4gICAgICAgICl9XG4gICAgICAgIHtuZXh0ID8gKFxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvJHtuZXh0LnNsdWd9YH0+XG4gICAgICAgICAgICA8YT57bmV4dC50aXRsZX08L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxhPjwvYT5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPERpc2N1c3Npb25FbWJlZFxuICAgICAgICBzaG9ydG5hbWU9XCJhcnRoYXMtbWVcIlxuICAgICAgICBjb25maWc9e3tcbiAgICAgICAgICB1cmw6IGBodHRwczovL2FydGhhcy5tZS9wb3N0cy8ke3Bvc3Quc2x1Z31gLFxuICAgICAgICAgIGlkZW50aWZpZXI6IHBvc3Quc2x1ZyxcbiAgICAgICAgICB0aXRsZTogcG9zdC50aXRsZVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBwb3N0ID0gYXdhaXQgZ2V0UG9zdEJ5U2x1ZyhwYXJhbXMuc2x1ZywgWyd0aXRsZScsICdkYXRlJywgJ3NsdWcnLCAnY29udGVudCddKVxuICBpZiAoIXBvc3QpIHtcbiAgICByZXR1cm4ge31cbiAgfVxuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKFsnc2x1ZycsICd0aXRsZSddKVxuICBjb25zdCBpbmRleCA9IHBvc3RzLmZpbmRJbmRleCh2ID0+IHYuc2x1ZyA9PT0gcGFyYW1zLnNsdWcpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdCxcbiAgICAgIHByZXY6IGluZGV4ICsgMSA8IHBvc3RzLmxlbmd0aCA/IHBvc3RzW2luZGV4ICsgMV0gOiBudWxsLFxuICAgICAgbmV4dDogaW5kZXggLSAxID49IDAgPyBwb3N0c1tpbmRleCAtIDFdIDogbnVsbFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoWydzbHVnJ10pXG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcG9zdHMubWFwKHBvc3QgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgc2x1ZzogcG9zdC5zbHVnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSxcbiAgICBmYWxsYmFjazogZmFsc2VcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==