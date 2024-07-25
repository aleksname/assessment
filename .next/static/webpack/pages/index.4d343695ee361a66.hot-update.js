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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/styles.module.scss */ \"./pages/styles/styles.module.scss\");\n/* harmony import */ var _styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_calculation_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/calculation.png */ \"./public/calculation.png\");\n/* harmony import */ var _public_abacus_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/abacus.png */ \"./public/abacus.png\");\n/* harmony import */ var _public_calculator2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/calculator2.png */ \"./public/calculator2.png\");\n/* harmony import */ var _public_blackboard_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/blackboard.png */ \"./public/blackboard.png\");\n/* harmony import */ var _StatisticsPage_TopicItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StatisticsPage/TopicItem */ \"./pages/StatisticsPage/TopicItem.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst students = [\n    \"Алан\",\n    \"Артем\",\n    \"Аміна\",\n    \"Вєлат\",\n    \"Софія\"\n];\nfunction Main() {\n    _s();\n    const [totalStars, setTotalStars] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [studentStars, setStudentStars] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(students.reduce((acc, student)=>({\n            ...acc,\n            [student]: 0\n        }), {}));\n    const handleCalculateStars = ()=>{\n        const ratings = document.querySelectorAll(\".rating-star\");\n        let stars = 0;\n        const individualStars = students.reduce((acc, student)=>({\n                ...acc,\n                [student]: 0\n            }), {});\n        ratings.forEach((rating)=>{\n            const value = parseInt(rating.getAttribute(\"data-value\"), 10);\n            stars += value;\n            const student = rating.getAttribute(\"data-student\");\n            individualStars[student] += value;\n        });\n        setTotalStars(stars);\n        setStudentStars(individualStars);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().wrapper),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title),\n                children: \"Успішність на уроці\"\n            }, void 0, false, {\n                fileName: \"D:\\\\assessment\\\\pages\\\\index.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().startScreen),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().topicBlockItem),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StatisticsPage_TopicItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                children: \"Активна участь\",\n                                childrenIcon: _public_calculation_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                className: \"bg-green-400\",\n                                students: students\n                            }, void 0, false, {\n                                fileName: \"D:\\\\assessment\\\\pages\\\\index.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StatisticsPage_TopicItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                children: \"Уважність та зосередженість\",\n                                childrenIcon: _public_abacus_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                className: \"bg-red-400\",\n                                students: students\n                            }, void 0, false, {\n                                fileName: \"D:\\\\assessment\\\\pages\\\\index.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StatisticsPage_TopicItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                children: \"Робота з кодом\",\n                                childrenIcon: _public_calculator2_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                students: students\n                            }, void 0, false, {\n                                fileName: \"D:\\\\assessment\\\\pages\\\\index.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StatisticsPage_TopicItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                children: \"Робота з кахутом\",\n                                childrenIcon: _public_blackboard_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                students: students\n                            }, void 0, false, {\n                                fileName: \"D:\\\\assessment\\\\pages\\\\index.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\assessment\\\\pages\\\\index.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().startAsideBlock)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\assessment\\\\pages\\\\index.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\assessment\\\\pages\\\\index.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().rationBlock),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleCalculateStars,\n                        className: (_styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().calculateButton),\n                        children: \"Обрахувати зірочки\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\assessment\\\\pages\\\\index.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().totalStars),\n                        children: [\n                            \"Загальна кількість зірочок: \",\n                            totalStars\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\assessment\\\\pages\\\\index.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().studentStars),\n                        children: students.map((student)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    student,\n                                    \": \",\n                                    studentStars[student]\n                                ]\n                            }, student, true, {\n                                fileName: \"D:\\\\assessment\\\\pages\\\\index.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\assessment\\\\pages\\\\index.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\assessment\\\\pages\\\\index.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\assessment\\\\pages\\\\index.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Main, \"NfmbyWXccYTSyA25vm6ZKC9OP44=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDUztBQUNIO0FBQ0w7QUFDSztBQUNEO0FBQ007QUFFbkQsTUFBTVEsV0FBVztJQUFDO0lBQVE7SUFBUztJQUFTO0lBQVM7Q0FBUTtBQUU5QyxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1csY0FBY0MsZ0JBQWdCLEdBQUdaLCtDQUFRQSxDQUM5Q08sU0FBU00sTUFBTSxDQUFDLENBQUNDLEtBQUtDLFVBQWE7WUFBRSxHQUFHRCxHQUFHO1lBQUUsQ0FBQ0MsUUFBUSxFQUFFO1FBQUUsSUFBSSxDQUFDO0lBR2pFLE1BQU1DLHVCQUF1QjtRQUMzQixNQUFNQyxVQUFVQyxTQUFTQyxnQkFBZ0IsQ0FBQztRQUMxQyxJQUFJQyxRQUFRO1FBQ1osTUFBTUMsa0JBQWtCZCxTQUFTTSxNQUFNLENBQUMsQ0FBQ0MsS0FBS0MsVUFBYTtnQkFBRSxHQUFHRCxHQUFHO2dCQUFFLENBQUNDLFFBQVEsRUFBRTtZQUFFLElBQUksQ0FBQztRQUV2RkUsUUFBUUssT0FBTyxDQUFDQyxDQUFBQTtZQUNkLE1BQU1DLFFBQVFDLFNBQVNGLE9BQU9HLFlBQVksQ0FBQyxlQUFlO1lBQzFETixTQUFTSTtZQUNULE1BQU1ULFVBQVVRLE9BQU9HLFlBQVksQ0FBQztZQUNwQ0wsZUFBZSxDQUFDTixRQUFRLElBQUlTO1FBQzlCO1FBRUFkLGNBQWNVO1FBQ2RSLGdCQUFnQlM7SUFDbEI7SUFFQSxxQkFDRSw4REFBQ007UUFBSUMsV0FBVzNCLDJFQUFjOzswQkFDNUIsOERBQUM2QjtnQkFBR0YsV0FBVzNCLHlFQUFZOzBCQUFFOzs7Ozs7MEJBQzdCLDhEQUFDMEI7Z0JBQUlDLFdBQVczQiwrRUFBa0I7O2tDQUNoQyw4REFBQzBCO3dCQUFJQyxXQUFXM0Isa0ZBQXFCOzswQ0FDbkMsOERBQUNLLGlFQUFTQTtnQ0FBQzRCLFVBQVU7Z0NBQWtCQyxjQUFjakMsK0RBQUtBO2dDQUFFMEIsV0FBVTtnQ0FBZXJCLFVBQVVBOzs7Ozs7MENBQy9GLDhEQUFDRCxpRUFBU0E7Z0NBQUM0QixVQUFVO2dDQUErQkMsY0FBY2hDLDBEQUFLQTtnQ0FBRXlCLFdBQVU7Z0NBQWFyQixVQUFVQTs7Ozs7OzBDQUMxRyw4REFBQ0QsaUVBQVNBO2dDQUFDNEIsVUFBVTtnQ0FBa0JDLGNBQWMvQiwrREFBS0E7Z0NBQUVHLFVBQVVBOzs7Ozs7MENBQ3RFLDhEQUFDRCxpRUFBU0E7Z0NBQUM0QixVQUFVO2dDQUFvQkMsY0FBYzlCLDhEQUFLQTtnQ0FBRUUsVUFBVUE7Ozs7Ozs7Ozs7OztrQ0FFMUUsOERBQUNvQjt3QkFBSUMsV0FBVzNCLG1GQUFzQjs7Ozs7Ozs7Ozs7OzBCQUd4Qyw4REFBQzBCO2dCQUFJQyxXQUFXM0IsK0VBQWtCOztrQ0FDbEMsOERBQUNxQzt3QkFBT0MsU0FBU3ZCO3dCQUFzQlksV0FBVzNCLG1GQUFzQjtrQ0FBRTs7Ozs7O2tDQUcxRSw4REFBQzBCO3dCQUFJQyxXQUFXM0IsOEVBQWlCOzs0QkFBRTs0QkFDSlE7Ozs7Ozs7a0NBRS9CLDhEQUFDa0I7d0JBQUlDLFdBQVczQixnRkFBbUI7a0NBQ2hDTSxTQUFTa0MsR0FBRyxDQUFDMUIsQ0FBQUEsd0JBQ1osOERBQUNZOztvQ0FDRVo7b0NBQVE7b0NBQUdKLFlBQVksQ0FBQ0ksUUFBUTs7K0JBRHpCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFwQjtHQXBEd0JQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9zdHlsZXMubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgaWNvbjEgZnJvbSAnLi4vcHVibGljL2NhbGN1bGF0aW9uLnBuZyc7XHJcbmltcG9ydCBpY29uMiBmcm9tICcuLi9wdWJsaWMvYWJhY3VzLnBuZyc7XHJcbmltcG9ydCBpY29uMyBmcm9tICcuLi9wdWJsaWMvY2FsY3VsYXRvcjIucG5nJztcclxuaW1wb3J0IGljb240IGZyb20gJy4uL3B1YmxpYy9ibGFja2JvYXJkLnBuZyc7XHJcbmltcG9ydCBUb3BpY0l0ZW0gZnJvbSAnLi9TdGF0aXN0aWNzUGFnZS9Ub3BpY0l0ZW0nO1xyXG5cclxuY29uc3Qgc3R1ZGVudHMgPSBbJ9CQ0LvQsNC9JywgJ9CQ0YDRgtC10LwnLCAn0JDQvNGW0L3QsCcsICfQktGU0LvQsNGCJywgJ9Ch0L7RhNGW0Y8nXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgY29uc3QgW3RvdGFsU3RhcnMsIHNldFRvdGFsU3RhcnNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3N0dWRlbnRTdGFycywgc2V0U3R1ZGVudFN0YXJzXSA9IHVzZVN0YXRlKFxyXG4gICAgc3R1ZGVudHMucmVkdWNlKChhY2MsIHN0dWRlbnQpID0+ICh7IC4uLmFjYywgW3N0dWRlbnRdOiAwIH0pLCB7fSlcclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVDYWxjdWxhdGVTdGFycyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJhdGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmF0aW5nLXN0YXInKTtcclxuICAgIGxldCBzdGFycyA9IDA7XHJcbiAgICBjb25zdCBpbmRpdmlkdWFsU3RhcnMgPSBzdHVkZW50cy5yZWR1Y2UoKGFjYywgc3R1ZGVudCkgPT4gKHsgLi4uYWNjLCBbc3R1ZGVudF06IDAgfSksIHt9KTtcclxuXHJcbiAgICByYXRpbmdzLmZvckVhY2gocmF0aW5nID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBwYXJzZUludChyYXRpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyksIDEwKTtcclxuICAgICAgc3RhcnMgKz0gdmFsdWU7XHJcbiAgICAgIGNvbnN0IHN0dWRlbnQgPSByYXRpbmcuZ2V0QXR0cmlidXRlKCdkYXRhLXN0dWRlbnQnKTtcclxuICAgICAgaW5kaXZpZHVhbFN0YXJzW3N0dWRlbnRdICs9IHZhbHVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0VG90YWxTdGFycyhzdGFycyk7XHJcbiAgICBzZXRTdHVkZW50U3RhcnMoaW5kaXZpZHVhbFN0YXJzKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT7Qo9GB0L/RltGI0L3RltGB0YLRjCDQvdCwINGD0YDQvtGG0ZY8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXJ0U2NyZWVufT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvcGljQmxvY2tJdGVtfT5cclxuICAgICAgICAgIDxUb3BpY0l0ZW0gY2hpbGRyZW49e1wi0JDQutGC0LjQstC90LAg0YPRh9Cw0YHRgtGMXCJ9IGNoaWxkcmVuSWNvbj17aWNvbjF9IGNsYXNzTmFtZT0nYmctZ3JlZW4tNDAwJyBzdHVkZW50cz17c3R1ZGVudHN9IC8+XHJcbiAgICAgICAgICA8VG9waWNJdGVtIGNoaWxkcmVuPXtcItCj0LLQsNC20L3RltGB0YLRjCDRgtCwINC30L7RgdC10YDQtdC00LbQtdC90ZbRgdGC0YxcIn0gY2hpbGRyZW5JY29uPXtpY29uMn0gY2xhc3NOYW1lPSdiZy1yZWQtNDAwJyBzdHVkZW50cz17c3R1ZGVudHN9IC8+XHJcbiAgICAgICAgICA8VG9waWNJdGVtIGNoaWxkcmVuPXtcItCg0L7QsdC+0YLQsCDQtyDQutC+0LTQvtC8XCJ9IGNoaWxkcmVuSWNvbj17aWNvbjN9IHN0dWRlbnRzPXtzdHVkZW50c30gLz5cclxuICAgICAgICAgIDxUb3BpY0l0ZW0gY2hpbGRyZW49e1wi0KDQvtCx0L7RgtCwINC3INC60LDRhdGD0YLQvtC8XCJ9IGNoaWxkcmVuSWNvbj17aWNvbjR9IHN0dWRlbnRzPXtzdHVkZW50c30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXJ0QXNpZGVCbG9ja30+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhdGlvbkJsb2NrfT5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDYWxjdWxhdGVTdGFyc30gY2xhc3NOYW1lPXtzdHlsZXMuY2FsY3VsYXRlQnV0dG9ufT5cclxuICAgICAgICDQntCx0YDQsNGF0YPQstCw0YLQuCDQt9GW0YDQvtGH0LrQuFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3RhbFN0YXJzfT5cclxuICAgICAgICDQl9Cw0LPQsNC70YzQvdCwINC60ZbQu9GM0LrRltGB0YLRjCDQt9GW0YDQvtGH0L7Qujoge3RvdGFsU3RhcnN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0dWRlbnRTdGFyc30+XHJcbiAgICAgICAge3N0dWRlbnRzLm1hcChzdHVkZW50ID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtzdHVkZW50fT5cclxuICAgICAgICAgICAge3N0dWRlbnR9OiB7c3R1ZGVudFN0YXJzW3N0dWRlbnRdfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJpY29uMSIsImljb24yIiwiaWNvbjMiLCJpY29uNCIsIlRvcGljSXRlbSIsInN0dWRlbnRzIiwiTWFpbiIsInRvdGFsU3RhcnMiLCJzZXRUb3RhbFN0YXJzIiwic3R1ZGVudFN0YXJzIiwic2V0U3R1ZGVudFN0YXJzIiwicmVkdWNlIiwiYWNjIiwic3R1ZGVudCIsImhhbmRsZUNhbGN1bGF0ZVN0YXJzIiwicmF0aW5ncyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInN0YXJzIiwiaW5kaXZpZHVhbFN0YXJzIiwiZm9yRWFjaCIsInJhdGluZyIsInZhbHVlIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJkaXYiLCJjbGFzc05hbWUiLCJ3cmFwcGVyIiwiaDEiLCJ0aXRsZSIsInN0YXJ0U2NyZWVuIiwidG9waWNCbG9ja0l0ZW0iLCJjaGlsZHJlbiIsImNoaWxkcmVuSWNvbiIsInN0YXJ0QXNpZGVCbG9jayIsInJhdGlvbkJsb2NrIiwiYnV0dG9uIiwib25DbGljayIsImNhbGN1bGF0ZUJ1dHRvbiIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});