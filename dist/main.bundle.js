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
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
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

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   components: () => (/* binding */ components)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");

const components= (() => {
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

        const editBtn = document.createElement('button');
         return itemElement;
     }
     
     // function that renders form for adding new items
     const renderItemForm = (cancelFunction, addFunction) => {
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

        // can move this to uiHandler
        cancelItemBtn.addEventListener('click', (e) => {
            e.preventDefault();
            cancelFunction();
        })
        itemForm.appendChild(cancelItemBtn);
        
        // create button to add new element from info
        const addItemBtn = document.createElement('button');
        addItemBtn.classList.add('add-item-btn');
        addItemBtn.textContent = 'add item';

        // addItem btn should add new button from form info, then reload list
        addItemBtn.addEventListener('click', (e) => {
            e.preventDefault();
            addFunction();
        })

        itemForm.appendChild(addItemBtn);

        formWrapper.appendChild(itemForm);
        
        return formWrapper;   
     }

     // function that renders form for adding new lists;
     const renderListForm = (cancelFunction, addFunction) => {
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
            cancelFunction();
        })
        listForm.append(cancelListBtn);

        // button that adds list to collection then reloads sidebar
        const addListBtn = document.createElement('button');
        addListBtn.classList.add('add-list-btn');
        addListBtn.textContent = '+';
        addListBtn.addEventListener('click', (e) => {
            e.preventDefault();
            addFunction();
        })
        listForm.appendChild(addListBtn);

        formWrapper.appendChild(listForm)
        
        return formWrapper;
     }

     // creates an form for editing selected item
     const renderItemEdit = (item, cancelFunction, editFunction) => {
        const form = renderItemForm(cancelFunction, editFunction);
        
        const formElement = form.querySelector('form');
        formElement.setAttribute('data-target', item.title);
        // populate inputs with item's original values
        const titleInput = form.querySelector('#title-input');
        const descInput = form.querySelector('#desc-input');
        const dateInput = form.querySelector('#date-input');

        titleInput.value = item.title;
        descInput.value = item.desc;
        dateInput.value = item.dueDate;

        // set priority radio to priority value
        if (item.priority === 'high')
        {
            form.querySelector('#priority-high').checked = true;
        }
        else if (item.priority === 'med')
        {
            form.querySelector('#priority-med').checked = true;

        }
        else {
            form.querySelector('#priority-low').checked = true;
        }

        return form;
     }
     // function that renders form for adding new items
     return {renderList, renderItemForm, renderListForm, renderItemEdit};
 })();

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
    const findItem = (itemTitle) => {
        return _items.find(item => item.title === itemTitle);
    }

    const replaceItem = (oldTitle, newItem) => {
        const oldIndex = indexOf(oldTitle);
        _items.splice(oldIndex, 1, newItem);
    }
    
    return {
        get name() {
            return _name;
        },
        // returns internal array of items
        get items() {
            return _items;
        },
        addItem, deleteItem, findItem, replaceItem
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
        addList, deleteList, findList, 
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
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components.js */ "./src/components.js");


// class to covert todo related objects into dom elements

// creates a uiHandler that will load dom elements within 'container' element
const uiHandler = (container) => {
    
    const sidebarWrapper = document.createElement('div');
    sidebarWrapper.classList.add('sidebar-wrapper');
    const listWrapper = document.createElement('div');
    listWrapper.classList.add('list-wrapper');

    const _collection = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.collection)();
    
    // sample elements
    const testList1 = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.list)('test1');
    testList1.addItem((0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.item)('title1', 'desc1', 'date1', 'high'));
    testList1.addItem((0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.item)('title2', 'desc2', 'date2', 'med'));
    testList1.addItem((0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.item)('title3', 'desc3', 'date3', 'low'));
    const testList2 = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.list)('test2');
    testList2.addItem((0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.item)('title1', 'desc1', 'date1', 'high'));
    testList2.addItem((0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.item)('title2', 'desc2', 'date2', 'med'));
    testList2.addItem((0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.item)('title3', 'desc3', 'date3', 'low'));
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
            {
                const listForm = _components_js__WEBPACK_IMPORTED_MODULE_1__.components.renderListForm(unloadForm, handleAddList)
                _container.appendChild(listForm);
            }
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

    // will call to render the items of '_currentList' as dom elements
    // then will update the listWrapper element with said list
    // also adds delete buttons for each item element
    const loadList = () => {
        const renderedList = _components_js__WEBPACK_IMPORTED_MODULE_1__.components.renderList(_currentList);
        const itemElements = renderedList.querySelectorAll('.item');

        listWrapper.appendChild(renderedList);

        // adding delete buttons for item elements
        itemElements.forEach(itemElement => {
            const editBtn = document.createElement('button');
            editBtn.textContent = 'edit';
            
            editBtn.addEventListener('click', () => {
                
                if (document.querySelector('.item-form'))
                {
                    unloadForm();
                }
                const itemTitle = itemElement.getAttribute('data-title');
                const item = _currentList.findItem(itemTitle);
                const itemForm = _components_js__WEBPACK_IMPORTED_MODULE_1__.components.renderItemEdit(item, unloadForm, handleEditItem);
                _container.appendChild(itemForm);
                
            })
            itemElement.appendChild(editBtn);
        })

        // add button that opens form to add new item
        const newItemBtn = document.createElement('button');
        newItemBtn.classList.add('new-item-btn');
        newItemBtn.textContent = 'new item';
        newItemBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (!document.querySelector('.item-form'))
            {
                const itemForm = _components_js__WEBPACK_IMPORTED_MODULE_1__.components.renderItemForm(unloadForm, handleAddItem)
                _container.appendChild(itemForm);
            }
        });
        listWrapper.appendChild(newItemBtn);
    }
   
    // removes listElement from DOM
    const unloadList = () => {
        listWrapper.innerHTML = '';
        unloadForm();
    }

    const unloadForm = () => {
        const formElement = document.querySelector('.form-wrapper');
        if (formElement)
            unloadElement(_container, formElement);
    }

    // takes values of item form to add new item to current list
    const handleAddItem = () => {
        const title = document.querySelector('#title-input').value;
        const desc = document.querySelector('#desc-input').value;
        const date = document.querySelector('#date-input').value;
        const priority = document.querySelector(':checked').value;
        
        const newItem = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.item)(title, desc, date, priority);
        _currentList.addItem(newItem);
        unloadList();
        loadList();
        unloadForm();
    }
    const handleEditItem = () => {
        const form = document.querySelector('form');

        const oldTitle = form.getAttribute('data-target');
        const title = form.querySelector('#title-input').value;
        const desc = form.querySelector('#desc-input').value;
        const date = form.querySelector('#date-input').value;
        const priority = document.querySelector(':checked').value;
        
        const newItem = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.item)(title, desc, date, priority);
        _currentList.replaceItem(oldTitle, newItem);
        unloadList();
        loadList();
        unloadForm();
    }
    // takes values of list form to add new list to collection
    const handleAddList = () => {
        const name = document.querySelector('#name-input').value;
        _collection.addList((0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.list)(name));
        unloadSidebar();
        loadSidebar();
        unloadForm();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQWdEO0FBQ2Y7QUFDWjtBQUNyQjtBQUNBLGdCQUFnQixpREFBUztBQUN6QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBgLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBpdGVtLCBsaXN0IH0gZnJvbSAnLi90b2RvLmpzJ1xuZXhwb3J0IGNvbnN0IGNvbXBvbmVudHM9ICgoKSA9PiB7XG4gICAgLy8gY3JlYXRlIGxpc3QgZWxlbWVudFxuICAgICBjb25zdCByZW5kZXJMaXN0ID0gKGxpc3QpID0+IHtcbiAgICAgICAgIGlmICghbGlzdCkge1xuICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgfVxuICAgICAgICAgY29uc3QgbGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgIGxpc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xpc3QnKTtcbiAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBsaXN0IGl0ZW1zIHRoZW4gYXBwZW5kIGEgcmVuZGVyZWQgbGlzdCB0aWVtXG4gICAgICAgICBsaXN0Lml0ZW1zLmZvckVhY2goaXRlbSA9PiBsaXN0RWxlbWVudC5hcHBlbmRDaGlsZChyZW5kZXJJdGVtKGl0ZW0pKSk7XG4gICAgICAgICByZXR1cm4gbGlzdEVsZW1lbnQ7XG4gICAgIH1cbiAgICAvLyByZXR1cm4gcmVuZGVyZWQgbGlzdCBpdG1lXG4gICAgY29uc3QgcmVuZGVySXRlbSA9IChpdGVtKSA9PiB7XG4gICAgICAgICBjb25zdCBpdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgaXRlbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgICAgICAgaXRlbUVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJywgaXRlbS50aXRsZSlcbiAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGl0ZW0pIHtcbiAgICAgICAgICAgICBjb25zdCBpbmZvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgIGluZm9FbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7a2V5fWApO1xuICAgICAgICAgICAgIGluZm9FbGVtZW50LnRleHRDb250ZW50ID0gYCR7aXRlbVtrZXldfWA7XG4gICAgICAgICAgICAgaXRlbUVsZW1lbnQuYXBwZW5kKGluZm9FbGVtZW50KTtcbiAgICAgICAgIH1cblxuICAgICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICByZXR1cm4gaXRlbUVsZW1lbnQ7XG4gICAgIH1cbiAgICAgXG4gICAgIC8vIGZ1bmN0aW9uIHRoYXQgcmVuZGVycyBmb3JtIGZvciBhZGRpbmcgbmV3IGl0ZW1zXG4gICAgIGNvbnN0IHJlbmRlckl0ZW1Gb3JtID0gKGNhbmNlbEZ1bmN0aW9uLCBhZGRGdW5jdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBmb3JtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdmb3JtLXdyYXBwZXInKTtcblxuICAgICAgICBjb25zdCBpdGVtRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgaXRlbUZvcm0uY2xhc3NMaXN0LmFkZCgnaXRlbS1mb3JtJyk7XG5cbiAgICAgICAgLy8gY3JlYXRpb24gb2YgZm9ybSBncm91cCBmb3IgbmV3IGl0ZW0gdGl0bGVcbiAgICAgICAgY29uc3QgdGl0bGVHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKTtcblxuICAgICAgICBjb25zdCB0aXRsZUxhYmVsID0gJzxsYWJlbCBmb3I9XCJ0aXRsZS1pbnB1dFwiPlRpdGxlPC9sYWJlbD4nO1xuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gJzxpbnB1dCBpZD1cInRpdGxlLWlucHV0XCIgbmFtZT1cInRpdGxlLWlucHV0IHBsYWNlaG9sZGVyPVwiVGl0bGVcIi8+JztcbiAgICAgICAgdGl0bGVHcm91cC5pbm5lckhUTUwgPSB0aXRsZUxhYmVsICsgdGl0bGVJbnB1dDtcbiAgICAgICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQodGl0bGVHcm91cClcblxuICAgICAgICAvLyBjcmVhdGlvbiBvZiBmb3JtIGdyb3VwIGZvciBuZXcgaXRlbSBkZXNjcmlwdGlvblxuICAgICAgICBjb25zdCBkZXNjR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVzY0dyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKTtcblxuICAgICAgICBjb25zdCBkZXNjTGFiZWwgPSAnPGxhYmVsIGZvcj1cImRlc2MtaW5wdXRcIj5EZXNjcmlwdGlvbjwvbGFiZWw+JztcbiAgICAgICAgY29uc3QgZGVzY0lucHV0ID0gJzxpbnB1dCBpZD1cImRlc2MtaW5wdXRcIiBuYW1lPVwiZGVzYy1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIi8+JztcbiAgICAgICAgZGVzY0dyb3VwLmlubmVySFRNTCA9IGRlc2NMYWJlbCArIGRlc2NJbnB1dDtcbiAgICAgICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQoZGVzY0dyb3VwKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGNyZWF0aW9uIG9mIGZvcm0gZ3JvdXAgZm9yIG5ldyBpdGVtIGRhdGVcbiAgICAgICAgY29uc3QgZGF0ZUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRhdGVHcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJyk7XG5cbiAgICAgICAgY29uc3QgZGF0ZUxhYmVsID0gJzxsYWJlbCBmb3I9XCJkYXRlLWlucHV0XCI+RGF0ZTwvbGFiZWw+JztcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gJzxpbnB1dCBpZD1cImRhdGUtaW5wdXRcIiBuYW1lPVwiZGF0ZS1pbnB1dFwiLz4nO1xuICAgICAgICBkYXRlR3JvdXAuaW5uZXJIVE1MID0gZGF0ZUxhYmVsICsgZGF0ZUlucHV0O1xuICAgICAgICBpdGVtRm9ybS5hcHBlbmRDaGlsZChkYXRlR3JvdXApO1xuXG4gICAgICAgIC8vIGNyZWF0aW9uIG9mIGZvcm0gZ3JvdXAgZm9yIG5ldyBpdGVtIHByaW9yaXR5XG4gICAgICAgIGNvbnN0IHByaW9yaXR5R3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJpb3JpdHlHcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJyk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5U2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByaW9yaXR5TGVnZW5kID0gJzxsZWdlbmQ+UHJpb3JpdHk8L2xlZ2VuZD4nO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlMb3dJbm5lciA9ICc8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJwcmlvcml0eS1sb3dcIiBuYW1lPVwicHJpb3JpdHktaW5wdXRcIiB2YWx1ZT1cImxvd1wiLz4nICsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxsYWJlbCBmb3I9XCJwcmlvcml0eS1sb3dcIj5Mb3c8L2xhYmVsPidcbiAgICAgICAgY29uc3QgcHJpb3JpdHlMb3cgPSBgPGRpdiBjbGFzcz1cInJhZGlvLWdyb3VwXCI+JHtwcmlvcml0eUxvd0lubmVyfTwvZGl2PmBcblxuICAgICAgICBjb25zdCBwcmlvcml0eU1lZElubmVyID0gJzxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInByaW9yaXR5LW1lZFwiIG5hbWU9XCJwcmlvcml0eS1pbnB1dFwiIHZhbHVlPVwibWVkXCIvPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8bGFiZWwgZm9yPVwicHJpb3JpdHktbWVkXCI+TWVkPC9sYWJlbD4nO1xuICAgICAgICBjb25zdCBwcmlvcml0eU1lZCA9IGA8ZGl2IGNsYXNzPVwicmFkaW8tZ3JvdXBcIj4ke3ByaW9yaXR5TWVkSW5uZXJ9PC9kaXY+YFxuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5SGlnaElubmVyID0gJzxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInByaW9yaXR5LWhpZ2hcIiBuYW1lPVwicHJpb3JpdHktaW5wdXRcIiB2YWx1ZT1cImhpZ2hcIi8+JyArIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGxhYmVsIGZvcj1cInByaW9yaXR5LWhpZ2hcIj5IaWdoPC9sYWJlbD4nO1xuICAgICAgICBjb25zdCBwcmlvcml0eUhpZ2ggPSBgPGRpdiBjbGFzcz1cInJhZGlvLWdyb3VwXCI+JHtwcmlvcml0eUhpZ2hJbm5lcn08L2Rpdj5gXG5cbiAgICAgICAgcHJpb3JpdHlTZXQuaW5uZXJIVE1MID0gcHJpb3JpdHlMZWdlbmQgKyBwcmlvcml0eUxvdyArIHByaW9yaXR5TWVkICsgcHJpb3JpdHlIaWdoO1xuICAgICAgICBwcmlvcml0eUdyb3VwLmFwcGVuZENoaWxkKHByaW9yaXR5U2V0KTtcbiAgICAgICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlHcm91cCk7XG5cblxuICAgICAgICAvLyBhZGQgaXRlbSB0byBjYW5jZWwgaXRlbSBmb3JtXG4gICAgICAgIGNvbnN0IGNhbmNlbEl0ZW1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnRuJyk7XG4gICAgICAgIGNhbmNlbEl0ZW1CdG4udGV4dENvbnRlbnQgPSAnY2FuY2VsJ1xuXG4gICAgICAgIC8vIGNhbiBtb3ZlIHRoaXMgdG8gdWlIYW5kbGVyXG4gICAgICAgIGNhbmNlbEl0ZW1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY2FuY2VsRnVuY3Rpb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsSXRlbUJ0bik7XG4gICAgICAgIFxuICAgICAgICAvLyBjcmVhdGUgYnV0dG9uIHRvIGFkZCBuZXcgZWxlbWVudCBmcm9tIGluZm9cbiAgICAgICAgY29uc3QgYWRkSXRlbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRJdGVtQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC1pdGVtLWJ0bicpO1xuICAgICAgICBhZGRJdGVtQnRuLnRleHRDb250ZW50ID0gJ2FkZCBpdGVtJztcblxuICAgICAgICAvLyBhZGRJdGVtIGJ0biBzaG91bGQgYWRkIG5ldyBidXR0b24gZnJvbSBmb3JtIGluZm8sIHRoZW4gcmVsb2FkIGxpc3RcbiAgICAgICAgYWRkSXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBhZGRGdW5jdGlvbigpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGl0ZW1Gb3JtLmFwcGVuZENoaWxkKGFkZEl0ZW1CdG4pO1xuXG4gICAgICAgIGZvcm1XcmFwcGVyLmFwcGVuZENoaWxkKGl0ZW1Gb3JtKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBmb3JtV3JhcHBlcjsgICBcbiAgICAgfVxuXG4gICAgIC8vIGZ1bmN0aW9uIHRoYXQgcmVuZGVycyBmb3JtIGZvciBhZGRpbmcgbmV3IGxpc3RzO1xuICAgICBjb25zdCByZW5kZXJMaXN0Rm9ybSA9IChjYW5jZWxGdW5jdGlvbiwgYWRkRnVuY3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgZm9ybVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS13cmFwcGVyJyk7XG4gICAgICAgIC8vIGNyZWF0ZSBmb3JtIGVsZW1lbnRcbiAgICAgICAgY29uc3QgbGlzdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGxpc3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2xpc3QtZm9ybScpO1xuICAgICAgICBcbiAgICAgICAgLy8gY3JlYXRlIGZvcm0tZ3JvdXBcbiAgICAgICAgY29uc3QgZm9ybUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJyk7XG5cbiAgICAgICAgY29uc3QgbGFiZWwgPSAnPGxhYmVsIGZvcj1cIm5hbWUtaW5wdXRcIj5MaXN0IE5hbWU8L2xhYmVsPidcbiAgICAgICAgY29uc3QgaW5wdXQgPSAnPGlucHV0IGlkPVwibmFtZS1pbnB1dFwiIG5hbWU9XCJuYW1lLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJMaXN0IE5hbWVcIi8+J1xuICAgICAgICBmb3JtR3JvdXAuaW5uZXJIVE1MID0gbGFiZWwgKyBpbnB1dDtcbiAgICAgICAgbGlzdEZvcm0uYXBwZW5kQ2hpbGQoZm9ybUdyb3VwKTtcblxuICAgICAgICAvLyBjcmVhdGVzIGJ1dHRvbiB0byBjbG9zZSBsaXN0IGZvcm1cbiAgICAgICAgY29uc3QgY2FuY2VsTGlzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxMaXN0QnRuLnRleHRDb250ZW50ID0gJ2NhbmNlbCc7XG4gICAgICAgIGNhbmNlbExpc3RCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ0bicpO1xuICAgICAgICBjYW5jZWxMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNhbmNlbEZ1bmN0aW9uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIGxpc3RGb3JtLmFwcGVuZChjYW5jZWxMaXN0QnRuKTtcblxuICAgICAgICAvLyBidXR0b24gdGhhdCBhZGRzIGxpc3QgdG8gY29sbGVjdGlvbiB0aGVuIHJlbG9hZHMgc2lkZWJhclxuICAgICAgICBjb25zdCBhZGRMaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZExpc3RCdG4uY2xhc3NMaXN0LmFkZCgnYWRkLWxpc3QtYnRuJyk7XG4gICAgICAgIGFkZExpc3RCdG4udGV4dENvbnRlbnQgPSAnKyc7XG4gICAgICAgIGFkZExpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYWRkRnVuY3Rpb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgbGlzdEZvcm0uYXBwZW5kQ2hpbGQoYWRkTGlzdEJ0bik7XG5cbiAgICAgICAgZm9ybVdyYXBwZXIuYXBwZW5kQ2hpbGQobGlzdEZvcm0pXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZm9ybVdyYXBwZXI7XG4gICAgIH1cblxuICAgICAvLyBjcmVhdGVzIGFuIGZvcm0gZm9yIGVkaXRpbmcgc2VsZWN0ZWQgaXRlbVxuICAgICBjb25zdCByZW5kZXJJdGVtRWRpdCA9IChpdGVtLCBjYW5jZWxGdW5jdGlvbiwgZWRpdEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSByZW5kZXJJdGVtRm9ybShjYW5jZWxGdW5jdGlvbiwgZWRpdEZ1bmN0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGZvcm1FbGVtZW50ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgICAgIGZvcm1FbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnLCBpdGVtLnRpdGxlKTtcbiAgICAgICAgLy8gcG9wdWxhdGUgaW5wdXRzIHdpdGggaXRlbSdzIG9yaWdpbmFsIHZhbHVlc1xuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjdGl0bGUtaW5wdXQnKTtcbiAgICAgICAgY29uc3QgZGVzY0lucHV0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjZGVzYy1pbnB1dCcpO1xuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNkYXRlLWlucHV0Jyk7XG5cbiAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IGl0ZW0udGl0bGU7XG4gICAgICAgIGRlc2NJbnB1dC52YWx1ZSA9IGl0ZW0uZGVzYztcbiAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gaXRlbS5kdWVEYXRlO1xuXG4gICAgICAgIC8vIHNldCBwcmlvcml0eSByYWRpbyB0byBwcmlvcml0eSB2YWx1ZVxuICAgICAgICBpZiAoaXRlbS5wcmlvcml0eSA9PT0gJ2hpZ2gnKVxuICAgICAgICB7XG4gICAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eS1oaWdoJykuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXRlbS5wcmlvcml0eSA9PT0gJ21lZCcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5LW1lZCcpLmNoZWNrZWQgPSB0cnVlO1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eS1sb3cnKS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3JtO1xuICAgICB9XG4gICAgIC8vIGZ1bmN0aW9uIHRoYXQgcmVuZGVycyBmb3JtIGZvciBhZGRpbmcgbmV3IGl0ZW1zXG4gICAgIHJldHVybiB7cmVuZGVyTGlzdCwgcmVuZGVySXRlbUZvcm0sIHJlbmRlckxpc3RGb3JtLCByZW5kZXJJdGVtRWRpdH07XG4gfSkoKTsiLCJleHBvcnQgY29uc3QgaXRlbSA9ICh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHsgICAgXG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHl9XG59XG5cbmV4cG9ydCBjb25zdCBsaXN0ID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBfbmFtZSA9IG5hbWU7XG4gICAgY29uc3QgX2l0ZW1zID0gW107XG5cbiAgICAvLyBhZGRzIGl0ZW0gZWxlbWVudCB0byBhcnJheSAoaWYgb25lIHdpdGggdGhlIHNhbWUgdGl0bGUgZG9lcyBub3QgZXhpc3QpXG4gICAgY29uc3QgYWRkSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgICAgIC8vIGNoZWNrIGlmIGl0ZW0gd2l0aCBpdGVtLnRpdGxlIGFscmVhZHkgZXhpc3RzXG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5kZXhPZihpdGVtLnRpdGxlKTtcbiAgICAgICAgaWYgKGluZGV4T2YoaXRlbS50aXRsZSkgfHwgaW5kZXgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpdGVtIGFscmVhZHkgZXhpc3RzJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBfaXRlbXMucHVzaChpdGVtKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlSXRlbSA9IChpdGVtVGl0bGUpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpbmRleE9mKGl0ZW1UaXRsZSk7XG4gICAgICAgIGlmIChpbmRleCB8fCBpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgX2l0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gc3VjaCBpdGVtJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgaXRlbSBvYmplY3Qgd2l0aCB0aXRsZSAnaXRlbVRpdGxlJ1xuICAgIGNvbnN0IGluZGV4T2YgPSAoaXRlbVRpdGxlKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBfaXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoX2l0ZW1zW2luZGV4XS50aXRsZSA9PT0gaXRlbVRpdGxlKVxuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cbiAgICBjb25zdCBmaW5kSXRlbSA9IChpdGVtVGl0bGUpID0+IHtcbiAgICAgICAgcmV0dXJuIF9pdGVtcy5maW5kKGl0ZW0gPT4gaXRlbS50aXRsZSA9PT0gaXRlbVRpdGxlKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXBsYWNlSXRlbSA9IChvbGRUaXRsZSwgbmV3SXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBvbGRJbmRleCA9IGluZGV4T2Yob2xkVGl0bGUpO1xuICAgICAgICBfaXRlbXMuc3BsaWNlKG9sZEluZGV4LCAxLCBuZXdJdGVtKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gX25hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHJldHVybnMgaW50ZXJuYWwgYXJyYXkgb2YgaXRlbXNcbiAgICAgICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9pdGVtcztcbiAgICAgICAgfSxcbiAgICAgICAgYWRkSXRlbSwgZGVsZXRlSXRlbSwgZmluZEl0ZW0sIHJlcGxhY2VJdGVtXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgY29sbGVjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBfbGlzdHMgPSBbXTtcblxuICAgICAvLyBhZGRzIGxpc3QgZWxlbWVudCB0byBhcnJheSAoaWYgb25lIHdpdGggdGhlIHNhbWUgdGl0bGUgZG9lcyBub3QgZXhpc3QpXG4gICAgIGNvbnN0IGFkZExpc3QgPSAobGlzdCkgPT4ge1xuICAgICAgICAvLyBjaGVjayBpZiBsaXN0IHdpdGggbGlzdC5uYW1lIGFscmVhZHkgZXhpc3RzXG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5kZXhPZihsaXN0Lm5hbWUpO1xuICAgICAgICBpZiAoaW5kZXhPZihsaXN0Lm5hbWUpIHx8IGluZGV4KVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbGlzdCBhbHJlYWR5IGV4aXN0cycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgX2xpc3RzLnB1c2gobGlzdClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUxpc3QgPSAobGlzdE5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpbmRleE9mKGxpc3ROYW1lKTtcbiAgICAgICAgaWYgKGluZGV4IHx8IGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBfbGlzdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBzdWNoIGxpc3QnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBsaXN0IG9iamVjdCB3aXRoIG5hbWUgJ2xpc3ROYW1lJ1xuICAgIGNvbnN0IGluZGV4T2YgPSAobGlzdE5hbWUpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IF9saXN0cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmIChfbGlzdHNbaW5kZXhdLm5hbWUgPT09IGxpc3ROYW1lKVxuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cblxuXG4gICAgY29uc3QgZmluZExpc3QgPSAobGlzdE5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIF9saXN0cy5maW5kKGxpc3QgPT4gbGlzdC5uYW1lID09PSBsaXN0TmFtZSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGdldCBsaXN0cygpIHtcbiAgICAgICAgICAgIHJldHVybiBfbGlzdHM7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBmaXJzdExpc3QoKSB7XG4gICAgICAgICAgICBpZiAoX2xpc3RzLmxlbmd0aCA8IDEpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gX2xpc3RzWzBdO1xuICAgICAgICB9LFxuICAgICAgICBhZGRMaXN0LCBkZWxldGVMaXN0LCBmaW5kTGlzdCwgXG4gICAgfVxufSIsImltcG9ydCB7aXRlbSwgbGlzdCwgY29sbGVjdGlvbn0gZnJvbSAnLi90b2RvLmpzJ1xuaW1wb3J0IHtjb21wb25lbnRzfSBmcm9tICcuL2NvbXBvbmVudHMuanMnO1xuLy8gY2xhc3MgdG8gY292ZXJ0IHRvZG8gcmVsYXRlZCBvYmplY3RzIGludG8gZG9tIGVsZW1lbnRzXG5cbi8vIGNyZWF0ZXMgYSB1aUhhbmRsZXIgdGhhdCB3aWxsIGxvYWQgZG9tIGVsZW1lbnRzIHdpdGhpbiAnY29udGFpbmVyJyBlbGVtZW50XG5leHBvcnQgY29uc3QgdWlIYW5kbGVyID0gKGNvbnRhaW5lcikgPT4ge1xuICAgIFxuICAgIGNvbnN0IHNpZGViYXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhcldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci13cmFwcGVyJyk7XG4gICAgY29uc3QgbGlzdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaXN0V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdsaXN0LXdyYXBwZXInKTtcblxuICAgIGNvbnN0IF9jb2xsZWN0aW9uID0gY29sbGVjdGlvbigpO1xuICAgIFxuICAgIC8vIHNhbXBsZSBlbGVtZW50c1xuICAgIGNvbnN0IHRlc3RMaXN0MSA9IGxpc3QoJ3Rlc3QxJyk7XG4gICAgdGVzdExpc3QxLmFkZEl0ZW0oaXRlbSgndGl0bGUxJywgJ2Rlc2MxJywgJ2RhdGUxJywgJ2hpZ2gnKSk7XG4gICAgdGVzdExpc3QxLmFkZEl0ZW0oaXRlbSgndGl0bGUyJywgJ2Rlc2MyJywgJ2RhdGUyJywgJ21lZCcpKTtcbiAgICB0ZXN0TGlzdDEuYWRkSXRlbShpdGVtKCd0aXRsZTMnLCAnZGVzYzMnLCAnZGF0ZTMnLCAnbG93JykpO1xuICAgIGNvbnN0IHRlc3RMaXN0MiA9IGxpc3QoJ3Rlc3QyJyk7XG4gICAgdGVzdExpc3QyLmFkZEl0ZW0oaXRlbSgndGl0bGUxJywgJ2Rlc2MxJywgJ2RhdGUxJywgJ2hpZ2gnKSk7XG4gICAgdGVzdExpc3QyLmFkZEl0ZW0oaXRlbSgndGl0bGUyJywgJ2Rlc2MyJywgJ2RhdGUyJywgJ21lZCcpKTtcbiAgICB0ZXN0TGlzdDIuYWRkSXRlbShpdGVtKCd0aXRsZTMnLCAnZGVzYzMnLCAnZGF0ZTMnLCAnbG93JykpO1xuICAgIF9jb2xsZWN0aW9uLmFkZExpc3QodGVzdExpc3QxKTtcbiAgICBfY29sbGVjdGlvbi5hZGRMaXN0KHRlc3RMaXN0Mik7XG5cbiAgICBsZXQgX2N1cnJlbnRMaXN0ID0gX2NvbGxlY3Rpb24uZmlyc3RMaXN0O1xuICAgIFxuICAgIC8vIGRvbSBlbGVtZW50IHRoYXQgdWkgSGFuZGxlciB3aWxsIGRpcmVjdCBvdXQgdG9cbiAgICBjb25zdCBfY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgY29uc3Qgc2V0Q3VycmVudExpc3QgPSAobGlzdCkgPT4ge1xuICAgICAgICBfY3VycmVudExpc3QgPSBsaXN0O1xuICAgIH1cbiAgICBcbiAgICAvLyByZW1vdmVzIGVsZW1lbnQgZnJvbSBnaXZlbiBwYXJlbnQgaW4gRE9NXG4gICAgY29uc3QgdW5sb2FkRWxlbWVudCA9IChwYXJlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gcHV0cyB0b2d0aGVyIHJlbmRlcmVkIGVsZW1lbnRzIG9udG8gdGhlIHBhZ2VcbiAgICBjb25zdCBsb2FkUGFnZSA9ICgpID0+IHtcbiAgICAgICAgbG9hZFNpZGViYXIoKTtcbiAgICAgICAgbG9hZExpc3QoKTtcblxuICAgICAgICBfY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXJXcmFwcGVyKTtcbiAgICAgICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0V3JhcHBlcik7XG4gICAgfVxuXG4gICAgLy8gZnVuY3Rpb24gdGhhdCBsb2FkcyB0aGUgc2lkZWJhciBpbnRvIHNpZGViYXJXcmFwcGVyXG4gICAgY29uc3QgbG9hZFNpZGViYXIgPSAoKSA9PiB7XG4gICAgICAgIHNpZGViYXJXcmFwcGVyLmFwcGVuZENoaWxkKHJlbmRlclNpZGViYXIoKSk7XG5cbiAgICB9XG4gICAgLy8gZnVuY3Rpb24gdGFodCByZW1vdmVzIHNpZGViYXIgZnJvbSBzaWRlYmFyV3JhcHBlclxuICAgIGNvbnN0IHVubG9hZFNpZGViYXIgPSAoKSA9PiB7XG4gICAgICAgIHNpZGViYXJXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuICAgIC8vIHJlbmRlcnMgc2lkZSBiYXIgZWxlbWVudFxuICAgIGNvbnN0IHJlbmRlclNpZGViYXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG5cbiAgICAgICAgY29uc3QgbGlzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGxpc3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1oZWFkZXInKTtcbiAgICAgICAgbGlzdEhlYWRlci50ZXh0Q29udGVudCA9ICdMaXN0cyc7XG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobGlzdEhlYWRlcik7XG5cbiAgICAgICAgLy8gYnV0dG9uIHRvIG9wZW4gZm9ybSB0byBhZGQgbmV3IGxpc3RcbiAgICAgICAgY29uc3QgbmV3TGlzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBuZXdMaXN0QnRuLmNsYXNzTGlzdC5hZGQoJ25ldy1saXN0LWJ0bicpO1xuICAgICAgICBuZXdMaXN0QnRuLnRleHRDb250ZW50ID0gJ0FkZCBOZXcgTGlzdCc7XG4gICAgICAgIG5ld0xpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1mb3JtJykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdEZvcm0gPSBjb21wb25lbnRzLnJlbmRlckxpc3RGb3JtKHVubG9hZEZvcm0sIGhhbmRsZUFkZExpc3QpXG4gICAgICAgICAgICAgICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0Rm9ybSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobmV3TGlzdEJ0bik7XG5cbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChyZW5kZXJOYXZiYXIoc2lkZWJhcikpO1xuXG4gICAgICAgIHJldHVybiBzaWRlYmFyO1xuICAgIH1cbiAgICBcbiAgICAvLyByZW5kZXJzIGJ1dHRvbnMgZm9yIGxvYWRpbmcgZWFjaCBsaXN0XG4gICAgY29uc3QgcmVuZGVyTmF2YmFyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpO1xuXG4gICAgICAgIC8vIGEgbmF2RW50cnkgZWxlbWVudCBmb3IgZWFjaCBsaXN0OyBhbGxvd3MgYWNjZXNzIGFuZCBkZWxldGlvbiBvZiBsaXN0XG4gICAgICAgIF9jb2xsZWN0aW9uLmxpc3RzLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYXZFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbmF2RW50cnkuY2xhc3NMaXN0LmFkZCgnbmF2LWVudHJ5Jyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNyZWF0aW9uIG9mIGJ1dHRvbiB0byBvcGVuL2xvYWQgbGlzdHNcbiAgICAgICAgICAgIGNvbnN0IG5hdkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgbmF2QnRuLmNsYXNzTGlzdC5hZGQoJ25hdi1idG4nKTtcbiAgICAgICAgICAgIG5hdkJ0bi50ZXh0Q29udGVudCA9IGxpc3QubmFtZTtcbiAgICAgICAgICAgIG5hdkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50TGlzdChsaXN0KVxuICAgICAgICAgICAgICAgIHVubG9hZExpc3QoKTtcbiAgICAgICAgICAgICAgICBsb2FkTGlzdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuYXZFbnRyeS5hcHBlbmRDaGlsZChuYXZCdG4pO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGlvbiBvZiBidXR0b24gdG8gZGVsZXRlIGxpc3RcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUxpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZUxpc3RCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ0bicpO1xuICAgICAgICAgICAgZGVsZXRlTGlzdEJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgbGlzdC5uYW1lKTtcbiAgICAgICAgICAgIGRlbGV0ZUxpc3RCdG4udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgICBkZWxldGVMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3QgPT09IF9jdXJyZW50TGlzdClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHVubG9hZExpc3QoKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIF9jb2xsZWN0aW9uLmRlbGV0ZUxpc3QobGlzdC5uYW1lKTtcbiAgICAgICAgICAgICAgICB1bmxvYWRTaWRlYmFyKCk7XG4gICAgICAgICAgICAgICAgbG9hZFNpZGViYXIoKTtcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIG5hdkVudHJ5LmFwcGVuZENoaWxkKGRlbGV0ZUxpc3RCdG4pO1xuXG4gICAgICAgICAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobmF2RW50cnkpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBuYXZiYXI7XG4gICAgfSAgIFxuXG4gICAgLy8gd2lsbCBjYWxsIHRvIHJlbmRlciB0aGUgaXRlbXMgb2YgJ19jdXJyZW50TGlzdCcgYXMgZG9tIGVsZW1lbnRzXG4gICAgLy8gdGhlbiB3aWxsIHVwZGF0ZSB0aGUgbGlzdFdyYXBwZXIgZWxlbWVudCB3aXRoIHNhaWQgbGlzdFxuICAgIC8vIGFsc28gYWRkcyBkZWxldGUgYnV0dG9ucyBmb3IgZWFjaCBpdGVtIGVsZW1lbnRcbiAgICBjb25zdCBsb2FkTGlzdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRMaXN0ID0gY29tcG9uZW50cy5yZW5kZXJMaXN0KF9jdXJyZW50TGlzdCk7XG4gICAgICAgIGNvbnN0IGl0ZW1FbGVtZW50cyA9IHJlbmRlcmVkTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbScpO1xuXG4gICAgICAgIGxpc3RXcmFwcGVyLmFwcGVuZENoaWxkKHJlbmRlcmVkTGlzdCk7XG5cbiAgICAgICAgLy8gYWRkaW5nIGRlbGV0ZSBidXR0b25zIGZvciBpdGVtIGVsZW1lbnRzXG4gICAgICAgIGl0ZW1FbGVtZW50cy5mb3JFYWNoKGl0ZW1FbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSAnZWRpdCc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWZvcm0nKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHVubG9hZEZvcm0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbVRpdGxlID0gaXRlbUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IF9jdXJyZW50TGlzdC5maW5kSXRlbShpdGVtVGl0bGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1Gb3JtID0gY29tcG9uZW50cy5yZW5kZXJJdGVtRWRpdChpdGVtLCB1bmxvYWRGb3JtLCBoYW5kbGVFZGl0SXRlbSk7XG4gICAgICAgICAgICAgICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRm9ybSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gYWRkIGJ1dHRvbiB0aGF0IG9wZW5zIGZvcm0gdG8gYWRkIG5ldyBpdGVtXG4gICAgICAgIGNvbnN0IG5ld0l0ZW1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbmV3SXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCduZXctaXRlbS1idG4nKTtcbiAgICAgICAgbmV3SXRlbUJ0bi50ZXh0Q29udGVudCA9ICduZXcgaXRlbSc7XG4gICAgICAgIG5ld0l0ZW1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1mb3JtJykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbUZvcm0gPSBjb21wb25lbnRzLnJlbmRlckl0ZW1Gb3JtKHVubG9hZEZvcm0sIGhhbmRsZUFkZEl0ZW0pXG4gICAgICAgICAgICAgICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtRm9ybSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBsaXN0V3JhcHBlci5hcHBlbmRDaGlsZChuZXdJdGVtQnRuKTtcbiAgICB9XG4gICBcbiAgICAvLyByZW1vdmVzIGxpc3RFbGVtZW50IGZyb20gRE9NXG4gICAgY29uc3QgdW5sb2FkTGlzdCA9ICgpID0+IHtcbiAgICAgICAgbGlzdFdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHVubG9hZEZvcm0oKTtcbiAgICB9XG5cbiAgICBjb25zdCB1bmxvYWRGb3JtID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXdyYXBwZXInKTtcbiAgICAgICAgaWYgKGZvcm1FbGVtZW50KVxuICAgICAgICAgICAgdW5sb2FkRWxlbWVudChfY29udGFpbmVyLCBmb3JtRWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gdGFrZXMgdmFsdWVzIG9mIGl0ZW0gZm9ybSB0byBhZGQgbmV3IGl0ZW0gdG8gY3VycmVudCBsaXN0XG4gICAgY29uc3QgaGFuZGxlQWRkSXRlbSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUtaW5wdXQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjLWlucHV0JykudmFsdWU7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZS1pbnB1dCcpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJykudmFsdWU7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBuZXdJdGVtID0gaXRlbSh0aXRsZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICBfY3VycmVudExpc3QuYWRkSXRlbShuZXdJdGVtKTtcbiAgICAgICAgdW5sb2FkTGlzdCgpO1xuICAgICAgICBsb2FkTGlzdCgpO1xuICAgICAgICB1bmxvYWRGb3JtKCk7XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUVkaXRJdGVtID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuXG4gICAgICAgIGNvbnN0IG9sZFRpdGxlID0gZm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjdGl0bGUtaW5wdXQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzYyA9IGZvcm0ucXVlcnlTZWxlY3RvcignI2Rlc2MtaW5wdXQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignI2RhdGUtaW5wdXQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpLnZhbHVlO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IGl0ZW0odGl0bGUsIGRlc2MsIGRhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgX2N1cnJlbnRMaXN0LnJlcGxhY2VJdGVtKG9sZFRpdGxlLCBuZXdJdGVtKTtcbiAgICAgICAgdW5sb2FkTGlzdCgpO1xuICAgICAgICBsb2FkTGlzdCgpO1xuICAgICAgICB1bmxvYWRGb3JtKCk7XG4gICAgfVxuICAgIC8vIHRha2VzIHZhbHVlcyBvZiBsaXN0IGZvcm0gdG8gYWRkIG5ldyBsaXN0IHRvIGNvbGxlY3Rpb25cbiAgICBjb25zdCBoYW5kbGVBZGRMaXN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUtaW5wdXQnKS52YWx1ZTtcbiAgICAgICAgX2NvbGxlY3Rpb24uYWRkTGlzdChsaXN0KG5hbWUpKTtcbiAgICAgICAgdW5sb2FkU2lkZWJhcigpO1xuICAgICAgICBsb2FkU2lkZWJhcigpO1xuICAgICAgICB1bmxvYWRGb3JtKCk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIGxvYWRQYWdlXG4gICAgfVxufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge2l0ZW0sIGxpc3QsIGNvbGxlY3Rpb259IGZyb20gJy4vdG9kby5qcydcbmltcG9ydCB7dWlIYW5kbGVyfSBmcm9tICcuL3VpLmpzJ1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbmNvbnN0IGhhbmRsZXIgPSB1aUhhbmRsZXIoY29udGVudCk7XG5oYW5kbGVyLmxvYWRQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=