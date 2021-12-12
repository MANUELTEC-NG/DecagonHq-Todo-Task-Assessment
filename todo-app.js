let todos = [
    {text: "Reading & Studying for 4 hrs before 12 am",
    completed: true
},

    {
        text: "Get to the Mechanic workshop",
        completed: false
    },
    {
        text: "Delivered Food Orders to the customers",
        completed: false
    },
    {
        text: "Taken motorbike from the Mech workshop?",
        completed: false
    }
]


let todos = getItemFromLS ();





// let todosJsonObject = todosJsonObject(todos)




 // Array of todos with 'incomplete' status
const todosRemaining = todoLeft();
console.log(todosRemaining);

   document.querySelector('#todos-div').innerHTML = "";
   document.querySelector('#todos-div').appendChild(genIncompleteTodoSummary(todosRemaining)) ;
   
const filteredTodos = renderTodos(todos, dataFromInput);

    filteredTodos.forEach(function (todo) {
         const summaryHeading = generateTodoDom(todo);  //generateSummaryDOM(todo);
        document.querySelector('#todos-div').appendChild(summaryHeading);

    })

    //renderTodos(todos, filterObject);

// search field ID
document.querySelector("#todo-input").addEventListener('input', function(e){
    dataFromInput.inputText = e.target.value;

    todos.push({id:uuidv4(), title: e.target.value,
    completed: false});
   
    renderTodos(todos, dataFromInput)
})

// form ID
document.querySelector('#formElement').addEventListener('submit', function(e){
    e.preventDefault();
    todos.push({
        text: e.target.elements.todo.value,
        completed: false
    });
    saveTodos(todos);

    renderTodos(todos, dataFromInput);
    e.target.elements.todo.value = "";
})

document.querySelector('#todo-status').addEventListener('change',function(e){
    dataFromInput.checkBoxStatus = e.target.value;
    renderTodos(todos, dataFromInput);
})

// DOM CHALLENGE

const rootDiv = document.createElement('div');
const checkBox = document.createElement('checkbox');
checkBox.setAttribute(type, checked);
const span = document.createElement('span');
const button = document.createElement('button');

button.textContent = 'button'


rootDiv.appendChild(span);
span.appendChild(button);
span.appendChild(checkBox);