import { item, list } from './todo.js'
export const components= (() => {
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
        
        let desc = null;
        // add elements for each todo item property
        for (const key in item) {
            const infoElement = document.createElement('div');
            infoElement.classList.add(`${key}`);
            infoElement.textContent = `${item[key]}`;
            itemElement.append(infoElement);

            if (key === 'desc')
            {
                infoElement.classList.add('hidden');
                desc = infoElement;
            }

        }

        // add event listener to show description when item is overed over
        itemElement.addEventListener('mouseover', (e) => {
            e.preventDefault()
            desc.classList.remove('hidden')
            desc.classList.add('visible')
        })
        itemElement.addEventListener('mouseout', (e) => {
            e.preventDefault()
            desc.classList.remove('visible')
            desc.classList.add('hidden');
        })




        return itemElement;
     }
     
     // function that renders form for adding new items
     const renderItemForm = (cancelFunction, confirmFunction) => {
        const formWrapper = document.createElement('div');
        formWrapper.classList.add('form-wrapper');

        const itemForm = document.createElement('form');
        itemForm.classList.add('item-form');
        
        // header of form
        const formHeader = document.createElement('div');
        formHeader.classList.add('form-header');
        const formTitle = document.createElement('h2');
        formTitle.classList.add('form-title');
        formTitle.textContent = 'New Item';
        formHeader.appendChild(formTitle);
        itemForm.appendChild(formHeader);

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


        const formBtns = document.createElement('div');
        formBtns.classList.add('form-btns');

        // add item to cancel item form
        const cancelItemBtn = document.createElement('button');
        cancelItemBtn.classList.add('delete-btn');
        cancelItemBtn.textContent = 'cancel'

        // can move this to uiHandler
        cancelItemBtn.addEventListener('click', (e) => {
            e.preventDefault();
            cancelFunction();
        })
        formBtns.appendChild(cancelItemBtn);
        
        // create button to add new element from info
        const confirmBtn = document.createElement('button');
        confirmBtn.classList.add('confirm-btn');
        confirmBtn.textContent = 'confirm';

        // addItem btn should add new button from form info, then reload list
        confirmBtn.addEventListener('click', (e) => {
            e.preventDefault();
            confirmFunction();
        })
        formBtns.appendChild(confirmBtn);
        
        itemForm.appendChild(formBtns);
    
        formWrapper.appendChild(itemForm);
        
        return formWrapper;   
     }

     // function that renders form for adding new lists;
     const renderListForm = (cancelFunction, confirmFunction) => {
        const formWrapper = document.createElement('div');
        formWrapper.classList.add('form-wrapper');
        // create form element
        const listForm = document.createElement('form');
        listForm.classList.add('list-form');
        
        const formHeader = document.createElement('div');
        formHeader.classList.add('form-header');
        const formTitle = document.createElement('h2');
        formTitle.classList.add('form-title');
        formTitle.textContent = 'New List';
        formHeader.appendChild(formTitle);
        listForm.appendChild(formHeader);

        // create form-group
        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group');

        

        const label = '<label for="name-input">List Name</label>'
        const input = '<input id="name-input" name="name-input" placeholder="List Name"/>'
        formGroup.innerHTML = label + input;
        listForm.appendChild(formGroup);

        const formBtns = document.createElement('div');
        formBtns.classList.add('form-btns')

        // creates button to close list form
        const cancelListBtn = document.createElement('button');
        cancelListBtn.textContent = 'cancel';
        cancelListBtn.classList.add('delete-btn');
        cancelListBtn.addEventListener('click', (e) => {
            e.preventDefault();
            cancelFunction();
        })
        formBtns.append(cancelListBtn);

        // button that adds list to collection then reloads sidebar
        const confirmBtn = document.createElement('button');
        confirmBtn.classList.add('confirm-btn');
        confirmBtn.textContent = 'confirm';
        confirmBtn.addEventListener('click', (e) => {
            e.preventDefault();
            confirmFunction();
        })
        formBtns.appendChild(confirmBtn);

        listForm.appendChild(formBtns);

        formWrapper.appendChild(listForm)
        
        return formWrapper;
     }

     // creates an form for editing selected item
     // uses renderItemForm to create basic template
     const renderItemEdit = (item, cancelFunction, editFunction, deleteFunction) => {
        const form = renderItemForm(cancelFunction, editFunction);
        
        const formElement = form.querySelector('form');
        formElement.setAttribute('data-target', item.title);
        
        // edit form tile
        const formTitle = form.querySelector('.form-title');
        formTitle.textContent = 'Edit Item';

        // add delete button in header
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'delete';
        deleteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            deleteFunction();
        });
        const formHeader = form.querySelector('.form-header');
        formHeader.appendChild(deleteBtn);

        // populate inputs with item's original values
        const titleInput = form.querySelector('#title-input');
        const descInput = form.querySelector('#desc-input');
        const dateInput = form.querySelector('#date-input');
        
        titleInput.value = item.title;
        descInput.value = item.desc;
        dateInput.value = item.dueDate;

        // set priority radio to priority value
        if (item.priority === 'high')
        {
            form.querySelector('#priority-high').checked = true;
        }
        else if (item.priority === 'med')
        {
            form.querySelector('#priority-med').checked = true;

        }
        else {
            form.querySelector('#priority-low').checked = true;
        }

        return form;
     }

     // creates an form for editing a list
     // uses renderListForm to create basic template
     const renderListEdit = (cancelFunction, addFunction, deleteFunction) => {
        const form = renderListForm(cancelFunction, addFunction);
        
        const formTitle = form.querySelector('.form-title');
        formTitle.textContent = 'Edit List';

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'delete';
        deleteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            deleteFunction();
        });
        
        const formHeader = form.querySelector('.form-header');
        formHeader.appendChild(deleteBtn);

        return form;
     }
     // function that renders form for adding new items
     return {renderList, renderItemForm, renderListForm, renderItemEdit, renderListEdit};
 })();