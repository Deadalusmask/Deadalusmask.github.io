webpackHotUpdate_N_E("pages/posts",{

/***/ "./pages/posts/index.js":
/*!******************************!*\
  !*** ./pages/posts/index.js ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Posts; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/home/rubick/ws/Arthas.me/pages/posts/index.js";


var __N_SSG = true;
function Posts(_ref) {
  var _this = this;

  var posts = _ref.posts;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Posts -Arthas.me"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: posts.map(function (post) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
              href: "/posts/".concat(post.slug),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: post.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: post.date
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 11
          }, _this)
        }, post.slug, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 27
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}
_c = Posts;

var _c;

$RefreshReg$(_c, "Posts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvaW5kZXguanMiXSwibmFtZXMiOlsiUG9zdHMiLCJwb3N0cyIsIm1hcCIsInBvc3QiLCJzbHVnIiwidGl0bGUiLCJkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHZSxTQUFTQSxLQUFULE9BQTBCO0FBQUE7O0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQ3ZDLHNCQUFPO0FBQUEsNEJBQ0wscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESyxlQUlMO0FBQUEsZ0JBRUlBLEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSw0QkFBSTtBQUFBLGlDQUNoQjtBQUFBLG9DQUNFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksbUJBQVlBLElBQUksQ0FBQ0MsSUFBakIsQ0FBVjtBQUFBLHFDQUNFO0FBQUEsMEJBQUlELElBQUksQ0FBQ0U7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFO0FBQUEsd0JBQ0lGLElBQUksQ0FBQ0c7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURnQixXQUFTSCxJQUFJLENBQUNDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSjtBQUFBLE9BQWQ7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSks7QUFBQSxrQkFBUDtBQW9CRDtLQXJCdUJKLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuMjI5ZGY3MjE1ZWQ1YWNlOGZmYzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSAnLi4vLi4vbGliL2FwaSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdHMoeyBwb3N0cyB9KSB7XG4gIHJldHVybiA8PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPlBvc3RzIC1BcnRoYXMubWU8L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICA8dWw+XG4gICAgICB7XG4gICAgICAgIHBvc3RzLm1hcChwb3N0ID0+IDxsaSBrZXk9e3Bvc3Quc2x1Z30+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvJHtwb3N0LnNsdWd9YH0+XG4gICAgICAgICAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHsgcG9zdC5kYXRlIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvbGk+KVxuICAgICAgfVxuICAgIDwvdWw+XG4gIDwvPlxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKFsnc2x1ZycsICd0aXRsZScsICdkYXRlJ10pXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcG9zdHMgfSxcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==