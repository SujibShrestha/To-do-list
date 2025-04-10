const tasks = document.getElementById("tasks");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (tasks.value.trim() === "") {
    alert("Enter a task to add!!!");
  } else {
    let li = document.createElement("li");
    listContainer.appendChild(li);
    li.innerHTML = tasks.value;
    let img = document.createElement("img");
    li.appendChild(img);
    img.src = "svg/delete.svg";
    img.classList.add("fixImg");
  }
  tasks.value = "";
  saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        saveData();
    
    }
    else if(e.target.tagName==="IMG"){
    e.target.parentElement.remove();
    saveData();
    
    }
    },false);
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

tasks.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addTask();
    }
  });
