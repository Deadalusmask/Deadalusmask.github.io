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
        lineNumber: 9,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: posts.map(function (post) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
              href: "/posts/".concat(post.slug),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: post.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 17
              }, _this)
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
            children: new Date(post.date).toDateString()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, _this)]
        }, post.slug, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvaW5kZXguanMiXSwibmFtZXMiOlsiUG9zdHMiLCJwb3N0cyIsIm1hcCIsInBvc3QiLCJzbHVnIiwidGl0bGUiLCJEYXRlIiwiZGF0ZSIsInRvRGF0ZVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR2UsU0FBU0EsS0FBVCxPQUEwQjtBQUFBOztBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUN2QyxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFBLGdCQUNHQSxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO0FBQUEsNEJBQ2I7QUFBQSxrQ0FDRTtBQUFBLG1DQUNFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksbUJBQVlBLElBQUksQ0FBQ0MsSUFBakIsQ0FBVjtBQUFBLHFDQUNFO0FBQUEsMEJBQUlELElBQUksQ0FBQ0U7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFNRTtBQUFBLHNCQUFNLElBQUlDLElBQUosQ0FBU0gsSUFBSSxDQUFDSSxJQUFkLEVBQW9CQyxZQUFwQjtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkY7QUFBQSxXQUFTTCxJQUFJLENBQUNDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYTtBQUFBLE9BQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQSxrQkFERjtBQW1CRDtLQXBCdUJKLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMuOTQ1NmNhMzlhOGViNTNkODAwMTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSAnLi4vLi4vbGliL2FwaSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdHMoeyBwb3N0cyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UG9zdHMgLUFydGhhcy5tZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8dWw+XG4gICAgICAgIHtwb3N0cy5tYXAocG9zdCA9PiAoXG4gICAgICAgICAgPGxpIGtleT17cG9zdC5zbHVnfT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvJHtwb3N0LnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+e25ldyBEYXRlKHBvc3QuZGF0ZSkudG9EYXRlU3RyaW5nKCl9PC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvPlxuICApXG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0QWxsUG9zdHMoWydzbHVnJywgJ3RpdGxlJywgJ2RhdGUnXSlcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBwb3N0cyB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=