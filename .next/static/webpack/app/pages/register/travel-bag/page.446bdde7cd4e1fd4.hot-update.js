"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/register/travel-bag/page",{

/***/ "(app-pages-browser)/./src/app/api/regionApi.tsx":
/*!***********************************!*\
  !*** ./src/app/api/regionApi.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PaymentSel: function() { return /* binding */ PaymentSel; },\n/* harmony export */   TypeOfTripSel: function() { return /* binding */ TypeOfTripSel; },\n/* harmony export */   area: function() { return /* binding */ area; },\n/* harmony export */   city: function() { return /* binding */ city; },\n/* harmony export */   regionApi: function() { return /* binding */ regionApi; },\n/* harmony export */   vodafoneIfo: function() { return /* binding */ vodafoneIfo; }\n/* harmony export */ });\n// region.tsx\n// city\nconst city = [\n    \"فاقوس\",\n    \"كفر صقر\",\n    \"أبوكبير\",\n    \"أبو حماد\",\n    \"الحسينية\"\n];\n//  area\nconst area = {\n    فاقوس: [\n        \"بنك مصر - 05:30 ص\",\n        \"كوبري الصحارة - 06:10 ص\",\n        \"أبو شلبي - 06:20 ص\",\n        \"مفارق خضير - 06:45 ص\",\n        \"الصالحية الجديدة - 06:50 ص\"\n    ],\n    \"كفر صقر\": [\n        \"كوبري السوق - 05:00 ص\"\n    ],\n    أبوكبير: [\n        \"مزلقان المحلج - 05:15 ص\"\n    ],\n    \"أبو حماد\": [\n        \"كوبرى المركز - 06:10 ص\",\n        \"كوبري السعدية - 06:20 ص\",\n        \"المعهد - 06:30 ص\",\n        \"التل - 06:40 ص\",\n        \"القصاصين - 06:50 ص\"\n    ],\n    الحسينية: [\n        \"كوبرى الموقف - 05:45 ص\"\n    ]\n};\n// Typa of Trip\nconst TypeOfTripSel = [\n    \"ذهاب\",\n    \"عودة\",\n    \"ذهاب وعودة\"\n];\n// Payment Type\nconst PaymentSel = [\n    \"نقداً\",\n    \"فودافون كاش\"\n];\n//  Payment by\nconst vodafoneIfo = \"برجاء ارسال قيمة الحجز على رقم (01012930010) مرفق معاه سكرين شوت للتحويل على الواتس اب لنفس الرقم\";\nconst regionApi = {\n    area,\n    city,\n    PaymentSel,\n    TypeOfTripSel,\n    vodafoneIfo\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXBpL3JlZ2lvbkFwaS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsYUFBYTtBQU1iLE9BQU87QUFDQSxNQUFNQSxPQUFPO0lBQUM7SUFBUztJQUFXO0lBQVc7SUFBWTtDQUFXLENBQUM7QUFFNUUsUUFBUTtBQUNELE1BQU1DLE9BQWM7SUFDekJDLE9BQU87UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0Q7SUFDRCxXQUFXO1FBQUM7S0FBd0I7SUFDcENDLFNBQVM7UUFBQztLQUEwQjtJQUNwQyxZQUFZO1FBQ1Y7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNEO0lBQ0RDLFVBQVU7UUFBQztLQUF5QjtBQUN0QyxFQUFFO0FBRUYsZUFBZTtBQUNSLE1BQU1DLGdCQUFnQjtJQUFDO0lBQVE7SUFBUTtDQUFhLENBQUM7QUFFNUQsZUFBZTtBQUNSLE1BQU1DLGFBQWE7SUFBQztJQUFTO0NBQWMsQ0FBQztBQUVuRCxjQUFjO0FBQ1AsTUFBTUMsY0FDWCxvR0FBb0c7QUFFL0YsTUFBTUMsWUFBWTtJQUN2QlA7SUFDQUQ7SUFDQU07SUFDQUQ7SUFDQUU7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYXBpL3JlZ2lvbkFwaS50c3g/NjliNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZWdpb24udHN4XHJcblxyXG5leHBvcnQgdHlwZSBQbGFjZSA9IHtcclxuICBba2V5OiBzdHJpbmddOiBzdHJpbmdbXTtcclxufTtcclxuXHJcbi8vIGNpdHlcclxuZXhwb3J0IGNvbnN0IGNpdHkgPSBbXCLZgdin2YLZiNizXCIsIFwi2YPZgdixINi12YLYsVwiLCBcItij2KjZiNmD2KjZitixXCIsIFwi2KPYqNmIINit2YXYp9ivXCIsIFwi2KfZhNit2LPZitmG2YrYqVwiXTtcclxuXHJcbi8vICBhcmVhXHJcbmV4cG9ydCBjb25zdCBhcmVhOiBQbGFjZSA9IHtcclxuICDZgdin2YLZiNizOiBbXHJcbiAgICBcItio2YbZgyDZhdi12LEgLSAwNTozMCDYtVwiLFxyXG4gICAgXCLZg9mI2KjYsdmKINin2YTYtdit2KfYsdipIC0gMDY6MTAg2LVcIixcclxuICAgIFwi2KPYqNmIINi02YTYqNmKIC0gMDY6MjAg2LVcIixcclxuICAgIFwi2YXZgdin2LHZgiDYrti22YrYsSAtIDA2OjQ1INi1XCIsXHJcbiAgICBcItin2YTYtdin2YTYrdmK2Kkg2KfZhNis2K/Zitiv2KkgLSAwNjo1MCDYtVwiLFxyXG4gIF0sXHJcbiAgXCLZg9mB2LEg2LXZgtixXCI6IFtcItmD2YjYqNix2Yog2KfZhNiz2YjZgiAtIDA1OjAwINi1XCJdLFxyXG4gINij2KjZiNmD2KjZitixOiBbXCLZhdiy2YTZgtin2YYg2KfZhNmF2K3ZhNisIC0gMDU6MTUg2LVcIl0sXHJcbiAgXCLYo9io2Ygg2K3Zhdin2K9cIjogW1xyXG4gICAgXCLZg9mI2KjYsdmJINin2YTZhdix2YPYsiAtIDA2OjEwINi1XCIsXHJcbiAgICBcItmD2YjYqNix2Yog2KfZhNiz2LnYr9mK2KkgLSAwNjoyMCDYtVwiLFxyXG4gICAgXCLYp9mE2YXYudmH2K8gLSAwNjozMCDYtVwiLFxyXG4gICAgXCLYp9mE2KrZhCAtIDA2OjQwINi1XCIsXHJcbiAgICBcItin2YTZgti12KfYtdmK2YYgLSAwNjo1MCDYtVwiLFxyXG4gIF0sXHJcbiAg2KfZhNit2LPZitmG2YrYqTogW1wi2YPZiNio2LHZiSDYp9mE2YXZiNmC2YEgLSAwNTo0NSDYtVwiXSxcclxufTtcclxuXHJcbi8vIFR5cGEgb2YgVHJpcFxyXG5leHBvcnQgY29uc3QgVHlwZU9mVHJpcFNlbCA9IFtcItiw2YfYp9ioXCIsIFwi2LnZiNiv2KlcIiwgXCLYsNmH2KfYqCDZiNi52YjYr9ipXCJdO1xyXG5cclxuLy8gUGF5bWVudCBUeXBlXHJcbmV4cG9ydCBjb25zdCBQYXltZW50U2VsID0gW1wi2YbZgtiv2KfZi1wiLCBcItmB2YjYr9in2YHZiNmGINmD2KfYtFwiXTtcclxuXHJcbi8vICBQYXltZW50IGJ5XHJcbmV4cG9ydCBjb25zdCB2b2RhZm9uZUlmbzogc3RyaW5nID1cclxuICBcItio2LHYrNin2KEg2KfYsdiz2KfZhCDZgtmK2YXYqSDYp9mE2K3YrNiyINi52YTZiSDYsdmC2YUgKDAxMDEyOTMwMDEwKSDZhdix2YHZgiDZhdi52KfZhyDYs9mD2LHZitmGINi02YjYqiDZhNmE2KrYrdmI2YrZhCDYudmE2Ykg2KfZhNmI2KfYqtizINin2Kgg2YTZhtmB2LMg2KfZhNix2YLZhVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lvbkFwaSA9IHtcclxuICBhcmVhLFxyXG4gIGNpdHksXHJcbiAgUGF5bWVudFNlbCxcclxuICBUeXBlT2ZUcmlwU2VsLFxyXG4gIHZvZGFmb25lSWZvLFxyXG59O1xyXG4iXSwibmFtZXMiOlsiY2l0eSIsImFyZWEiLCLZgdin2YLZiNizIiwi2KPYqNmI2YPYqNmK2LEiLCLYp9mE2K3Ys9mK2YbZitipIiwiVHlwZU9mVHJpcFNlbCIsIlBheW1lbnRTZWwiLCJ2b2RhZm9uZUlmbyIsInJlZ2lvbkFwaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/api/regionApi.tsx\n"));

/***/ })

});