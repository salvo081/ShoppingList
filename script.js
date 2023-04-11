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

    const delBtn = document.createElement('button');
    delBtn.classList.add('delBtn');
    delBtn.textContent = 'X';
    
    newListItem.appendChild(newSpanItem);
    newListItem.appendChild(editBtn);
    newListItem.appendChild(delBtn);

    return newListItem;
}

function addListItem(newListItem) {
    outputField.appendChild(newListItem);
}

function editListItem(id) {
    //TODO editListItem
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

function handleEditTodo(id) {
    //TODO handleEditTodo
}

function handleDeleteTodo(id) {
    //TODO handleDeleteTodo
}

function handleMarkAsDoneTodo(id, target) {
    //Update Model
    markAsDoneListItem(id, target);

    //Update View

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
    //TODO is listValue not empty?
    handleAddTodo(listValue);

    console.log(todoList);
});

outputField.addEventListener("click", (e) => {
    // outputField.classList.toggle("todoListItem");
    // e.target.classList.toggle("todoListItemChecked");
    handleMarkAsDoneTodo('', e.target);
    });
//TODO addEventListener für saveListBtn und loadListBtn