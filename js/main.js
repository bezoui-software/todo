window.onload = setup;

let new_todo_input, new_todo_button;
let todos = [], database;

const TODOS_CONTAINER_ID = 'todos-container';
const TODO_DB_KEY = 'TODO-LIST';
const TODO_FADE_OUT_CLASSNAME = 'todo-fadeout';

function setup() {
  setupDoms();
  setupEvents();
  database = new DB();
  todos = new Todos();
  todos.display();
}

