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
        console.log(index);
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
    listWrapper.classList.add('listWrapper');

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
    
    // puts togther rendered elements onto the page
    const loadPage = () => {
        loadSidebar();
        loadList();

        _container.appendChild(sidebarWrapper);
        _container.appendChild(listWrapper);
    }

    const loadSidebar = () => {
        sidebarWrapper.appendChild(renderSidebar());
    }
    const unloadSidebar = () => {
        sidebarWrapper.innerHtml = '';
    }
    // renders side bar element
    const renderSidebar = () => {
        const sidebar = document.createElement('div');
        sidebar.classList.add('sidebar');
        
        sidebar.appendChild(renderNavbar(container));
        
        return sidebar;
    }
    
    // renders buttons for loading each list
    const renderNavbar = () => {
        const navbar = document.createElement('div');
        navbar.classList.add('navbar');

        _collection.lists.forEach(list => {
            const navBtn = document.createElement('button');
            navBtn.classList.add('nav-btn');
            navBtn.setAttribute('data-target', list.name);
            navBtn.textContent = list.name;
            navBtn.addEventListener('click', () => {
                setCurrentList(_collection.findList(navBtn.getAttribute('data-target')))
                unloadList();
                loadList();
            });
            navbar.appendChild(navBtn);
        })

        return navbar;
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
            deleteBtn.classList.add('delete-item-btn');
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
    }

    // removes itemElement from dom
    const unloadItem = (listElement, itemElement) => {
        listElement.removeChild(itemElement);
    }
    const unloadList = () => {
        listWrapper.innerHTML = '';
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
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");



const content = document.querySelector('.content');
const handler = (0,_ui_js__WEBPACK_IMPORTED_MODULE_1__.uiHandler)(content);
handler.loadPage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpdGVtID0gKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4geyAgICBcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eX1cbn1cblxuZXhwb3J0IGNvbnN0IGxpc3QgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IF9uYW1lID0gbmFtZTtcbiAgICBjb25zdCBfaXRlbXMgPSBbXTtcblxuICAgIC8vIGFkZHMgaXRlbSBlbGVtZW50IHRvIGFycmF5IChpZiBvbmUgd2l0aCB0aGUgc2FtZSB0aXRsZSBkb2VzIG5vdCBleGlzdClcbiAgICBjb25zdCBhZGRJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAgICAgLy8gY2hlY2sgaWYgaXRlbSB3aXRoIGl0ZW0udGl0bGUgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgY29uc3QgaW5kZXggPSBpbmRleE9mKGl0ZW0udGl0bGUpO1xuICAgICAgICBpZiAoaW5kZXhPZihpdGVtLnRpdGxlKSB8fCBpbmRleClcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2l0ZW0gYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIF9pdGVtcy5wdXNoKGl0ZW0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVJdGVtID0gKGl0ZW1UaXRsZSkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4T2YoaXRlbVRpdGxlKTtcbiAgICAgICAgaWYgKGluZGV4IHx8IGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBfaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBzdWNoIGl0ZW0nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBpdGVtIG9iamVjdCB3aXRoIHRpdGxlICdpdGVtVGl0bGUnXG4gICAgY29uc3QgaW5kZXhPZiA9IChpdGVtVGl0bGUpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IF9pdGVtcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmIChfaXRlbXNbaW5kZXhdLnRpdGxlID09PSBpdGVtVGl0bGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gX25hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHJldHVybnMgaW50ZXJuYWwgYXJyYXkgb2YgaXRlbXNcbiAgICAgICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9pdGVtcztcbiAgICAgICAgfSxcbiAgICAgICAgYWRkSXRlbSwgZGVsZXRlSXRlbVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbGxlY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgX2xpc3RzID0gW107XG5cbiAgICAgLy8gYWRkcyBsaXN0IGVsZW1lbnQgdG8gYXJyYXkgKGlmIG9uZSB3aXRoIHRoZSBzYW1lIHRpdGxlIGRvZXMgbm90IGV4aXN0KVxuICAgICBjb25zdCBhZGRMaXN0ID0gKGxpc3QpID0+IHtcbiAgICAgICAgLy8gY2hlY2sgaWYgbGlzdCB3aXRoIGxpc3QubmFtZSBhbHJlYWR5IGV4aXN0c1xuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4T2YobGlzdC5uYW1lKTtcbiAgICAgICAgaWYgKGluZGV4T2YobGlzdC5uYW1lKSB8fCBpbmRleClcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xpc3QgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIF9saXN0cy5wdXNoKGxpc3QpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVMaXN0ID0gKGxpc3ROYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5kZXhPZihsaXN0TmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgaWYgKGluZGV4IHx8IGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBfbGlzdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBzdWNoIGxpc3QnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBsaXN0IG9iamVjdCB3aXRoIG5hbWUgJ2xpc3ROYW1lJ1xuICAgIGNvbnN0IGluZGV4T2YgPSAobGlzdE5hbWUpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IF9saXN0cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmIChfbGlzdHNbaW5kZXhdLm5hbWUgPT09IGxpc3ROYW1lKVxuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmRMaXN0ID0gKGxpc3ROYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiBfbGlzdHMuZmluZChsaXN0ID0+IGxpc3QubmFtZSA9PT0gbGlzdE5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQgbGlzdHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2xpc3RzO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgZmlyc3RMaXN0KCkge1xuICAgICAgICAgICAgaWYgKF9saXN0cy5sZW5ndGggPCAxKVxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9saXN0c1swXTtcbiAgICAgICAgfSxcbiAgICAgICAgYWRkTGlzdCwgZGVsZXRlTGlzdCwgZmluZExpc3RcbiAgICB9XG59IiwiaW1wb3J0IHtpdGVtLCBsaXN0LCBjb2xsZWN0aW9ufSBmcm9tICcuL3RvZG8uanMnXG5cbi8vIGNsYXNzIHRvIGNvdmVydCB0b2RvIHJlbGF0ZWQgb2JqZWN0cyBpbnRvIGRvbSBlbGVtZW50c1xuY29uc3QgdG9kb0NvbnZlcnRlciA9ICgoKSA9PiB7XG4gICAvLyBjcmVhdGUgbGlzdCBlbGVtZW50XG4gICAgY29uc3QgcmVuZGVyTGlzdCA9IChsaXN0KSA9PiB7XG4gICAgICAgIGlmICghbGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGlzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbGlzdCcpO1xuICAgICAgICAvLyBsb29wIHRocm91Z2ggbGlzdCBpdGVtcyB0aGVuIGFwcGVuZCBhIHJlbmRlcmVkIGxpc3QgdGllbVxuICAgICAgICBsaXN0Lml0ZW1zLmZvckVhY2goaXRlbSA9PiBsaXN0RWxlbWVudC5hcHBlbmRDaGlsZChyZW5kZXJJdGVtKGl0ZW0pKSk7XG4gICAgICAgIHJldHVybiBsaXN0RWxlbWVudDtcbiAgICB9XG4gICAvLyByZXR1cm4gcmVuZGVyZWQgbGlzdCBpdG1lXG4gICBjb25zdCByZW5kZXJJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgICAgICBpdGVtRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnLCBpdGVtLnRpdGxlKVxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBpdGVtKSB7XG4gICAgICAgICAgICBjb25zdCBpbmZvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaW5mb0VsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtrZXl9YCk7XG4gICAgICAgICAgICBpbmZvRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2l0ZW1ba2V5XX1gO1xuICAgICAgICAgICAgaXRlbUVsZW1lbnQuYXBwZW5kKGluZm9FbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlbUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtyZW5kZXJMaXN0fTtcbn0pKCk7XG5cbi8vIGNyZWF0ZXMgYSB1aUhhbmRsZXIgdGhhdCB3aWxsIGxvYWQgZG9tIGVsZW1lbnRzIHdpdGhpbiAnY29udGFpbmVyJyBlbGVtZW50XG5leHBvcnQgY29uc3QgdWlIYW5kbGVyID0gKGNvbnRhaW5lcikgPT4ge1xuICAgIFxuICAgIGNvbnN0IHNpZGViYXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2lkZWJhcldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci13cmFwcGVyJyk7XG4gICAgY29uc3QgbGlzdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaXN0V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdsaXN0V3JhcHBlcicpO1xuXG4gICAgY29uc3QgX2NvbGxlY3Rpb24gPSBjb2xsZWN0aW9uKCk7XG4gICAgXG4gICAgLy8gc2FtcGxlIGVsZW1lbnRzXG4gICAgY29uc3QgdGVzdExpc3QxID0gbGlzdCgndGVzdDEnKTtcbiAgICB0ZXN0TGlzdDEuYWRkSXRlbShpdGVtKCd0aXRsZTEnLCAnZGVzYzEnLCAnZGF0ZTEnLCAncHJpb3JpdHkxJykpO1xuICAgIHRlc3RMaXN0MS5hZGRJdGVtKGl0ZW0oJ3RpdGxlMicsICdkZXNjMicsICdkYXRlMicsICdwcmlvcml0eTInKSk7XG4gICAgdGVzdExpc3QxLmFkZEl0ZW0oaXRlbSgndGl0bGUzJywgJ2Rlc2MzJywgJ2RhdGUzJywgJ3ByaW9yaXR5MScpKTtcblxuICAgIGNvbnN0IHRlc3RMaXN0MiA9IGxpc3QoJ3Rlc3QyJyk7XG4gICAgdGVzdExpc3QyLmFkZEl0ZW0oaXRlbSgndGl0bGUxJywgJ2Rlc2MxJywgJ2RhdGUxJywgJ3ByaW9yaXR5MScpKTtcbiAgICB0ZXN0TGlzdDIuYWRkSXRlbShpdGVtKCd0aXRsZTInLCAnZGVzYzInLCAnZGF0ZTInLCAncHJpb3JpdHkyJykpO1xuICAgIHRlc3RMaXN0Mi5hZGRJdGVtKGl0ZW0oJ3RpdGxlMycsICdkZXNjMycsICdkYXRlMycsICdwcmlvcml0eTEnKSk7XG4gICAgX2NvbGxlY3Rpb24uYWRkTGlzdCh0ZXN0TGlzdDEpO1xuICAgIF9jb2xsZWN0aW9uLmFkZExpc3QodGVzdExpc3QyKTtcblxuICAgIGxldCBfY3VycmVudExpc3QgPSBfY29sbGVjdGlvbi5maXJzdExpc3Q7XG4gICAgXG4gICAgLy8gZG9tIGVsZW1lbnQgdGhhdCB1aSBIYW5kbGVyIHdpbGwgZGlyZWN0IG91dCB0b1xuICAgIGNvbnN0IF9jb250YWluZXIgPSBjb250YWluZXI7XG5cbiAgICBjb25zdCBzZXRDdXJyZW50TGlzdCA9IChsaXN0KSA9PiB7XG4gICAgICAgIF9jdXJyZW50TGlzdCA9IGxpc3Q7XG4gICAgfVxuICAgIFxuICAgIC8vIHB1dHMgdG9ndGhlciByZW5kZXJlZCBlbGVtZW50cyBvbnRvIHRoZSBwYWdlXG4gICAgY29uc3QgbG9hZFBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGxvYWRTaWRlYmFyKCk7XG4gICAgICAgIGxvYWRMaXN0KCk7XG5cbiAgICAgICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChzaWRlYmFyV3JhcHBlcik7XG4gICAgICAgIF9jb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdFdyYXBwZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGxvYWRTaWRlYmFyID0gKCkgPT4ge1xuICAgICAgICBzaWRlYmFyV3JhcHBlci5hcHBlbmRDaGlsZChyZW5kZXJTaWRlYmFyKCkpO1xuICAgIH1cbiAgICBjb25zdCB1bmxvYWRTaWRlYmFyID0gKCkgPT4ge1xuICAgICAgICBzaWRlYmFyV3JhcHBlci5pbm5lckh0bWwgPSAnJztcbiAgICB9XG4gICAgLy8gcmVuZGVycyBzaWRlIGJhciBlbGVtZW50XG4gICAgY29uc3QgcmVuZGVyU2lkZWJhciA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcbiAgICAgICAgXG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocmVuZGVyTmF2YmFyKGNvbnRhaW5lcikpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHNpZGViYXI7XG4gICAgfVxuICAgIFxuICAgIC8vIHJlbmRlcnMgYnV0dG9ucyBmb3IgbG9hZGluZyBlYWNoIGxpc3RcbiAgICBjb25zdCByZW5kZXJOYXZiYXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJyk7XG5cbiAgICAgICAgX2NvbGxlY3Rpb24ubGlzdHMuZm9yRWFjaChsaXN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hdkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgbmF2QnRuLmNsYXNzTGlzdC5hZGQoJ25hdi1idG4nKTtcbiAgICAgICAgICAgIG5hdkJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgbGlzdC5uYW1lKTtcbiAgICAgICAgICAgIG5hdkJ0bi50ZXh0Q29udGVudCA9IGxpc3QubmFtZTtcbiAgICAgICAgICAgIG5hdkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50TGlzdChfY29sbGVjdGlvbi5maW5kTGlzdChuYXZCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpKSlcbiAgICAgICAgICAgICAgICB1bmxvYWRMaXN0KCk7XG4gICAgICAgICAgICAgICAgbG9hZExpc3QoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbmF2YmFyLmFwcGVuZENoaWxkKG5hdkJ0bik7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIG5hdmJhcjtcbiAgICB9XG5cbiAgICAvLyB3aWxsIGNhbGwgdG8gcmVuZGVyIHRoZSBpdGVtcyBvZiAnX2N1cnJlbnRMaXN0JyBhcyBkb20gZWxlbWVudHNcbiAgICAvLyB0aGVuIHdpbGwgdXBkYXRlIHRoZSBsaXN0V3JhcHBlciBlbGVtZW50IHdpdGggc2FpZCBsaXN0XG4gICAgLy8gYWxzbyBhZGRzIGRlbGV0ZSBidXR0b25zIGZvciBlYWNoIGl0ZW0gZWxlbWVudFxuICAgIGNvbnN0IGxvYWRMaXN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZW5kZXJlZExpc3QgPSB0b2RvQ29udmVydGVyLnJlbmRlckxpc3QoX2N1cnJlbnRMaXN0KTtcbiAgICAgICAgY29uc3QgaXRlbUVsZW1lbnRzID0gcmVuZGVyZWRMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtJyk7XG5cbiAgICAgICAgbGlzdFdyYXBwZXIuYXBwZW5kQ2hpbGQocmVuZGVyZWRMaXN0KTtcblxuICAgICAgICAvLyBhZGRpbmcgZGVsZXRlIGJ1dHRvbnMgZm9yIGl0ZW0gZWxlbWVudHNcbiAgICAgICAgaXRlbUVsZW1lbnRzLmZvckVhY2goaXRlbUVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbVRpdGxlID0gaXRlbUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJyk7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtaXRlbS1idG4nKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgaXRlbVRpdGxlKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBpdGVtIGZyb20gZG9tXG4gICAgICAgICAgICAgICAgdW5sb2FkSXRlbShyZW5kZXJlZExpc3QsIGl0ZW1FbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSBpdGVtIGZyb20gJ19jdXJyZW50TGlzdCdcbiAgICAgICAgICAgICAgICBfY3VycmVudExpc3QuZGVsZXRlSXRlbShpdGVtVGl0bGUpO1xuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpdGVtRWxlbWVudC5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlcyBpdGVtRWxlbWVudCBmcm9tIGRvbVxuICAgIGNvbnN0IHVubG9hZEl0ZW0gPSAobGlzdEVsZW1lbnQsIGl0ZW1FbGVtZW50KSA9PiB7XG4gICAgICAgIGxpc3RFbGVtZW50LnJlbW92ZUNoaWxkKGl0ZW1FbGVtZW50KTtcbiAgICB9XG4gICAgY29uc3QgdW5sb2FkTGlzdCA9ICgpID0+IHtcbiAgICAgICAgbGlzdFdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIGxvYWRQYWdlXG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtpdGVtLCBsaXN0LCBjb2xsZWN0aW9ufSBmcm9tICcuL3RvZG8uanMnXG5pbXBvcnQge3VpSGFuZGxlcn0gZnJvbSAnLi91aS5qcydcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5jb25zdCBoYW5kbGVyID0gdWlIYW5kbGVyKGNvbnRlbnQpO1xuaGFuZGxlci5sb2FkUGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9