//! Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
//! Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
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
  //  ! Clear input Value
  todoInput.value = "";
  //  ! Checked button
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
// !DELETE
function deleteCheck(e) {
  const item = e.target;
  //   !Delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    // !Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  //   !Check mark
  if (item.classList[0] === "checked-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("checked");
  }
}
