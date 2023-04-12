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

    const newSpanItem = document.createElement('span');
    newSpanItem.classList.add('listValue');
    newSpanItem.innerText = listValue;

    const editBtn = document.createElement('button');
    editBtn.classList.add('editBtn');
    editBtn.textContent = 'Edit';
    editBtn.name = 'editBtn';
    // editBtn.addEventListener('click', onEditBtn);

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
    //TODO editListItem
    const li = target.parentNode;
    const span = li.firstChild;

    console.log(span);
    li.removeChild(span);

    //const newInputItem = 
}

function deleteListItem(id) {
    //TODO deleteListItem
}

function markAsDoneListItem(id, target) {
    //TODO markAsDoneListItem
    target.classList.toggle("todoListItemChecked");
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
    //TODO handleEditTodo

    //Update View
    editListItem(id, target);
}

function handleDeleteTodo(id) {
    //TODO handleDeleteTodo
}

function handleMarkAsDoneTodo(id, target) {
    //Update Model
    markAsDoneListItem(id, target);

    //Update View
    markAsDoneTodo(id);
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
    // outputField.classList.toggle("todoListItem");
    // e.target.classList.toggle("todoListItemChecked");
    const tagName = e.target.tagName;

    if (tagName === 'LI' || tagName === 'SPAN') {
        handleMarkAsDoneTodo('', e.target);
    } else if (tagName === 'BUTTON') {
        const btnName = e.target.name;
        // console.log(e.target.name);

        if (btnName === 'editBtn') {
            console.log('editBtn');
            handleEditTodo('', e.target);
        } else if (btnName === 'delBtn') {
            console.log('delBtn');
            handleDeleteTodo();
            e.target.parentElement.style.display = "none";
            console.log(e.target.parentElement);
        }
    }
});

function onEditBtn(e) {
    // console.log(e.target.tagName);
}

//TODO addEventListener für saveListBtn und loadListBtn