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

        // a navEntry element for each list; allows access and deletion of list
        _collection.lists.forEach(list => {
            const navEntry = document.createElement('div');
            navEntry.classList.add('navEntry');
            
            // creation of button to open/load lists
            const navBtn = document.createElement('button');
            navBtn.classList.add('nav-btn');
            navBtn.setAttribute('data-target', list.name);
            navBtn.textContent = list.name;
            navBtn.addEventListener('click', () => {
                setCurrentList(list)
                unloadList();
                loadList();
            });
            navEntry.appendChild(navBtn);

            // // creation of button to delete list
            // const deleteListBtn = document.createElement('button');
            // deleteListBtn.classList.add('delete-list-btn');
            // deleteListBtn.setAttribute('data-target', list.name);
            // deleteListBtn.textContent = 'X';
            // deleteListBtn.addEventListener('click', (e) => {
            //     e.preventDefault();
            //     _collection.deleteList(list.name);
            //     unloadSidebar();
            //     loadSidebar();

            // })
            // navEntry.appendChild(deleteListBtn);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1AsWUFBWTtBQUNaOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsdUJBQXVCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6R2dEOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLElBQUk7QUFDN0MseUNBQXlDLFVBQVU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLENBQUM7O0FBRUQ7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLG9EQUFVO0FBQ2xDO0FBQ0E7QUFDQSxzQkFBc0IsOENBQUk7QUFDMUIsc0JBQXNCLDhDQUFJO0FBQzFCLHNCQUFzQiw4Q0FBSTtBQUMxQixzQkFBc0IsOENBQUk7O0FBRTFCLHNCQUFzQiw4Q0FBSTtBQUMxQixzQkFBc0IsOENBQUk7QUFDMUIsc0JBQXNCLDhDQUFJO0FBQzFCLHNCQUFzQiw4Q0FBSTtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGFBQWE7O0FBRWI7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw4Q0FBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3ZRQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05nRDtBQUNmOztBQUVqQztBQUNBLGdCQUFnQixpREFBUztBQUN6QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGl0ZW0gPSAodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7ICAgIFxuICAgIHJldHVybiB7dGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5fVxufVxuXG5leHBvcnQgY29uc3QgbGlzdCA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgX25hbWUgPSBuYW1lO1xuICAgIGNvbnN0IF9pdGVtcyA9IFtdO1xuXG4gICAgLy8gYWRkcyBpdGVtIGVsZW1lbnQgdG8gYXJyYXkgKGlmIG9uZSB3aXRoIHRoZSBzYW1lIHRpdGxlIGRvZXMgbm90IGV4aXN0KVxuICAgIGNvbnN0IGFkZEl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgICAgICAvLyBjaGVjayBpZiBpdGVtIHdpdGggaXRlbS50aXRsZSBhbHJlYWR5IGV4aXN0c1xuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4T2YoaXRlbS50aXRsZSk7XG4gICAgICAgIGlmIChpbmRleE9mKGl0ZW0udGl0bGUpIHx8IGluZGV4KVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaXRlbSBhbHJlYWR5IGV4aXN0cycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgX2l0ZW1zLnB1c2goaXRlbSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUl0ZW0gPSAoaXRlbVRpdGxlKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5kZXhPZihpdGVtVGl0bGUpO1xuICAgICAgICBpZiAoaW5kZXggfHwgaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIF9pdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIHN1Y2ggaXRlbScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gb2JqZWN0IHdpdGggdGl0bGUgJ2l0ZW1UaXRsZSdcbiAgICBjb25zdCBpbmRleE9mID0gKGl0ZW1UaXRsZSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgX2l0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKF9pdGVtc1tpbmRleF0udGl0bGUgPT09IGl0ZW1UaXRsZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfbmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gcmV0dXJucyBpbnRlcm5hbCBhcnJheSBvZiBpdGVtc1xuICAgICAgICBnZXQgaXRlbXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2l0ZW1zO1xuICAgICAgICB9LFxuICAgICAgICBhZGRJdGVtLCBkZWxldGVJdGVtXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgY29sbGVjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBfbGlzdHMgPSBbXTtcblxuICAgICAvLyBhZGRzIGxpc3QgZWxlbWVudCB0byBhcnJheSAoaWYgb25lIHdpdGggdGhlIHNhbWUgdGl0bGUgZG9lcyBub3QgZXhpc3QpXG4gICAgIGNvbnN0IGFkZExpc3QgPSAobGlzdCkgPT4ge1xuICAgICAgICAvLyBjaGVjayBpZiBsaXN0IHdpdGggbGlzdC5uYW1lIGFscmVhZHkgZXhpc3RzXG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5kZXhPZihsaXN0Lm5hbWUpO1xuICAgICAgICBpZiAoaW5kZXhPZihsaXN0Lm5hbWUpIHx8IGluZGV4KVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbGlzdCBhbHJlYWR5IGV4aXN0cycpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgX2xpc3RzLnB1c2gobGlzdClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZUxpc3QgPSAobGlzdE5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpbmRleE9mKGxpc3ROYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgICBpZiAoaW5kZXggfHwgaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIF9saXN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIHN1Y2ggbGlzdCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGxpc3Qgb2JqZWN0IHdpdGggbmFtZSAnbGlzdE5hbWUnXG4gICAgY29uc3QgaW5kZXhPZiA9IChsaXN0TmFtZSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgX2xpc3RzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKF9saXN0c1tpbmRleF0ubmFtZSA9PT0gbGlzdE5hbWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuXG4gICAgY29uc3QgZmluZExpc3QgPSAobGlzdE5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIF9saXN0cy5maW5kKGxpc3QgPT4gbGlzdC5uYW1lID09PSBsaXN0TmFtZSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGdldCBsaXN0cygpIHtcbiAgICAgICAgICAgIHJldHVybiBfbGlzdHM7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBmaXJzdExpc3QoKSB7XG4gICAgICAgICAgICBpZiAoX2xpc3RzLmxlbmd0aCA8IDEpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gX2xpc3RzWzBdO1xuICAgICAgICB9LFxuICAgICAgICBhZGRMaXN0LCBkZWxldGVMaXN0LCBmaW5kTGlzdFxuICAgIH1cbn0iLCJpbXBvcnQge2l0ZW0sIGxpc3QsIGNvbGxlY3Rpb259IGZyb20gJy4vdG9kby5qcydcblxuLy8gY2xhc3MgdG8gY292ZXJ0IHRvZG8gcmVsYXRlZCBvYmplY3RzIGludG8gZG9tIGVsZW1lbnRzXG5jb25zdCB0b2RvQ29udmVydGVyID0gKCgpID0+IHtcbiAgIC8vIGNyZWF0ZSBsaXN0IGVsZW1lbnRcbiAgICBjb25zdCByZW5kZXJMaXN0ID0gKGxpc3QpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0KSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XG4gICAgICAgIC8vIGxvb3AgdGhyb3VnaCBsaXN0IGl0ZW1zIHRoZW4gYXBwZW5kIGEgcmVuZGVyZWQgbGlzdCB0aWVtXG4gICAgICAgIGxpc3QuaXRlbXMuZm9yRWFjaChpdGVtID0+IGxpc3RFbGVtZW50LmFwcGVuZENoaWxkKHJlbmRlckl0ZW0oaXRlbSkpKTtcbiAgICAgICAgcmV0dXJuIGxpc3RFbGVtZW50O1xuICAgIH1cbiAgIC8vIHJldHVybiByZW5kZXJlZCBsaXN0IGl0bWVcbiAgIGNvbnN0IHJlbmRlckl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpdGVtRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgICAgIGl0ZW1FbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScsIGl0ZW0udGl0bGUpXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGl0ZW0pIHtcbiAgICAgICAgICAgIGNvbnN0IGluZm9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBpbmZvRWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2tleX1gKTtcbiAgICAgICAgICAgIGluZm9FbGVtZW50LnRleHRDb250ZW50ID0gYCR7aXRlbVtrZXldfWA7XG4gICAgICAgICAgICBpdGVtRWxlbWVudC5hcHBlbmQoaW5mb0VsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtRWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4ge3JlbmRlckxpc3R9O1xufSkoKTtcblxuLy8gY3JlYXRlcyBhIHVpSGFuZGxlciB0aGF0IHdpbGwgbG9hZCBkb20gZWxlbWVudHMgd2l0aGluICdjb250YWluZXInIGVsZW1lbnRcbmV4cG9ydCBjb25zdCB1aUhhbmRsZXIgPSAoY29udGFpbmVyKSA9PiB7XG4gICAgXG4gICAgY29uc3Qgc2lkZWJhcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaWRlYmFyV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLXdyYXBwZXInKTtcbiAgICBjb25zdCBsaXN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpc3RXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2xpc3RXcmFwcGVyJyk7XG5cbiAgICBjb25zdCBfY29sbGVjdGlvbiA9IGNvbGxlY3Rpb24oKTtcbiAgICBcbiAgICAvLyBzYW1wbGUgZWxlbWVudHNcbiAgICBjb25zdCB0ZXN0TGlzdDEgPSBsaXN0KCd0ZXN0MScpO1xuICAgIHRlc3RMaXN0MS5hZGRJdGVtKGl0ZW0oJ3RpdGxlMScsICdkZXNjMScsICdkYXRlMScsICdwcmlvcml0eTEnKSk7XG4gICAgdGVzdExpc3QxLmFkZEl0ZW0oaXRlbSgndGl0bGUyJywgJ2Rlc2MyJywgJ2RhdGUyJywgJ3ByaW9yaXR5MicpKTtcbiAgICB0ZXN0TGlzdDEuYWRkSXRlbShpdGVtKCd0aXRsZTMnLCAnZGVzYzMnLCAnZGF0ZTMnLCAncHJpb3JpdHkxJykpO1xuXG4gICAgY29uc3QgdGVzdExpc3QyID0gbGlzdCgndGVzdDInKTtcbiAgICB0ZXN0TGlzdDIuYWRkSXRlbShpdGVtKCd0aXRsZTEnLCAnZGVzYzEnLCAnZGF0ZTEnLCAncHJpb3JpdHkxJykpO1xuICAgIHRlc3RMaXN0Mi5hZGRJdGVtKGl0ZW0oJ3RpdGxlMicsICdkZXNjMicsICdkYXRlMicsICdwcmlvcml0eTInKSk7XG4gICAgdGVzdExpc3QyLmFkZEl0ZW0oaXRlbSgndGl0bGUzJywgJ2Rlc2MzJywgJ2RhdGUzJywgJ3ByaW9yaXR5MScpKTtcbiAgICBfY29sbGVjdGlvbi5hZGRMaXN0KHRlc3RMaXN0MSk7XG4gICAgX2NvbGxlY3Rpb24uYWRkTGlzdCh0ZXN0TGlzdDIpO1xuXG4gICAgbGV0IF9jdXJyZW50TGlzdCA9IF9jb2xsZWN0aW9uLmZpcnN0TGlzdDtcbiAgICBcbiAgICAvLyBkb20gZWxlbWVudCB0aGF0IHVpIEhhbmRsZXIgd2lsbCBkaXJlY3Qgb3V0IHRvXG4gICAgY29uc3QgX2NvbnRhaW5lciA9IGNvbnRhaW5lcjtcblxuICAgIGNvbnN0IHNldEN1cnJlbnRMaXN0ID0gKGxpc3QpID0+IHtcbiAgICAgICAgX2N1cnJlbnRMaXN0ID0gbGlzdDtcbiAgICB9XG4gICAgXG4gICAgLy8gcHV0cyB0b2d0aGVyIHJlbmRlcmVkIGVsZW1lbnRzIG9udG8gdGhlIHBhZ2VcbiAgICBjb25zdCBsb2FkUGFnZSA9ICgpID0+IHtcbiAgICAgICAgbG9hZFNpZGViYXIoKTtcbiAgICAgICAgbG9hZExpc3QoKTtcblxuICAgICAgICBfY29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGViYXJXcmFwcGVyKTtcbiAgICAgICAgX2NvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0V3JhcHBlcik7XG4gICAgfVxuXG4gICAgY29uc3QgbG9hZFNpZGViYXIgPSAoKSA9PiB7XG4gICAgICAgIHNpZGViYXJXcmFwcGVyLmFwcGVuZENoaWxkKHJlbmRlclNpZGViYXIoKSk7XG4gICAgfVxuICAgIGNvbnN0IHVubG9hZFNpZGViYXIgPSAoKSA9PiB7XG4gICAgICAgIHNpZGViYXJXcmFwcGVyLmlubmVySHRtbCA9ICcnO1xuICAgIH1cbiAgICAvLyByZW5kZXJzIHNpZGUgYmFyIGVsZW1lbnRcbiAgICBjb25zdCByZW5kZXJTaWRlYmFyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpO1xuICAgICAgICBcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChyZW5kZXJOYXZiYXIoY29udGFpbmVyKSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gc2lkZWJhcjtcbiAgICB9XG4gICAgXG4gICAgLy8gcmVuZGVycyBidXR0b25zIGZvciBsb2FkaW5nIGVhY2ggbGlzdFxuICAgIGNvbnN0IHJlbmRlck5hdmJhciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXInKTtcblxuICAgICAgICAvLyBhIG5hdkVudHJ5IGVsZW1lbnQgZm9yIGVhY2ggbGlzdDsgYWxsb3dzIGFjY2VzcyBhbmQgZGVsZXRpb24gb2YgbGlzdFxuICAgICAgICBfY29sbGVjdGlvbi5saXN0cy5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmF2RW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5hdkVudHJ5LmNsYXNzTGlzdC5hZGQoJ25hdkVudHJ5Jyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNyZWF0aW9uIG9mIGJ1dHRvbiB0byBvcGVuL2xvYWQgbGlzdHNcbiAgICAgICAgICAgIGNvbnN0IG5hdkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgbmF2QnRuLmNsYXNzTGlzdC5hZGQoJ25hdi1idG4nKTtcbiAgICAgICAgICAgIG5hdkJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgbGlzdC5uYW1lKTtcbiAgICAgICAgICAgIG5hdkJ0bi50ZXh0Q29udGVudCA9IGxpc3QubmFtZTtcbiAgICAgICAgICAgIG5hdkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRDdXJyZW50TGlzdChsaXN0KVxuICAgICAgICAgICAgICAgIHVubG9hZExpc3QoKTtcbiAgICAgICAgICAgICAgICBsb2FkTGlzdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuYXZFbnRyeS5hcHBlbmRDaGlsZChuYXZCdG4pO1xuXG4gICAgICAgICAgICAvLyAvLyBjcmVhdGlvbiBvZiBidXR0b24gdG8gZGVsZXRlIGxpc3RcbiAgICAgICAgICAgIC8vIGNvbnN0IGRlbGV0ZUxpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIC8vIGRlbGV0ZUxpc3RCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWxpc3QtYnRuJyk7XG4gICAgICAgICAgICAvLyBkZWxldGVMaXN0QnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnLCBsaXN0Lm5hbWUpO1xuICAgICAgICAgICAgLy8gZGVsZXRlTGlzdEJ0bi50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgIC8vIGRlbGV0ZUxpc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vICAgICBfY29sbGVjdGlvbi5kZWxldGVMaXN0KGxpc3QubmFtZSk7XG4gICAgICAgICAgICAvLyAgICAgdW5sb2FkU2lkZWJhcigpO1xuICAgICAgICAgICAgLy8gICAgIGxvYWRTaWRlYmFyKCk7XG5cbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAvLyBuYXZFbnRyeS5hcHBlbmRDaGlsZChkZWxldGVMaXN0QnRuKTtcblxuICAgICAgICAgICAgbmF2YmFyLmFwcGVuZENoaWxkKG5hdkVudHJ5KTtcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gbmF2YmFyO1xuICAgIH1cblxuICAgIC8vIHdpbGwgY2FsbCB0byByZW5kZXIgdGhlIGl0ZW1zIG9mICdfY3VycmVudExpc3QnIGFzIGRvbSBlbGVtZW50c1xuICAgIC8vIHRoZW4gd2lsbCB1cGRhdGUgdGhlIGxpc3RXcmFwcGVyIGVsZW1lbnQgd2l0aCBzYWlkIGxpc3RcbiAgICAvLyBhbHNvIGFkZHMgZGVsZXRlIGJ1dHRvbnMgZm9yIGVhY2ggaXRlbSBlbGVtZW50XG4gICAgY29uc3QgbG9hZExpc3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkTGlzdCA9IHRvZG9Db252ZXJ0ZXIucmVuZGVyTGlzdChfY3VycmVudExpc3QpO1xuICAgICAgICBjb25zdCBpdGVtRWxlbWVudHMgPSByZW5kZXJlZExpc3QucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0nKTtcblxuICAgICAgICBsaXN0V3JhcHBlci5hcHBlbmRDaGlsZChyZW5kZXJlZExpc3QpO1xuXG4gICAgICAgIC8vIGFkZGluZyBkZWxldGUgYnV0dG9ucyBmb3IgaXRlbSBlbGVtZW50c1xuICAgICAgICBpdGVtRWxlbWVudHMuZm9yRWFjaChpdGVtRWxlbWVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtVGl0bGUgPSBpdGVtRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGl0bGUnKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1pdGVtLWJ0bicpO1xuICAgICAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnLCBpdGVtVGl0bGUpO1xuICAgICAgICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGl0ZW0gZnJvbSBkb21cbiAgICAgICAgICAgICAgICB1bmxvYWRJdGVtKHJlbmRlcmVkTGlzdCwgaXRlbUVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gZGVsZXRlIGl0ZW0gZnJvbSAnX2N1cnJlbnRMaXN0J1xuICAgICAgICAgICAgICAgIF9jdXJyZW50TGlzdC5kZWxldGVJdGVtKGl0ZW1UaXRsZSk7XG5cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGl0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gYWRkIGFuIGFkZEl0ZW0gYnV0dG9uIHRoYXRcbiAgICAgICAgY29uc3QgbmV3SXRlbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBuZXdJdGVtQnRuLmNsYXNzTGlzdC5hZGQoJ25ldy1pdGVtLWJ0bicpO1xuICAgICAgICBuZXdJdGVtQnRuLnRleHRDb250ZW50ID0gJ25ldyBpdGVtJztcbiAgICAgICAgbmV3SXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRJdGVtSW5wdXQpO1xuICAgICAgICBsaXN0V3JhcHBlci5hcHBlbmRDaGlsZChuZXdJdGVtQnRuKTtcbiAgICB9XG5cbiAgICAvLyByZW1vdmVzIGl0ZW1FbGVtZW50IGZyb20gRG9tXG4gICAgY29uc3QgdW5sb2FkSXRlbSA9IChsaXN0RWxlbWVudCwgaXRlbUVsZW1lbnQpID0+IHtcbiAgICAgICAgbGlzdEVsZW1lbnQucmVtb3ZlQ2hpbGQoaXRlbUVsZW1lbnQpO1xuICAgIH1cbiAgICBcbiAgICAvLyByZW1vdmVzIGxpc3RFbGVtZW50IGZyb20gRE9NXG4gICAgY29uc3QgdW5sb2FkTGlzdCA9ICgpID0+IHtcbiAgICAgICAgbGlzdFdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG5cbiAgICBjb25zdCBsb2FkSXRlbUlucHV0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgaXRlbUZvcm0uY2xhc3NMaXN0LmFkZCgnaXRlbS1mb3JtJyk7XG5cbiAgICAgICAgLy8gY3JlYXRpb24gb2YgZm9ybSBncm91cCBmb3IgbmV3IGl0ZW0gdGl0bGVcbiAgICAgICAgY29uc3QgdGl0bGVHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKTtcblxuICAgICAgICBjb25zdCB0aXRsZUxhYmVsID0gJzxsYWJlbCBmb3I9XCJ0aXRsZS1pbnB1dFwiPlRpdGxlPC9sYWJlbD4nO1xuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gJzxpbnB1dCBpZD1cInRpdGxlLWlucHV0XCIgbmFtZT1cInRpdGxlLWlucHV0IHBsYWNlaG9sZGVyPVwiVGl0bGVcIi8+JztcbiAgICAgICAgdGl0bGVHcm91cC5pbm5lckhUTUwgPSB0aXRsZUxhYmVsICsgdGl0bGVJbnB1dDtcbiAgICAgICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQodGl0bGVHcm91cClcblxuICAgICAgICAvLyBjcmVhdGlvbiBvZiBmb3JtIGdyb3VwIGZvciBuZXcgaXRlbSBkZXNjcmlwdGlvblxuICAgICAgICBjb25zdCBkZXNjR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGVzY0dyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKTtcblxuICAgICAgICBjb25zdCBkZXNjTGFiZWwgPSAnPGxhYmVsIGZvcj1cImRlc2MtaW5wdXRcIj5EZXNjcmlwdGlvbjwvbGFiZWw+JztcbiAgICAgICAgY29uc3QgZGVzY0lucHV0ID0gJzxpbnB1dCBpZD1cImRlc2MtaW5wdXRcIiBuYW1lPVwiZGVzYy1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIi8+JztcbiAgICAgICAgZGVzY0dyb3VwLmlubmVySFRNTCA9IGRlc2NMYWJlbCArIGRlc2NJbnB1dDtcbiAgICAgICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQoZGVzY0dyb3VwKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGNyZWF0aW9uIG9mIGZvcm0gZ3JvdXAgZm9yIG5ldyBpdGVtIGRhdGVcbiAgICAgICAgY29uc3QgZGF0ZUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRhdGVHcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJyk7XG5cbiAgICAgICAgY29uc3QgZGF0ZUxhYmVsID0gJzxsYWJlbCBmb3I9XCJkYXRlLWlucHV0XCI+RGF0ZTwvbGFiZWw+JztcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gJzxpbnB1dCBpZD1cImRhdGUtaW5wdXRcIiBuYW1lPVwiZGF0ZS1pbnB1dFwiLz4nO1xuICAgICAgICBkYXRlR3JvdXAuaW5uZXJIVE1MID0gZGF0ZUxhYmVsICsgZGF0ZUlucHV0O1xuICAgICAgICBpdGVtRm9ybS5hcHBlbmRDaGlsZChkYXRlR3JvdXApO1xuICAgICAgICAvLyBjcmVhdGlvbiBvZiBmb3JtIGdyb3VwIGZvciBuZXcgaXRlbSBwcmlvcml0eVxuICAgICAgICBjb25zdCBwcmlvcml0eUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByaW9yaXR5R3JvdXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpO1xuICAgICAgICBjb25zdCBwcmlvcml0eVNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcmlvcml0eUxlZ2VuZCA9ICc8bGVnZW5kPlByaW9yaXR5PC9sZWdlbmQ+JztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByaW9yaXR5TG93ID0gJzxsYWJlbCBmb3I9XCJwcmlvcml0eS1sb3dcIj5Mb3c8L2xhYmVsPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJwcmlvcml0eS1sb3dcIiBuYW1lPVwicHJpb3JpdHktaW5wdXRcIiB2YWx1ZT1cImxvd1wiLz4nO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5TWVkID0gJzxsYWJlbCBmb3I9XCJwcmlvcml0eS1tZWRcIj5NZWQ8L2xhYmVsPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJwcmlvcml0eS1tZWRcIiBuYW1lPVwicHJpb3JpdHktaW5wdXRcIiB2YWx1ZT1cIm1lZFwiLz4nO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlIaWdoID0gJzxsYWJlbCBmb3I9XCJwcmlvcml0eS1oaWdoXCI+SGlnaDwvbGFiZWw+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJwcmlvcml0eS1oaWdoXCIgbmFtZT1cInByaW9yaXR5LWlucHV0XCIgdmFsdWU9XCJoaWdoXCIvPic7XG4gICAgICAgIHByaW9yaXR5U2V0LmlubmVySFRNTCA9IHByaW9yaXR5TGVnZW5kICsgcHJpb3JpdHlMb3cgKyBwcmlvcml0eU1lZCArIHByaW9yaXR5SGlnaDtcbiAgICAgICAgcHJpb3JpdHlHcm91cC5hcHBlbmRDaGlsZChwcmlvcml0eVNldCk7XG4gICAgICAgIGl0ZW1Gb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5R3JvdXApO1xuXG4gICAgICAgIGxpc3RXcmFwcGVyLmFwcGVuZENoaWxkKGl0ZW1Gb3JtKTtcblxuICAgICAgICAvLyBjcmVhdGUgYnV0dG9uIHRvIGFkZCBuZXcgZWxlbWVudCBmcm9tIGluZm9cbiAgICAgICAgY29uc3QgYWRkSXRlbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRJdGVtQnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC1pdGVtLWJ0bicpO1xuICAgICAgICBhZGRJdGVtQnRuLnRleHRDb250ZW50ID0gJ2FkZCBpdGVtJztcblxuICAgICAgICBpdGVtRm9ybS5hcHBlbmRDaGlsZChhZGRJdGVtQnRuKTtcblxuICAgICAgICAvLyBhZGRJdGVtIGJ0biBzaG91bGQgYWRkIG5ldyBidXR0b24gZnJvbSBmb3JtIGluZm8sIHRoZW4gcmVsb2FkIGxpc3RcbiAgICAgICAgYWRkSXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBjYXB0dXJlIGlucHV0IGZyb20gaW5wdXQgZmllbGRzO1xuICAgICAgICAgICAgY29uc3QgbmV3VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUtaW5wdXQnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzYy1pbnB1dCcpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgbmV3RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlLWlucHV0JykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBuZXdQcmlvcml0eSA9IHByaW9yaXR5U2V0LnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJykudmFsdWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBpdGVtKG5ld1RpdGxlLCBuZXdEZXNjLCBuZXdEYXRlLCBuZXdQcmlvcml0eSk7XG4gICAgICAgICAgICBfY3VycmVudExpc3QuYWRkSXRlbShuZXdJdGVtKTtcbiAgICAgICAgICAgIHVubG9hZEl0ZW1JbnB1dCgpO1xuICAgICAgICAgICAgdW5sb2FkTGlzdCgpO1xuICAgICAgICAgICAgbG9hZExpc3QoKTtcbiAgICAgICAgfSlcblxuXG4gICAgICAgIFxuICAgIH1cbiAgICBjb25zdCB1bmxvYWRJdGVtSW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tZm9ybScpO1xuICAgICAgICBsaXN0V3JhcHBlci5yZW1vdmVDaGlsZChpdGVtRm9ybSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGxvYWRQYWdlXG4gICAgfVxufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7aXRlbSwgbGlzdCwgY29sbGVjdGlvbn0gZnJvbSAnLi90b2RvLmpzJ1xuaW1wb3J0IHt1aUhhbmRsZXJ9IGZyb20gJy4vdWkuanMnXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuY29uc3QgaGFuZGxlciA9IHVpSGFuZGxlcihjb250ZW50KTtcbmhhbmRsZXIubG9hZFBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==