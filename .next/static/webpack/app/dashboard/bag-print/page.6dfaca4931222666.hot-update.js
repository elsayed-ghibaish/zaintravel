"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/bag-print/page",{

/***/ "(app-pages-browser)/./src/app/api/regionApi.tsx":
/*!***********************************!*\
  !*** ./src/app/api/regionApi.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PaymentSel: function() { return /* binding */ PaymentSel; },\n/* harmony export */   TypeOfTripSel: function() { return /* binding */ TypeOfTripSel; },\n/* harmony export */   area: function() { return /* binding */ area; },\n/* harmony export */   city: function() { return /* binding */ city; },\n/* harmony export */   regionApi: function() { return /* binding */ regionApi; },\n/* harmony export */   vodafoneIfo: function() { return /* binding */ vodafoneIfo; }\n/* harmony export */ });\n// region.tsx\n// city\nconst city = [\n    \"فاقوس\",\n    \"كفر صقر\",\n    \"أبوكبير\",\n    \"أبو حماد\",\n    \"الحسينية\",\n    \"الصالحية الجديدة\"\n];\n//  area\nconst area = {\n    فاقوس: [\n        \"بنك مصر - 05:30 ص\",\n        \"كوبري الصحارة - 06:10 ص\",\n        \"أبو شلبي - 06:20 ص\"\n    ],\n    \"الصالحية الجديدة\": [\n        \"الصالحية الجديدة - 06:50 ص\"\n    ],\n    \"كفر صقر\": [\n        \"كوبري السوق - 05:00 ص\"\n    ],\n    أبوكبير: [\n        \"مزلقان المحلج - 05:15 ص\"\n    ],\n    \"أبو حماد\": [\n        \"كوبرى المركز - 06:10 ص\",\n        \"كوبري السعدية - 06:20 ص\",\n        \"المعهد - 06:30 ص\",\n        \"التل - 06:40 ص\",\n        \"القصاصين - 06:50 ص\"\n    ],\n    الحسينية: [\n        \"كوبرى الموقف - 05:45 ص\",\n        \"مفارق خضير - 06:45 ص\"\n    ]\n};\n// Typa of Trip\nconst TypeOfTripSel = [\n    \"ذهاب\",\n    \"عودة\",\n    \"ذهاب وعودة\"\n];\n// Payment Type\nconst PaymentSel = [\n    \"نقداً\",\n    \"فودافون كاش\"\n];\n//  Payment by\nconst vodafoneIfo = \"برجاء ارسال قيمة الحجز على رقم (01012930010) مرفق معاه سكرين شوت للتحويل على الواتس اب لنفس الرقم\";\nconst regionApi = {\n    area,\n    city,\n    PaymentSel,\n    TypeOfTripSel,\n    vodafoneIfo\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXBpL3JlZ2lvbkFwaS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsYUFBYTtBQU1iLE9BQU87QUFDQSxNQUFNQSxPQUFPO0lBQ2xCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNELENBQUM7QUFFRixRQUFRO0FBQ0QsTUFBTUMsT0FBYztJQUN6QkMsT0FBTztRQUFDO1FBQXFCO1FBQTJCO0tBQXFCO0lBQzdFLG9CQUFvQjtRQUFDO0tBQTZCO0lBQ2xELFdBQVc7UUFBQztLQUF3QjtJQUNwQ0MsU0FBUztRQUFDO0tBQTBCO0lBQ3BDLFlBQVk7UUFDVjtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0Q7SUFDREMsVUFBVTtRQUFDO1FBQTBCO0tBQXVCO0FBQzlELEVBQUU7QUFFRixlQUFlO0FBQ1IsTUFBTUMsZ0JBQWdCO0lBQUM7SUFBUTtJQUFRO0NBQWEsQ0FBQztBQUU1RCxlQUFlO0FBQ1IsTUFBTUMsYUFBYTtJQUFDO0lBQVM7Q0FBYyxDQUFDO0FBRW5ELGNBQWM7QUFDUCxNQUFNQyxjQUNYLG9HQUFvRztBQUUvRixNQUFNQyxZQUFZO0lBQ3ZCUDtJQUNBRDtJQUNBTTtJQUNBRDtJQUNBRTtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hcGkvcmVnaW9uQXBpLnRzeD82OWI0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlZ2lvbi50c3hcclxuXHJcbmV4cG9ydCB0eXBlIFBsYWNlID0ge1xyXG4gIFtrZXk6IHN0cmluZ106IHN0cmluZ1tdO1xyXG59O1xyXG5cclxuLy8gY2l0eVxyXG5leHBvcnQgY29uc3QgY2l0eSA9IFtcclxuICBcItmB2KfZgtmI2LNcIixcclxuICBcItmD2YHYsSDYtdmC2LFcIixcclxuICBcItij2KjZiNmD2KjZitixXCIsXHJcbiAgXCLYo9io2Ygg2K3Zhdin2K9cIixcclxuICBcItin2YTYrdiz2YrZhtmK2KlcIixcclxuICBcItin2YTYtdin2YTYrdmK2Kkg2KfZhNis2K/Zitiv2KlcIixcclxuXTtcclxuXHJcbi8vICBhcmVhXHJcbmV4cG9ydCBjb25zdCBhcmVhOiBQbGFjZSA9IHtcclxuICDZgdin2YLZiNizOiBbXCLYqNmG2YMg2YXYtdixIC0gMDU6MzAg2LVcIiwgXCLZg9mI2KjYsdmKINin2YTYtdit2KfYsdipIC0gMDY6MTAg2LVcIiwgXCLYo9io2Ygg2LTZhNio2YogLSAwNjoyMCDYtVwiXSxcclxuICBcItin2YTYtdin2YTYrdmK2Kkg2KfZhNis2K/Zitiv2KlcIjogW1wi2KfZhNi12KfZhNit2YrYqSDYp9mE2KzYr9mK2K/YqSAtIDA2OjUwINi1XCJdLFxyXG4gIFwi2YPZgdixINi12YLYsVwiOiBbXCLZg9mI2KjYsdmKINin2YTYs9mI2YIgLSAwNTowMCDYtVwiXSxcclxuICDYo9io2YjZg9io2YrYsTogW1wi2YXYstmE2YLYp9mGINin2YTZhdit2YTYrCAtIDA1OjE1INi1XCJdLFxyXG4gIFwi2KPYqNmIINit2YXYp9ivXCI6IFtcclxuICAgIFwi2YPZiNio2LHZiSDYp9mE2YXYsdmD2LIgLSAwNjoxMCDYtVwiLFxyXG4gICAgXCLZg9mI2KjYsdmKINin2YTYs9i52K/ZitipIC0gMDY6MjAg2LVcIixcclxuICAgIFwi2KfZhNmF2LnZh9ivIC0gMDY6MzAg2LVcIixcclxuICAgIFwi2KfZhNiq2YQgLSAwNjo0MCDYtVwiLFxyXG4gICAgXCLYp9mE2YLYtdin2LXZitmGIC0gMDY6NTAg2LVcIixcclxuICBdLFxyXG4gINin2YTYrdiz2YrZhtmK2Kk6IFtcItmD2YjYqNix2Ykg2KfZhNmF2YjZgtmBIC0gMDU6NDUg2LVcIiwgXCLZhdmB2KfYsdmCINiu2LbZitixIC0gMDY6NDUg2LVcIl0sXHJcbn07XHJcblxyXG4vLyBUeXBhIG9mIFRyaXBcclxuZXhwb3J0IGNvbnN0IFR5cGVPZlRyaXBTZWwgPSBbXCLYsNmH2KfYqFwiLCBcIti52YjYr9ipXCIsIFwi2LDZh9in2Kgg2YjYudmI2K/YqVwiXTtcclxuXHJcbi8vIFBheW1lbnQgVHlwZVxyXG5leHBvcnQgY29uc3QgUGF5bWVudFNlbCA9IFtcItmG2YLYr9in2YtcIiwgXCLZgdmI2K/Yp9mB2YjZhiDZg9in2LRcIl07XHJcblxyXG4vLyAgUGF5bWVudCBieVxyXG5leHBvcnQgY29uc3Qgdm9kYWZvbmVJZm86IHN0cmluZyA9XHJcbiAgXCLYqNix2KzYp9ihINin2LHYs9in2YQg2YLZitmF2Kkg2KfZhNit2KzYsiDYudmE2Ykg2LHZgtmFICgwMTAxMjkzMDAxMCkg2YXYsdmB2YIg2YXYudin2Ycg2LPZg9ix2YrZhiDYtNmI2Kog2YTZhNiq2K3ZiNmK2YQg2LnZhNmJINin2YTZiNin2KrYsyDYp9ioINmE2YbZgdizINin2YTYsdmC2YVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpb25BcGkgPSB7XHJcbiAgYXJlYSxcclxuICBjaXR5LFxyXG4gIFBheW1lbnRTZWwsXHJcbiAgVHlwZU9mVHJpcFNlbCxcclxuICB2b2RhZm9uZUlmbyxcclxufTtcclxuIl0sIm5hbWVzIjpbImNpdHkiLCJhcmVhIiwi2YHYp9mC2YjYsyIsItij2KjZiNmD2KjZitixIiwi2KfZhNit2LPZitmG2YrYqSIsIlR5cGVPZlRyaXBTZWwiLCJQYXltZW50U2VsIiwidm9kYWZvbmVJZm8iLCJyZWdpb25BcGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/api/regionApi.tsx\n"));

/***/ })

});