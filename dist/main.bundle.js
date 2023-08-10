/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --base:#FEFDF2;
    --base-dark:#FFFEEB;
    --accent1:#FFE770;
    --accent2:#3C3022;
}
*{ 
    box-sizing:border-box;
    margin:0; padding:0;
    border: 1px solid black;
}

body {
    height:100vh;

    background-color:var(--base);

    display:flex;
    flex-direction:column;
    align-items:center;
}
.content {
    padding:60px 0;
    height:100%;
    width:100%;

    display:grid;
    grid-template-columns: minmax(200px, 300px) 1fr;
}

.sidebar-wrapper {
    padding: 20px;
    background-color:var(--accent2);
}

.sidebar, .navbar {
    display:flex;
    flex-direction:column;
    gap:10px;
}

.nav-entry{
    padding: 5px;
    position:relative; 

    border: 1px solid var(--base);

    display: flex;
    justify-content:space-between;
    gap: 40px;
}


.sidebar .delete-btn {
    position: absolute;

    background-color:var(--accent2);
    color:var(--base);
    right:5px;
}
.sidebar .delete-btn:hover {
    background: var(--base);
    color:var(--accent2);
}
.nav-btn, .new-list-btn{
    appearance:none;
    background:none;
    color:var(--base);
    flex:1;
}
.nav-btn:hover, .new-list-btn:hover {
    
    background-color:var(--base);
    color:var(--accent2);
    cursor:pointer;
}

.new-list-btn {
    background-color:var(--accent2);
    border: 1px solid var(--base);
    color:var(--base);
}



.navbar {
    display:flex;
    
}

.form-wrapper {
    position:absolute;
    top:0;
    height:100vh;
    width:100vw;
    background:rgba(0, 0, 0, 0.575);
}
.list-form {
    position:absolute;
    top:30%; left:0; right: 0;
    margin: 0 auto;    
    display:grid;
    
    width:300px;
    height:300px;

    grid-template-columns: [start] repeat(2, 1fr) [end];
    grid-template-rows: auto auto;
    gap:10px;
}


.form-group {
    grid-column: 1 / 3;

    display:grid;
    grid-template-columns: 100px 1fr;
    gap: 15px;
}


label{
    width:100px;
}

input {
    width:100%;
}

.listWrapper {
    overflow:auto;
    padding:20px;
    
    display:flex;
    flex-direction:column;
    gap:20px;
}

.item {
    padding:10px;
    
    display:grid;
    grid-template-columns: 1fr 100px;
    grid-template-rows: 30px repeat(2, 30px);
    gap:5px;
}

.item *{
    padding:5px;
}

.title {
    grid-row: 1 / 2; 
    grid-column: 1 / 2;
}
.desc {
    grid-row: 2 / 4;
}

.delete-item-btn {
    grid-row:1 / 2;
}

.dueDate, .priority {
    display:flex;
    justify-content: center;
    align-items: center;
}

.item-form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, auto);
    gap: 10px
}

.item-form > .form-group {
    grid-column: 1 / 3;
}

fieldset {
    grid-column: 1 / 3;
    width:100%;
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;
}

.radio-group {
    display:flex;
}

.delete-btn{
    background-color:var(--negative);
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,mBAAmB;IACnB,iBAAiB;IACjB,iBAAiB;AACrB;AACA;IACI,qBAAqB;IACrB,QAAQ,EAAE,SAAS;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;;IAEZ,4BAA4B;;IAE5B,YAAY;IACZ,qBAAqB;IACrB,kBAAkB;AACtB;AACA;IACI,cAAc;IACd,WAAW;IACX,UAAU;;IAEV,YAAY;IACZ,+CAA+C;AACnD;;AAEA;IACI,aAAa;IACb,+BAA+B;AACnC;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,iBAAiB;;IAEjB,6BAA6B;;IAE7B,aAAa;IACb,6BAA6B;IAC7B,SAAS;AACb;;;AAGA;IACI,kBAAkB;;IAElB,+BAA+B;IAC/B,iBAAiB;IACjB,SAAS;AACb;AACA;IACI,uBAAuB;IACvB,oBAAoB;AACxB;AACA;IACI,eAAe;IACf,eAAe;IACf,iBAAiB;IACjB,MAAM;AACV;AACA;;IAEI,4BAA4B;IAC5B,oBAAoB;IACpB,cAAc;AAClB;;AAEA;IACI,+BAA+B;IAC/B,6BAA6B;IAC7B,iBAAiB;AACrB;;;;AAIA;IACI,YAAY;;AAEhB;;AAEA;IACI,iBAAiB;IACjB,KAAK;IACL,YAAY;IACZ,WAAW;IACX,+BAA+B;AACnC;AACA;IACI,iBAAiB;IACjB,OAAO,EAAE,MAAM,EAAE,QAAQ;IACzB,cAAc;IACd,YAAY;;IAEZ,WAAW;IACX,YAAY;;IAEZ,mDAAmD;IACnD,6BAA6B;IAC7B,QAAQ;AACZ;;;AAGA;IACI,kBAAkB;;IAElB,YAAY;IACZ,gCAAgC;IAChC,SAAS;AACb;;;AAGA;IACI,WAAW;AACf;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,YAAY;;IAEZ,YAAY;IACZ,qBAAqB;IACrB,QAAQ;AACZ;;AAEA;IACI,YAAY;;IAEZ,YAAY;IACZ,gCAAgC;IAChC,wCAAwC;IACxC,OAAO;AACX;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;AACA;IACI,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,mCAAmC;IACnC;AACJ;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,4BAA4B;IAC5B,cAAc;AAClB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gCAAgC;AACpC","sourcesContent":[":root {\n    --base:#FEFDF2;\n    --base-dark:#FFFEEB;\n    --accent1:#FFE770;\n    --accent2:#3C3022;\n}\n*{ \n    box-sizing:border-box;\n    margin:0; padding:0;\n    border: 1px solid black;\n}\n\nbody {\n    height:100vh;\n\n    background-color:var(--base);\n\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n}\n.content {\n    padding:60px 0;\n    height:100%;\n    width:100%;\n\n    display:grid;\n    grid-template-columns: minmax(200px, 300px) 1fr;\n}\n\n.sidebar-wrapper {\n    padding: 20px;\n    background-color:var(--accent2);\n}\n\n.sidebar, .navbar {\n    display:flex;\n    flex-direction:column;\n    gap:10px;\n}\n\n.nav-entry{\n    padding: 5px;\n    position:relative; \n\n    border: 1px solid var(--base);\n\n    display: flex;\n    justify-content:space-between;\n    gap: 40px;\n}\n\n\n.sidebar .delete-btn {\n    position: absolute;\n\n    background-color:var(--accent2);\n    color:var(--base);\n    right:5px;\n}\n.sidebar .delete-btn:hover {\n    background: var(--base);\n    color:var(--accent2);\n}\n.nav-btn, .new-list-btn{\n    appearance:none;\n    background:none;\n    color:var(--base);\n    flex:1;\n}\n.nav-btn:hover, .new-list-btn:hover {\n    \n    background-color:var(--base);\n    color:var(--accent2);\n    cursor:pointer;\n}\n\n.new-list-btn {\n    background-color:var(--accent2);\n    border: 1px solid var(--base);\n    color:var(--base);\n}\n\n\n\n.navbar {\n    display:flex;\n    \n}\n\n.form-wrapper {\n    position:absolute;\n    top:0;\n    height:100vh;\n    width:100vw;\n    background:rgba(0, 0, 0, 0.575);\n}\n.list-form {\n    position:absolute;\n    top:30%; left:0; right: 0;\n    margin: 0 auto;    \n    display:grid;\n    \n    width:300px;\n    height:300px;\n\n    grid-template-columns: [start] repeat(2, 1fr) [end];\n    grid-template-rows: auto auto;\n    gap:10px;\n}\n\n\n.form-group {\n    grid-column: 1 / 3;\n\n    display:grid;\n    grid-template-columns: 100px 1fr;\n    gap: 15px;\n}\n\n\nlabel{\n    width:100px;\n}\n\ninput {\n    width:100%;\n}\n\n.listWrapper {\n    overflow:auto;\n    padding:20px;\n    \n    display:flex;\n    flex-direction:column;\n    gap:20px;\n}\n\n.item {\n    padding:10px;\n    \n    display:grid;\n    grid-template-columns: 1fr 100px;\n    grid-template-rows: 30px repeat(2, 30px);\n    gap:5px;\n}\n\n.item *{\n    padding:5px;\n}\n\n.title {\n    grid-row: 1 / 2; \n    grid-column: 1 / 2;\n}\n.desc {\n    grid-row: 2 / 4;\n}\n\n.delete-item-btn {\n    grid-row:1 / 2;\n}\n\n.dueDate, .priority {\n    display:flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.item-form {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(5, auto);\n    gap: 10px\n}\n\n.item-form > .form-group {\n    grid-column: 1 / 3;\n}\n\nfieldset {\n    grid-column: 1 / 3;\n    width:100%;\n    display:flex;\n    justify-content:space-evenly;\n    flex-wrap:wrap;\n}\n\n.radio-group {\n    display:flex;\n}\n\n.delete-btn{\n    background-color:var(--negative);\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   collection: () => (/* binding */ collection),
/* harmony export */   item: () => (/* binding */ item),
/* harmony export */   list: () => (/* binding */ list)
/* harmony export */ });
const item = (title, desc, dueDate, priority) => {    
    return {title, desc, dueDate, priority}
}

const list = (name) => {
    const _name = name;
    const _items = [];

    // adds item element to array (if one with the same title does not exist)
    const addItem = (item) => {
        // check if item with item.title already exists
        const index = indexOf(item.title);
        if (indexOf(item.title) || index)
        {
            console.log('item already exists');
        }
        else
        {
            _items.push(item)
        }
    }

    const deleteItem = (itemTitle) => {
        const index = indexOf(itemTitle);
        if (index || index === 0) {
            _items.splice(index, 1);
        }
        else {
            console.log('no such item');
        }
    }

    // returns the index of the item object with title 'itemTitle'
    const indexOf = (itemTitle) => {
        for (let index = 0; index < _items.length; index++) {
            if (_items[index].title === itemTitle)
                return index;
        }
        return NaN;
    }

    return {
        get name() {
            return _name;
        },
        // returns internal array of items
        get items() {
            return _items;
        },
        addItem, deleteItem
    }
}

const collection = () => {
    const _lists = [];

     // adds list element to array (if one with the same title does not exist)
     const addList = (list) => {
        // check if list with list.name already exists
        const index = indexOf(list.name);
        if (indexOf(list.name) || index)
        {
            console.log('list already exists');
        }
        else
        {
            _lists.push(list)
        }
    }

    const deleteList = (listName) => {
        const index = indexOf(listName);
        if (index || index === 0) {
            _lists.splice(index, 1);
        }
        else {
            console.log('no such list');
        }
    }

    // returns the index of the list object with name 'listName'
    const indexOf = (listName) => {
        for (let index = 0; index < _lists.length; index++) {
            if (_lists[index].name === listName)
                return index;
        }
        return NaN;
    }

    const findList = (listName) => {
        return _lists.find(list => list.name === listName);
    }
    return {
        get lists() {
            return _lists;
        },
        get firstList() {
            if (_lists.length < 1)
                return undefined;
            else
                return _lists[0];
        },
        addList, deleteList, findList
    }
}

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uiHandler: () => (/* binding */ uiHandler)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");


// class to covert todo related objects into dom elements
const todoConverter = (() => {
   // create list element
    const renderList = (list) => {
        if (!list) {
            return
        }
        const listElement = document.createElement('div');
        listElement.classList.add('list');
        // loop through list items then append a rendered list tiem
        list.items.forEach(item => listElement.appendChild(renderItem(item)));
        return listElement;
    }
   // return rendered list itme
   const renderItem = (item) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.setAttribute('data-title', item.title)
        for (const key in item) {
            const infoElement = document.createElement('div');
            infoElement.classList.add(`${key}`);
            infoElement.textContent = `${item[key]}`;
            itemElement.append(infoElement);
        }
        return itemElement;
    }

    return {renderList};
})();

// creates a uiHandler that will load dom elements within 'container' element
const uiHandler = (container) => {
    
    const sidebarWrapper = document.createElement('div');
    sidebarWrapper.classList.add('sidebar-wrapper');
    const listWrapper = document.createElement('div');
    listWrapper.classList.add('list-wrapper');

    const _collection = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.collection)();
    
    // sample elements
    const testList1 = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.list)('test1');
    testList1.addItem((0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.item)('title1', 'desc1', 'date1', 'priority1'));
    testList1.addItem((0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.item)('title2', 'desc2', 'date2', 'priority2'));
    testList1.addItem((0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.item)('title3', 'desc3', 'date3', 'priority1'));
    const testList2 = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.list)('test2');
    testList2.addItem((0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.item)('title1', 'desc1', 'date1', 'priority1'));
    testList2.addItem((0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.item)('title2', 'desc2', 'date2', 'priority2'));
    testList2.addItem((0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.item)('title3', 'desc3', 'date3', 'priority1'));
    _collection.addList(testList1);
    _collection.addList(testList2);

    let _currentList = _collection.firstList;
    
    // dom element that ui Handler will direct out to
    const _container = container;

    const setCurrentList = (list) => {
        _currentList = list;
    }
    
    // removes element from given parent in DOM
    const unloadElement = (parent, element) => {
    parent.removeChild(element);
    }

    // puts togther rendered elements onto the page
    const loadPage = () => {
        loadSidebar();
        loadList();

        _container.appendChild(sidebarWrapper);
        _container.appendChild(listWrapper);
    }

    // function that loads the sidebar into sidebarWrapper
    const loadSidebar = () => {
        sidebarWrapper.appendChild(renderSidebar());

    }
    // function taht removes sidebar from sidebarWrapper
    const unloadSidebar = () => {
        sidebarWrapper.innerHTML = '';
    }

    // renders side bar element
    const renderSidebar = () => {
        const sidebar = document.createElement('div');
        sidebar.classList.add('sidebar');

        const listHeader = document.createElement('h2');
        listHeader.classList.add('sidebar-header');
        listHeader.textContent = 'Lists';
        sidebar.appendChild(listHeader);

        // button to open form to add new list
        const newListBtn = document.createElement('button');
        newListBtn.classList.add('new-list-btn');
        newListBtn.textContent = 'Add New List';
        newListBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (!document.querySelector('.list-form'))
                _container.appendChild(renderListInput(_container));
        })
        sidebar.appendChild(newListBtn);

        sidebar.appendChild(renderNavbar(sidebar));

        return sidebar;
    }
    
    // renders buttons for loading each list
    const renderNavbar = () => {
        const navbar = document.createElement('div');
        navbar.classList.add('navbar');

        // a navEntry element for each list; allows access and deletion of list
        _collection.lists.forEach(list => {
            const navEntry = document.createElement('div');
            navEntry.classList.add('nav-entry');
            
            // creation of button to open/load lists
            const navBtn = document.createElement('button');
            navBtn.classList.add('nav-btn');
            navBtn.textContent = list.name;
            navBtn.addEventListener('click', () => {
                setCurrentList(list)
                unloadList();
                loadList();
            });
            navEntry.appendChild(navBtn);

            // creation of button to delete list
            const deleteListBtn = document.createElement('button');
            deleteListBtn.classList.add('delete-btn');
            deleteListBtn.setAttribute('data-target', list.name);
            deleteListBtn.textContent = 'X';
            deleteListBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (list === _currentList)
                {
                    unloadList();
                } 
                
                _collection.deleteList(list.name);
                unloadSidebar();
                loadSidebar();
                

            })
            navEntry.appendChild(deleteListBtn);

            navbar.appendChild(navEntry);
        })

        return navbar;
    }

    // remders a form for adding list elements
    // container parameter 
    const renderListInput = (container) => {
        const formWrapper = document.createElement('div');
        formWrapper.classList.add('form-wrapper');
        // create form element
        const listForm = document.createElement('form');
        listForm.classList.add('list-form');
        
        // create form-group
        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group');

        const label = '<label for="name-input">List Name</label>'
        const input = '<input id="name-input" name="name-input" placeholder="List Name"/>'
        formGroup.innerHTML = label + input;

        listForm.appendChild(formGroup);

        // creates button to close list form
        const cancelListBtn = document.createElement('button');
        cancelListBtn.textContent = 'cancel';
        cancelListBtn.classList.add('delete-btn');
        cancelListBtn.addEventListener('click', (e) => {
            e.preventDefault();
            unloadElement(container, formWrapper);
        })
        listForm.append(cancelListBtn);

        // button that adds list to collection then reloads sidebar
        const addListBtn = document.createElement('button');
        addListBtn.classList.add('add-list-btn');
        addListBtn.textContent = '+';
        addListBtn.addEventListener('click', (e) => {
            e.preventDefault();

            const newName = document.querySelector('#name-input').value;
            _collection.addList((0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.list)(newName));

            unloadSidebar();
            loadSidebar();
            unloadElement(container, formWrapper);
        })
        listForm.appendChild(addListBtn);

        formWrapper.appendChild(listForm)
        
        return formWrapper;
    }
    
   
    

    // will call to render the items of '_currentList' as dom elements
    // then will update the listWrapper element with said list
    // also adds delete buttons for each item element
    const loadList = () => {
        const renderedList = todoConverter.renderList(_currentList);
        const itemElements = renderedList.querySelectorAll('.item');

        listWrapper.appendChild(renderedList);

        // adding delete buttons for item elements
        itemElements.forEach(itemElement => {
            const itemTitle = itemElement.getAttribute('data-title');
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.setAttribute('data-target', itemTitle);
            deleteBtn.textContent = 'X';
            
            deleteBtn.addEventListener('click', () => {
                // remove item from dom
                unloadItem(renderedList, itemElement);

                // delete item from '_currentList'
                _currentList.deleteItem(itemTitle);

            })

            itemElement.appendChild(deleteBtn);
        })

        // add an addItem button that
        const newItemBtn = document.createElement('button');
        newItemBtn.classList.add('new-item-btn');
        newItemBtn.textContent = 'new item';
        newItemBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (!document.querySelector('.item-form'))
                _container.appendChild(renderItemInput(_container));
        });
        listWrapper.appendChild(newItemBtn);
    }

    // removes itemElement from Dom
    const unloadItem = (listElement, itemElement) => {
        listElement.removeChild(itemElement);
    }
    
    // removes listElement from DOM
    const unloadList = () => {
        listWrapper.innerHTML = '';
    }

    

    const renderItemInput = (container) => {
        const formWrapper = document.createElement('div');
        formWrapper.classList.add('form-wrapper');

        const itemForm = document.createElement('form');
        itemForm.classList.add('item-form');

        // creation of form group for new item title
        const titleGroup = document.createElement('div');
        titleGroup.classList.add('form-group');

        const titleLabel = '<label for="title-input">Title</label>';
        const titleInput = '<input id="title-input" name="title-input placeholder="Title"/>';
        titleGroup.innerHTML = titleLabel + titleInput;
        itemForm.appendChild(titleGroup)

        // creation of form group for new item description
        const descGroup = document.createElement('div');
        descGroup.classList.add('form-group');

        const descLabel = '<label for="desc-input">Description</label>';
        const descInput = '<input id="desc-input" name="desc-input" placeholder="Description"/>';
        descGroup.innerHTML = descLabel + descInput;
        itemForm.appendChild(descGroup);
        
        // creation of form group for new item date
        const dateGroup = document.createElement('div');
        dateGroup.classList.add('form-group');

        const dateLabel = '<label for="date-input">Date</label>';
        const dateInput = '<input id="date-input" name="date-input"/>';
        dateGroup.innerHTML = dateLabel + dateInput;
        itemForm.appendChild(dateGroup);
        // creation of form group for new item priority
        const priorityGroup = document.createElement('div');
        priorityGroup.classList.add('form-group');
        const prioritySet = document.createElement('fieldset');
        
        const priorityLegend = '<legend>Priority</legend>';
        
        const priorityLowInner = '<input type="radio" id="priority-low" name="priority-input" value="low"/>' + 
                            '<label for="priority-low">Low</label>'
             
        const priorityLow = `<div class="radio-group">${priorityLowInner}</div>`

        const priorityMedInner = '<input type="radio" id="priority-med" name="priority-input" value="med"/>' +
                            '<label for="priority-med">Med</label>';
                            
        const priorityMed = `<div class="radio-group">${priorityMedInner}</div>`

        const priorityHighInner = '<input type="radio" id="priority-high" name="priority-input" value="high"/>' + 
                             '<label for="priority-high">High</label>';
        const priorityHigh = `<div class="radio-group">${priorityHighInner}</div>`

        prioritySet.innerHTML = priorityLegend + priorityLow + priorityMed + priorityHigh;
        priorityGroup.appendChild(prioritySet);
        itemForm.appendChild(priorityGroup);

       

        // add item to cancel item form
        const cancelItemBtn = document.createElement('button');
        cancelItemBtn.classList.add('delete-btn');
        cancelItemBtn.textContent = 'cancel'

        cancelItemBtn.addEventListener('click', (e) => {
            e.preventDefault();

            unloadElement(container, formWrapper);
        })
        itemForm.appendChild(cancelItemBtn);
        
        // create button to add new element from info
        const addItemBtn = document.createElement('button');
        addItemBtn.classList.add('add-item-btn');
        addItemBtn.textContent = 'add item';

        // addItem btn should add new button from form info, then reload list
        addItemBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // capture input from input fields;
            const newTitle = document.querySelector('#title-input').value;
            const newDesc = document.querySelector('#desc-input').value;
            const newDate = document.querySelector('#date-input').value;
            const newPriority = prioritySet.querySelector(':checked').value;
            
            const newItem = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.item)(newTitle, newDesc, newDate, newPriority);
            _currentList.addItem(newItem);
            unloadList();
            loadList();
            unloadElement(container, formWrapper);

        })
        itemForm.appendChild(addItemBtn);

        formWrapper.appendChild(itemForm);
        
        return formWrapper;
        
    }
    

  
    return {
        loadPage
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const content = document.querySelector('.content');
const handler = (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.uiHandler)(content);
handler.loadPage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLDhDQUFJOztBQUVwQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxhQUFhOztBQUViO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGlCQUFpQjs7QUFFekU7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGlCQUFpQjs7QUFFekU7QUFDQTtBQUNBLHlEQUF5RCxrQkFBa0I7O0FBRTNFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsOENBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3BYQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBZ0Q7QUFDZjtBQUNaO0FBQ3JCO0FBQ0EsZ0JBQWdCLGlEQUFTO0FBQ3pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAtLWJhc2U6I0ZFRkRGMjtcbiAgICAtLWJhc2UtZGFyazojRkZGRUVCO1xuICAgIC0tYWNjZW50MTojRkZFNzcwO1xuICAgIC0tYWNjZW50MjojM0MzMDIyO1xufVxuKnsgXG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xuICAgIG1hcmdpbjowOyBwYWRkaW5nOjA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbmJvZHkge1xuICAgIGhlaWdodDoxMDB2aDtcblxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tYmFzZSk7XG5cbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbn1cbi5jb250ZW50IHtcbiAgICBwYWRkaW5nOjYwcHggMDtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICB3aWR0aDoxMDAlO1xuXG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwMHB4LCAzMDBweCkgMWZyO1xufVxuXG4uc2lkZWJhci13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tYWNjZW50Mik7XG59XG5cbi5zaWRlYmFyLCAubmF2YmFyIHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgIGdhcDoxMHB4O1xufVxuXG4ubmF2LWVudHJ5e1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTsgXG5cbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYXNlKTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiA0MHB4O1xufVxuXG5cbi5zaWRlYmFyIC5kZWxldGUtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWFjY2VudDIpO1xuICAgIGNvbG9yOnZhcigtLWJhc2UpO1xuICAgIHJpZ2h0OjVweDtcbn1cbi5zaWRlYmFyIC5kZWxldGUtYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYXNlKTtcbiAgICBjb2xvcjp2YXIoLS1hY2NlbnQyKTtcbn1cbi5uYXYtYnRuLCAubmV3LWxpc3QtYnRue1xuICAgIGFwcGVhcmFuY2U6bm9uZTtcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XG4gICAgY29sb3I6dmFyKC0tYmFzZSk7XG4gICAgZmxleDoxO1xufVxuLm5hdi1idG46aG92ZXIsIC5uZXctbGlzdC1idG46aG92ZXIge1xuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tYmFzZSk7XG4gICAgY29sb3I6dmFyKC0tYWNjZW50Mik7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG59XG5cbi5uZXctbGlzdC1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tYWNjZW50Mik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFzZSk7XG4gICAgY29sb3I6dmFyKC0tYmFzZSk7XG59XG5cblxuXG4ubmF2YmFyIHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgXG59XG5cbi5mb3JtLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRvcDowO1xuICAgIGhlaWdodDoxMDB2aDtcbiAgICB3aWR0aDoxMDB2dztcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC41NzUpO1xufVxuLmxpc3QtZm9ybSB7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOjMwJTsgbGVmdDowOyByaWdodDogMDtcbiAgICBtYXJnaW46IDAgYXV0bzsgICAgXG4gICAgZGlzcGxheTpncmlkO1xuICAgIFxuICAgIHdpZHRoOjMwMHB4O1xuICAgIGhlaWdodDozMDBweDtcblxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogW3N0YXJ0XSByZXBlYXQoMiwgMWZyKSBbZW5kXTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcbiAgICBnYXA6MTBweDtcbn1cblxuXG4uZm9ybS1ncm91cCB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuXG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMWZyO1xuICAgIGdhcDogMTVweDtcbn1cblxuXG5sYWJlbHtcbiAgICB3aWR0aDoxMDBweDtcbn1cblxuaW5wdXQge1xuICAgIHdpZHRoOjEwMCU7XG59XG5cbi5saXN0V3JhcHBlciB7XG4gICAgb3ZlcmZsb3c6YXV0bztcbiAgICBwYWRkaW5nOjIwcHg7XG4gICAgXG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBnYXA6MjBweDtcbn1cblxuLml0ZW0ge1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBcbiAgICBkaXNwbGF5OmdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTAwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4IHJlcGVhdCgyLCAzMHB4KTtcbiAgICBnYXA6NXB4O1xufVxuXG4uaXRlbSAqe1xuICAgIHBhZGRpbmc6NXB4O1xufVxuXG4udGl0bGUge1xuICAgIGdyaWQtcm93OiAxIC8gMjsgXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xufVxuLmRlc2Mge1xuICAgIGdyaWQtcm93OiAyIC8gNDtcbn1cblxuLmRlbGV0ZS1pdGVtLWJ0biB7XG4gICAgZ3JpZC1yb3c6MSAvIDI7XG59XG5cbi5kdWVEYXRlLCAucHJpb3JpdHkge1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaXRlbS1mb3JtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgYXV0byk7XG4gICAgZ2FwOiAxMHB4XG59XG5cbi5pdGVtLWZvcm0gPiAuZm9ybS1ncm91cCB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xufVxuXG5maWVsZHNldCB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XG4gICAgZmxleC13cmFwOndyYXA7XG59XG5cbi5yYWRpby1ncm91cCB7XG4gICAgZGlzcGxheTpmbGV4O1xufVxuXG4uZGVsZXRlLWJ0bntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW5lZ2F0aXZlKTtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTs7SUFFWiw0QkFBNEI7O0lBRTVCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFVBQVU7O0lBRVYsWUFBWTtJQUNaLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7O0lBRWpCLDZCQUE2Qjs7SUFFN0IsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixTQUFTO0FBQ2I7OztBQUdBO0lBQ0ksa0JBQWtCOztJQUVsQiwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsTUFBTTtBQUNWO0FBQ0E7O0lBRUksNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLDZCQUE2QjtJQUM3QixpQkFBaUI7QUFDckI7Ozs7QUFJQTtJQUNJLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLEtBQUs7SUFDTCxZQUFZO0lBQ1osV0FBVztJQUNYLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUTtJQUN6QixjQUFjO0lBQ2QsWUFBWTs7SUFFWixXQUFXO0lBQ1gsWUFBWTs7SUFFWixtREFBbUQ7SUFDbkQsNkJBQTZCO0lBQzdCLFFBQVE7QUFDWjs7O0FBR0E7SUFDSSxrQkFBa0I7O0lBRWxCLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsU0FBUztBQUNiOzs7QUFHQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZOztJQUVaLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksWUFBWTs7SUFFWixZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLHdDQUF3QztJQUN4QyxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxtQ0FBbUM7SUFDbkM7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tYmFzZTojRkVGREYyO1xcbiAgICAtLWJhc2UtZGFyazojRkZGRUVCO1xcbiAgICAtLWFjY2VudDE6I0ZGRTc3MDtcXG4gICAgLS1hY2NlbnQyOiMzQzMwMjI7XFxufVxcbip7IFxcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjowOyBwYWRkaW5nOjA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJhc2UpO1xcblxcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbn1cXG4uY29udGVudCB7XFxuICAgIHBhZGRpbmc6NjBweCAwO1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgd2lkdGg6MTAwJTtcXG5cXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMzAwcHgpIDFmcjtcXG59XFxuXFxuLnNpZGViYXItd3JhcHBlciB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tYWNjZW50Mik7XFxufVxcblxcbi5zaWRlYmFyLCAubmF2YmFyIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxuICAgIGdhcDoxMHB4O1xcbn1cXG5cXG4ubmF2LWVudHJ5e1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlOyBcXG5cXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFzZSk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IDQwcHg7XFxufVxcblxcblxcbi5zaWRlYmFyIC5kZWxldGUtYnRuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWFjY2VudDIpO1xcbiAgICBjb2xvcjp2YXIoLS1iYXNlKTtcXG4gICAgcmlnaHQ6NXB4O1xcbn1cXG4uc2lkZWJhciAuZGVsZXRlLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhc2UpO1xcbiAgICBjb2xvcjp2YXIoLS1hY2NlbnQyKTtcXG59XFxuLm5hdi1idG4sIC5uZXctbGlzdC1idG57XFxuICAgIGFwcGVhcmFuY2U6bm9uZTtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbiAgICBjb2xvcjp2YXIoLS1iYXNlKTtcXG4gICAgZmxleDoxO1xcbn1cXG4ubmF2LWJ0bjpob3ZlciwgLm5ldy1saXN0LWJ0bjpob3ZlciB7XFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJhc2UpO1xcbiAgICBjb2xvcjp2YXIoLS1hY2NlbnQyKTtcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbi5uZXctbGlzdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWFjY2VudDIpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYXNlKTtcXG4gICAgY29sb3I6dmFyKC0tYmFzZSk7XFxufVxcblxcblxcblxcbi5uYXZiYXIge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIFxcbn1cXG5cXG4uZm9ybS13cmFwcGVyIHtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHRvcDowO1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxuICAgIHdpZHRoOjEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC41NzUpO1xcbn1cXG4ubGlzdC1mb3JtIHtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHRvcDozMCU7IGxlZnQ6MDsgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbjogMCBhdXRvOyAgICBcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBcXG4gICAgd2lkdGg6MzAwcHg7XFxuICAgIGhlaWdodDozMDBweDtcXG5cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBbc3RhcnRdIHJlcGVhdCgyLCAxZnIpIFtlbmRdO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gICAgZ2FwOjEwcHg7XFxufVxcblxcblxcbi5mb3JtLWdyb3VwIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcblxcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMWZyO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcblxcbmxhYmVse1xcbiAgICB3aWR0aDoxMDBweDtcXG59XFxuXFxuaW5wdXQge1xcbiAgICB3aWR0aDoxMDAlO1xcbn1cXG5cXG4ubGlzdFdyYXBwZXIge1xcbiAgICBvdmVyZmxvdzphdXRvO1xcbiAgICBwYWRkaW5nOjIwcHg7XFxuICAgIFxcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXG4gICAgZ2FwOjIwcHg7XFxufVxcblxcbi5pdGVtIHtcXG4gICAgcGFkZGluZzoxMHB4O1xcbiAgICBcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMDBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4IHJlcGVhdCgyLCAzMHB4KTtcXG4gICAgZ2FwOjVweDtcXG59XFxuXFxuLml0ZW0gKntcXG4gICAgcGFkZGluZzo1cHg7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjsgXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuLmRlc2Mge1xcbiAgICBncmlkLXJvdzogMiAvIDQ7XFxufVxcblxcbi5kZWxldGUtaXRlbS1idG4ge1xcbiAgICBncmlkLXJvdzoxIC8gMjtcXG59XFxuXFxuLmR1ZURhdGUsIC5wcmlvcml0eSB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pdGVtLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCBhdXRvKTtcXG4gICAgZ2FwOiAxMHB4XFxufVxcblxcbi5pdGVtLWZvcm0gPiAuZm9ybS1ncm91cCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcXG4gICAgZmxleC13cmFwOndyYXA7XFxufVxcblxcbi5yYWRpby1ncm91cCB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuXFxuLmRlbGV0ZS1idG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tbmVnYXRpdmUpO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGl0ZW0gPSAodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7ICAgIFxuICAgIHJldHVybiB7dGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5fVxufVxuXG5leHBvcnQgY29uc3QgbGlzdCA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgX25hbWUgPSBuYW1lO1xuICAgIGNvbnN0IF9pdGVtcyA9IFtdO1xuXG4gICAgLy8gYWRkcyBpdGVtIGVsZW1lbnQgdG8gYXJyYXkgKGlmIG9uZSB3aXRoIHRoZSBzYW1lIHRpdGxlIGRvZXMgbm90IGV4aXN0KVxuICAgIGNvbnN0IGFkZEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgICAgICAvLyBjaGVjayBpZiBpdGVtIHdpdGggaXRlbS50aXRsZSBhbHJlYWR5IGV4aXN0c1xuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4T2YoaXRlbS50aXRsZSk7XG4gICAgICAgIGlmIChpbmRleE9mKGl0ZW0udGl0bGUpIHx8IGluZGV4KVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaXRlbSBhbHJlYWR5IGV4aXN0cycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgX2l0ZW1zLnB1c2goaXRlbSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSAoaXRlbVRpdGxlKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5kZXhPZihpdGVtVGl0bGUpO1xuICAgICAgICBpZiAoaW5kZXggfHwgaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIF9pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIHN1Y2ggaXRlbScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gb2JqZWN0IHdpdGggdGl0bGUgJ2l0ZW1UaXRsZSdcbiAgICBjb25zdCBpbmRleE9mID0gKGl0ZW1UaXRsZSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgX2l0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKF9pdGVtc1tpbmRleF0udGl0bGUgPT09IGl0ZW1UaXRsZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfbmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gcmV0dXJucyBpbnRlcm5hbCBhcnJheSBvZiBpdGVtc1xuICAgICAgICBnZXQgaXRlbXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2l0ZW1zO1xuICAgICAgICB9LFxuICAgICAgICBhZGRJdGVtLCBkZWxldGVJdGVtXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgY29sbGVjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBfbGlzdHMgPSBbXTtcblxuICAgICAvLyBhZGRzIGxpc3QgZWxlbWVudCB0byBhcnJheSAoaWYgb25lIHdpdGggdGhlIHNhbWUgdGl0bGUgZG9lcyBub3QgZXhpc3QpXG4gICAgIGNvbnN0IGFkZExpc3QgPSAobGlzdCkgPT4ge1xuICAgICAgICAvLyBjaGVjayBpZiBsaXN0IHdpdGggbGlzdC5uYW1lIGFscmVhZHkgZXhpc3RzXG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5kZXhPZihsaXN0Lm5hbWUpO1xuICAgICAgICBpZiAoaW5kZXhPZihsaXN0Lm5hbWUpIHx8IGluZGV4KVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbGlzdCBhbHJlYWR5IGV4aXN0cycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgX2xpc3RzLnB1c2gobGlzdClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUxpc3QgPSAobGlzdE5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpbmRleE9mKGxpc3ROYW1lKTtcbiAgICAgICAgaWYgKGluZGV4IHx8IGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBfbGlzdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBzdWNoIGxpc3QnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBsaXN0IG9iamVjdCB3aXRoIG5hbWUgJ2xpc3ROYW1lJ1xuICAgIGNvbnN0IGluZGV4T2YgPSAobGlzdE5hbWUpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IF9saXN0cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmIChfbGlzdHNbaW5kZXhdLm5hbWUgPT09IGxpc3ROYW1lKVxuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmRMaXN0ID0gKGxpc3ROYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiBfbGlzdHMuZmluZChsaXN0ID0+IGxpc3QubmFtZSA9PT0gbGlzdE5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQgbGlzdHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2xpc3RzO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgZmlyc3RMaXN0KCkge1xuICAgICAgICAgICAgaWYgKF9saXN0cy5sZW5ndGggPCAxKVxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9saXN0c1swXTtcbiAgICAgICAgfSxcbiAgICAgICAgYWRkTGlzdCwgZGVsZXRlTGlzdCwgZmluZExpc3RcbiAgICB9XG59IiwiaW1wb3J0IHtpdGVtLCBsaXN0LCBjb2xsZWN0aW9ufSBmcm9tICcuL3RvZG8uanMnXG5cbi8vIGNsYXNzIHRvIGNvdmVydCB0b2RvIHJlbGF0ZWQgb2JqZWN0cyBpbnRvIGRvbSBlbGVtZW50c1xuY29uc3QgdG9kb0NvbnZlcnRlciA9ICgoKSA9PiB7XG4gICAvLyBjcmVhdGUgbGlzdCBlbGVtZW50XG4gICAgY29uc3QgcmVuZGVyTGlzdCA9IChsaXN0KSA9PiB7XG4gICAgICAgIGlmICghbGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGlzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbGlzdCcpO1xuICAgICAgICAvLyBsb29wIHRocm91Z2ggbGlzdCBpdGVtcyB0aGVuIGFwcGVuZCBhIHJlbmRlcmVkIGxpc3QgdGllbVxuICAgICAgICBsaXN0Lml0ZW1zLmZvckVhY2goaXRlbSA9PiBsaXN0RWxlbWVudC5hcHBlbmRDaGlsZChyZW5kZXJJdGVtKGl0ZW0pKSk7XG4gICAgICAgIHJldHVybiBsaXN0RWxlbWVudDtcbiAgICB9XG4gICAvLyByZXR1cm4gcmVuZGVyZWQgbGlzdCBpdG1lXG4gICBjb25zdCByZW5kZXJJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgICAgICBpdGVtRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnLCBpdGVtLnRpdGxlKVxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBpdGVtKSB7XG4gICAgICAgICAgICBjb25zdCBpbmZvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaW5mb0VsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtrZXl9YCk7XG4gICAgICAgICAgICBpbmZvRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2l0ZW1ba2V5XX1gO1xuICAgICAgICAgICAgaXRlbUVsZW1lbnQuYXBwZW5kKGluZm9FbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlbUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtyZW5kZXJMaXN0fTtcbn0pKCk7XG5cbi8vIGNyZWF0ZXMgYSB1aUhhbmRsZXIgdGhhdCB3aWxsIGxvYWQgZG9tIGVsZW1lbnRzIHdpdGhpbiAnY29udGFpbmVyJyBlbGVtZW50XG5leHBvcnQgY29uc3QgdWlIYW5kbGVyID0gKGNvbnRhaW5lcikgPT4ge1xuICAgIFxuICAgIGNvbnN0IHNpZGViYXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhcldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci13cmFwcGVyJyk7XG4gICAgY29uc3QgbGlzdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaXN0V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdsaXN0LXdyYXBwZXInKTtcblxuICAgIGNvbnN0IF9jb2xsZWN0aW9uID0gY29sbGVjdGlvbigpO1xuICAgIFxuICAgIC8vIHNhbXBsZSBlbGVtZW50c1xuICAgIGNvbnN0IHRlc3RMaXN0MSA9IGxpc3QoJ3Rlc3QxJyk7XG4gICAgdGVzdExpc3QxLmFkZEl0ZW0oaXRlbSgndGl0bGUxJywgJ2Rlc2MxJywgJ2RhdGUxJywgJ3ByaW9yaXR5MScpKTtcbiAgICB0ZXN0TGlzdDEuYWRkSXRlbShpdGVtKCd0aXRsZTInLCAnZGVzYzInLCAnZGF0ZTInLCAncHJpb3JpdHkyJykpO1xuICAgIHRlc3RMaXN0MS5hZGRJdGVtKGl0ZW0oJ3RpdGxlMycsICdkZXNjMycsICdkYXRlMycsICdwcmlvcml0eTEnKSk7XG4gICAgY29uc3QgdGVzdExpc3QyID0gbGlzdCgndGVzdDInKTtcbiAgICB0ZXN0TGlzdDIuYWRkSXRlbShpdGVtKCd0aXRsZTEnLCAnZGVzYzEnLCAnZGF0ZTEnLCAncHJpb3JpdHkxJykpO1xuICAgIHRlc3RMaXN0Mi5hZGRJdGVtKGl0ZW0oJ3RpdGxlMicsICdkZXNjMicsICdkYXRlMicsICdwcmlvcml0eTInKSk7XG4gICAgdGVzdExpc3QyLmFkZEl0ZW0oaXRlbSgndGl0bGUzJywgJ2Rlc2MzJywgJ2RhdGUzJywgJ3ByaW9yaXR5MScpKTtcbiAgICBfY29sbGVjdGlvbi5hZGRMaXN0KHRlc3RMaXN0MSk7XG4gICAgX2NvbGxlY3Rpb24uYWRkTGlzdCh0ZXN0TGlzdDIpO1xuXG4gICAgbGV0IF9jdXJyZW50TGlzdCA9IF9jb2xsZWN0aW9uLmZpcnN0TGlzdDtcbiAgICBcbiAgICAvLyBkb20gZWxlbWVudCB0aGF0IHVpIEhhbmRsZXIgd2lsbCBkaXJlY3Qgb3V0IHRvXG4gICAgY29uc3QgX2NvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgIGNvbnN0IHNldEN1cnJlbnRMaXN0ID0gKGxpc3QpID0+IHtcbiAgICAgICAgX2N1cnJlbnRMaXN0ID0gbGlzdDtcbiAgICB9XG4gICAgXG4gICAgLy8gcmVtb3ZlcyBlbGVtZW50IGZyb20gZ2l2ZW4gcGFyZW50IGluIERPTVxuICAgIGNvbnN0IHVubG9hZEVsZW1lbnQgPSAocGFyZW50LCBlbGVtZW50KSA9PiB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIHB1dHMgdG9ndGhlciByZW5kZXJlZCBlbGVtZW50cyBvbnRvIHRoZSBwYWdlXG4gICAgY29uc3QgbG9hZFBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGxvYWRTaWRlYmFyKCk7XG4gICAgICAgIGxvYWRMaXN0KCk7XG5cbiAgICAgICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlYmFyV3JhcHBlcik7XG4gICAgICAgIF9jb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdFdyYXBwZXIpO1xuICAgIH1cblxuICAgIC8vIGZ1bmN0aW9uIHRoYXQgbG9hZHMgdGhlIHNpZGViYXIgaW50byBzaWRlYmFyV3JhcHBlclxuICAgIGNvbnN0IGxvYWRTaWRlYmFyID0gKCkgPT4ge1xuICAgICAgICBzaWRlYmFyV3JhcHBlci5hcHBlbmRDaGlsZChyZW5kZXJTaWRlYmFyKCkpO1xuXG4gICAgfVxuICAgIC8vIGZ1bmN0aW9uIHRhaHQgcmVtb3ZlcyBzaWRlYmFyIGZyb20gc2lkZWJhcldyYXBwZXJcbiAgICBjb25zdCB1bmxvYWRTaWRlYmFyID0gKCkgPT4ge1xuICAgICAgICBzaWRlYmFyV3JhcHBlci5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cbiAgICAvLyByZW5kZXJzIHNpZGUgYmFyIGVsZW1lbnRcbiAgICBjb25zdCByZW5kZXJTaWRlYmFyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuXG4gICAgICAgIGNvbnN0IGxpc3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBsaXN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItaGVhZGVyJyk7XG4gICAgICAgIGxpc3RIZWFkZXIudGV4dENvbnRlbnQgPSAnTGlzdHMnO1xuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGxpc3RIZWFkZXIpO1xuXG4gICAgICAgIC8vIGJ1dHRvbiB0byBvcGVuIGZvcm0gdG8gYWRkIG5ldyBsaXN0XG4gICAgICAgIGNvbnN0IG5ld0xpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbmV3TGlzdEJ0bi5jbGFzc0xpc3QuYWRkKCduZXctbGlzdC1idG4nKTtcbiAgICAgICAgbmV3TGlzdEJ0bi50ZXh0Q29udGVudCA9ICdBZGQgTmV3IExpc3QnO1xuICAgICAgICBuZXdMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtZm9ybScpKVxuICAgICAgICAgICAgICAgIF9jb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyTGlzdElucHV0KF9jb250YWluZXIpKTtcbiAgICAgICAgfSlcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChuZXdMaXN0QnRuKTtcblxuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHJlbmRlck5hdmJhcihzaWRlYmFyKSk7XG5cbiAgICAgICAgcmV0dXJuIHNpZGViYXI7XG4gICAgfVxuICAgIFxuICAgIC8vIHJlbmRlcnMgYnV0dG9ucyBmb3IgbG9hZGluZyBlYWNoIGxpc3RcbiAgICBjb25zdCByZW5kZXJOYXZiYXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJyk7XG5cbiAgICAgICAgLy8gYSBuYXZFbnRyeSBlbGVtZW50IGZvciBlYWNoIGxpc3Q7IGFsbG93cyBhY2Nlc3MgYW5kIGRlbGV0aW9uIG9mIGxpc3RcbiAgICAgICAgX2NvbGxlY3Rpb24ubGlzdHMuZm9yRWFjaChsaXN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hdkVudHJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBuYXZFbnRyeS5jbGFzc0xpc3QuYWRkKCduYXYtZW50cnknKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gY3JlYXRpb24gb2YgYnV0dG9uIHRvIG9wZW4vbG9hZCBsaXN0c1xuICAgICAgICAgICAgY29uc3QgbmF2QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBuYXZCdG4uY2xhc3NMaXN0LmFkZCgnbmF2LWJ0bicpO1xuICAgICAgICAgICAgbmF2QnRuLnRleHRDb250ZW50ID0gbGlzdC5uYW1lO1xuICAgICAgICAgICAgbmF2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRMaXN0KGxpc3QpXG4gICAgICAgICAgICAgICAgdW5sb2FkTGlzdCgpO1xuICAgICAgICAgICAgICAgIGxvYWRMaXN0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5hdkVudHJ5LmFwcGVuZENoaWxkKG5hdkJ0bik7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0aW9uIG9mIGJ1dHRvbiB0byBkZWxldGUgbGlzdFxuICAgICAgICAgICAgY29uc3QgZGVsZXRlTGlzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlTGlzdEJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnRuJyk7XG4gICAgICAgICAgICBkZWxldGVMaXN0QnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnLCBsaXN0Lm5hbWUpO1xuICAgICAgICAgICAgZGVsZXRlTGlzdEJ0bi50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgIGRlbGV0ZUxpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpZiAobGlzdCA9PT0gX2N1cnJlbnRMaXN0KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdW5sb2FkTGlzdCgpO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgX2NvbGxlY3Rpb24uZGVsZXRlTGlzdChsaXN0Lm5hbWUpO1xuICAgICAgICAgICAgICAgIHVubG9hZFNpZGViYXIoKTtcbiAgICAgICAgICAgICAgICBsb2FkU2lkZWJhcigpO1xuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbmF2RW50cnkuYXBwZW5kQ2hpbGQoZGVsZXRlTGlzdEJ0bik7XG5cbiAgICAgICAgICAgIG5hdmJhci5hcHBlbmRDaGlsZChuYXZFbnRyeSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIG5hdmJhcjtcbiAgICB9XG5cbiAgICAvLyByZW1kZXJzIGEgZm9ybSBmb3IgYWRkaW5nIGxpc3QgZWxlbWVudHNcbiAgICAvLyBjb250YWluZXIgcGFyYW1ldGVyIFxuICAgIGNvbnN0IHJlbmRlckxpc3RJbnB1dCA9IChjb250YWluZXIpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS13cmFwcGVyJyk7XG4gICAgICAgIC8vIGNyZWF0ZSBmb3JtIGVsZW1lbnRcbiAgICAgICAgY29uc3QgbGlzdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGxpc3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2xpc3QtZm9ybScpO1xuICAgICAgICBcbiAgICAgICAgLy8gY3JlYXRlIGZvcm0tZ3JvdXBcbiAgICAgICAgY29uc3QgZm9ybUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJyk7XG5cbiAgICAgICAgY29uc3QgbGFiZWwgPSAnPGxhYmVsIGZvcj1cIm5hbWUtaW5wdXRcIj5MaXN0IE5hbWU8L2xhYmVsPidcbiAgICAgICAgY29uc3QgaW5wdXQgPSAnPGlucHV0IGlkPVwibmFtZS1pbnB1dFwiIG5hbWU9XCJuYW1lLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJMaXN0IE5hbWVcIi8+J1xuICAgICAgICBmb3JtR3JvdXAuaW5uZXJIVE1MID0gbGFiZWwgKyBpbnB1dDtcblxuICAgICAgICBsaXN0Rm9ybS5hcHBlbmRDaGlsZChmb3JtR3JvdXApO1xuXG4gICAgICAgIC8vIGNyZWF0ZXMgYnV0dG9uIHRvIGNsb3NlIGxpc3QgZm9ybVxuICAgICAgICBjb25zdCBjYW5jZWxMaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNhbmNlbExpc3RCdG4udGV4dENvbnRlbnQgPSAnY2FuY2VsJztcbiAgICAgICAgY2FuY2VsTGlzdEJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnRuJyk7XG4gICAgICAgIGNhbmNlbExpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdW5sb2FkRWxlbWVudChjb250YWluZXIsIGZvcm1XcmFwcGVyKTtcbiAgICAgICAgfSlcbiAgICAgICAgbGlzdEZvcm0uYXBwZW5kKGNhbmNlbExpc3RCdG4pO1xuXG4gICAgICAgIC8vIGJ1dHRvbiB0aGF0IGFkZHMgbGlzdCB0byBjb2xsZWN0aW9uIHRoZW4gcmVsb2FkcyBzaWRlYmFyXG4gICAgICAgIGNvbnN0IGFkZExpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkTGlzdEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGQtbGlzdC1idG4nKTtcbiAgICAgICAgYWRkTGlzdEJ0bi50ZXh0Q29udGVudCA9ICcrJztcbiAgICAgICAgYWRkTGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZS1pbnB1dCcpLnZhbHVlO1xuICAgICAgICAgICAgX2NvbGxlY3Rpb24uYWRkTGlzdChsaXN0KG5ld05hbWUpKTtcblxuICAgICAgICAgICAgdW5sb2FkU2lkZWJhcigpO1xuICAgICAgICAgICAgbG9hZFNpZGViYXIoKTtcbiAgICAgICAgICAgIHVubG9hZEVsZW1lbnQoY29udGFpbmVyLCBmb3JtV3JhcHBlcik7XG4gICAgICAgIH0pXG4gICAgICAgIGxpc3RGb3JtLmFwcGVuZENoaWxkKGFkZExpc3RCdG4pO1xuXG4gICAgICAgIGZvcm1XcmFwcGVyLmFwcGVuZENoaWxkKGxpc3RGb3JtKVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGZvcm1XcmFwcGVyO1xuICAgIH1cbiAgICBcbiAgIFxuICAgIFxuXG4gICAgLy8gd2lsbCBjYWxsIHRvIHJlbmRlciB0aGUgaXRlbXMgb2YgJ19jdXJyZW50TGlzdCcgYXMgZG9tIGVsZW1lbnRzXG4gICAgLy8gdGhlbiB3aWxsIHVwZGF0ZSB0aGUgbGlzdFdyYXBwZXIgZWxlbWVudCB3aXRoIHNhaWQgbGlzdFxuICAgIC8vIGFsc28gYWRkcyBkZWxldGUgYnV0dG9ucyBmb3IgZWFjaCBpdGVtIGVsZW1lbnRcbiAgICBjb25zdCBsb2FkTGlzdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRMaXN0ID0gdG9kb0NvbnZlcnRlci5yZW5kZXJMaXN0KF9jdXJyZW50TGlzdCk7XG4gICAgICAgIGNvbnN0IGl0ZW1FbGVtZW50cyA9IHJlbmRlcmVkTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbScpO1xuXG4gICAgICAgIGxpc3RXcmFwcGVyLmFwcGVuZENoaWxkKHJlbmRlcmVkTGlzdCk7XG5cbiAgICAgICAgLy8gYWRkaW5nIGRlbGV0ZSBidXR0b25zIGZvciBpdGVtIGVsZW1lbnRzXG4gICAgICAgIGl0ZW1FbGVtZW50cy5mb3JFYWNoKGl0ZW1FbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGl0ZW1FbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScpO1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ0bicpO1xuICAgICAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnLCBpdGVtVGl0bGUpO1xuICAgICAgICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGl0ZW0gZnJvbSBkb21cbiAgICAgICAgICAgICAgICB1bmxvYWRJdGVtKHJlbmRlcmVkTGlzdCwgaXRlbUVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gZGVsZXRlIGl0ZW0gZnJvbSAnX2N1cnJlbnRMaXN0J1xuICAgICAgICAgICAgICAgIF9jdXJyZW50TGlzdC5kZWxldGVJdGVtKGl0ZW1UaXRsZSk7XG5cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGl0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gYWRkIGFuIGFkZEl0ZW0gYnV0dG9uIHRoYXRcbiAgICAgICAgY29uc3QgbmV3SXRlbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBuZXdJdGVtQnRuLmNsYXNzTGlzdC5hZGQoJ25ldy1pdGVtLWJ0bicpO1xuICAgICAgICBuZXdJdGVtQnRuLnRleHRDb250ZW50ID0gJ25ldyBpdGVtJztcbiAgICAgICAgbmV3SXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWZvcm0nKSlcbiAgICAgICAgICAgICAgICBfY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlckl0ZW1JbnB1dChfY29udGFpbmVyKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsaXN0V3JhcHBlci5hcHBlbmRDaGlsZChuZXdJdGVtQnRuKTtcbiAgICB9XG5cbiAgICAvLyByZW1vdmVzIGl0ZW1FbGVtZW50IGZyb20gRG9tXG4gICAgY29uc3QgdW5sb2FkSXRlbSA9IChsaXN0RWxlbWVudCwgaXRlbUVsZW1lbnQpID0+IHtcbiAgICAgICAgbGlzdEVsZW1lbnQucmVtb3ZlQ2hpbGQoaXRlbUVsZW1lbnQpO1xuICAgIH1cbiAgICBcbiAgICAvLyByZW1vdmVzIGxpc3RFbGVtZW50IGZyb20gRE9NXG4gICAgY29uc3QgdW5sb2FkTGlzdCA9ICgpID0+IHtcbiAgICAgICAgbGlzdFdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgXG5cbiAgICBjb25zdCByZW5kZXJJdGVtSW5wdXQgPSAoY29udGFpbmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm0td3JhcHBlcicpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBpdGVtRm9ybS5jbGFzc0xpc3QuYWRkKCdpdGVtLWZvcm0nKTtcblxuICAgICAgICAvLyBjcmVhdGlvbiBvZiBmb3JtIGdyb3VwIGZvciBuZXcgaXRlbSB0aXRsZVxuICAgICAgICBjb25zdCB0aXRsZUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlR3JvdXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSAnPGxhYmVsIGZvcj1cInRpdGxlLWlucHV0XCI+VGl0bGU8L2xhYmVsPic7XG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSAnPGlucHV0IGlkPVwidGl0bGUtaW5wdXRcIiBuYW1lPVwidGl0bGUtaW5wdXQgcGxhY2Vob2xkZXI9XCJUaXRsZVwiLz4nO1xuICAgICAgICB0aXRsZUdyb3VwLmlubmVySFRNTCA9IHRpdGxlTGFiZWwgKyB0aXRsZUlucHV0O1xuICAgICAgICBpdGVtRm9ybS5hcHBlbmRDaGlsZCh0aXRsZUdyb3VwKVxuXG4gICAgICAgIC8vIGNyZWF0aW9uIG9mIGZvcm0gZ3JvdXAgZm9yIG5ldyBpdGVtIGRlc2NyaXB0aW9uXG4gICAgICAgIGNvbnN0IGRlc2NHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXNjR3JvdXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NMYWJlbCA9ICc8bGFiZWwgZm9yPVwiZGVzYy1pbnB1dFwiPkRlc2NyaXB0aW9uPC9sYWJlbD4nO1xuICAgICAgICBjb25zdCBkZXNjSW5wdXQgPSAnPGlucHV0IGlkPVwiZGVzYy1pbnB1dFwiIG5hbWU9XCJkZXNjLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiLz4nO1xuICAgICAgICBkZXNjR3JvdXAuaW5uZXJIVE1MID0gZGVzY0xhYmVsICsgZGVzY0lucHV0O1xuICAgICAgICBpdGVtRm9ybS5hcHBlbmRDaGlsZChkZXNjR3JvdXApO1xuICAgICAgICBcbiAgICAgICAgLy8gY3JlYXRpb24gb2YgZm9ybSBncm91cCBmb3IgbmV3IGl0ZW0gZGF0ZVxuICAgICAgICBjb25zdCBkYXRlR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF0ZUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKTtcblxuICAgICAgICBjb25zdCBkYXRlTGFiZWwgPSAnPGxhYmVsIGZvcj1cImRhdGUtaW5wdXRcIj5EYXRlPC9sYWJlbD4nO1xuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSAnPGlucHV0IGlkPVwiZGF0ZS1pbnB1dFwiIG5hbWU9XCJkYXRlLWlucHV0XCIvPic7XG4gICAgICAgIGRhdGVHcm91cC5pbm5lckhUTUwgPSBkYXRlTGFiZWwgKyBkYXRlSW5wdXQ7XG4gICAgICAgIGl0ZW1Gb3JtLmFwcGVuZENoaWxkKGRhdGVHcm91cCk7XG4gICAgICAgIC8vIGNyZWF0aW9uIG9mIGZvcm0gZ3JvdXAgZm9yIG5ldyBpdGVtIHByaW9yaXR5XG4gICAgICAgIGNvbnN0IHByaW9yaXR5R3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJpb3JpdHlHcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJyk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5U2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByaW9yaXR5TGVnZW5kID0gJzxsZWdlbmQ+UHJpb3JpdHk8L2xlZ2VuZD4nO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlMb3dJbm5lciA9ICc8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJwcmlvcml0eS1sb3dcIiBuYW1lPVwicHJpb3JpdHktaW5wdXRcIiB2YWx1ZT1cImxvd1wiLz4nICsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxsYWJlbCBmb3I9XCJwcmlvcml0eS1sb3dcIj5Mb3c8L2xhYmVsPidcbiAgICAgICAgICAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlMb3cgPSBgPGRpdiBjbGFzcz1cInJhZGlvLWdyb3VwXCI+JHtwcmlvcml0eUxvd0lubmVyfTwvZGl2PmBcblxuICAgICAgICBjb25zdCBwcmlvcml0eU1lZElubmVyID0gJzxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInByaW9yaXR5LW1lZFwiIG5hbWU9XCJwcmlvcml0eS1pbnB1dFwiIHZhbHVlPVwibWVkXCIvPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8bGFiZWwgZm9yPVwicHJpb3JpdHktbWVkXCI+TWVkPC9sYWJlbD4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBjb25zdCBwcmlvcml0eU1lZCA9IGA8ZGl2IGNsYXNzPVwicmFkaW8tZ3JvdXBcIj4ke3ByaW9yaXR5TWVkSW5uZXJ9PC9kaXY+YFxuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5SGlnaElubmVyID0gJzxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInByaW9yaXR5LWhpZ2hcIiBuYW1lPVwicHJpb3JpdHktaW5wdXRcIiB2YWx1ZT1cImhpZ2hcIi8+JyArIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGxhYmVsIGZvcj1cInByaW9yaXR5LWhpZ2hcIj5IaWdoPC9sYWJlbD4nO1xuICAgICAgICBjb25zdCBwcmlvcml0eUhpZ2ggPSBgPGRpdiBjbGFzcz1cInJhZGlvLWdyb3VwXCI+JHtwcmlvcml0eUhpZ2hJbm5lcn08L2Rpdj5gXG5cbiAgICAgICAgcHJpb3JpdHlTZXQuaW5uZXJIVE1MID0gcHJpb3JpdHlMZWdlbmQgKyBwcmlvcml0eUxvdyArIHByaW9yaXR5TWVkICsgcHJpb3JpdHlIaWdoO1xuICAgICAgICBwcmlvcml0eUdyb3VwLmFwcGVuZENoaWxkKHByaW9yaXR5U2V0KTtcbiAgICAgICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlHcm91cCk7XG5cbiAgICAgICBcblxuICAgICAgICAvLyBhZGQgaXRlbSB0byBjYW5jZWwgaXRlbSBmb3JtXG4gICAgICAgIGNvbnN0IGNhbmNlbEl0ZW1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnRuJyk7XG4gICAgICAgIGNhbmNlbEl0ZW1CdG4udGV4dENvbnRlbnQgPSAnY2FuY2VsJ1xuXG4gICAgICAgIGNhbmNlbEl0ZW1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB1bmxvYWRFbGVtZW50KGNvbnRhaW5lciwgZm9ybVdyYXBwZXIpO1xuICAgICAgICB9KVxuICAgICAgICBpdGVtRm9ybS5hcHBlbmRDaGlsZChjYW5jZWxJdGVtQnRuKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGNyZWF0ZSBidXR0b24gdG8gYWRkIG5ldyBlbGVtZW50IGZyb20gaW5mb1xuICAgICAgICBjb25zdCBhZGRJdGVtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZEl0ZW1CdG4uY2xhc3NMaXN0LmFkZCgnYWRkLWl0ZW0tYnRuJyk7XG4gICAgICAgIGFkZEl0ZW1CdG4udGV4dENvbnRlbnQgPSAnYWRkIGl0ZW0nO1xuXG4gICAgICAgIC8vIGFkZEl0ZW0gYnRuIHNob3VsZCBhZGQgbmV3IGJ1dHRvbiBmcm9tIGZvcm0gaW5mbywgdGhlbiByZWxvYWQgbGlzdFxuICAgICAgICBhZGRJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIGNhcHR1cmUgaW5wdXQgZnJvbSBpbnB1dCBmaWVsZHM7XG4gICAgICAgICAgICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZS1pbnB1dCcpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgbmV3RGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjLWlucHV0JykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBuZXdEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUtaW5wdXQnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ByaW9yaXR5ID0gcHJpb3JpdHlTZXQucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKS52YWx1ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbmV3SXRlbSA9IGl0ZW0obmV3VGl0bGUsIG5ld0Rlc2MsIG5ld0RhdGUsIG5ld1ByaW9yaXR5KTtcbiAgICAgICAgICAgIF9jdXJyZW50TGlzdC5hZGRJdGVtKG5ld0l0ZW0pO1xuICAgICAgICAgICAgdW5sb2FkTGlzdCgpO1xuICAgICAgICAgICAgbG9hZExpc3QoKTtcbiAgICAgICAgICAgIHVubG9hZEVsZW1lbnQoY29udGFpbmVyLCBmb3JtV3JhcHBlcik7XG5cbiAgICAgICAgfSlcbiAgICAgICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQoYWRkSXRlbUJ0bik7XG5cbiAgICAgICAgZm9ybVdyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbUZvcm0pO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGZvcm1XcmFwcGVyO1xuICAgICAgICBcbiAgICB9XG4gICAgXG5cbiAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZFBhZ2VcbiAgICB9XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7aXRlbSwgbGlzdCwgY29sbGVjdGlvbn0gZnJvbSAnLi90b2RvLmpzJ1xuaW1wb3J0IHt1aUhhbmRsZXJ9IGZyb20gJy4vdWkuanMnXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuY29uc3QgaGFuZGxlciA9IHVpSGFuZGxlcihjb250ZW50KTtcbmhhbmRsZXIubG9hZFBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==