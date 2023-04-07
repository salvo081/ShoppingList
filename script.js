//WO (anzusteuernde Elemente)

//WAS (Was soll mit den Elementen passieren?)

//WANN (Bei welchem Event soll etwas mit den Elementen passieren?)

//Testing

//WO

let addBtn = document.getElementById("inputBtn");
let inputField = document.getElementById("inputField");
let outputField = document.getElementById("todoList");

//WAS
function testing(e) {
  e.preventDefault();
  const newListItem = document.createElement("li");
  newListItem.classList.add("todoListItem");
  //  newListItem.classList.add('todoListItemChecked')

  const newSpanItem = document.createElement("span");
  newSpanItem.classList.add("listValue");
  newSpanItem.innerText = inputField.value;

  const editBtn = document.createElement("button");
  editBtn.classList.add("editBtn");
  editBtn.textContent = "Edit";

  const delBtn = document.createElement("button");
  delBtn.classList.add("delBtn");
  delBtn.textContent = "X";
  // Alert eingebaut, wenn kein Wert in Inputfield eingegeben wurde.
  if (!inputField.value) {
    alert("Got nothing to add?");
    return;
  }
  newListItem.appendChild(newSpanItem);
  newListItem.appendChild(editBtn);
  newListItem.appendChild(delBtn);

  outputField.appendChild(newListItem);
}

//WANN
addBtn.addEventListener("click", testing);

///////////////////////////////////////////Mark as done /////////////////////////////////////////

// Anmerkung: Auch bei Click auf Buttons wird die li eingefärbt, was mit den Funktionen für editieren und löschen kollodiert
//WO: entweder li
const todoList = document.querySelectorAll("ul");
const todoValues = document.getElementsByTagName("li");
const editBtn = document.querySelector(".editBtn");
const delBtn = document.querySelector(".delBtn");

//WAS: bg color dunkler und text soll durchgestrichen sein, ansonsten gleichen Styles wie .todoListItem

// function markAsDone () {
//     todoValues.forEach ((element) => {
//         element.classList.toggle("todoListItem");
//         element.classList.toggle("todoListItemChecked");

//     })
// }

// function markAsDone () {
//         todoValues.classList.toggle("todoListItem");
//         todoValues.classList.toggle("todoListItemChecked");
// }

//WANN: bei click auf li
// todoValues.addEventListener("click", markAsDone);

//testing

// todoValues.forEach(e => {
//     e.addEventListener('click', event => {
//       //handle click
//       e.style.backgroundColor = "green";
//       e.style.color = "white";
//     })
//   }
//     )

// function markAsDone () {
//     todoValues.forEach(e => {
//         e.classList.toggle("todoListItem");
//         e.classList.toggle("todoListItemChecked");
//     })
// }

//     todoValues.addEventListener("click", markAsDone)

// todoValues.forEach(e => {
//     e.addEventListener('click', event => {
//       //handle click
//         e.classList.toggle("todoListItem");
//         e.classList.toggle("todoListItemChecked");
//     })
//   }
//     )

for (let todoValue of todoValues) {
  todoValue.addEventListener("click", (event) => {
    todoValue.classList.toggle("todoListItem");
    todoValue.classList.toggle("todoListItemChecked");
  });
}


//Unklar:
// 1. Wie kann die Funktion für dynamisch erstellte, neue Elemente hinzugefügt werden?
// 2. Wie können wir sicherstellen, dass die Buttons ausgenommen sind in der Funktion? Bislang ist bei Click auf beide Buttons alles ausgegraut?