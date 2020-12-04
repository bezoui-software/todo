class Todos {
  constructor(todos) {
    this.todos = todos || database.toArray() || [];
  }

  add(a) {
    if (!a || a.length == 0) return;
    new_todo_input.value = '';
    if (a instanceof Todo == false) a = new Todo(a);
    a.save();
    a.display();  
    this.todos.push(a);
  }

  update(todo) {
    const todoIndex = this.indexOf(todo);
    this.todos[todoIndex] = todo;
  }

  display() {
    if (this.todos) this.todos.forEach(todo => todo.display());
  }

  indexOf(a) {
    return this.todos.indexOf(a);
  }

  splice(a, b) {
    return this.todos.splice(a, b);
  }
}