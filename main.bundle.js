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
            sidebar.appendChild(renderListInput(sidebar));
            
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

    // remders a form for adding list elements
    // container parameter 
    const renderListInput = (container) => {
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
        cancelListBtn.addEventListener('click', (e) => {
            e.preventDefault();
            unloadElement(container, listForm);
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
        })
        listForm.append(addListBtn);

        
        return listForm;
    }
    
    // removes element from given parent in DOM
    const unloadElement = (parent, element) => {
        parent.removeChild(element);
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
        newItemBtn.addEventListener('click', (e) => {
            e.preventDefault();
            listWrapper.appendChild(renderItemInput(listWrapper));
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

       

        // add item to cancel item form
        const cancelItemBtn = document.createElement('button');
        cancelItemBtn.textContent = 'cancel'

        cancelItemBtn.addEventListener('click', (e) => {
            e.preventDefault();

            unloadElement(container, itemForm);
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
        })
        itemForm.appendChild(addItemBtn);

        return itemForm;
        
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1AsWUFBWTtBQUNaOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLHVCQUF1QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEdnRDs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxJQUFJO0FBQzdDLHlDQUF5QyxVQUFVO0FBQ25EO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDOztBQUVEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixvREFBVTtBQUNsQztBQUNBO0FBQ0Esc0JBQXNCLDhDQUFJO0FBQzFCLHNCQUFzQiw4Q0FBSTtBQUMxQixzQkFBc0IsOENBQUk7QUFDMUIsc0JBQXNCLDhDQUFJOztBQUUxQixzQkFBc0IsOENBQUk7QUFDMUIsc0JBQXNCLDhDQUFJO0FBQzFCLHNCQUFzQiw4Q0FBSTtBQUMxQixzQkFBc0IsOENBQUk7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyw4Q0FBSTs7QUFFcEM7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxhQUFhOztBQUViO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw4Q0FBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUN2VkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOZ0Q7QUFDZjs7QUFFakM7QUFDQSxnQkFBZ0IsaURBQVM7QUFDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpdGVtID0gKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4geyAgICBcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eX1cbn1cblxuZXhwb3J0IGNvbnN0IGxpc3QgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IF9uYW1lID0gbmFtZTtcbiAgICBjb25zdCBfaXRlbXMgPSBbXTtcblxuICAgIC8vIGFkZHMgaXRlbSBlbGVtZW50IHRvIGFycmF5IChpZiBvbmUgd2l0aCB0aGUgc2FtZSB0aXRsZSBkb2VzIG5vdCBleGlzdClcbiAgICBjb25zdCBhZGRJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAgICAgLy8gY2hlY2sgaWYgaXRlbSB3aXRoIGl0ZW0udGl0bGUgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgY29uc3QgaW5kZXggPSBpbmRleE9mKGl0ZW0udGl0bGUpO1xuICAgICAgICBpZiAoaW5kZXhPZihpdGVtLnRpdGxlKSB8fCBpbmRleClcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2l0ZW0gYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIF9pdGVtcy5wdXNoKGl0ZW0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVJdGVtID0gKGl0ZW1UaXRsZSkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4T2YoaXRlbVRpdGxlKTtcbiAgICAgICAgaWYgKGluZGV4IHx8IGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBfaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBzdWNoIGl0ZW0nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBpdGVtIG9iamVjdCB3aXRoIHRpdGxlICdpdGVtVGl0bGUnXG4gICAgY29uc3QgaW5kZXhPZiA9IChpdGVtVGl0bGUpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IF9pdGVtcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmIChfaXRlbXNbaW5kZXhdLnRpdGxlID09PSBpdGVtVGl0bGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBOYU47XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gX25hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHJldHVybnMgaW50ZXJuYWwgYXJyYXkgb2YgaXRlbXNcbiAgICAgICAgZ2V0IGl0ZW1zKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9pdGVtcztcbiAgICAgICAgfSxcbiAgICAgICAgYWRkSXRlbSwgZGVsZXRlSXRlbVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbGxlY3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgX2xpc3RzID0gW107XG5cbiAgICAgLy8gYWRkcyBsaXN0IGVsZW1lbnQgdG8gYXJyYXkgKGlmIG9uZSB3aXRoIHRoZSBzYW1lIHRpdGxlIGRvZXMgbm90IGV4aXN0KVxuICAgICBjb25zdCBhZGRMaXN0ID0gKGxpc3QpID0+IHtcbiAgICAgICAgLy8gY2hlY2sgaWYgbGlzdCB3aXRoIGxpc3QubmFtZSBhbHJlYWR5IGV4aXN0c1xuICAgICAgICBjb25zdCBpbmRleCA9IGluZGV4T2YobGlzdC5uYW1lKTtcbiAgICAgICAgaWYgKGluZGV4T2YobGlzdC5uYW1lKSB8fCBpbmRleClcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xpc3QgYWxyZWFkeSBleGlzdHMnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIF9saXN0cy5wdXNoKGxpc3QpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVMaXN0ID0gKGxpc3ROYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gaW5kZXhPZihsaXN0TmFtZSk7XG4gICAgICAgIGlmIChpbmRleCB8fCBpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgX2xpc3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gc3VjaCBsaXN0Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbGlzdCBvYmplY3Qgd2l0aCBuYW1lICdsaXN0TmFtZSdcbiAgICBjb25zdCBpbmRleE9mID0gKGxpc3ROYW1lKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBfbGlzdHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoX2xpc3RzW2luZGV4XS5uYW1lID09PSBsaXN0TmFtZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG5cbiAgICBjb25zdCBmaW5kTGlzdCA9IChsaXN0TmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gX2xpc3RzLmZpbmQobGlzdCA9PiBsaXN0Lm5hbWUgPT09IGxpc3ROYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IGxpc3RzKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9saXN0cztcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGZpcnN0TGlzdCgpIHtcbiAgICAgICAgICAgIGlmIChfbGlzdHMubGVuZ3RoIDwgMSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBfbGlzdHNbMF07XG4gICAgICAgIH0sXG4gICAgICAgIGFkZExpc3QsIGRlbGV0ZUxpc3QsIGZpbmRMaXN0XG4gICAgfVxufSIsImltcG9ydCB7aXRlbSwgbGlzdCwgY29sbGVjdGlvbn0gZnJvbSAnLi90b2RvLmpzJ1xuXG4vLyBjbGFzcyB0byBjb3ZlcnQgdG9kbyByZWxhdGVkIG9iamVjdHMgaW50byBkb20gZWxlbWVudHNcbmNvbnN0IHRvZG9Db252ZXJ0ZXIgPSAoKCkgPT4ge1xuICAgLy8gY3JlYXRlIGxpc3QgZWxlbWVudFxuICAgIGNvbnN0IHJlbmRlckxpc3QgPSAobGlzdCkgPT4ge1xuICAgICAgICBpZiAoIWxpc3QpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxpc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xpc3QnKTtcbiAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGxpc3QgaXRlbXMgdGhlbiBhcHBlbmQgYSByZW5kZXJlZCBsaXN0IHRpZW1cbiAgICAgICAgbGlzdC5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4gbGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQocmVuZGVySXRlbShpdGVtKSkpO1xuICAgICAgICByZXR1cm4gbGlzdEVsZW1lbnQ7XG4gICAgfVxuICAgLy8gcmV0dXJuIHJlbmRlcmVkIGxpc3QgaXRtZVxuICAgY29uc3QgcmVuZGVySXRlbSA9IChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgICAgICAgaXRlbUVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJywgaXRlbS50aXRsZSlcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gaXRlbSkge1xuICAgICAgICAgICAgY29uc3QgaW5mb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGluZm9FbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7a2V5fWApO1xuICAgICAgICAgICAgaW5mb0VsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtpdGVtW2tleV19YDtcbiAgICAgICAgICAgIGl0ZW1FbGVtZW50LmFwcGVuZChpbmZvRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW1FbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiB7cmVuZGVyTGlzdH07XG59KSgpO1xuXG4vLyBjcmVhdGVzIGEgdWlIYW5kbGVyIHRoYXQgd2lsbCBsb2FkIGRvbSBlbGVtZW50cyB3aXRoaW4gJ2NvbnRhaW5lcicgZWxlbWVudFxuZXhwb3J0IGNvbnN0IHVpSGFuZGxlciA9IChjb250YWluZXIpID0+IHtcbiAgICBcbiAgICBjb25zdCBzaWRlYmFyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNpZGViYXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItd3JhcHBlcicpO1xuICAgIGNvbnN0IGxpc3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGlzdFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbGlzdFdyYXBwZXInKTtcblxuICAgIGNvbnN0IF9jb2xsZWN0aW9uID0gY29sbGVjdGlvbigpO1xuICAgIFxuICAgIC8vIHNhbXBsZSBlbGVtZW50c1xuICAgIGNvbnN0IHRlc3RMaXN0MSA9IGxpc3QoJ3Rlc3QxJyk7XG4gICAgdGVzdExpc3QxLmFkZEl0ZW0oaXRlbSgndGl0bGUxJywgJ2Rlc2MxJywgJ2RhdGUxJywgJ3ByaW9yaXR5MScpKTtcbiAgICB0ZXN0TGlzdDEuYWRkSXRlbShpdGVtKCd0aXRsZTInLCAnZGVzYzInLCAnZGF0ZTInLCAncHJpb3JpdHkyJykpO1xuICAgIHRlc3RMaXN0MS5hZGRJdGVtKGl0ZW0oJ3RpdGxlMycsICdkZXNjMycsICdkYXRlMycsICdwcmlvcml0eTEnKSk7XG5cbiAgICBjb25zdCB0ZXN0TGlzdDIgPSBsaXN0KCd0ZXN0MicpO1xuICAgIHRlc3RMaXN0Mi5hZGRJdGVtKGl0ZW0oJ3RpdGxlMScsICdkZXNjMScsICdkYXRlMScsICdwcmlvcml0eTEnKSk7XG4gICAgdGVzdExpc3QyLmFkZEl0ZW0oaXRlbSgndGl0bGUyJywgJ2Rlc2MyJywgJ2RhdGUyJywgJ3ByaW9yaXR5MicpKTtcbiAgICB0ZXN0TGlzdDIuYWRkSXRlbShpdGVtKCd0aXRsZTMnLCAnZGVzYzMnLCAnZGF0ZTMnLCAncHJpb3JpdHkxJykpO1xuICAgIF9jb2xsZWN0aW9uLmFkZExpc3QodGVzdExpc3QxKTtcbiAgICBfY29sbGVjdGlvbi5hZGRMaXN0KHRlc3RMaXN0Mik7XG5cbiAgICBsZXQgX2N1cnJlbnRMaXN0ID0gX2NvbGxlY3Rpb24uZmlyc3RMaXN0O1xuICAgIFxuICAgIC8vIGRvbSBlbGVtZW50IHRoYXQgdWkgSGFuZGxlciB3aWxsIGRpcmVjdCBvdXQgdG9cbiAgICBjb25zdCBfY29udGFpbmVyID0gY29udGFpbmVyO1xuXG4gICAgY29uc3Qgc2V0Q3VycmVudExpc3QgPSAobGlzdCkgPT4ge1xuICAgICAgICBfY3VycmVudExpc3QgPSBsaXN0O1xuICAgIH1cbiAgICBcbiAgICAvLyBwdXRzIHRvZ3RoZXIgcmVuZGVyZWQgZWxlbWVudHMgb250byB0aGUgcGFnZVxuICAgIGNvbnN0IGxvYWRQYWdlID0gKCkgPT4ge1xuICAgICAgICBsb2FkU2lkZWJhcigpO1xuICAgICAgICBsb2FkTGlzdCgpO1xuXG4gICAgICAgIF9jb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZWJhcldyYXBwZXIpO1xuICAgICAgICBfY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBsb2FkU2lkZWJhciA9ICgpID0+IHtcbiAgICAgICAgc2lkZWJhcldyYXBwZXIuYXBwZW5kQ2hpbGQocmVuZGVyU2lkZWJhcigpKTtcblxuICAgIH1cbiAgICBjb25zdCB1bmxvYWRTaWRlYmFyID0gKCkgPT4ge1xuICAgICAgICBzaWRlYmFyV3JhcHBlci5pbm5lckhUTUwgPSAnJztcbiAgICB9XG4gICAgLy8gcmVuZGVycyBzaWRlIGJhciBlbGVtZW50XG4gICAgY29uc3QgcmVuZGVyU2lkZWJhciA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKTtcbiAgICAgICAgXG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocmVuZGVyTmF2YmFyKGNvbnRhaW5lcikpO1xuXG4gICAgICAgIGNvbnN0IG5ld0xpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbmV3TGlzdEJ0bi50ZXh0Q29udGVudCA9ICcrJztcbiAgICAgICAgbmV3TGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHJlbmRlckxpc3RJbnB1dChzaWRlYmFyKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuXG4gICAgICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobmV3TGlzdEJ0bik7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gc2lkZWJhcjtcbiAgICB9XG4gICAgXG4gICAgLy8gcmVuZGVycyBidXR0b25zIGZvciBsb2FkaW5nIGVhY2ggbGlzdFxuICAgIGNvbnN0IHJlbmRlck5hdmJhciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXInKTtcblxuICAgICAgICAvLyBhIG5hdkVudHJ5IGVsZW1lbnQgZm9yIGVhY2ggbGlzdDsgYWxsb3dzIGFjY2VzcyBhbmQgZGVsZXRpb24gb2YgbGlzdFxuICAgICAgICBfY29sbGVjdGlvbi5saXN0cy5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmF2RW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5hdkVudHJ5LmNsYXNzTGlzdC5hZGQoJ25hdi1lbnRyeScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBjcmVhdGlvbiBvZiBidXR0b24gdG8gb3Blbi9sb2FkIGxpc3RzXG4gICAgICAgICAgICBjb25zdCBuYXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIG5hdkJ0bi5jbGFzc0xpc3QuYWRkKCduYXYtYnRuJyk7XG4gICAgICAgICAgICBuYXZCdG4udGV4dENvbnRlbnQgPSBsaXN0Lm5hbWU7XG4gICAgICAgICAgICBuYXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudExpc3QobGlzdClcbiAgICAgICAgICAgICAgICB1bmxvYWRMaXN0KCk7XG4gICAgICAgICAgICAgICAgbG9hZExpc3QoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbmF2RW50cnkuYXBwZW5kQ2hpbGQobmF2QnRuKTtcblxuICAgICAgICAgICAgLy8gY3JlYXRpb24gb2YgYnV0dG9uIHRvIGRlbGV0ZSBsaXN0XG4gICAgICAgICAgICBjb25zdCBkZWxldGVMaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVMaXN0QnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1saXN0LWJ0bicpO1xuICAgICAgICAgICAgZGVsZXRlTGlzdEJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgbGlzdC5uYW1lKTtcbiAgICAgICAgICAgIGRlbGV0ZUxpc3RCdG4udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgICBkZWxldGVMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3QgPT09IF9jdXJyZW50TGlzdClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHVubG9hZExpc3QoKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIF9jb2xsZWN0aW9uLmRlbGV0ZUxpc3QobGlzdC5uYW1lKTtcbiAgICAgICAgICAgICAgICB1bmxvYWRTaWRlYmFyKCk7XG4gICAgICAgICAgICAgICAgbG9hZFNpZGViYXIoKTtcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIG5hdkVudHJ5LmFwcGVuZENoaWxkKGRlbGV0ZUxpc3RCdG4pO1xuXG4gICAgICAgICAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobmF2RW50cnkpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBuYXZiYXI7XG4gICAgfVxuXG4gICAgLy8gcmVtZGVycyBhIGZvcm0gZm9yIGFkZGluZyBsaXN0IGVsZW1lbnRzXG4gICAgLy8gY29udGFpbmVyIHBhcmFtZXRlciBcbiAgICBjb25zdCByZW5kZXJMaXN0SW5wdXQgPSAoY29udGFpbmVyKSA9PiB7XG4gICAgICAgIC8vIGNyZWF0ZSBmb3JtIGVsZW1lbnRcbiAgICAgICAgY29uc3QgbGlzdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGxpc3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2xpc3QtZm9ybScpO1xuICAgICAgICBcbiAgICAgICAgLy8gY3JlYXRlIGZvcm0tZ3JvdXBcbiAgICAgICAgY29uc3QgZm9ybUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Hcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJyk7XG5cbiAgICAgICAgY29uc3QgbGFiZWwgPSAnPGxhYmVsIGZvcj1cIm5hbWUtaW5wdXRcIj5MaXN0IE5hbWU8L2xhYmVsPidcbiAgICAgICAgY29uc3QgaW5wdXQgPSAnPGlucHV0IGlkPVwibmFtZS1pbnB1dFwiIG5hbWU9XCJuYW1lLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJMaXN0IE5hbWVcIi8+J1xuICAgICAgICBmb3JtR3JvdXAuaW5uZXJIVE1MID0gbGFiZWwgKyBpbnB1dDtcblxuICAgICAgICBsaXN0Rm9ybS5hcHBlbmRDaGlsZChmb3JtR3JvdXApO1xuXG4gICAgICAgIC8vIGNyZWF0ZXMgYnV0dG9uIHRvIGNsb3NlIGxpc3QgZm9ybVxuICAgICAgICBjb25zdCBjYW5jZWxMaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNhbmNlbExpc3RCdG4udGV4dENvbnRlbnQgPSAnY2FuY2VsJztcbiAgICAgICAgY2FuY2VsTGlzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB1bmxvYWRFbGVtZW50KGNvbnRhaW5lciwgbGlzdEZvcm0pO1xuICAgICAgICB9KVxuICAgICAgICBsaXN0Rm9ybS5hcHBlbmQoY2FuY2VsTGlzdEJ0bik7XG5cbiAgICAgICAgLy8gYnV0dG9uIHRoYXQgYWRkcyBsaXN0IHRvIGNvbGxlY3Rpb24gdGhlbiByZWxvYWRzIHNpZGViYXJcbiAgICAgICAgY29uc3QgYWRkTGlzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBhZGRMaXN0QnRuLmNsYXNzTGlzdC5hZGQoJ2FkZC1saXN0LWJ0bicpO1xuICAgICAgICBhZGRMaXN0QnRuLnRleHRDb250ZW50ID0gJysnO1xuICAgICAgICBhZGRMaXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lLWlucHV0JykudmFsdWU7XG4gICAgICAgICAgICBfY29sbGVjdGlvbi5hZGRMaXN0KGxpc3QobmV3TmFtZSkpO1xuXG4gICAgICAgICAgICB1bmxvYWRTaWRlYmFyKCk7XG4gICAgICAgICAgICBsb2FkU2lkZWJhcigpO1xuICAgICAgICB9KVxuICAgICAgICBsaXN0Rm9ybS5hcHBlbmQoYWRkTGlzdEJ0bik7XG5cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBsaXN0Rm9ybTtcbiAgICB9XG4gICAgXG4gICAgLy8gcmVtb3ZlcyBlbGVtZW50IGZyb20gZ2l2ZW4gcGFyZW50IGluIERPTVxuICAgIGNvbnN0IHVubG9hZEVsZW1lbnQgPSAocGFyZW50LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICB9XG4gICAgXG5cbiAgICAvLyB3aWxsIGNhbGwgdG8gcmVuZGVyIHRoZSBpdGVtcyBvZiAnX2N1cnJlbnRMaXN0JyBhcyBkb20gZWxlbWVudHNcbiAgICAvLyB0aGVuIHdpbGwgdXBkYXRlIHRoZSBsaXN0V3JhcHBlciBlbGVtZW50IHdpdGggc2FpZCBsaXN0XG4gICAgLy8gYWxzbyBhZGRzIGRlbGV0ZSBidXR0b25zIGZvciBlYWNoIGl0ZW0gZWxlbWVudFxuICAgIGNvbnN0IGxvYWRMaXN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZW5kZXJlZExpc3QgPSB0b2RvQ29udmVydGVyLnJlbmRlckxpc3QoX2N1cnJlbnRMaXN0KTtcbiAgICAgICAgY29uc3QgaXRlbUVsZW1lbnRzID0gcmVuZGVyZWRMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtJyk7XG5cbiAgICAgICAgbGlzdFdyYXBwZXIuYXBwZW5kQ2hpbGQocmVuZGVyZWRMaXN0KTtcblxuICAgICAgICAvLyBhZGRpbmcgZGVsZXRlIGJ1dHRvbnMgZm9yIGl0ZW0gZWxlbWVudHNcbiAgICAgICAgaXRlbUVsZW1lbnRzLmZvckVhY2goaXRlbUVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbVRpdGxlID0gaXRlbUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJyk7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtaXRlbS1idG4nKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgaXRlbVRpdGxlKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBpdGVtIGZyb20gZG9tXG4gICAgICAgICAgICAgICAgdW5sb2FkSXRlbShyZW5kZXJlZExpc3QsIGl0ZW1FbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSBpdGVtIGZyb20gJ19jdXJyZW50TGlzdCdcbiAgICAgICAgICAgICAgICBfY3VycmVudExpc3QuZGVsZXRlSXRlbShpdGVtVGl0bGUpO1xuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpdGVtRWxlbWVudC5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vIGFkZCBhbiBhZGRJdGVtIGJ1dHRvbiB0aGF0XG4gICAgICAgIGNvbnN0IG5ld0l0ZW1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbmV3SXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCduZXctaXRlbS1idG4nKTtcbiAgICAgICAgbmV3SXRlbUJ0bi50ZXh0Q29udGVudCA9ICduZXcgaXRlbSc7XG4gICAgICAgIG5ld0l0ZW1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGlzdFdyYXBwZXIuYXBwZW5kQ2hpbGQocmVuZGVySXRlbUlucHV0KGxpc3RXcmFwcGVyKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsaXN0V3JhcHBlci5hcHBlbmRDaGlsZChuZXdJdGVtQnRuKTtcbiAgICB9XG5cbiAgICAvLyByZW1vdmVzIGl0ZW1FbGVtZW50IGZyb20gRG9tXG4gICAgY29uc3QgdW5sb2FkSXRlbSA9IChsaXN0RWxlbWVudCwgaXRlbUVsZW1lbnQpID0+IHtcbiAgICAgICAgbGlzdEVsZW1lbnQucmVtb3ZlQ2hpbGQoaXRlbUVsZW1lbnQpO1xuICAgIH1cbiAgICBcbiAgICAvLyByZW1vdmVzIGxpc3RFbGVtZW50IGZyb20gRE9NXG4gICAgY29uc3QgdW5sb2FkTGlzdCA9ICgpID0+IHtcbiAgICAgICAgbGlzdFdyYXBwZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgXG5cbiAgICBjb25zdCByZW5kZXJJdGVtSW5wdXQgPSAoY29udGFpbmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBpdGVtRm9ybS5jbGFzc0xpc3QuYWRkKCdpdGVtLWZvcm0nKTtcblxuICAgICAgICAvLyBjcmVhdGlvbiBvZiBmb3JtIGdyb3VwIGZvciBuZXcgaXRlbSB0aXRsZVxuICAgICAgICBjb25zdCB0aXRsZUdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlR3JvdXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSAnPGxhYmVsIGZvcj1cInRpdGxlLWlucHV0XCI+VGl0bGU8L2xhYmVsPic7XG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSAnPGlucHV0IGlkPVwidGl0bGUtaW5wdXRcIiBuYW1lPVwidGl0bGUtaW5wdXQgcGxhY2Vob2xkZXI9XCJUaXRsZVwiLz4nO1xuICAgICAgICB0aXRsZUdyb3VwLmlubmVySFRNTCA9IHRpdGxlTGFiZWwgKyB0aXRsZUlucHV0O1xuICAgICAgICBpdGVtRm9ybS5hcHBlbmRDaGlsZCh0aXRsZUdyb3VwKVxuXG4gICAgICAgIC8vIGNyZWF0aW9uIG9mIGZvcm0gZ3JvdXAgZm9yIG5ldyBpdGVtIGRlc2NyaXB0aW9uXG4gICAgICAgIGNvbnN0IGRlc2NHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXNjR3JvdXAuY2xhc3NMaXN0LmFkZCgnZm9ybS1ncm91cCcpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NMYWJlbCA9ICc8bGFiZWwgZm9yPVwiZGVzYy1pbnB1dFwiPkRlc2NyaXB0aW9uPC9sYWJlbD4nO1xuICAgICAgICBjb25zdCBkZXNjSW5wdXQgPSAnPGlucHV0IGlkPVwiZGVzYy1pbnB1dFwiIG5hbWU9XCJkZXNjLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiLz4nO1xuICAgICAgICBkZXNjR3JvdXAuaW5uZXJIVE1MID0gZGVzY0xhYmVsICsgZGVzY0lucHV0O1xuICAgICAgICBpdGVtRm9ybS5hcHBlbmRDaGlsZChkZXNjR3JvdXApO1xuICAgICAgICBcbiAgICAgICAgLy8gY3JlYXRpb24gb2YgZm9ybSBncm91cCBmb3IgbmV3IGl0ZW0gZGF0ZVxuICAgICAgICBjb25zdCBkYXRlR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF0ZUdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZ3JvdXAnKTtcblxuICAgICAgICBjb25zdCBkYXRlTGFiZWwgPSAnPGxhYmVsIGZvcj1cImRhdGUtaW5wdXRcIj5EYXRlPC9sYWJlbD4nO1xuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSAnPGlucHV0IGlkPVwiZGF0ZS1pbnB1dFwiIG5hbWU9XCJkYXRlLWlucHV0XCIvPic7XG4gICAgICAgIGRhdGVHcm91cC5pbm5lckhUTUwgPSBkYXRlTGFiZWwgKyBkYXRlSW5wdXQ7XG4gICAgICAgIGl0ZW1Gb3JtLmFwcGVuZENoaWxkKGRhdGVHcm91cCk7XG4gICAgICAgIC8vIGNyZWF0aW9uIG9mIGZvcm0gZ3JvdXAgZm9yIG5ldyBpdGVtIHByaW9yaXR5XG4gICAgICAgIGNvbnN0IHByaW9yaXR5R3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJpb3JpdHlHcm91cC5jbGFzc0xpc3QuYWRkKCdmb3JtLWdyb3VwJyk7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5U2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByaW9yaXR5TGVnZW5kID0gJzxsZWdlbmQ+UHJpb3JpdHk8L2xlZ2VuZD4nO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlMb3cgPSAnPGxhYmVsIGZvcj1cInByaW9yaXR5LWxvd1wiPkxvdzwvbGFiZWw+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInByaW9yaXR5LWxvd1wiIG5hbWU9XCJwcmlvcml0eS1pbnB1dFwiIHZhbHVlPVwibG93XCIvPic7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlNZWQgPSAnPGxhYmVsIGZvcj1cInByaW9yaXR5LW1lZFwiPk1lZDwvbGFiZWw+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInByaW9yaXR5LW1lZFwiIG5hbWU9XCJwcmlvcml0eS1pbnB1dFwiIHZhbHVlPVwibWVkXCIvPic7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcmlvcml0eUhpZ2ggPSAnPGxhYmVsIGZvcj1cInByaW9yaXR5LWhpZ2hcIj5IaWdoPC9sYWJlbD4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInByaW9yaXR5LWhpZ2hcIiBuYW1lPVwicHJpb3JpdHktaW5wdXRcIiB2YWx1ZT1cImhpZ2hcIi8+JztcbiAgICAgICAgcHJpb3JpdHlTZXQuaW5uZXJIVE1MID0gcHJpb3JpdHlMZWdlbmQgKyBwcmlvcml0eUxvdyArIHByaW9yaXR5TWVkICsgcHJpb3JpdHlIaWdoO1xuICAgICAgICBwcmlvcml0eUdyb3VwLmFwcGVuZENoaWxkKHByaW9yaXR5U2V0KTtcbiAgICAgICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlHcm91cCk7XG5cbiAgICAgICBcblxuICAgICAgICAvLyBhZGQgaXRlbSB0byBjYW5jZWwgaXRlbSBmb3JtXG4gICAgICAgIGNvbnN0IGNhbmNlbEl0ZW1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2FuY2VsSXRlbUJ0bi50ZXh0Q29udGVudCA9ICdjYW5jZWwnXG5cbiAgICAgICAgY2FuY2VsSXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHVubG9hZEVsZW1lbnQoY29udGFpbmVyLCBpdGVtRm9ybSk7XG4gICAgICAgIH0pXG4gICAgICAgIGl0ZW1Gb3JtLmFwcGVuZENoaWxkKGNhbmNlbEl0ZW1CdG4pO1xuICAgICAgICBcbiAgICAgICAgLy8gY3JlYXRlIGJ1dHRvbiB0byBhZGQgbmV3IGVsZW1lbnQgZnJvbSBpbmZvXG4gICAgICAgIGNvbnN0IGFkZEl0ZW1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkSXRlbUJ0bi5jbGFzc0xpc3QuYWRkKCdhZGQtaXRlbS1idG4nKTtcbiAgICAgICAgYWRkSXRlbUJ0bi50ZXh0Q29udGVudCA9ICdhZGQgaXRlbSc7XG5cbiAgICAgICAgLy8gYWRkSXRlbSBidG4gc2hvdWxkIGFkZCBuZXcgYnV0dG9uIGZyb20gZm9ybSBpbmZvLCB0aGVuIHJlbG9hZCBsaXN0XG4gICAgICAgIGFkZEl0ZW1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gY2FwdHVyZSBpbnB1dCBmcm9tIGlucHV0IGZpZWxkcztcbiAgICAgICAgICAgIGNvbnN0IG5ld1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlLWlucHV0JykudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBuZXdEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2MtaW5wdXQnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZS1pbnB1dCcpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgbmV3UHJpb3JpdHkgPSBwcmlvcml0eVNldC5xdWVyeVNlbGVjdG9yKCc6Y2hlY2tlZCcpLnZhbHVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBuZXdJdGVtID0gaXRlbShuZXdUaXRsZSwgbmV3RGVzYywgbmV3RGF0ZSwgbmV3UHJpb3JpdHkpO1xuICAgICAgICAgICAgX2N1cnJlbnRMaXN0LmFkZEl0ZW0obmV3SXRlbSk7XG4gICAgICAgICAgICB1bmxvYWRMaXN0KCk7XG4gICAgICAgICAgICBsb2FkTGlzdCgpO1xuICAgICAgICB9KVxuICAgICAgICBpdGVtRm9ybS5hcHBlbmRDaGlsZChhZGRJdGVtQnRuKTtcblxuICAgICAgICByZXR1cm4gaXRlbUZvcm07XG4gICAgICAgIFxuICAgIH1cbiAgICBcblxuICBcbiAgICByZXR1cm4ge1xuICAgICAgICBsb2FkUGFnZVxuICAgIH1cbn1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2l0ZW0sIGxpc3QsIGNvbGxlY3Rpb259IGZyb20gJy4vdG9kby5qcydcbmltcG9ydCB7dWlIYW5kbGVyfSBmcm9tICcuL3VpLmpzJ1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbmNvbnN0IGhhbmRsZXIgPSB1aUhhbmRsZXIoY29udGVudCk7XG5oYW5kbGVyLmxvYWRQYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=