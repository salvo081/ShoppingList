//WO (anzusteuernde Elemente)

//WAS (Was soll mit den Elementen passieren?)

//WANN (Bei welchem Event soll etwas mit den Elementen passieren?)



//MODEL
//nur das Array und die Functions verwenden
//keine Elemente aus dem DOM verwenden
//Model kennt das DOM nicht
const todoList = [
    // {id: '1', listValue: 'Apples', done: false}
];

function generateId() {
    //TODO generateId
    return 'TESTID';
}

function getTodo(id) {
    //TODO getTodo
}

function addTodo(listValue) {
    const id = generateId();
    const newTodoListObj = {id: id, listValue: listValue};

    todoList.push(newTodoListObj);

    return newTodoListObj;
}

function editTodo(id, listValue) {
    //TODO editTodo
}

function deleteTodo(id) {
    //TODO deleteTodo
}

function markAsDoneTodo(id) {
    //TODO markAsDoneTodo
}

function saveTodoList() {
    //TODO save to Local Storage
}

function loadTodoList() {
    //TODO load from Local Storage
}

//VIEW
//nur das DOM verwenden
//keine Elemente aus dem Array verwenden
//View kennt das Model nicht

//WO
const inputForm = document.getElementById('inputForm');
const inputField = document.getElementById('inputField');
const outputField = document.getElementById('todoList');

//WAS
function createNewListItem(id, listValue) {
    const newListItem = document.createElement('li');
    newListItem.classList.add('todoListItem');
    newListItem.dataset.id = id;
    newListItem.dataset.mode = 'default';

    const newSpanItem = document.createElement('span');
    newSpanItem.classList.add('listValue');
    newSpanItem.innerText = listValue;

    const editBtn = document.createElement('button');
    editBtn.classList.add('editBtn');
    editBtn.textContent = 'Edit';
    editBtn.name = 'editBtn';
   
    const delBtn = document.createElement('button');
    delBtn.classList.add('delBtn');
    delBtn.textContent = 'X';
    delBtn.name = 'delBtn';
    
    newListItem.appendChild(newSpanItem);
    newListItem.appendChild(editBtn);
    newListItem.appendChild(delBtn);

    return newListItem;
}

function addListItem(newListItem) {
    outputField.appendChild(newListItem);
}

function editListItem(id, target) {
    const li = target.parentNode;
    const liChildren = Array.from(li.children);
    const span = liChildren.find(tag => tag.tagName === 'SPAN');
    const inputItem = liChildren.find(tag => tag.tagName === 'INPUT');

    if(li.dataset.mode === 'default') {
        if (typeof inputItem === 'undefined') {
            //span hidden, inputItem does not exist
            const newInputItem = document.createElement('input');
            newInputItem.classList.add('listValueInput');
            newInputItem.type = 'text';
            newInputItem.value = span.innerText;

            newInputItem.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    //"target" ist der Parameter aus editListItem(id, target) 
                    //target => Edit-Button
                    target.click();
                }
            });

            li.insertAdjacentElement('afterbegin', newInputItem);
            newInputItem.focus();
        } else {
            //span hidden, inputItem exists
            inputItem.classList.remove('hide');
            inputItem.focus();
        }

        span.classList.add('hide');
        target.innerText = 'Save';
        li.dataset.mode = 'edit';
    } else {
        if (typeof inputItem !== 'undefined') {
            //span visible, inputItem exists
            const inputItemValue = inputItem.value.trim();

            if (inputItemValue !== '') {
                //Input-Item ausblenden
                inputItem.classList.add('hide');
                //Span-Item einblenden
                span.classList.remove('hide');
                //Button text auf 'Edit' zurücksetzen
                target.innerText = 'Edit';
                //Mode für das li auf 'default' zurücksetzen
                li.dataset.mode = 'default';

                //Prüfen, ob sich der Wert im Input-Item geändert hat
                if(span.innerText !== inputItemValue) {
                    span.innerText = inputItemValue;
                    return {isEditSuccessful: true, id: id, inputItemValue: inputItemValue};
                }
            } else {
                alert('Please enter a value!');
            }
        }
    }

    return {isEditSuccessful: false, id: id, inputItemValue: ''};
}

function deleteListItem(id, target) {
    target.closest('li').classList.add('hide');
}

function markAsDoneListItem(id, target) {
    target.closest('li').classList.toggle("todoListItemChecked");
}

function loadListItems(todoList) {
    //TODO loadListItems
}

function getListValue() {
    return inputField.value;
}

function clearListValue() {
    //TODO clearListValue
}

//CONTROLLER
//nur die Functions aus View und Model verwenden
//keine Elemente aus dem DOM verwenden
//Controller kennt Model und View 
function handleAddTodo(listValue) {
    //Update Model
    const todoListObj = addTodo(listValue);

    //Update View
    const newListItem = createNewListItem(todoListObj.id, todoListObj.listValue);
    addListItem(newListItem);
}

function handleEditTodo(id, target) {
    //Update View
    const editObj = editListItem(id, target);

    //Update Model
    if (editObj.isEditSuccessful) {
        editTodo(id, editObj.inputItemValue);
    }
}

function handleDeleteTodo(id, target) {
    //Update Model
    deleteTodo(id);

    //Update View
    deleteListItem(id, target);
}

function handleMarkAsDoneTodo(id, target) {
    //Update Model
    markAsDoneTodo(id);

    //Update View
    markAsDoneListItem(id, target);
}

function handleSaveTodoList() {
    //Update Model
    saveTodoList();

    //Update View
    //TODO evtl. Meldung anzeigen -> "Daten erfolgreich gespeichert"
}

function handleLoadTodoList() {
    //Update Model
    loadTodoList();

    //Update View
    loadListItems(todoList);
}

//Event listener
//WANN
inputForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const listValue = getListValue();

    // Alert eingebaut, wenn kein Wert in Inputfield eingegeben wurde.
    if (!listValue.trim()) {
        alert("Got nothing to add?");
        return;
    }
    
    handleAddTodo(listValue);

    console.log(todoList);
});

outputField.addEventListener("click", (e) => {
    const tagName = e.target.tagName;
    if (tagName === 'UL') return;

    //id aus dem li-Tag auslesen
    const id = e.target.closest('li').dataset.id;

    if (tagName === 'LI' || tagName === 'SPAN') {
        handleMarkAsDoneTodo(id, e.target);
    } else if (tagName === 'BUTTON') {
        const btnName = e.target.name;

        if (btnName === 'editBtn') {
            console.log('editBtn');
            handleEditTodo(id, e.target);
        } else if (btnName === 'delBtn') {
            console.log('delBtn');
            handleDeleteTodo(id, e.target);
        }
    }
});
//TODO addEventListener für saveListBtn und loadListBtn