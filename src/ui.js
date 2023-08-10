import {item, list, collection} from './todo.js'

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
                _container.appendChild(renderListInput(_container));
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

    // remders a form for adding list elements
    // container parameter 
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

            const newName = document.querySelector('#name-input').value;
            _collection.addList(list(newName));

            unloadSidebar();
            loadSidebar();
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
        const renderedList = todoConverter.renderList(_currentList);
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

        // add an addItem button that
        const newItemBtn = document.createElement('button');
        newItemBtn.classList.add('new-item-btn');
        newItemBtn.textContent = 'new item';
        newItemBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (!document.querySelector('.item-form'))
                _container.appendChild(renderItemInput(_container));
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

        cancelItemBtn.addEventListener('click', (e) => {
            e.preventDefault();

            unloadElement(container, formWrapper);
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
            
            const newItem = item(newTitle, newDesc, newDate, newPriority);
            _currentList.addItem(newItem);
            unloadList();
            loadList();
            unloadElement(container, formWrapper);

        })
        itemForm.appendChild(addItemBtn);

        formWrapper.appendChild(itemForm);
        
        return formWrapper;
        
    }
    

  
    return {
        loadPage
    }
}

