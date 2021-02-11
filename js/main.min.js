window.onload = setup;

let new_todo_input, new_todo_button;
let todos = [], database;

const TODOS_CONTAINER_ID = 'todos-container';
const TODO_DB_KEY = 'TODO-LIST';
const TODO_FADE_OUT_CLASSNAME = 'todo-fadeout';

function setup() {
  setupServiceWorker();
  setupDoms();
  setupEvents();
  setupDatabase();
  setupTodos();
}

function setupServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/todo/sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  }
}

function setupDatabase() {
  database = new DB();
}

function setupTodos() {
  todos = new Todos();
  todos.display();
}
