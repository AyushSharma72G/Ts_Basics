type Status = "Pending" | "Completed"

interface todo {
    id: number
    title: string,
    Date: Date,
    status: Status
}

let Todos: todo[] = [];


function addTodo(todo: todo) {
    Todos.push(todo);
}

function updateStatus(todoId: number, updatedStatus: Status) {
    const todo = Todos.find(todo => todo.id === todoId)
    if (todo) {
        todo.status = updatedStatus;
    }
    else {
        throw new Error("Todo not found")
    }
}

function deleteTodo(todoId: number) {
    const todo = Todos.find(todo => todo.id === todoId) // check if to do exists
    if (todo) { // omly remove if exists 
        Todos.splice(
            Todos.findIndex(todo => todo.id === todoId),
            1
        );
    }
    else {
        throw new Error("Todo not found")
    }
}



addTodo({ id: 1, title: "new task", Date: new Date(), status: "Pending" })

console.log(Todos);