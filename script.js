//WO (anzusteuernde Elemente)

//WAS (Was soll mit den Elementen passieren?)

//WANN (Bei welchem Event soll etwas mit den Elementen passieren?)





//Testing

//WO

let addBtn = document.getElementById("inputBtn");
let inputField = document.getElementById("inputField");
let outputField = document.getElementById("todoList");


//WAS
function testing() {
    let newListItem = document.createElement("li");
    outputField.appendChild(newListItem);
    newListItem.innerText = inputField.value;

}

//WANN
addBtn.addEventListener("click", testing);