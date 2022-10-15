(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/App.js */ "./src/App.js");

var _jsxFileName = "C:\\Users\\Admin\\Documents\\GitHub\\React\\03-Using-React-17-Hooks\\other-hooks\\pages\\index.js";



function index() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_App_js__WEBPACK_IMPORTED_MODULE_2__.default, {
    pageName: "Home"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (index);
/*
From the start of this part of the course

import React, { useEffect, useState } from 'react';

const InputElement = () => {
  const random_boolean = Math.random() >= 0.5; // 50% of the time will be true, other- false
  //const [isLoading,setIsLoading] = useState(true);

  // (this will cause a random warning in console debug messages because server-side and client side both have random
  //   number generation.  Just ignore the error as it does not effect the point we are making here with the React hooks rule).
  //     Warning: Expected server HTML to contain a matching <input> in <div>.
  const [isLoading, setIsLoading] = useState(random_boolean === true);

  // if (random_boolean === true) {
  //   const [isLoading,setIsLoading] = useState(true);
  // } else {
  //   const [isLoading,setIsLoading] = useState(false);
  // }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <input placeholder="Enter Some Text" />
    </div>
  );
};

export default InputElement;


*/

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","src_App_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3VzaW5nLXJlYWN0LWhvb2tzLWNvdXJzZS1wbHVyYWxzaWdodC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vdXNpbmctcmVhY3QtaG9va3MtY291cnNlLXBsdXJhbHNpZ2h0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly91c2luZy1yZWFjdC1ob29rcy1jb3Vyc2UtcGx1cmFsc2lnaHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBQ2Ysc0JBQU8sOERBQUMsZ0RBQUQ7QUFBSyxZQUFRLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7QUFFRCwrREFBZUEsS0FBZjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7OztBQy9DQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gJy4uL3NyYy9BcHAuanMnO1xuXG5mdW5jdGlvbiBpbmRleCgpIHtcbiAgcmV0dXJuIDxBcHAgcGFnZU5hbWU9XCJIb21lXCIgLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuXG4vKlxuRnJvbSB0aGUgc3RhcnQgb2YgdGhpcyBwYXJ0IG9mIHRoZSBjb3Vyc2VcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IElucHV0RWxlbWVudCA9ICgpID0+IHtcbiAgY29uc3QgcmFuZG9tX2Jvb2xlYW4gPSBNYXRoLnJhbmRvbSgpID49IDAuNTsgLy8gNTAlIG9mIHRoZSB0aW1lIHdpbGwgYmUgdHJ1ZSwgb3RoZXItIGZhbHNlXG4gIC8vY29uc3QgW2lzTG9hZGluZyxzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgLy8gKHRoaXMgd2lsbCBjYXVzZSBhIHJhbmRvbSB3YXJuaW5nIGluIGNvbnNvbGUgZGVidWcgbWVzc2FnZXMgYmVjYXVzZSBzZXJ2ZXItc2lkZSBhbmQgY2xpZW50IHNpZGUgYm90aCBoYXZlIHJhbmRvbVxuICAvLyAgIG51bWJlciBnZW5lcmF0aW9uLiAgSnVzdCBpZ25vcmUgdGhlIGVycm9yIGFzIGl0IGRvZXMgbm90IGVmZmVjdCB0aGUgcG9pbnQgd2UgYXJlIG1ha2luZyBoZXJlIHdpdGggdGhlIFJlYWN0IGhvb2tzIHJ1bGUpLlxuICAvLyAgICAgV2FybmluZzogRXhwZWN0ZWQgc2VydmVyIEhUTUwgdG8gY29udGFpbiBhIG1hdGNoaW5nIDxpbnB1dD4gaW4gPGRpdj4uXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShyYW5kb21fYm9vbGVhbiA9PT0gdHJ1ZSk7XG5cbiAgLy8gaWYgKHJhbmRvbV9ib29sZWFuID09PSB0cnVlKSB7XG4gIC8vICAgY29uc3QgW2lzTG9hZGluZyxzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIC8vIH0gZWxzZSB7XG4gIC8vICAgY29uc3QgW2lzTG9hZGluZyxzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAvLyB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfSwgMjAwMCk7XG4gIH0pO1xuXG4gIHJldHVybiBpc0xvYWRpbmcgPyAoXG4gICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICkgOiAoXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIkVudGVyIFNvbWUgVGV4dFwiIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dEVsZW1lbnQ7XG5cblxuKi9cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9