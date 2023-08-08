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

        const newListBtn = document.createElement('button');
        newListBtn.textContent = '+';
        newListBtn.addEventListener('click', (e) => {
            e.preventDefault();
            sidebar.appendChild(renderListInput());
        })
        sidebar.appendChild(newListBtn);
        
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

    // creates a form document for adding new list; appends form to 'container'
    const renderListInput = () => {
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

        const addListBtn = document.createElement('button');
        addListBtn.classList.add('add-list-btn');
        addListBtn.textContent = ('+');
        addListBtn.addEventListener('click', (e) => {
            e.preventDefault();

            const newName = document.querySelector('#name-input').value;
            _collection.addList((0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.list)(newName));

            unloadSidebar();
            loadSidebar();
        })
        listForm.append(addListBtn);

        return listForm;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsOENBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUN0VEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOZ0Q7QUFDZjs7QUFFakM7QUFDQSxnQkFBZ0IsaURBQVM7QUFDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpdGVtID0gKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4geyAgICBcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eX1cbn1cblxuZXhwb3J0IGNvbnN0IGxpc3QgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IF9uYW1lID0gbmFtZTtcbiAgICBjb25zdCBfaXRlbXMgPSBbXTtcblxuICAgIC8vIGFkZHMgaXRlbSBlbGVtZW50IHRvIGFycmF5IChpZiBvbmUgd2l0aCB0aGUgc2FtZSB0aXRsZSBkb2VzIG5vdCBleGlzdClcbiAgICBjb25zdCBhZGRJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAgICAgLy8gY2hlY2sgaWYgaXRlbSB3aXRoIGl0ZW0udGl0bGUgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgY29uc3QgaW5kZXggPSBpbmRleE9mKGl0ZW0udGl0bGUpO1xuICAgICAgICBpZiAoaW5kZXhPZihpdGVtLnRpdGxlKSB8fCBpbmRleClcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2l0ZW0gYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIF9pdGVtcy5wdXNoKGl0ZW0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVJdGVtID0gKGl0ZW1UaXRsZSkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4T2YoaXRlbVRpdGxlKTtcbiAgICAgICAgaWYgKGluZGV4IHx8IGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBfaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBzdWNoIGl0ZW0nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBpdGVtIG9iamVjdCB3aXRoIHRpdGxlICdpdGVtVGl0bGUnXG4gICAgY29uc3QgaW5kZXhPZiA9IChpdGVtVGl0bGUpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IF9pdGVtcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmIChfaXRlbXNbaW5kZXhdLnRpdGxlID09PSBpdGVtVGl0bGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gX25hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHJldHVybnMgaW50ZXJuYWwgYXJyYXkgb2YgaXRlbXNcbiAgICAgICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9pdGVtcztcbiAgICAgICAgfSxcbiAgICAgICAgYWRkSXRlbSwgZGVsZXRlSXRlbVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbGxlY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgX2xpc3RzID0gW107XG5cbiAgICAgLy8gYWRkcyBsaXN0IGVsZW1lbnQgdG8gYXJyYXkgKGlmIG9uZSB3aXRoIHRoZSBzYW1lIHRpdGxlIGRvZXMgbm90IGV4aXN0KVxuICAgICBjb25zdCBhZGRMaXN0ID0gKGxpc3QpID0+IHtcbiAgICAgICAgLy8gY2hlY2sgaWYgbGlzdCB3aXRoIGxpc3QubmFtZSBhbHJlYWR5IGV4aXN0c1xuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4T2YobGlzdC5uYW1lKTtcbiAgICAgICAgaWYgKGluZGV4T2YobGlzdC5uYW1lKSB8fCBpbmRleClcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xpc3QgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIF9saXN0cy5wdXNoKGxpc3QpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVMaXN0ID0gKGxpc3ROYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5kZXhPZihsaXN0TmFtZSk7XG4gICAgICAgIGlmIChpbmRleCB8fCBpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgX2xpc3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gc3VjaCBsaXN0Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbGlzdCBvYmplY3Qgd2l0aCBuYW1lICdsaXN0TmFtZSdcbiAgICBjb25zdCBpbmRleE9mID0gKGxpc3ROYW1lKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBfbGlzdHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoX2xpc3RzW2luZGV4XS5uYW1lID09PSBsaXN0TmFtZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG5cbiAgICBjb25zdCBmaW5kTGlzdCA9IChsaXN0TmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gX2xpc3RzLmZpbmQobGlzdCA9PiBsaXN0Lm5hbWUgPT09IGxpc3ROYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IGxpc3RzKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9saXN0cztcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGZpcnN0TGlzdCgpIHtcbiAgICAgICAgICAgIGlmIChfbGlzdHMubGVuZ3RoIDwgMSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBfbGlzdHNbMF07XG4gICAgICAgIH0sXG4gICAgICAgIGFkZExpc3QsIGRlbGV0ZUxpc3QsIGZpbmRMaXN0XG4gICAgfVxufSIsImltcG9ydCB7aXRlbSwgbGlzdCwgY29sbGVjdGlvbn0gZnJvbSAnLi90b2RvLmpzJ1xuXG4vLyBjbGFzcyB0byBjb3ZlcnQgdG9kbyByZWxhdGVkIG9iamVjdHMgaW50byBkb20gZWxlbWVudHNcbmNvbnN0IHRvZG9Db252ZXJ0ZXIgPSAoKCkgPT4ge1xuICAgLy8gY3JlYXRlIGxpc3QgZWxlbWVudFxuICAgIGNvbnN0IHJlbmRlckxpc3QgPSAobGlzdCkgPT4ge1xuICAgICAgICBpZiAoIWxpc3QpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xpc3QnKTtcbiAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGxpc3QgaXRlbXMgdGhlbiBhcHBlbmQgYSByZW5kZXJlZCBsaXN0IHRpZW1cbiAgICAgICAgbGlzdC5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4gbGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQocmVuZGVySXRlbShpdGVtKSkpO1xuICAgICAgICByZXR1cm4gbGlzdEVsZW1lbnQ7XG4gICAgfVxuICAgLy8gcmV0dXJuIHJlbmRlcmVkIGxpc3QgaXRtZVxuICAgY29uc3QgcmVuZGVySXRlbSA9IChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgICAgICAgaXRlbUVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJywgaXRlbS50aXRsZSlcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gaXRlbSkge1xuICAgICAgICAgICAgY29uc3QgaW5mb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGluZm9FbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7a2V5fWApO1xuICAgICAgICAgICAgaW5mb0VsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtpdGVtW2tleV19YDtcbiAgICAgICAgICAgIGl0ZW1FbGVtZW50LmFwcGVuZChpbmZvRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW1FbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiB7cmVuZGVyTGlzdH07XG59KSgpO1xuXG4vLyBjcmVhdGVzIGEgdWlIYW5kbGVyIHRoYXQgd2lsbCBsb2FkIGRvbSBlbGVtZW50cyB3aXRoaW4gJ2NvbnRhaW5lcicgZWxlbWVudFxuZXhwb3J0IGNvbnN0IHVpSGFuZGxlciA9IChjb250YWluZXIpID0+IHtcbiAgICBcbiAgICBjb25zdCBzaWRlYmFyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItd3JhcHBlcicpO1xuICAgIGNvbnN0IGxpc3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGlzdFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbGlzdFdyYXBwZXInKTtcblxuICAgIGNvbnN0IF9jb2xsZWN0aW9uID0gY29sbGVjdGlvbigpO1xuICAgIFxuICAgIC8vIHNhbXBsZSBlbGVtZW50c1xuICAgIGNvbnN0IHRlc3RMaXN0MSA9IGxpc3QoJ3Rlc3QxJyk7XG4gICAgdGVzdExpc3QxLmFkZEl0ZW0oaXRlbSgndGl0bGUxJywgJ2Rlc2MxJywgJ2RhdGUxJywgJ3ByaW9yaXR5MScpKTtcbiAgICB0ZXN0TGlzdDEuYWRkSXRlbShpdGVtKCd0aXRsZTInLCAnZGVzYzInLCAnZGF0ZTInLCAncHJpb3JpdHkyJykpO1xuICAgIHRlc3RMaXN0MS5hZGRJdGVtKGl0ZW0oJ3RpdGxlMycsICdkZXNjMycsICdkYXRlMycsICdwcmlvcml0eTEnKSk7XG5cbiAgICBjb25zdCB0ZXN0TGlzdDIgPSBsaXN0KCd0ZXN0MicpO1xuICAgIHRlc3RMaXN0Mi5hZGRJdGVtKGl0ZW0oJ3RpdGxlMScsICdkZXNjMScsICdkYXRlMScsICdwcmlvcml0eTEnKSk7XG4gICAgdGVzdExpc3QyLmFkZEl0ZW0oaXRlbSgndGl0bGUyJywgJ2Rlc2MyJywgJ2RhdGUyJywgJ3ByaW9yaXR5MicpKTtcbiAgICB0ZXN0TGlzdDIuYWRkSXRlbShpdGVtKCd0aXRsZTMnLCAnZGVzYzMnLCAnZGF0ZTMnLCAncHJpb3JpdHkxJykpO1xuICAgIF9jb2xsZWN0aW9uLmFkZExpc3QodGVzdExpc3QxKTtcbiAgICBfY29sbGVjdGlvbi5hZGRMaXN0KHRlc3RMaXN0Mik7XG5cbiAgICBsZXQgX2N1cnJlbnRMaXN0ID0gX2NvbGxlY3Rpb24uZmlyc3RMaXN0O1xuICAgIFxuICAgIC8vIGRvbSBlbGVtZW50IHRoYXQgdWkgSGFuZGxlciB3aWxsIGRpcmVjdCBvdXQgdG9cbiAgICBjb25zdCBfY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgY29uc3Qgc2V0Q3VycmVudExpc3QgPSAobGlzdCkgPT4ge1xuICAgICAgICBfY3VycmVudExpc3QgPSBsaXN0O1xuICAgIH1cbiAgICBcbiAgICAvLyBwdXRzIHRvZ3RoZXIgcmVuZGVyZWQgZWxlbWVudHMgb250byB0aGUgcGFnZVxuICAgIGNvbnN0IGxvYWRQYWdlID0gKCkgPT4ge1xuICAgICAgICBsb2FkU2lkZWJhcigpO1xuICAgICAgICBsb2FkTGlzdCgpO1xuXG4gICAgICAgIF9jb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhcldyYXBwZXIpO1xuICAgICAgICBfY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkU2lkZWJhciA9ICgpID0+IHtcbiAgICAgICAgc2lkZWJhcldyYXBwZXIuYXBwZW5kQ2hpbGQocmVuZGVyU2lkZWJhcigpKTtcblxuICAgIH1cbiAgICBjb25zdCB1bmxvYWRTaWRlYmFyID0gKCkgPT4ge1xuICAgICAgICBzaWRlYmFyV3JhcHBlci5pbm5lckhUTUwgPSAnJztcbiAgICB9XG4gICAgLy8gcmVuZGVycyBzaWRlIGJhciBlbGVtZW50XG4gICAgY29uc3QgcmVuZGVyU2lkZWJhciA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcbiAgICAgICAgXG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocmVuZGVyTmF2YmFyKGNvbnRhaW5lcikpO1xuXG4gICAgICAgIGNvbnN0IG5ld0xpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbmV3TGlzdEJ0bi50ZXh0Q29udGVudCA9ICcrJztcbiAgICAgICAgbmV3TGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHJlbmRlckxpc3RJbnB1dCgpKTtcbiAgICAgICAgfSlcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChuZXdMaXN0QnRuKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBzaWRlYmFyO1xuICAgIH1cbiAgICBcbiAgICAvLyByZW5kZXJzIGJ1dHRvbnMgZm9yIGxvYWRpbmcgZWFjaCBsaXN0XG4gICAgY29uc3QgcmVuZGVyTmF2YmFyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpO1xuXG4gICAgICAgIC8vIGEgbmF2RW50cnkgZWxlbWVudCBmb3IgZWFjaCBsaXN0OyBhbGxvd3MgYWNjZXNzIGFuZCBkZWxldGlvbiBvZiBsaXN0XG4gICAgICAgIF9jb2xsZWN0aW9uLmxpc3RzLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYXZFbnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbmF2RW50cnkuY2xhc3NMaXN0LmFkZCgnbmF2LWVudHJ5Jyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNyZWF0aW9uIG9mIGJ1dHRvbiB0byBvcGVuL2xvYWQgbGlzdHNcbiAgICAgICAgICAgIGNvbnN0IG5hdkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgbmF2QnRuLmNsYXNzTGlzdC5hZGQoJ25hdi1idG4nKTtcbiAgICAgICAgICAgIG5hdkJ0bi50ZXh0Q29udGVudCA9IGxpc3QubmFtZTtcbiAgICAgICAgICAgIG5hdkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50TGlzdChsaXN0KVxuICAgICAgICAgICAgICAgIHVubG9hZExpc3QoKTtcbiAgICAgICAgICAgICAgICBsb2FkTGlzdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuYXZFbnRyeS5hcHBlbmRDaGlsZChuYXZCdG4pO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGlvbiBvZiBidXR0b24gdG8gZGVsZXRlIGxpc3RcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUxpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZUxpc3RCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWxpc3QtYnRuJyk7XG4gICAgICAgICAgICBkZWxldGVMaXN0QnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnLCBsaXN0Lm5hbWUpO1xuICAgICAgICAgICAgZGVsZXRlTGlzdEJ0bi50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgIGRlbGV0ZUxpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpZiAobGlzdCA9PT0gX2N1cnJlbnRMaXN0KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdW5sb2FkTGlzdCgpO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgX2NvbGxlY3Rpb24uZGVsZXRlTGlzdChsaXN0Lm5hbWUpO1xuICAgICAgICAgICAgICAgIHVubG9hZFNpZGViYXIoKTtcbiAgICAgICAgICAgICAgICBsb2FkU2lkZWJhcigpO1xuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbmF2RW50cnkuYXBwZW5kQ2hpbGQoZGVsZXRlTGlzdEJ0bik7XG5cbiAgICAgICAgICAgIG5hdmJhci5hcHBlbmRDaGlsZChuYXZFbnRyeSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIG5hdmJhcjtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGVzIGEgZm9ybSBkb2N1bWVudCBmb3IgYWRkaW5nIG5ldyBsaXN0OyBhcHBlbmRzIGZvcm0gdG8gJ2NvbnRhaW5lcidcbiAgICBjb25zdCByZW5kZXJMaXN0SW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIC8vIGNyZWF0ZSBmb3JtIGVsZW1lbnRcbiAgICAgICAgY29uc3QgbGlzdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGxpc3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2xpc3QtZm9ybScpO1xuICAgICAgICBcbiAgICAgICAgLy8gY3JlYXRlIGZvcm0tZ3JvdXBcbiAgICAgICAgY29uc3QgZm9ybUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJyk7XG5cbiAgICAgICAgY29uc3QgbGFiZWwgPSAnPGxhYmVsIGZvcj1cIm5hbWUtaW5wdXRcIj5MaXN0IE5hbWU8L2xhYmVsPidcbiAgICAgICAgY29uc3QgaW5wdXQgPSAnPGlucHV0IGlkPVwibmFtZS1pbnB1dFwiIG5hbWU9XCJuYW1lLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJMaXN0IE5hbWVcIi8+J1xuICAgICAgICBmb3JtR3JvdXAuaW5uZXJIVE1MID0gbGFiZWwgKyBpbnB1dDtcblxuICAgICAgICBsaXN0Rm9ybS5hcHBlbmRDaGlsZChmb3JtR3JvdXApO1xuXG4gICAgICAgIGNvbnN0IGFkZExpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkTGlzdEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGQtbGlzdC1idG4nKTtcbiAgICAgICAgYWRkTGlzdEJ0bi50ZXh0Q29udGVudCA9ICgnKycpO1xuICAgICAgICBhZGRMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lLWlucHV0JykudmFsdWU7XG4gICAgICAgICAgICBfY29sbGVjdGlvbi5hZGRMaXN0KGxpc3QobmV3TmFtZSkpO1xuXG4gICAgICAgICAgICB1bmxvYWRTaWRlYmFyKCk7XG4gICAgICAgICAgICBsb2FkU2lkZWJhcigpO1xuICAgICAgICB9KVxuICAgICAgICBsaXN0Rm9ybS5hcHBlbmQoYWRkTGlzdEJ0bik7XG5cbiAgICAgICAgcmV0dXJuIGxpc3RGb3JtO1xuICAgIH1cblxuICAgIC8vIHdpbGwgY2FsbCB0byByZW5kZXIgdGhlIGl0ZW1zIG9mICdfY3VycmVudExpc3QnIGFzIGRvbSBlbGVtZW50c1xuICAgIC8vIHRoZW4gd2lsbCB1cGRhdGUgdGhlIGxpc3RXcmFwcGVyIGVsZW1lbnQgd2l0aCBzYWlkIGxpc3RcbiAgICAvLyBhbHNvIGFkZHMgZGVsZXRlIGJ1dHRvbnMgZm9yIGVhY2ggaXRlbSBlbGVtZW50XG4gICAgY29uc3QgbG9hZExpc3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkTGlzdCA9IHRvZG9Db252ZXJ0ZXIucmVuZGVyTGlzdChfY3VycmVudExpc3QpO1xuICAgICAgICBjb25zdCBpdGVtRWxlbWVudHMgPSByZW5kZXJlZExpc3QucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0nKTtcblxuICAgICAgICBsaXN0V3JhcHBlci5hcHBlbmRDaGlsZChyZW5kZXJlZExpc3QpO1xuXG4gICAgICAgIC8vIGFkZGluZyBkZWxldGUgYnV0dG9ucyBmb3IgaXRlbSBlbGVtZW50c1xuICAgICAgICBpdGVtRWxlbWVudHMuZm9yRWFjaChpdGVtRWxlbWVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtVGl0bGUgPSBpdGVtRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1pdGVtLWJ0bicpO1xuICAgICAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnLCBpdGVtVGl0bGUpO1xuICAgICAgICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGl0ZW0gZnJvbSBkb21cbiAgICAgICAgICAgICAgICB1bmxvYWRJdGVtKHJlbmRlcmVkTGlzdCwgaXRlbUVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gZGVsZXRlIGl0ZW0gZnJvbSAnX2N1cnJlbnRMaXN0J1xuICAgICAgICAgICAgICAgIF9jdXJyZW50TGlzdC5kZWxldGVJdGVtKGl0ZW1UaXRsZSk7XG5cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGl0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gYWRkIGFuIGFkZEl0ZW0gYnV0dG9uIHRoYXRcbiAgICAgICAgY29uc3QgbmV3SXRlbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBuZXdJdGVtQnRuLmNsYXNzTGlzdC5hZGQoJ25ldy1pdGVtLWJ0bicpO1xuICAgICAgICBuZXdJdGVtQnRuLnRleHRDb250ZW50ID0gJ25ldyBpdGVtJztcbiAgICAgICAgbmV3SXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRJdGVtSW5wdXQpO1xuICAgICAgICBsaXN0V3JhcHBlci5hcHBlbmRDaGlsZChuZXdJdGVtQnRuKTtcbiAgICB9XG5cbiAgICAvLyByZW1vdmVzIGl0ZW1FbGVtZW50IGZyb20gRG9tXG4gICAgY29uc3QgdW5sb2FkSXRlbSA9IChsaXN0RWxlbWVudCwgaXRlbUVsZW1lbnQpID0+IHtcbiAgICAgICAgbGlzdEVsZW1lbnQucmVtb3ZlQ2hpbGQoaXRlbUVsZW1lbnQpO1xuICAgIH1cbiAgICBcbiAgICAvLyByZW1vdmVzIGxpc3RFbGVtZW50IGZyb20gRE9NXG4gICAgY29uc3QgdW5sb2FkTGlzdCA9ICgpID0+IHtcbiAgICAgICAgbGlzdFdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG5cbiAgICBjb25zdCBsb2FkSXRlbUlucHV0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgaXRlbUZvcm0uY2xhc3NMaXN0LmFkZCgnaXRlbS1mb3JtJyk7XG5cbiAgICAgICAgLy8gY3JlYXRpb24gb2YgZm9ybSBncm91cCBmb3IgbmV3IGl0ZW0gdGl0bGVcbiAgICAgICAgY29uc3QgdGl0bGVHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKTtcblxuICAgICAgICBjb25zdCB0aXRsZUxhYmVsID0gJzxsYWJlbCBmb3I9XCJ0aXRsZS1pbnB1dFwiPlRpdGxlPC9sYWJlbD4nO1xuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gJzxpbnB1dCBpZD1cInRpdGxlLWlucHV0XCIgbmFtZT1cInRpdGxlLWlucHV0IHBsYWNlaG9sZGVyPVwiVGl0bGVcIi8+JztcbiAgICAgICAgdGl0bGVHcm91cC5pbm5lckhUTUwgPSB0aXRsZUxhYmVsICsgdGl0bGVJbnB1dDtcbiAgICAgICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQodGl0bGVHcm91cClcblxuICAgICAgICAvLyBjcmVhdGlvbiBvZiBmb3JtIGdyb3VwIGZvciBuZXcgaXRlbSBkZXNjcmlwdGlvblxuICAgICAgICBjb25zdCBkZXNjR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVzY0dyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKTtcblxuICAgICAgICBjb25zdCBkZXNjTGFiZWwgPSAnPGxhYmVsIGZvcj1cImRlc2MtaW5wdXRcIj5EZXNjcmlwdGlvbjwvbGFiZWw+JztcbiAgICAgICAgY29uc3QgZGVzY0lucHV0ID0gJzxpbnB1dCBpZD1cImRlc2MtaW5wdXRcIiBuYW1lPVwiZGVzYy1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIi8+JztcbiAgICAgICAgZGVzY0dyb3VwLmlubmVySFRNTCA9IGRlc2NMYWJlbCArIGRlc2NJbnB1dDtcbiAgICAgICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQoZGVzY0dyb3VwKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGNyZWF0aW9uIG9mIGZvcm0gZ3JvdXAgZm9yIG5ldyBpdGVtIGRhdGVcbiAgICAgICAgY29uc3QgZGF0ZUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRhdGVHcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJyk7XG5cbiAgICAgICAgY29uc3QgZGF0ZUxhYmVsID0gJzxsYWJlbCBmb3I9XCJkYXRlLWlucHV0XCI+RGF0ZTwvbGFiZWw+JztcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gJzxpbnB1dCBpZD1cImRhdGUtaW5wdXRcIiBuYW1lPVwiZGF0ZS1pbnB1dFwiLz4nO1xuICAgICAgICBkYXRlR3JvdXAuaW5uZXJIVE1MID0gZGF0ZUxhYmVsICsgZGF0ZUlucHV0O1xuICAgICAgICBpdGVtRm9ybS5hcHBlbmRDaGlsZChkYXRlR3JvdXApO1xuICAgICAgICAvLyBjcmVhdGlvbiBvZiBmb3JtIGdyb3VwIGZvciBuZXcgaXRlbSBwcmlvcml0eVxuICAgICAgICBjb25zdCBwcmlvcml0eUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByaW9yaXR5R3JvdXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpO1xuICAgICAgICBjb25zdCBwcmlvcml0eVNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcmlvcml0eUxlZ2VuZCA9ICc8bGVnZW5kPlByaW9yaXR5PC9sZWdlbmQ+JztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByaW9yaXR5TG93ID0gJzxsYWJlbCBmb3I9XCJwcmlvcml0eS1sb3dcIj5Mb3c8L2xhYmVsPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJwcmlvcml0eS1sb3dcIiBuYW1lPVwicHJpb3JpdHktaW5wdXRcIiB2YWx1ZT1cImxvd1wiLz4nO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5TWVkID0gJzxsYWJlbCBmb3I9XCJwcmlvcml0eS1tZWRcIj5NZWQ8L2xhYmVsPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJwcmlvcml0eS1tZWRcIiBuYW1lPVwicHJpb3JpdHktaW5wdXRcIiB2YWx1ZT1cIm1lZFwiLz4nO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlIaWdoID0gJzxsYWJlbCBmb3I9XCJwcmlvcml0eS1oaWdoXCI+SGlnaDwvbGFiZWw+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJwcmlvcml0eS1oaWdoXCIgbmFtZT1cInByaW9yaXR5LWlucHV0XCIgdmFsdWU9XCJoaWdoXCIvPic7XG4gICAgICAgIHByaW9yaXR5U2V0LmlubmVySFRNTCA9IHByaW9yaXR5TGVnZW5kICsgcHJpb3JpdHlMb3cgKyBwcmlvcml0eU1lZCArIHByaW9yaXR5SGlnaDtcbiAgICAgICAgcHJpb3JpdHlHcm91cC5hcHBlbmRDaGlsZChwcmlvcml0eVNldCk7XG4gICAgICAgIGl0ZW1Gb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5R3JvdXApO1xuXG4gICAgICAgIGxpc3RXcmFwcGVyLmFwcGVuZENoaWxkKGl0ZW1Gb3JtKTtcblxuICAgICAgICAvLyBjcmVhdGUgYnV0dG9uIHRvIGFkZCBuZXcgZWxlbWVudCBmcm9tIGluZm9cbiAgICAgICAgY29uc3QgYWRkSXRlbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRJdGVtQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC1pdGVtLWJ0bicpO1xuICAgICAgICBhZGRJdGVtQnRuLnRleHRDb250ZW50ID0gJ2FkZCBpdGVtJztcblxuICAgICAgICBpdGVtRm9ybS5hcHBlbmRDaGlsZChhZGRJdGVtQnRuKTtcblxuICAgICAgICAvLyBhZGRJdGVtIGJ0biBzaG91bGQgYWRkIG5ldyBidXR0b24gZnJvbSBmb3JtIGluZm8sIHRoZW4gcmVsb2FkIGxpc3RcbiAgICAgICAgYWRkSXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBjYXB0dXJlIGlucHV0IGZyb20gaW5wdXQgZmllbGRzO1xuICAgICAgICAgICAgY29uc3QgbmV3VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUtaW5wdXQnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzYy1pbnB1dCcpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgbmV3RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlLWlucHV0JykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBuZXdQcmlvcml0eSA9IHByaW9yaXR5U2V0LnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJykudmFsdWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBpdGVtKG5ld1RpdGxlLCBuZXdEZXNjLCBuZXdEYXRlLCBuZXdQcmlvcml0eSk7XG4gICAgICAgICAgICBfY3VycmVudExpc3QuYWRkSXRlbShuZXdJdGVtKTtcbiAgICAgICAgICAgIHVubG9hZEl0ZW1JbnB1dCgpO1xuICAgICAgICAgICAgdW5sb2FkTGlzdCgpO1xuICAgICAgICAgICAgbG9hZExpc3QoKTtcbiAgICAgICAgfSlcblxuXG4gICAgICAgIFxuICAgIH1cbiAgICBjb25zdCB1bmxvYWRJdGVtSW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tZm9ybScpO1xuICAgICAgICBsaXN0V3JhcHBlci5yZW1vdmVDaGlsZChpdGVtRm9ybSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGxvYWRQYWdlXG4gICAgfVxufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7aXRlbSwgbGlzdCwgY29sbGVjdGlvbn0gZnJvbSAnLi90b2RvLmpzJ1xuaW1wb3J0IHt1aUhhbmRsZXJ9IGZyb20gJy4vdWkuanMnXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuY29uc3QgaGFuZGxlciA9IHVpSGFuZGxlcihjb250ZW50KTtcbmhhbmRsZXIubG9hZFBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==