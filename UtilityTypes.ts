// --------------partial type----------------

// when used partially all the fields of the interface becomes optional

// interface Todo {
//   title: string;
//   description: string;
// }

// function update(todo: Todo, fieldsToUpdate: Partial<Todo>) {
//   // we need to only update the todo partially
//   return { ...todo, ...fieldsToUpdate };
// }

// const todo = {
//   title: "This is todo 1",
//   description: "this is the desc of todo 1",
// };

// const todo2 = update(todo, {
//   description: "this is the desc of todo 2",
// });

// console.log(todo2);

//-------------------- Required (opposite of partial all the fields are required)-------------------

// interface Todo {
//   title?: string;
//   description: string;
// }

// function update(todo: Todo, fieldsToUpdate: Required<Todo>) {
//   // we need to only update the todo partially
//   return { ...todo, ...fieldsToUpdate };
// }

// const todo = {
//   title: "This is todo 1",
//   description: "this is the desc of todo 1",
// };

// const todo2 = update(todo, {
//   description: "this is the desc of todo 2",  // error as the Todo is marked Required
// });

// console.log(todo2);

// -------------Readonly<Type>------------

interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  // decalration of the todo
  title: "Delete inactive users",
};

// todo.title = "Hello"; // error as we cannot modify the title it is read only

// ---------------  Record<Keys, Type> --------------

// Record is used to create a object where all the given keys exist and each key have a specific type

type Status = "TODO" | "IN_PROGRESS" | "DONE";

// type StatusColors = Record<Status, string>;

// this becomes

// type StatusColors = {
//   TODO: string;
//   IN_PROGRESS: string;
//   DONE: string;
// };

// ---------------Pick<Type, Keys>---------------

// Constructs a type by picking the set of properties Keys

// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }

// type TodoPreview = Pick<Todo, "title" | "completed">;

// const todo: TodoPreview = {
//   title: "Clean room",
//   completed: false,
// };

//-------------Omit<Type, Keys>-------------

// Constructs a type by picking all properties from Type and then removing Keys

// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
//   createdAt: number;
// }

// type TodoPreview = Omit<Todo, "description">;

// const todo: TodoPreview = {
//   title: "Clean room",
//   completed: false,
//   createdAt: 1615544252770,
// };
