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
        sidebarWrapper.innerHTML = '';
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
            deleteListBtn.classList.add('delete-list-btn');
            deleteListBtn.setAttribute('data-target', list.name);
            deleteListBtn.textContent = 'X';
            deleteListBtn.addEventListener('click', (e) => {
                e.preventDefault();
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

        // add an addItem button that
        const newItemBtn = document.createElement('button');
        newItemBtn.classList.add('new-item-btn');
        newItemBtn.textContent = 'new item';
        newItemBtn.addEventListener('click', loadItemInput);
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


    const loadItemInput = () => {
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
        
        const priorityLow = '<label for="priority-low">Low</label>' +
                            '<input type="radio" id="priority-low" name="priority-input" value="low"/>';

        const priorityMed = '<label for="priority-med">Med</label>' +
                            '<input type="radio" id="priority-med" name="priority-input" value="med"/>';
        
        const priorityHigh = '<label for="priority-high">High</label>' +
                             '<input type="radio" id="priority-high" name="priority-input" value="high"/>';
        prioritySet.innerHTML = priorityLegend + priorityLow + priorityMed + priorityHigh;
        priorityGroup.appendChild(prioritySet);
        itemForm.appendChild(priorityGroup);

        listWrapper.appendChild(itemForm);

        // create button to add new element from info
        const addItemBtn = document.createElement('button');
        addItemBtn.classList.add('add-item-btn');
        addItemBtn.textContent = 'add item';

        itemForm.appendChild(addItemBtn);

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
            unloadItemInput();
            unloadList();
            loadList();
        })


        
    }
    const unloadItemInput = () => {
        const itemForm = document.querySelector('.item-form');
        listWrapper.removeChild(itemForm);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1AsWUFBWTtBQUNaOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLHVCQUF1QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEdnRDs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxJQUFJO0FBQzdDLHlDQUF5QyxVQUFVO0FBQ25EO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDOztBQUVEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixvREFBVTtBQUNsQztBQUNBO0FBQ0Esc0JBQXNCLDhDQUFJO0FBQzFCLHNCQUFzQiw4Q0FBSTtBQUMxQixzQkFBc0IsOENBQUk7QUFDMUIsc0JBQXNCLDhDQUFJOztBQUUxQixzQkFBc0IsOENBQUk7QUFDMUIsc0JBQXNCLDhDQUFJO0FBQzFCLHNCQUFzQiw4Q0FBSTtBQUMxQixzQkFBc0IsOENBQUk7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYTs7QUFFYjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDhDQUFJO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDdFFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmdEO0FBQ2Y7O0FBRWpDO0FBQ0EsZ0JBQWdCLGlEQUFTO0FBQ3pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaXRlbSA9ICh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHsgICAgXG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHl9XG59XG5cbmV4cG9ydCBjb25zdCBsaXN0ID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBfbmFtZSA9IG5hbWU7XG4gICAgY29uc3QgX2l0ZW1zID0gW107XG5cbiAgICAvLyBhZGRzIGl0ZW0gZWxlbWVudCB0byBhcnJheSAoaWYgb25lIHdpdGggdGhlIHNhbWUgdGl0bGUgZG9lcyBub3QgZXhpc3QpXG4gICAgY29uc3QgYWRkSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgICAgIC8vIGNoZWNrIGlmIGl0ZW0gd2l0aCBpdGVtLnRpdGxlIGFscmVhZHkgZXhpc3RzXG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5kZXhPZihpdGVtLnRpdGxlKTtcbiAgICAgICAgaWYgKGluZGV4T2YoaXRlbS50aXRsZSkgfHwgaW5kZXgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpdGVtIGFscmVhZHkgZXhpc3RzJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBfaXRlbXMucHVzaChpdGVtKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlSXRlbSA9IChpdGVtVGl0bGUpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpbmRleE9mKGl0ZW1UaXRsZSk7XG4gICAgICAgIGlmIChpbmRleCB8fCBpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgX2l0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gc3VjaCBpdGVtJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgaXRlbSBvYmplY3Qgd2l0aCB0aXRsZSAnaXRlbVRpdGxlJ1xuICAgIGNvbnN0IGluZGV4T2YgPSAoaXRlbVRpdGxlKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBfaXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoX2l0ZW1zW2luZGV4XS50aXRsZSA9PT0gaXRlbVRpdGxlKVxuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9uYW1lO1xuICAgICAgICB9LFxuICAgICAgICAvLyByZXR1cm5zIGludGVybmFsIGFycmF5IG9mIGl0ZW1zXG4gICAgICAgIGdldCBpdGVtcygpIHtcbiAgICAgICAgICAgIHJldHVybiBfaXRlbXM7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZEl0ZW0sIGRlbGV0ZUl0ZW1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBjb2xsZWN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IF9saXN0cyA9IFtdO1xuXG4gICAgIC8vIGFkZHMgbGlzdCBlbGVtZW50IHRvIGFycmF5IChpZiBvbmUgd2l0aCB0aGUgc2FtZSB0aXRsZSBkb2VzIG5vdCBleGlzdClcbiAgICAgY29uc3QgYWRkTGlzdCA9IChsaXN0KSA9PiB7XG4gICAgICAgIC8vIGNoZWNrIGlmIGxpc3Qgd2l0aCBsaXN0Lm5hbWUgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgY29uc3QgaW5kZXggPSBpbmRleE9mKGxpc3QubmFtZSk7XG4gICAgICAgIGlmIChpbmRleE9mKGxpc3QubmFtZSkgfHwgaW5kZXgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsaXN0IGFscmVhZHkgZXhpc3RzJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBfbGlzdHMucHVzaChsaXN0KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlTGlzdCA9IChsaXN0TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4T2YobGlzdE5hbWUpO1xuICAgICAgICBpZiAoaW5kZXggfHwgaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIF9saXN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIHN1Y2ggbGlzdCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGxpc3Qgb2JqZWN0IHdpdGggbmFtZSAnbGlzdE5hbWUnXG4gICAgY29uc3QgaW5kZXhPZiA9IChsaXN0TmFtZSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgX2xpc3RzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKF9saXN0c1tpbmRleF0ubmFtZSA9PT0gbGlzdE5hbWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuXG4gICAgY29uc3QgZmluZExpc3QgPSAobGlzdE5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIF9saXN0cy5maW5kKGxpc3QgPT4gbGlzdC5uYW1lID09PSBsaXN0TmFtZSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGdldCBsaXN0cygpIHtcbiAgICAgICAgICAgIHJldHVybiBfbGlzdHM7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBmaXJzdExpc3QoKSB7XG4gICAgICAgICAgICBpZiAoX2xpc3RzLmxlbmd0aCA8IDEpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gX2xpc3RzWzBdO1xuICAgICAgICB9LFxuICAgICAgICBhZGRMaXN0LCBkZWxldGVMaXN0LCBmaW5kTGlzdFxuICAgIH1cbn0iLCJpbXBvcnQge2l0ZW0sIGxpc3QsIGNvbGxlY3Rpb259IGZyb20gJy4vdG9kby5qcydcblxuLy8gY2xhc3MgdG8gY292ZXJ0IHRvZG8gcmVsYXRlZCBvYmplY3RzIGludG8gZG9tIGVsZW1lbnRzXG5jb25zdCB0b2RvQ29udmVydGVyID0gKCgpID0+IHtcbiAgIC8vIGNyZWF0ZSBsaXN0IGVsZW1lbnRcbiAgICBjb25zdCByZW5kZXJMaXN0ID0gKGxpc3QpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0KSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XG4gICAgICAgIC8vIGxvb3AgdGhyb3VnaCBsaXN0IGl0ZW1zIHRoZW4gYXBwZW5kIGEgcmVuZGVyZWQgbGlzdCB0aWVtXG4gICAgICAgIGxpc3QuaXRlbXMuZm9yRWFjaChpdGVtID0+IGxpc3RFbGVtZW50LmFwcGVuZENoaWxkKHJlbmRlckl0ZW0oaXRlbSkpKTtcbiAgICAgICAgcmV0dXJuIGxpc3RFbGVtZW50O1xuICAgIH1cbiAgIC8vIHJldHVybiByZW5kZXJlZCBsaXN0IGl0bWVcbiAgIGNvbnN0IHJlbmRlckl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgICAgIGl0ZW1FbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScsIGl0ZW0udGl0bGUpXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGl0ZW0pIHtcbiAgICAgICAgICAgIGNvbnN0IGluZm9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpbmZvRWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2tleX1gKTtcbiAgICAgICAgICAgIGluZm9FbGVtZW50LnRleHRDb250ZW50ID0gYCR7aXRlbVtrZXldfWA7XG4gICAgICAgICAgICBpdGVtRWxlbWVudC5hcHBlbmQoaW5mb0VsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtRWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4ge3JlbmRlckxpc3R9O1xufSkoKTtcblxuLy8gY3JlYXRlcyBhIHVpSGFuZGxlciB0aGF0IHdpbGwgbG9hZCBkb20gZWxlbWVudHMgd2l0aGluICdjb250YWluZXInIGVsZW1lbnRcbmV4cG9ydCBjb25zdCB1aUhhbmRsZXIgPSAoY29udGFpbmVyKSA9PiB7XG4gICAgXG4gICAgY29uc3Qgc2lkZWJhcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLXdyYXBwZXInKTtcbiAgICBjb25zdCBsaXN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpc3RXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2xpc3RXcmFwcGVyJyk7XG5cbiAgICBjb25zdCBfY29sbGVjdGlvbiA9IGNvbGxlY3Rpb24oKTtcbiAgICBcbiAgICAvLyBzYW1wbGUgZWxlbWVudHNcbiAgICBjb25zdCB0ZXN0TGlzdDEgPSBsaXN0KCd0ZXN0MScpO1xuICAgIHRlc3RMaXN0MS5hZGRJdGVtKGl0ZW0oJ3RpdGxlMScsICdkZXNjMScsICdkYXRlMScsICdwcmlvcml0eTEnKSk7XG4gICAgdGVzdExpc3QxLmFkZEl0ZW0oaXRlbSgndGl0bGUyJywgJ2Rlc2MyJywgJ2RhdGUyJywgJ3ByaW9yaXR5MicpKTtcbiAgICB0ZXN0TGlzdDEuYWRkSXRlbShpdGVtKCd0aXRsZTMnLCAnZGVzYzMnLCAnZGF0ZTMnLCAncHJpb3JpdHkxJykpO1xuXG4gICAgY29uc3QgdGVzdExpc3QyID0gbGlzdCgndGVzdDInKTtcbiAgICB0ZXN0TGlzdDIuYWRkSXRlbShpdGVtKCd0aXRsZTEnLCAnZGVzYzEnLCAnZGF0ZTEnLCAncHJpb3JpdHkxJykpO1xuICAgIHRlc3RMaXN0Mi5hZGRJdGVtKGl0ZW0oJ3RpdGxlMicsICdkZXNjMicsICdkYXRlMicsICdwcmlvcml0eTInKSk7XG4gICAgdGVzdExpc3QyLmFkZEl0ZW0oaXRlbSgndGl0bGUzJywgJ2Rlc2MzJywgJ2RhdGUzJywgJ3ByaW9yaXR5MScpKTtcbiAgICBfY29sbGVjdGlvbi5hZGRMaXN0KHRlc3RMaXN0MSk7XG4gICAgX2NvbGxlY3Rpb24uYWRkTGlzdCh0ZXN0TGlzdDIpO1xuXG4gICAgbGV0IF9jdXJyZW50TGlzdCA9IF9jb2xsZWN0aW9uLmZpcnN0TGlzdDtcbiAgICBcbiAgICAvLyBkb20gZWxlbWVudCB0aGF0IHVpIEhhbmRsZXIgd2lsbCBkaXJlY3Qgb3V0IHRvXG4gICAgY29uc3QgX2NvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgIGNvbnN0IHNldEN1cnJlbnRMaXN0ID0gKGxpc3QpID0+IHtcbiAgICAgICAgX2N1cnJlbnRMaXN0ID0gbGlzdDtcbiAgICB9XG4gICAgXG4gICAgLy8gcHV0cyB0b2d0aGVyIHJlbmRlcmVkIGVsZW1lbnRzIG9udG8gdGhlIHBhZ2VcbiAgICBjb25zdCBsb2FkUGFnZSA9ICgpID0+IHtcbiAgICAgICAgbG9hZFNpZGViYXIoKTtcbiAgICAgICAgbG9hZExpc3QoKTtcblxuICAgICAgICBfY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXJXcmFwcGVyKTtcbiAgICAgICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0V3JhcHBlcik7XG4gICAgfVxuXG4gICAgY29uc3QgbG9hZFNpZGViYXIgPSAoKSA9PiB7XG4gICAgICAgIHNpZGViYXJXcmFwcGVyLmFwcGVuZENoaWxkKHJlbmRlclNpZGViYXIoKSk7XG4gICAgfVxuICAgIGNvbnN0IHVubG9hZFNpZGViYXIgPSAoKSA9PiB7XG4gICAgICAgIHNpZGViYXJXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xuICAgIH1cbiAgICAvLyByZW5kZXJzIHNpZGUgYmFyIGVsZW1lbnRcbiAgICBjb25zdCByZW5kZXJTaWRlYmFyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuICAgICAgICBcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChyZW5kZXJOYXZiYXIoY29udGFpbmVyKSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gc2lkZWJhcjtcbiAgICB9XG4gICAgXG4gICAgLy8gcmVuZGVycyBidXR0b25zIGZvciBsb2FkaW5nIGVhY2ggbGlzdFxuICAgIGNvbnN0IHJlbmRlck5hdmJhciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXInKTtcblxuICAgICAgICAvLyBhIG5hdkVudHJ5IGVsZW1lbnQgZm9yIGVhY2ggbGlzdDsgYWxsb3dzIGFjY2VzcyBhbmQgZGVsZXRpb24gb2YgbGlzdFxuICAgICAgICBfY29sbGVjdGlvbi5saXN0cy5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmF2RW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5hdkVudHJ5LmNsYXNzTGlzdC5hZGQoJ25hdi1lbnRyeScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBjcmVhdGlvbiBvZiBidXR0b24gdG8gb3Blbi9sb2FkIGxpc3RzXG4gICAgICAgICAgICBjb25zdCBuYXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIG5hdkJ0bi5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG4gICAgICAgICAgICBuYXZCdG4udGV4dENvbnRlbnQgPSBsaXN0Lm5hbWU7XG4gICAgICAgICAgICBuYXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudExpc3QobGlzdClcbiAgICAgICAgICAgICAgICB1bmxvYWRMaXN0KCk7XG4gICAgICAgICAgICAgICAgbG9hZExpc3QoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbmF2RW50cnkuYXBwZW5kQ2hpbGQobmF2QnRuKTtcblxuICAgICAgICAgICAgLy8gY3JlYXRpb24gb2YgYnV0dG9uIHRvIGRlbGV0ZSBsaXN0XG4gICAgICAgICAgICBjb25zdCBkZWxldGVMaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVMaXN0QnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1saXN0LWJ0bicpO1xuICAgICAgICAgICAgZGVsZXRlTGlzdEJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgbGlzdC5uYW1lKTtcbiAgICAgICAgICAgIGRlbGV0ZUxpc3RCdG4udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgICBkZWxldGVMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgX2NvbGxlY3Rpb24uZGVsZXRlTGlzdChsaXN0Lm5hbWUpO1xuICAgICAgICAgICAgICAgIHVubG9hZFNpZGViYXIoKTtcbiAgICAgICAgICAgICAgICBsb2FkU2lkZWJhcigpO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbmF2RW50cnkuYXBwZW5kQ2hpbGQoZGVsZXRlTGlzdEJ0bik7XG5cbiAgICAgICAgICAgIG5hdmJhci5hcHBlbmRDaGlsZChuYXZFbnRyeSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIG5hdmJhcjtcbiAgICB9XG5cbiAgICAvLyB3aWxsIGNhbGwgdG8gcmVuZGVyIHRoZSBpdGVtcyBvZiAnX2N1cnJlbnRMaXN0JyBhcyBkb20gZWxlbWVudHNcbiAgICAvLyB0aGVuIHdpbGwgdXBkYXRlIHRoZSBsaXN0V3JhcHBlciBlbGVtZW50IHdpdGggc2FpZCBsaXN0XG4gICAgLy8gYWxzbyBhZGRzIGRlbGV0ZSBidXR0b25zIGZvciBlYWNoIGl0ZW0gZWxlbWVudFxuICAgIGNvbnN0IGxvYWRMaXN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZW5kZXJlZExpc3QgPSB0b2RvQ29udmVydGVyLnJlbmRlckxpc3QoX2N1cnJlbnRMaXN0KTtcbiAgICAgICAgY29uc3QgaXRlbUVsZW1lbnRzID0gcmVuZGVyZWRMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtJyk7XG5cbiAgICAgICAgbGlzdFdyYXBwZXIuYXBwZW5kQ2hpbGQocmVuZGVyZWRMaXN0KTtcblxuICAgICAgICAvLyBhZGRpbmcgZGVsZXRlIGJ1dHRvbnMgZm9yIGl0ZW0gZWxlbWVudHNcbiAgICAgICAgaXRlbUVsZW1lbnRzLmZvckVhY2goaXRlbUVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbVRpdGxlID0gaXRlbUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJyk7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtaXRlbS1idG4nKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgaXRlbVRpdGxlKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBpdGVtIGZyb20gZG9tXG4gICAgICAgICAgICAgICAgdW5sb2FkSXRlbShyZW5kZXJlZExpc3QsIGl0ZW1FbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSBpdGVtIGZyb20gJ19jdXJyZW50TGlzdCdcbiAgICAgICAgICAgICAgICBfY3VycmVudExpc3QuZGVsZXRlSXRlbShpdGVtVGl0bGUpO1xuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpdGVtRWxlbWVudC5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGFkZCBhbiBhZGRJdGVtIGJ1dHRvbiB0aGF0XG4gICAgICAgIGNvbnN0IG5ld0l0ZW1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbmV3SXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCduZXctaXRlbS1idG4nKTtcbiAgICAgICAgbmV3SXRlbUJ0bi50ZXh0Q29udGVudCA9ICduZXcgaXRlbSc7XG4gICAgICAgIG5ld0l0ZW1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkSXRlbUlucHV0KTtcbiAgICAgICAgbGlzdFdyYXBwZXIuYXBwZW5kQ2hpbGQobmV3SXRlbUJ0bik7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlcyBpdGVtRWxlbWVudCBmcm9tIERvbVxuICAgIGNvbnN0IHVubG9hZEl0ZW0gPSAobGlzdEVsZW1lbnQsIGl0ZW1FbGVtZW50KSA9PiB7XG4gICAgICAgIGxpc3RFbGVtZW50LnJlbW92ZUNoaWxkKGl0ZW1FbGVtZW50KTtcbiAgICB9XG4gICAgXG4gICAgLy8gcmVtb3ZlcyBsaXN0RWxlbWVudCBmcm9tIERPTVxuICAgIGNvbnN0IHVubG9hZExpc3QgPSAoKSA9PiB7XG4gICAgICAgIGxpc3RXcmFwcGVyLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuXG4gICAgY29uc3QgbG9hZEl0ZW1JbnB1dCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGl0ZW1Gb3JtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZm9ybScpO1xuXG4gICAgICAgIC8vIGNyZWF0aW9uIG9mIGZvcm0gZ3JvdXAgZm9yIG5ldyBpdGVtIHRpdGxlXG4gICAgICAgIGNvbnN0IHRpdGxlR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGl0bGVHcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJyk7XG5cbiAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9ICc8bGFiZWwgZm9yPVwidGl0bGUtaW5wdXRcIj5UaXRsZTwvbGFiZWw+JztcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9ICc8aW5wdXQgaWQ9XCJ0aXRsZS1pbnB1dFwiIG5hbWU9XCJ0aXRsZS1pbnB1dCBwbGFjZWhvbGRlcj1cIlRpdGxlXCIvPic7XG4gICAgICAgIHRpdGxlR3JvdXAuaW5uZXJIVE1MID0gdGl0bGVMYWJlbCArIHRpdGxlSW5wdXQ7XG4gICAgICAgIGl0ZW1Gb3JtLmFwcGVuZENoaWxkKHRpdGxlR3JvdXApXG5cbiAgICAgICAgLy8gY3JlYXRpb24gb2YgZm9ybSBncm91cCBmb3IgbmV3IGl0ZW0gZGVzY3JpcHRpb25cbiAgICAgICAgY29uc3QgZGVzY0dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlc2NHcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJyk7XG5cbiAgICAgICAgY29uc3QgZGVzY0xhYmVsID0gJzxsYWJlbCBmb3I9XCJkZXNjLWlucHV0XCI+RGVzY3JpcHRpb248L2xhYmVsPic7XG4gICAgICAgIGNvbnN0IGRlc2NJbnB1dCA9ICc8aW5wdXQgaWQ9XCJkZXNjLWlucHV0XCIgbmFtZT1cImRlc2MtaW5wdXRcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIvPic7XG4gICAgICAgIGRlc2NHcm91cC5pbm5lckhUTUwgPSBkZXNjTGFiZWwgKyBkZXNjSW5wdXQ7XG4gICAgICAgIGl0ZW1Gb3JtLmFwcGVuZENoaWxkKGRlc2NHcm91cCk7XG4gICAgICAgIFxuICAgICAgICAvLyBjcmVhdGlvbiBvZiBmb3JtIGdyb3VwIGZvciBuZXcgaXRlbSBkYXRlXG4gICAgICAgIGNvbnN0IGRhdGVHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXRlR3JvdXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpO1xuXG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9ICc8bGFiZWwgZm9yPVwiZGF0ZS1pbnB1dFwiPkRhdGU8L2xhYmVsPic7XG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9ICc8aW5wdXQgaWQ9XCJkYXRlLWlucHV0XCIgbmFtZT1cImRhdGUtaW5wdXRcIi8+JztcbiAgICAgICAgZGF0ZUdyb3VwLmlubmVySFRNTCA9IGRhdGVMYWJlbCArIGRhdGVJbnB1dDtcbiAgICAgICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUdyb3VwKTtcbiAgICAgICAgLy8gY3JlYXRpb24gb2YgZm9ybSBncm91cCBmb3IgbmV3IGl0ZW0gcHJpb3JpdHlcbiAgICAgICAgY29uc3QgcHJpb3JpdHlHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcmlvcml0eUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHlTZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlMZWdlbmQgPSAnPGxlZ2VuZD5Qcmlvcml0eTwvbGVnZW5kPic7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcmlvcml0eUxvdyA9ICc8bGFiZWwgZm9yPVwicHJpb3JpdHktbG93XCI+TG93PC9sYWJlbD4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwicHJpb3JpdHktbG93XCIgbmFtZT1cInByaW9yaXR5LWlucHV0XCIgdmFsdWU9XCJsb3dcIi8+JztcblxuICAgICAgICBjb25zdCBwcmlvcml0eU1lZCA9ICc8bGFiZWwgZm9yPVwicHJpb3JpdHktbWVkXCI+TWVkPC9sYWJlbD4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwicHJpb3JpdHktbWVkXCIgbmFtZT1cInByaW9yaXR5LWlucHV0XCIgdmFsdWU9XCJtZWRcIi8+JztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByaW9yaXR5SGlnaCA9ICc8bGFiZWwgZm9yPVwicHJpb3JpdHktaGlnaFwiPkhpZ2g8L2xhYmVsPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwicHJpb3JpdHktaGlnaFwiIG5hbWU9XCJwcmlvcml0eS1pbnB1dFwiIHZhbHVlPVwiaGlnaFwiLz4nO1xuICAgICAgICBwcmlvcml0eVNldC5pbm5lckhUTUwgPSBwcmlvcml0eUxlZ2VuZCArIHByaW9yaXR5TG93ICsgcHJpb3JpdHlNZWQgKyBwcmlvcml0eUhpZ2g7XG4gICAgICAgIHByaW9yaXR5R3JvdXAuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZXQpO1xuICAgICAgICBpdGVtRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUdyb3VwKTtcblxuICAgICAgICBsaXN0V3JhcHBlci5hcHBlbmRDaGlsZChpdGVtRm9ybSk7XG5cbiAgICAgICAgLy8gY3JlYXRlIGJ1dHRvbiB0byBhZGQgbmV3IGVsZW1lbnQgZnJvbSBpbmZvXG4gICAgICAgIGNvbnN0IGFkZEl0ZW1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdhZGQtaXRlbS1idG4nKTtcbiAgICAgICAgYWRkSXRlbUJ0bi50ZXh0Q29udGVudCA9ICdhZGQgaXRlbSc7XG5cbiAgICAgICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQoYWRkSXRlbUJ0bik7XG5cbiAgICAgICAgLy8gYWRkSXRlbSBidG4gc2hvdWxkIGFkZCBuZXcgYnV0dG9uIGZyb20gZm9ybSBpbmZvLCB0aGVuIHJlbG9hZCBsaXN0XG4gICAgICAgIGFkZEl0ZW1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gY2FwdHVyZSBpbnB1dCBmcm9tIGlucHV0IGZpZWxkcztcbiAgICAgICAgICAgIGNvbnN0IG5ld1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlLWlucHV0JykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBuZXdEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2MtaW5wdXQnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZS1pbnB1dCcpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgbmV3UHJpb3JpdHkgPSBwcmlvcml0eVNldC5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpLnZhbHVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBuZXdJdGVtID0gaXRlbShuZXdUaXRsZSwgbmV3RGVzYywgbmV3RGF0ZSwgbmV3UHJpb3JpdHkpO1xuICAgICAgICAgICAgX2N1cnJlbnRMaXN0LmFkZEl0ZW0obmV3SXRlbSk7XG4gICAgICAgICAgICB1bmxvYWRJdGVtSW5wdXQoKTtcbiAgICAgICAgICAgIHVubG9hZExpc3QoKTtcbiAgICAgICAgICAgIGxvYWRMaXN0KCk7XG4gICAgICAgIH0pXG5cblxuICAgICAgICBcbiAgICB9XG4gICAgY29uc3QgdW5sb2FkSXRlbUlucHV0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWZvcm0nKTtcbiAgICAgICAgbGlzdFdyYXBwZXIucmVtb3ZlQ2hpbGQoaXRlbUZvcm0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBsb2FkUGFnZVxuICAgIH1cbn1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2l0ZW0sIGxpc3QsIGNvbGxlY3Rpb259IGZyb20gJy4vdG9kby5qcydcbmltcG9ydCB7dWlIYW5kbGVyfSBmcm9tICcuL3VpLmpzJ1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbmNvbnN0IGhhbmRsZXIgPSB1aUhhbmRsZXIoY29udGVudCk7XG5oYW5kbGVyLmxvYWRQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=