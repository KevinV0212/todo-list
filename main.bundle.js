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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1AsWUFBWTtBQUNaOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsdUJBQXVCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6R2dEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLElBQUk7QUFDN0MseUNBQXlDLFVBQVU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7O0FBRUQ7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLG9EQUFVO0FBQ2xDO0FBQ0E7QUFDQSxzQkFBc0IsOENBQUk7QUFDMUIsc0JBQXNCLDhDQUFJO0FBQzFCLHNCQUFzQiw4Q0FBSTtBQUMxQixzQkFBc0IsOENBQUk7O0FBRTFCLHNCQUFzQiw4Q0FBSTtBQUMxQixzQkFBc0IsOENBQUk7QUFDMUIsc0JBQXNCLDhDQUFJO0FBQzFCLHNCQUFzQiw4Q0FBSTtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYTs7QUFFYjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDhDQUFJO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDbFBBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmdEO0FBQ2Y7O0FBRWpDO0FBQ0EsZ0JBQWdCLGlEQUFTO0FBQ3pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaXRlbSA9ICh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHsgICAgXG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHl9XG59XG5cbmV4cG9ydCBjb25zdCBsaXN0ID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBfbmFtZSA9IG5hbWU7XG4gICAgY29uc3QgX2l0ZW1zID0gW107XG5cbiAgICAvLyBhZGRzIGl0ZW0gZWxlbWVudCB0byBhcnJheSAoaWYgb25lIHdpdGggdGhlIHNhbWUgdGl0bGUgZG9lcyBub3QgZXhpc3QpXG4gICAgY29uc3QgYWRkSXRlbSA9IChpdGVtKSA9PiB7XG4gICAgICAgIC8vIGNoZWNrIGlmIGl0ZW0gd2l0aCBpdGVtLnRpdGxlIGFscmVhZHkgZXhpc3RzXG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5kZXhPZihpdGVtLnRpdGxlKTtcbiAgICAgICAgaWYgKGluZGV4T2YoaXRlbS50aXRsZSkgfHwgaW5kZXgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpdGVtIGFscmVhZHkgZXhpc3RzJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBfaXRlbXMucHVzaChpdGVtKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlSXRlbSA9IChpdGVtVGl0bGUpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpbmRleE9mKGl0ZW1UaXRsZSk7XG4gICAgICAgIGlmIChpbmRleCB8fCBpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgX2l0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gc3VjaCBpdGVtJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgaXRlbSBvYmplY3Qgd2l0aCB0aXRsZSAnaXRlbVRpdGxlJ1xuICAgIGNvbnN0IGluZGV4T2YgPSAoaXRlbVRpdGxlKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBfaXRlbXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoX2l0ZW1zW2luZGV4XS50aXRsZSA9PT0gaXRlbVRpdGxlKVxuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTmFOO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9uYW1lO1xuICAgICAgICB9LFxuICAgICAgICAvLyByZXR1cm5zIGludGVybmFsIGFycmF5IG9mIGl0ZW1zXG4gICAgICAgIGdldCBpdGVtcygpIHtcbiAgICAgICAgICAgIHJldHVybiBfaXRlbXM7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZEl0ZW0sIGRlbGV0ZUl0ZW1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBjb2xsZWN0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IF9saXN0cyA9IFtdO1xuXG4gICAgIC8vIGFkZHMgbGlzdCBlbGVtZW50IHRvIGFycmF5IChpZiBvbmUgd2l0aCB0aGUgc2FtZSB0aXRsZSBkb2VzIG5vdCBleGlzdClcbiAgICAgY29uc3QgYWRkTGlzdCA9IChsaXN0KSA9PiB7XG4gICAgICAgIC8vIGNoZWNrIGlmIGxpc3Qgd2l0aCBsaXN0Lm5hbWUgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgY29uc3QgaW5kZXggPSBpbmRleE9mKGxpc3QubmFtZSk7XG4gICAgICAgIGlmIChpbmRleE9mKGxpc3QubmFtZSkgfHwgaW5kZXgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsaXN0IGFscmVhZHkgZXhpc3RzJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBfbGlzdHMucHVzaChsaXN0KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlTGlzdCA9IChsaXN0TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4T2YobGlzdE5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICAgIGlmIChpbmRleCB8fCBpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgX2xpc3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gc3VjaCBsaXN0Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbGlzdCBvYmplY3Qgd2l0aCBuYW1lICdsaXN0TmFtZSdcbiAgICBjb25zdCBpbmRleE9mID0gKGxpc3ROYW1lKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBfbGlzdHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoX2xpc3RzW2luZGV4XS5uYW1lID09PSBsaXN0TmFtZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG5cbiAgICBjb25zdCBmaW5kTGlzdCA9IChsaXN0TmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gX2xpc3RzLmZpbmQobGlzdCA9PiBsaXN0Lm5hbWUgPT09IGxpc3ROYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IGxpc3RzKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9saXN0cztcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGZpcnN0TGlzdCgpIHtcbiAgICAgICAgICAgIGlmIChfbGlzdHMubGVuZ3RoIDwgMSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBfbGlzdHNbMF07XG4gICAgICAgIH0sXG4gICAgICAgIGFkZExpc3QsIGRlbGV0ZUxpc3QsIGZpbmRMaXN0XG4gICAgfVxufSIsImltcG9ydCB7aXRlbSwgbGlzdCwgY29sbGVjdGlvbn0gZnJvbSAnLi90b2RvLmpzJ1xuXG4vLyBjbGFzcyB0byBjb3ZlcnQgdG9kbyByZWxhdGVkIG9iamVjdHMgaW50byBkb20gZWxlbWVudHNcbmNvbnN0IHRvZG9Db252ZXJ0ZXIgPSAoKCkgPT4ge1xuICAgLy8gY3JlYXRlIGxpc3QgZWxlbWVudFxuICAgIGNvbnN0IHJlbmRlckxpc3QgPSAobGlzdCkgPT4ge1xuICAgICAgICBpZiAoIWxpc3QpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xpc3QnKTtcbiAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGxpc3QgaXRlbXMgdGhlbiBhcHBlbmQgYSByZW5kZXJlZCBsaXN0IHRpZW1cbiAgICAgICAgbGlzdC5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4gbGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQocmVuZGVySXRlbShpdGVtKSkpO1xuICAgICAgICByZXR1cm4gbGlzdEVsZW1lbnQ7XG4gICAgfVxuICAgLy8gcmV0dXJuIHJlbmRlcmVkIGxpc3QgaXRtZVxuICAgY29uc3QgcmVuZGVySXRlbSA9IChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgICAgICAgaXRlbUVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJywgaXRlbS50aXRsZSlcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gaXRlbSkge1xuICAgICAgICAgICAgY29uc3QgaW5mb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGluZm9FbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7a2V5fWApO1xuICAgICAgICAgICAgaW5mb0VsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtpdGVtW2tleV19YDtcbiAgICAgICAgICAgIGl0ZW1FbGVtZW50LmFwcGVuZChpbmZvRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW1FbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiB7cmVuZGVyTGlzdH07XG59KSgpO1xuXG4vLyBjcmVhdGVzIGEgdWlIYW5kbGVyIHRoYXQgd2lsbCBsb2FkIGRvbSBlbGVtZW50cyB3aXRoaW4gJ2NvbnRhaW5lcicgZWxlbWVudFxuZXhwb3J0IGNvbnN0IHVpSGFuZGxlciA9IChjb250YWluZXIpID0+IHtcbiAgICBcbiAgICBjb25zdCBzaWRlYmFyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItd3JhcHBlcicpO1xuICAgIGNvbnN0IGxpc3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGlzdFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbGlzdFdyYXBwZXInKTtcblxuICAgIGNvbnN0IF9jb2xsZWN0aW9uID0gY29sbGVjdGlvbigpO1xuICAgIFxuICAgIC8vIHNhbXBsZSBlbGVtZW50c1xuICAgIGNvbnN0IHRlc3RMaXN0MSA9IGxpc3QoJ3Rlc3QxJyk7XG4gICAgdGVzdExpc3QxLmFkZEl0ZW0oaXRlbSgndGl0bGUxJywgJ2Rlc2MxJywgJ2RhdGUxJywgJ3ByaW9yaXR5MScpKTtcbiAgICB0ZXN0TGlzdDEuYWRkSXRlbShpdGVtKCd0aXRsZTInLCAnZGVzYzInLCAnZGF0ZTInLCAncHJpb3JpdHkyJykpO1xuICAgIHRlc3RMaXN0MS5hZGRJdGVtKGl0ZW0oJ3RpdGxlMycsICdkZXNjMycsICdkYXRlMycsICdwcmlvcml0eTEnKSk7XG5cbiAgICBjb25zdCB0ZXN0TGlzdDIgPSBsaXN0KCd0ZXN0MicpO1xuICAgIHRlc3RMaXN0Mi5hZGRJdGVtKGl0ZW0oJ3RpdGxlMScsICdkZXNjMScsICdkYXRlMScsICdwcmlvcml0eTEnKSk7XG4gICAgdGVzdExpc3QyLmFkZEl0ZW0oaXRlbSgndGl0bGUyJywgJ2Rlc2MyJywgJ2RhdGUyJywgJ3ByaW9yaXR5MicpKTtcbiAgICB0ZXN0TGlzdDIuYWRkSXRlbShpdGVtKCd0aXRsZTMnLCAnZGVzYzMnLCAnZGF0ZTMnLCAncHJpb3JpdHkxJykpO1xuICAgIF9jb2xsZWN0aW9uLmFkZExpc3QodGVzdExpc3QxKTtcbiAgICBfY29sbGVjdGlvbi5hZGRMaXN0KHRlc3RMaXN0Mik7XG5cbiAgICBsZXQgX2N1cnJlbnRMaXN0ID0gX2NvbGxlY3Rpb24uZmlyc3RMaXN0O1xuICAgIFxuICAgIC8vIGRvbSBlbGVtZW50IHRoYXQgdWkgSGFuZGxlciB3aWxsIGRpcmVjdCBvdXQgdG9cbiAgICBjb25zdCBfY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgY29uc3Qgc2V0Q3VycmVudExpc3QgPSAobGlzdCkgPT4ge1xuICAgICAgICBfY3VycmVudExpc3QgPSBsaXN0O1xuICAgIH1cbiAgICBcbiAgICAvLyBwdXRzIHRvZ3RoZXIgcmVuZGVyZWQgZWxlbWVudHMgb250byB0aGUgcGFnZVxuICAgIGNvbnN0IGxvYWRQYWdlID0gKCkgPT4ge1xuICAgICAgICBsb2FkU2lkZWJhcigpO1xuICAgICAgICBsb2FkTGlzdCgpO1xuXG4gICAgICAgIF9jb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhcldyYXBwZXIpO1xuICAgICAgICBfY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkU2lkZWJhciA9ICgpID0+IHtcbiAgICAgICAgc2lkZWJhcldyYXBwZXIuYXBwZW5kQ2hpbGQocmVuZGVyU2lkZWJhcigpKTtcbiAgICB9XG4gICAgY29uc3QgdW5sb2FkU2lkZWJhciA9ICgpID0+IHtcbiAgICAgICAgc2lkZWJhcldyYXBwZXIuaW5uZXJIdG1sID0gJyc7XG4gICAgfVxuICAgIC8vIHJlbmRlcnMgc2lkZSBiYXIgZWxlbWVudFxuICAgIGNvbnN0IHJlbmRlclNpZGViYXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XG4gICAgICAgIFxuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHJlbmRlck5hdmJhcihjb250YWluZXIpKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBzaWRlYmFyO1xuICAgIH1cbiAgICBcbiAgICAvLyByZW5kZXJzIGJ1dHRvbnMgZm9yIGxvYWRpbmcgZWFjaCBsaXN0XG4gICAgY29uc3QgcmVuZGVyTmF2YmFyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpO1xuXG4gICAgICAgIF9jb2xsZWN0aW9uLmxpc3RzLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIG5hdkJ0bi5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG4gICAgICAgICAgICBuYXZCdG4uc2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcsIGxpc3QubmFtZSk7XG4gICAgICAgICAgICBuYXZCdG4udGV4dENvbnRlbnQgPSBsaXN0Lm5hbWU7XG4gICAgICAgICAgICBuYXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudExpc3QoX2NvbGxlY3Rpb24uZmluZExpc3QobmF2QnRuLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKSkpXG4gICAgICAgICAgICAgICAgdW5sb2FkTGlzdCgpO1xuICAgICAgICAgICAgICAgIGxvYWRMaXN0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5hdmJhci5hcHBlbmRDaGlsZChuYXZCdG4pO1xuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBuYXZiYXI7XG4gICAgfVxuXG4gICAgLy8gd2lsbCBjYWxsIHRvIHJlbmRlciB0aGUgaXRlbXMgb2YgJ19jdXJyZW50TGlzdCcgYXMgZG9tIGVsZW1lbnRzXG4gICAgLy8gdGhlbiB3aWxsIHVwZGF0ZSB0aGUgbGlzdFdyYXBwZXIgZWxlbWVudCB3aXRoIHNhaWQgbGlzdFxuICAgIC8vIGFsc28gYWRkcyBkZWxldGUgYnV0dG9ucyBmb3IgZWFjaCBpdGVtIGVsZW1lbnRcbiAgICBjb25zdCBsb2FkTGlzdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRMaXN0ID0gdG9kb0NvbnZlcnRlci5yZW5kZXJMaXN0KF9jdXJyZW50TGlzdCk7XG4gICAgICAgIGNvbnN0IGl0ZW1FbGVtZW50cyA9IHJlbmRlcmVkTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbScpO1xuXG4gICAgICAgIGxpc3RXcmFwcGVyLmFwcGVuZENoaWxkKHJlbmRlcmVkTGlzdCk7XG5cbiAgICAgICAgLy8gYWRkaW5nIGRlbGV0ZSBidXR0b25zIGZvciBpdGVtIGVsZW1lbnRzXG4gICAgICAgIGl0ZW1FbGVtZW50cy5mb3JFYWNoKGl0ZW1FbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGl0ZW1FbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScpO1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWl0ZW0tYnRuJyk7XG4gICAgICAgICAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcsIGl0ZW1UaXRsZSk7XG4gICAgICAgICAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgaXRlbSBmcm9tIGRvbVxuICAgICAgICAgICAgICAgIHVubG9hZEl0ZW0ocmVuZGVyZWRMaXN0LCBpdGVtRWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAvLyBkZWxldGUgaXRlbSBmcm9tICdfY3VycmVudExpc3QnXG4gICAgICAgICAgICAgICAgX2N1cnJlbnRMaXN0LmRlbGV0ZUl0ZW0oaXRlbVRpdGxlKTtcblxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBhZGQgYW4gYWRkSXRlbSBidXR0b24gdGhhdFxuICAgICAgICBjb25zdCBuZXdJdGVtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG5ld0l0ZW1CdG4uY2xhc3NMaXN0LmFkZCgnbmV3LWl0ZW0tYnRuJyk7XG4gICAgICAgIG5ld0l0ZW1CdG4udGV4dENvbnRlbnQgPSAnbmV3IGl0ZW0nO1xuICAgICAgICBuZXdJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZEl0ZW1JbnB1dCk7XG4gICAgICAgIGxpc3RXcmFwcGVyLmFwcGVuZENoaWxkKG5ld0l0ZW1CdG4pO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZXMgaXRlbUVsZW1lbnQgZnJvbSBEb21cbiAgICBjb25zdCB1bmxvYWRJdGVtID0gKGxpc3RFbGVtZW50LCBpdGVtRWxlbWVudCkgPT4ge1xuICAgICAgICBsaXN0RWxlbWVudC5yZW1vdmVDaGlsZChpdGVtRWxlbWVudCk7XG4gICAgfVxuICAgIFxuICAgIC8vIHJlbW92ZXMgbGlzdEVsZW1lbnQgZnJvbSBET01cbiAgICBjb25zdCB1bmxvYWRMaXN0ID0gKCkgPT4ge1xuICAgICAgICBsaXN0V3JhcHBlci5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cblxuICAgIGNvbnN0IGxvYWRJdGVtSW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBpdGVtRm9ybS5jbGFzc0xpc3QuYWRkKCdpdGVtLWZvcm0nKTtcblxuICAgICAgICAvLyBjcmVhdGlvbiBvZiBmb3JtIGdyb3VwIGZvciBuZXcgaXRlbSB0aXRsZVxuICAgICAgICBjb25zdCB0aXRsZUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlR3JvdXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSAnPGxhYmVsIGZvcj1cInRpdGxlLWlucHV0XCI+VGl0bGU8L2xhYmVsPic7XG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSAnPGlucHV0IGlkPVwidGl0bGUtaW5wdXRcIiBuYW1lPVwidGl0bGUtaW5wdXQgcGxhY2Vob2xkZXI9XCJUaXRsZVwiLz4nO1xuICAgICAgICB0aXRsZUdyb3VwLmlubmVySFRNTCA9IHRpdGxlTGFiZWwgKyB0aXRsZUlucHV0O1xuICAgICAgICBpdGVtRm9ybS5hcHBlbmRDaGlsZCh0aXRsZUdyb3VwKVxuXG4gICAgICAgIC8vIGNyZWF0aW9uIG9mIGZvcm0gZ3JvdXAgZm9yIG5ldyBpdGVtIGRlc2NyaXB0aW9uXG4gICAgICAgIGNvbnN0IGRlc2NHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXNjR3JvdXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NMYWJlbCA9ICc8bGFiZWwgZm9yPVwiZGVzYy1pbnB1dFwiPkRlc2NyaXB0aW9uPC9sYWJlbD4nO1xuICAgICAgICBjb25zdCBkZXNjSW5wdXQgPSAnPGlucHV0IGlkPVwiZGVzYy1pbnB1dFwiIG5hbWU9XCJkZXNjLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiLz4nO1xuICAgICAgICBkZXNjR3JvdXAuaW5uZXJIVE1MID0gZGVzY0xhYmVsICsgZGVzY0lucHV0O1xuICAgICAgICBpdGVtRm9ybS5hcHBlbmRDaGlsZChkZXNjR3JvdXApO1xuICAgICAgICBcbiAgICAgICAgLy8gY3JlYXRpb24gb2YgZm9ybSBncm91cCBmb3IgbmV3IGl0ZW0gZGF0ZVxuICAgICAgICBjb25zdCBkYXRlR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF0ZUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKTtcblxuICAgICAgICBjb25zdCBkYXRlTGFiZWwgPSAnPGxhYmVsIGZvcj1cImRhdGUtaW5wdXRcIj5EYXRlPC9sYWJlbD4nO1xuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSAnPGlucHV0IGlkPVwiZGF0ZS1pbnB1dFwiIG5hbWU9XCJkYXRlLWlucHV0XCIvPic7XG4gICAgICAgIGRhdGVHcm91cC5pbm5lckhUTUwgPSBkYXRlTGFiZWwgKyBkYXRlSW5wdXQ7XG4gICAgICAgIGl0ZW1Gb3JtLmFwcGVuZENoaWxkKGRhdGVHcm91cCk7XG4gICAgICAgIC8vIGNyZWF0aW9uIG9mIGZvcm0gZ3JvdXAgZm9yIG5ldyBpdGVtIHByaW9yaXR5XG4gICAgICAgIGNvbnN0IHByaW9yaXR5R3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJpb3JpdHlHcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJyk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5U2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByaW9yaXR5TGVnZW5kID0gJzxsZWdlbmQ+UHJpb3JpdHk8L2xlZ2VuZD4nO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlMb3cgPSAnPGxhYmVsIGZvcj1cInByaW9yaXR5LWxvd1wiPkxvdzwvbGFiZWw+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInByaW9yaXR5LWxvd1wiIG5hbWU9XCJwcmlvcml0eS1pbnB1dFwiIHZhbHVlPVwibG93XCIvPic7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlNZWQgPSAnPGxhYmVsIGZvcj1cInByaW9yaXR5LW1lZFwiPk1lZDwvbGFiZWw+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInByaW9yaXR5LW1lZFwiIG5hbWU9XCJwcmlvcml0eS1pbnB1dFwiIHZhbHVlPVwibWVkXCIvPic7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcmlvcml0eUhpZ2ggPSAnPGxhYmVsIGZvcj1cInByaW9yaXR5LWhpZ2hcIj5IaWdoPC9sYWJlbD4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInByaW9yaXR5LWhpZ2hcIiBuYW1lPVwicHJpb3JpdHktaW5wdXRcIiB2YWx1ZT1cImhpZ2hcIi8+JztcbiAgICAgICAgcHJpb3JpdHlTZXQuaW5uZXJIVE1MID0gcHJpb3JpdHlMZWdlbmQgKyBwcmlvcml0eUxvdyArIHByaW9yaXR5TWVkICsgcHJpb3JpdHlIaWdoO1xuICAgICAgICBwcmlvcml0eUdyb3VwLmFwcGVuZENoaWxkKHByaW9yaXR5U2V0KTtcbiAgICAgICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlHcm91cCk7XG5cbiAgICAgICAgbGlzdFdyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbUZvcm0pO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBidXR0b24gdG8gYWRkIG5ldyBlbGVtZW50IGZyb20gaW5mb1xuICAgICAgICBjb25zdCBhZGRJdGVtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZEl0ZW1CdG4uY2xhc3NMaXN0LmFkZCgnYWRkLWl0ZW0tYnRuJyk7XG4gICAgICAgIGFkZEl0ZW1CdG4udGV4dENvbnRlbnQgPSAnYWRkIGl0ZW0nO1xuXG4gICAgICAgIGl0ZW1Gb3JtLmFwcGVuZENoaWxkKGFkZEl0ZW1CdG4pO1xuXG4gICAgICAgIC8vIGFkZEl0ZW0gYnRuIHNob3VsZCBhZGQgbmV3IGJ1dHRvbiBmcm9tIGZvcm0gaW5mbywgdGhlbiByZWxvYWQgbGlzdFxuICAgICAgICBhZGRJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIGNhcHR1cmUgaW5wdXQgZnJvbSBpbnB1dCBmaWVsZHM7XG4gICAgICAgICAgICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZS1pbnB1dCcpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgbmV3RGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjLWlucHV0JykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBuZXdEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUtaW5wdXQnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ByaW9yaXR5ID0gcHJpb3JpdHlTZXQucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKS52YWx1ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbmV3SXRlbSA9IGl0ZW0obmV3VGl0bGUsIG5ld0Rlc2MsIG5ld0RhdGUsIG5ld1ByaW9yaXR5KTtcbiAgICAgICAgICAgIF9jdXJyZW50TGlzdC5hZGRJdGVtKG5ld0l0ZW0pO1xuICAgICAgICAgICAgdW5sb2FkSXRlbUlucHV0KCk7XG4gICAgICAgICAgICB1bmxvYWRMaXN0KCk7XG4gICAgICAgICAgICBsb2FkTGlzdCgpO1xuICAgICAgICB9KVxuXG5cbiAgICAgICAgXG4gICAgfVxuICAgIGNvbnN0IHVubG9hZEl0ZW1JbnB1dCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1mb3JtJyk7XG4gICAgICAgIGxpc3RXcmFwcGVyLnJlbW92ZUNoaWxkKGl0ZW1Gb3JtKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9hZFBhZ2VcbiAgICB9XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtpdGVtLCBsaXN0LCBjb2xsZWN0aW9ufSBmcm9tICcuL3RvZG8uanMnXG5pbXBvcnQge3VpSGFuZGxlcn0gZnJvbSAnLi91aS5qcydcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5jb25zdCBoYW5kbGVyID0gdWlIYW5kbGVyKGNvbnRlbnQpO1xuaGFuZGxlci5sb2FkUGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9