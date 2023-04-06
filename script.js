//WO (anzusteuernde Elemente)

//WAS (Was soll mit den Elementen passieren?)

//WANN (Bei welchem Event soll etwas mit den Elementen passieren?)





//Testing

//WO

let addBtn = document.getElementById('inputBtn');
let inputField = document.getElementById('inputField');
let outputField = document.getElementById('todoList');


//WAS
function testing(e) {
    e.preventDefault();
    const newListItem = document.createElement('li');
    newListItem.classList.add('todoListItem');

    const newSpanItem = document.createElement('span');
    newSpanItem.classList.add('listValue');
    newSpanItem.innerText = inputField.value;

    const editBtn = document.createElement('button');
    editBtn.classList.add('editBtn');
    editBtn.textContent = 'Edit';

    const delBtn = document.createElement('button');
    delBtn.classList.add('delBtn');
    delBtn.textContent = 'X';
    
    newListItem.appendChild(newSpanItem);
    newListItem.appendChild(editBtn);
    newListItem.appendChild(delBtn);
    
    outputField.appendChild(newListItem);
}

//WANN
addBtn.addEventListener('click', testing);