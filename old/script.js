//global context
let context = {
  tasks: JSON.parse(get("tasks")),
  lastTime: Number(get("lastTime")),
  clockElement: document.getElementById("clock"),
  listElement: document.getElementById("list"),
  inputElement: document.getElementById("input")
};

if (!context.tasks) {
  context.tasks = [];
}

//add event listener to input so enter key creates task
//stolen from https://stackoverflow.com/a/155263
context.inputElement.addEventListener("keyup", (event) =>{
  event.preventDefault();
  if (event.keyCode === 13) {
    createTask();
  }
});

updateList();

nextDay()
setInterval(nextDay,10000);

/*-----------------functions only below this point----------------------------------*/
//syncs context with the document. doesn't return
function updateList(){

  function buildTaskElement(task){
    let del = document.createElement("button");
    let text = document.createElement("div");
    text.textContent = task.text;
    text.className = String(task.state);
    del.textContent = "X";
    let element = document.createElement("div");
    element.appendChild(text);
    element.appendChild(del);
    element.className = "task"

    text.onclick = () =>{
      task.state = !task.state
      updateList();
    };

    del.onclick = () => {
      //grab the index of the task
      let index = context.tasks.indexOf(task);
      //remove it from our global
      if (index > -1) {
        context.tasks.splice(index, 1);
      }
      //trash task
      task = null;
      updateList();
    }

    return element;
}

  context.listElement.innerHTML = "";

  for(let each in context.tasks){
    context.listElement.appendChild(buildTaskElement(context.tasks[each]));
  }
  set("tasks", JSON.stringify(context.tasks));
}


//compares current and last times, resets if they don't match
function nextDay(){
  let day = new Date().getDay();
  if (context.lastTime !== day) {
    reset();
    context.lastTime = day;
    set("lastTime", String(context.lastTime));
  }
}

//takes text from context.inputElement, shoves object into context.tasks. No return, updates List.
function createTask(input){
  input = input || context.inputElement
  //create an empty object
  let task = {};
  //throw in the text from our input box
  task.text = input.value;
  //set input box to empty
  input.value = "";
  //give our object a state
  task.state = false;
  context.tasks.push(task);
  updateList();
}


//sets a value in localStorage
//accepts strings, doesn't return
function set(key, value){
  window.localStorage.setItem(key,value);
}

//gets a value in localStorage
//accepts string, returns string
function get(key){
  return window.localStorage.getItem(key);
}

//empties a value in localStorage
function clear(key){
  window.localStorage.removeItem(key);
}

//empties the list
function empty(){
  clear("tasks");
  context.tasks = [];
  updateList();
}

//resets all tasks to false
function reset(){
  for (let each in context.tasks){
    context.tasks[each].state = false;
  }
  updateList();
}
