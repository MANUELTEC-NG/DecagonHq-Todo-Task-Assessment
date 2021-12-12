

const dataFromInput = {
    inputText: "",
    checkBoxStatus: false
}

const getItemFromLS = function () {
   const todosJsonObject =  localStorage.getItem('todos');
    if (todosJsonObject !== null) {
        return JSON.parse(todosJsonObject);
    } else {
        return [];
    }
}


const saveTodos = function(arrOfTodos) {
     stringnifiedTodos = JSON.stringify(arrOfTodos);
    return LocalStorage.setItem('todos', stringnifiedTodos);
}


const generateSummaryDOM = function(todo) {
 
    let summaryHeading = document.createElement('h2');
    summaryHeading.textContent = todo.text;
    return summaryHeading;
}

const removeItem = function (id) {
    const todoItem = todos.findIndex(function (todo) {
        return todo.id === id;
    })
    if (todoItem > -1) {
        todos.splice(todoItem, 1);
    }
}

const checkboxToggle = function (id) {
    // searching the items array to find the object with such id
    const todoItem = todos.find(function(todo) {
        return id === todo.id;
    })
    if (todoItem !== 'underfine'){
        // TODO - CHECK THIS LINE
    todoItem.completed = !todoItem.completed;
    }
}
const generateTodoDom = function (todo) {
    const rootDiv = document.createElement('div');
    const checkbox = document.createElement('input');
    const spanElem = document.createElement('span');
    const cancelButton = document.createElement('button');

    checkBox.setAttribute('type', 'checkbox');
    checkbox.check = checked;
    rootDiv.appendChild(checkbox);
    checkbox.addEventListener('change', function() {
        checkboxToggle(todo.id);
        saveTodos(todos);
        renderTodos(todos, dataFromInput);
    })

    // TODO - CHECK THIS LINE
    spanElem.textContent = todo.text;
    rootDiv.appendChild(spanElem);

    cancelButton.textContent = 'x'
    rootDiv.appendChild(cancelButton);
        
    cancelButton.addEventListener('click', function() {
    removeItem(todo.id);
    saveTodos(todos);
    renderTodos(todos, dataFromInput);

    
})



    return rootDiv;

}


 const todoLeft = function () {
 let todos = getItemFromLS();
   return todos.filter(function (todo) {
    //filtering and returning incompleted todos
     status = !todo.status;
    })
}

console.log(undoneTodos());

const genIncompleteTodoSummary = function ( incompleteArray) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `You have ${incompleteArray.length} incomplete todo(s)`;
    return paragraph;
}



const renderTodos = function (arrOfTodos, dataFromUserInput) {
    const filteredTodos = arrOfTodos.filter(function (todo) {
        const todoTitle = todo.title.toLowerCase().includes(dataFromUserInput.inputText.toLowerCase())
        const hideCompleteMAtch = !todo.completed || !dataFromUserInput.checkBoxStatus;
        return todoTitle && hideCompleteMAtch;
    })
    

    fileredTodos = filteredTodos.filter(function(todo){

        // this line checks if the checkbox value is checked
        if (filterObject.checkBoxStatus){
            // returning the filtered arrOfTodos that are not completed
            return !todo.status;
        } else {
            // returning all the todo items here if the checkbox is unchecked
            return true;
        }
    })

   // filteredTodos = filteredTodos.filter(function(todo){
   //     return !todo.completed;
   // })
    
} 

