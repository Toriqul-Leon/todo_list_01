//! Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
//! Event Listeners
todoButton.addEventListener("click", addTodo);
//! Function
function addTodo(event) {
  // Prevent form from submitting
  event.preventDefault();
  // !.TODO Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //  ! Removing input
  todoInput.value = "";
  //  ! Chcked button
  const checkButton = document.createElement("button");
  checkButton.innerHTML = `<i class="fas fa-check"></i>`;
  checkButton.classList.add("checked-btn");
  todoDiv.appendChild(checkButton);
  // !  trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //  ! Append to list
  todoList.appendChild(todoDiv);
}
