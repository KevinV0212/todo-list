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
    listWrapper.classList.add('listWrapper');

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