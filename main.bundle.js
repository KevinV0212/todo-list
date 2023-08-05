/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
        console.log(index);
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
        addItem,
        deleteItem
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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");

const test = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.item)('title', 'desc', 'date', 'priority');
console.log(test);

const testList = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.list)('name');
testList.addItem(test);
console.log(testList.items);
testList.deleteItem('title');
console.log(testList.items);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUCxZQUFZO0FBQ1o7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsdUJBQXVCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3JEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm9DO0FBQ3BDLGFBQWEsOENBQUk7QUFDakI7O0FBRUEsaUJBQWlCLDhDQUFJO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLDRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpdGVtID0gKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4geyAgICBcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eX1cbn1cblxuZXhwb3J0IGNvbnN0IGxpc3QgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IF9uYW1lID0gbmFtZTtcbiAgICBjb25zdCBfaXRlbXMgPSBbXTtcblxuICAgIC8vIGFkZHMgaXRlbSBlbGVtZW50IHRvIGFycmF5IChpZiBvbmUgd2l0aCB0aGUgc2FtZSB0aXRsZSBkb2VzIG5vdCBleGlzdClcbiAgICBjb25zdCBhZGRJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAgICAgLy8gY2hlY2sgaWYgaXRlbSB3aXRoIGl0ZW0udGl0bGUgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgY29uc3QgaW5kZXggPSBpbmRleE9mKGl0ZW0udGl0bGUpO1xuICAgICAgICBpZiAoaW5kZXhPZihpdGVtLnRpdGxlKSB8fCBpbmRleClcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2l0ZW0gYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIF9pdGVtcy5wdXNoKGl0ZW0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVJdGVtID0gKGl0ZW1UaXRsZSkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4T2YoaXRlbVRpdGxlKTtcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgICBpZiAoaW5kZXggfHwgaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIF9pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIHN1Y2ggaXRlbScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gb2JqZWN0IHdpdGggdGl0bGUgJ2l0ZW1UaXRsZSdcbiAgICBjb25zdCBpbmRleE9mID0gKGl0ZW1UaXRsZSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgX2l0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKF9pdGVtc1tpbmRleF0udGl0bGUgPT09IGl0ZW1UaXRsZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gX25hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHJldHVybnMgaW50ZXJuYWwgYXJyYXkgb2YgaXRlbXNcbiAgICAgICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9pdGVtcztcbiAgICAgICAgfSxcbiAgICAgICAgYWRkSXRlbSxcbiAgICAgICAgZGVsZXRlSXRlbVxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7aXRlbSwgbGlzdH0gZnJvbSAnLi90b2RvLmpzJ1xuY29uc3QgdGVzdCA9IGl0ZW0oJ3RpdGxlJywgJ2Rlc2MnLCAnZGF0ZScsICdwcmlvcml0eScpO1xuY29uc29sZS5sb2codGVzdCk7XG5cbmNvbnN0IHRlc3RMaXN0ID0gbGlzdCgnbmFtZScpO1xudGVzdExpc3QuYWRkSXRlbSh0ZXN0KTtcbmNvbnNvbGUubG9nKHRlc3RMaXN0Lml0ZW1zKTtcbnRlc3RMaXN0LmRlbGV0ZUl0ZW0oJ3RpdGxlJyk7XG5jb25zb2xlLmxvZyh0ZXN0TGlzdC5pdGVtcyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9