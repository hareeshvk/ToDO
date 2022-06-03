const ToDoInput = document.getElementById("ToDoName");
const listGroup = document.getElementById("list-group");
let ToDoListItem;
console.log(ToDoInput);
console.log(listGroup);
ToDoInput.addEventListener("click", (Event) => {
  console.log(Event);
});
ToDoInput.addEventListener("keyup", (Event) => {
console.log(Event.target.value);

//ToDoInput.addEventListener("keydown", (Event) => {
  //console.log(Event.target.value);

//ToDoInput.addEventListener("keycenter", (Event) => {
  //console.log(Event.target.value);
  
  if (Event.keyCode === 13) {
    console.log(Event);
    addToDoItemToDom();
    Event.target.value = "";
  }
});
const addToDoItemToDom = () => {
  ToDoListItem = document.createElement("li");
  ToDoListItem.innerText = ToDoInput.value;
  listGroup.appendChild(ToDoListItem);

};
