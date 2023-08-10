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
         for (const key in item) {
             const infoElement = document.createElement('div');
             infoElement.classList.add(`${key}`);
             infoElement.textContent = `${item[key]}`;
             itemElement.append(infoElement);
         }
         return itemElement;
     }
     
     // function that renders form for adding new items
     const renderItemForm = (cancelFunction, addFunction) => {
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

        // can move this to uiHandler
        cancelItemBtn.addEventListener('click', (e) => {
            e.preventDefault();
            cancelFunction();
        })
        itemForm.appendChild(cancelItemBtn);
        
        // create button to add new element from info
        const addItemBtn = document.createElement('button');
        addItemBtn.classList.add('add-item-btn');
        addItemBtn.textContent = 'add item';

        // addItem btn should add new button from form info, then reload list
        addItemBtn.addEventListener('click', (e) => {
            e.preventDefault();
            addFunction();
        })

        itemForm.appendChild(addItemBtn);

        formWrapper.appendChild(itemForm);
        
        return formWrapper;   
     }

     // function that renders form for adding new lists;
     const renderListForm = (cancelFunction, addFunction) => {
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
            cancelFunction();
        })
        listForm.append(cancelListBtn);

        // button that adds list to collection then reloads sidebar
        const addListBtn = document.createElement('button');
        addListBtn.classList.add('add-list-btn');
        addListBtn.textContent = '+';
        addListBtn.addEventListener('click', (e) => {
            e.preventDefault();
            addFunction();
        })
        listForm.appendChild(addListBtn);

        formWrapper.appendChild(listForm)
        
        return formWrapper;
     }
     // function that renders form for adding new items
     return {renderList, renderItemForm, renderListForm};
 })();