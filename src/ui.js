import {item, list, collection} from './todo.js'
import {components} from './components.js';
// class to covert todo related objects into dom elements

// creates a uiHandler that will load dom elements within 'container' element
export const uiHandler = (container) => {
    
    const sidebarWrapper = document.createElement('div');
    sidebarWrapper.classList.add('sidebar-wrapper');
    const listWrapper = document.createElement('div');
    listWrapper.classList.add('list-wrapper');

    const _collection = collection();
    
    // sample elements
    const testList1 = list('test1');
    testList1.addItem(item('title1', 'desc1', 'date1', 'priority1'));
    testList1.addItem(item('title2', 'desc2', 'date2', 'priority2'));
    testList1.addItem(item('title3', 'desc3', 'date3', 'priority1'));
    const testList2 = list('test2');
    testList2.addItem(item('title1', 'desc1', 'date1', 'priority1'));
    testList2.addItem(item('title2', 'desc2', 'date2', 'priority2'));
    testList2.addItem(item('title3', 'desc3', 'date3', 'priority1'));
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
                const listForm = components.renderListForm(unloadForm, handleAddList)
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

    // renders a form for adding list elements
  
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

            listAddHandler();
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
        const renderedList = components.renderList(_currentList);
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

        // add button that opens form to add new item
        const newItemBtn = document.createElement('button');
        newItemBtn.classList.add('new-item-btn');
        newItemBtn.textContent = 'new item';
        newItemBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (!document.querySelector('.item-form'))
            {
                const itemForm = components.renderItemForm(unloadForm, handleAddItem)
                _container.appendChild(itemForm);
            }
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

    const unloadForm = () => {
        const formElement = document.querySelector('.form-wrapper');
        unloadElement(_container, formElement);
    }

    // takes values of item form to add new item to current list
    const handleAddItem = () => {
        const title = document.querySelector('#title-input').value;
        const desc = document.querySelector('#desc-input').value;
        const date = document.querySelector('#date-input').value;
        const priority = document.querySelector(':checked').value;
        
        const newItem = item(title, desc, date, priority);
        _currentList.addItem(newItem);
        unloadList();
        loadList();
        unloadForm();
    }

    // takes values of list form to add new list to collection
    const handleAddList = () => {
        const name = document.querySelector('#name-input').value;
        _collection.addList(list(name));
        unloadSidebar();
        loadSidebar();
        unloadForm();
    }
  
    const listAddHandler = () => {
        e.preventDefault();
        const newName = document.querySelector('#name-input').value;
        _collection.addList(list(newName));
        unloadSidebar();
        loadSidebar();
    }
    
    return {
        loadPage
    }
}

