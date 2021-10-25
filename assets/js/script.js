//var buttonEl = document.querySelector("#save-task");
//finds the form element in the page and saves as formEl
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

  var createTaskHandler = function(){  

    event.preventDefault();
    console.log(event);
    
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
  };

//sumbit listens to a click of a button element and when a user presses Enter on their keyboard
formEl.addEventListener("submit", createTaskHandler) ;
