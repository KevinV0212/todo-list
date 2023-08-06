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
    testList1.addItem(item('test1', 'test1', 'test1', 'test1'));
    testList1.addItem(item('test1', 'test1', 'test1', 'test1'));
    testList1.addItem(item('test1', 'test1', 'test1', 'test1'));

    const testList2 = list('test2');
    testList2.addItem(item('test2', 'test2', 'test2', 'test2'));
    testList2.addItem(item('test2', 'test2', 'test2', 'test2'));
    testList2.addItem(item('test2', 'test2', 'test2', 'test2'));
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

    const loadList = () => {
        listWrapper.appendChild(todoConverter.renderList(_currentList));
    }

    const unloadList = () => {
        listWrapper.innerHTML = '';
    }
    return {
        loadPage
    }
}