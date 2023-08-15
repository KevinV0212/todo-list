import {item, list, collection} from './todo.js'
import {components} from './components.js';

import { compareAsc, format } from 'date-fns'

import '../node_modules/@mdi/font/css/materialdesignicons.css';

// creates a uiHandler that will load dom elements within 'wrapper' element
export const uiHandler = (wrapper) => {
    
    const container = document.createElement('div');
    container.classList.add('container');
    const sidebarWrapper = document.createElement('div');
    sidebarWrapper.classList.add('sidebar-wrapper');
    const listWrapper = document.createElement('div');
    listWrapper.classList.add('list-wrapper');

    const _collection = collection();
    
    // sample elements
    const testList1 = list('Chores');
    testList1.addItem(item('Dishes', 'Wash and Dry Dishes', '08/14/2023', 'high'));
    testList1.addItem(item('Vacuum', "Vacuum house. PS Don't forget to get under the sofa", '08/14/2023', 'med'));
    testList1.addItem(item('Grocery Shopping', 'Pick up a can of pringles, a sponge, and a rubber glove', '08/14/2023', 'low'));
    const testList2 = list('Work');
    testList2.addItem(item('Report', 'Finish proof reading psychology report', '08/14/2023', 'high'));
    testList2.addItem(item('Email Professor', 'Remind professor about club field trip', '08/14/2023', 'med'));
    testList2.addItem(item('Work on project', "Finish putting together poster for cancer research", '08/14/2023', 'low'));
    _collection.addList(testList1);
    _collection.addList(testList2);

    let _currentList = _collection.firstList;
    
    // dom element that ui Handler will direct out to
    const _wrapper = wrapper;

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

        const header = document.createElement('header');

        const siteTitle = document.createElement('h1');
        siteTitle.classList.add('site-title');
        siteTitle.textContent = 'Todo List';
        header.appendChild(siteTitle);

        container.appendChild(header);
        container.appendChild(sidebarWrapper);
        container.appendChild(listWrapper);

        _wrapper.appendChild(container);
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
        newListBtn.classList.add('add-btn');
        newListBtn.textContent = 'Add New List';
        newListBtn.addEventListener('click', (e) => {
            e.preventDefault();
            unloadForm();
            const listForm = components.renderListForm(unloadForm, 
                                                       handleAddList)
            container.appendChild(listForm);
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

            navbar.appendChild(navEntry);
        })

        return navbar;
    }   

    // will call to render the items of '_currentList' as dom elements
    // then will update the listWrapper element with said list
    // also adds delete buttons for each item element
    const loadList = () => {
        const renderedList = components.renderList(_currentList);
        const itemElements = renderedList.querySelectorAll('.item');

        const listHeader =  document.createElement('div');
        listHeader.classList.add('list-header');
        
        // title for current list
        const listName = document.createElement('h2')
        listName.classList.add('list-title');
        listName.textContent = _currentList.name;
        listHeader.appendChild(listName);
        
        // edit button for current list
        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn', 'mdi', 'mdi-playlist-edit');
        editBtn.setAttribute('data-target', list.name);
        editBtn.addEventListener('click', (e) => {
            e.preventDefault();
            unloadForm();
            const listForm = components.renderListEdit(unloadForm, 
                                                       handleEditList, 
                                                       handleDeleteList);
            container.appendChild(listForm);
        })
        listHeader.appendChild(editBtn);
        // button to open add item form
        const newItemBtn = document.createElement('button');
        newItemBtn.classList.add('add-btn');
        newItemBtn.textContent = 'new item';
        newItemBtn.addEventListener('click', (e) => {
            e.preventDefault();
            unloadForm();
            const itemForm = components.renderItemForm(unloadForm, 
                                                       handleAddItem)
            container.appendChild(itemForm);
        });
        listHeader.appendChild(newItemBtn);

        listWrapper.appendChild(listHeader)
        listWrapper.appendChild(renderedList);
        
        // adding delete buttons for item elements
        itemElements.forEach(itemElement => {
            const editBtn = document.createElement('button');
            editBtn.classList.add('edit-btn','mdi', 'mdi-pencil')            
            editBtn.addEventListener('click', () => {
                unloadForm();
                const itemTitle = itemElement.getAttribute('data-title');
                const item = _currentList.findItem(itemTitle);
                const itemForm = components.renderItemEdit(item, 
                                                           unloadForm, 
                                                           handleEditItem,
                                                           handleDeleteItem);
                container.appendChild(itemForm);
            })
            itemElement.appendChild(editBtn);
        })

    }
   
    // removes listElement from DOM
    const unloadList = () => {
        listWrapper.innerHTML = '';
        unloadForm();
    }

    // unloads form element from dom
    const unloadForm = () => {
        const formElement = document.querySelector('.form-wrapper');
        if (formElement)
            unloadElement(container, formElement);
    }

    // takes values of item form to add new item to current list
    const handleAddItem = () => {
        const title = document.querySelector('#title-input').value;
        const desc = document.querySelector('#desc-input').value;
        const date = document.querySelector('#date-input').value;
        const priority = document.querySelector(':checked');
        
        if (!title || !desc || !date || !priority)
        {
            window.alert('Please Fill in All Fields');
            return;
        }
        // priority has to be checked separately due to nature of radio buttons
        const priorityVal = priority.value;
        const dateObj = format(new Date(`${date}T00:00`), 'MM/dd/yyyy');

        const newItem = item(title, desc, dateObj, priorityVal);
        _currentList.addItem(newItem);
        unloadList();
        loadList();
        unloadForm();
    }
    
    // handles editing of an item and updating dom
    const handleEditItem = () => {
        const form = document.querySelector('form');

        const oldTitle = form.getAttribute('data-target');
        const title = form.querySelector('#title-input').value;
        const desc = form.querySelector('#desc-input').value;
        const date = form.querySelector('#date-input').value;        
        const priority = document.querySelector(':checked');
        
        if (!title || !desc || !date || !priority)
        {
            window.alert('Please Fill in All Fields');
            return;
        }
        // priority has to be checked separately due to nature of radio buttons
        const priorityVal = priority.value;
        const dateObj = format(new Date(`${date}T00:00`), 'MM/dd/yyyy');
        
        const newItem = item(title, desc, dateObj, priorityVal);
        _currentList.replaceItem(oldTitle, newItem);
        unloadList();
        loadList();
        unloadForm();
    }

    const handleDeleteItem = () => {
        const form = document.querySelector('form');
        const targetTitle = form.querySelector('#title-input').value;
        _currentList.deleteItem(targetTitle);

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
    
    // handles editing of list and updating dom
    const handleEditList = () => {
        _currentList.name = document.querySelector('#name-input').value;

        unloadSidebar();
        loadSidebar();
        unloadList();
        loadList();
        unloadForm();
    }

    // handles deleting of a list and updating dom
    const handleDeleteList = () => {
        _collection.deleteList(_currentList.name)
        unloadSidebar();
        loadSidebar();
        unloadList();
        unloadForm();
    }
    return {
        loadPage
    }
}

