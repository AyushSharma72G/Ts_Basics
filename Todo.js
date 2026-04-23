var Todos = [];
function AddTodo(todo) {
    Todos.push(todo);
}
AddTodo({ title: "new task", Date: new Date(), status: "Pending" });
console.log(Todos);
