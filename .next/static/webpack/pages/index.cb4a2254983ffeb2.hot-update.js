"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/StatisticsPage/TopicUser.jsx":
/*!********************************************!*\
  !*** ./pages/StatisticsPage/TopicUser.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TopicUser; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.module.scss */ \"./pages/styles/styles.module.scss\");\n/* harmony import */ var _styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _IconRating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IconRating */ \"./pages/StatisticsPage/IconRating.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nconst items = [\n    \"Алан\",\n    \"Артем\",\n    \"Аміна\",\n    \"Вєлат\",\n    \"Софія\"\n];\n\nfunction TopicUser(param) {\n    let { childrenImage } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().topicItemUser),\n        children: items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().topicUserText),\n                children: [\n                    item,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {\n                        fileName: \"D:\\\\assessment\\\\pages\\\\StatisticsPage\\\\TopicUser.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IconRating__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\assessment\\\\pages\\\\StatisticsPage\\\\TopicUser.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"D:\\\\assessment\\\\pages\\\\StatisticsPage\\\\TopicUser.jsx\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this))\n    }, void 0, false, {\n        fileName: \"D:\\\\assessment\\\\pages\\\\StatisticsPage\\\\TopicUser.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = TopicUser;\nvar _c;\n$RefreshReg$(_c, \"TopicUser\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9TdGF0aXN0aWNzUGFnZS9Ub3BpY1VzZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNaO0FBQ3RDLE1BQU1FLFFBQVE7SUFBQztJQUFRO0lBQVM7SUFBUztJQUFTO0NBQVE7QUFDM0I7QUFFaEIsU0FBU0UsVUFBVSxLQUFlO1FBQWYsRUFBQ0MsYUFBYSxFQUFDLEdBQWY7SUFDaEMscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdQLGlGQUFvQjtrQkFDN0JFLE1BQU1PLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDaEIsOERBQUNMO2dCQUFnQkMsV0FBV1AsaUZBQW9COztvQkFBR1U7a0NBQ2pELDhEQUFDUCxtREFBS0E7Ozs7O2tDQUNOLDhEQUFDRixtREFBVUE7Ozs7OztlQUZIVTs7Ozs7Ozs7OztBQU90QjtLQVh3QlAiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvU3RhdGlzdGljc1BhZ2UvVG9waWNVc2VyLmpzeD8yOGUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3N0eWxlcy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBJY29uUmF0aW5nIGZyb20gJy4vSWNvblJhdGluZyc7XHJcbmNvbnN0IGl0ZW1zID0gWyfQkNC70LDQvScsICfQkNGA0YLQtdC8JywgJ9CQ0LzRltC90LAnLCAn0JLRlNC70LDRgicsICfQodC+0YTRltGPJ107IFxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb3BpY1VzZXIoe2NoaWxkcmVuSW1hZ2V9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9waWNJdGVtVXNlcn0+XHJcbiAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLnRvcGljVXNlclRleHR9PntpdGVtfVxyXG4gICAgICAgICAgICAgIDxJbWFnZS8+XHJcbiAgICAgICAgICAgICAgPEljb25SYXRpbmcgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwiSWNvblJhdGluZyIsIml0ZW1zIiwiSW1hZ2UiLCJUb3BpY1VzZXIiLCJjaGlsZHJlbkltYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwidG9waWNJdGVtVXNlciIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInRvcGljVXNlclRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/StatisticsPage/TopicUser.jsx\n"));

/***/ })

});