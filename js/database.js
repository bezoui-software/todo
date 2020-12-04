class DB {
  update(todo) {
    let db = this.toArray();
    let todoIndex = this.getIndex(todo);
    db[todoIndex] = todo;
    database.set(db);
  }

  add(todo) {
    if (!todo.key) todo.key = this.getRandomKey();
    let db = this.toArray() || [];
    db.push(todo); 
    database.set(db);
  }

  set(db) {
    db = JSON.stringify(db);
    localStorage.setItem(TODO_DB_KEY, db);
  }

  getIndex(todo) {
    const db = this.toArray();
    for (let i=0; i<db.length; i++) {
      if (db[i].key == todo.key) return i;
    }
  }

  getRandomKey() {
    return Math.floor(Math.random() * 9999999999);
  }

  toArray() {
    if (!localStorage.getItem(TODO_DB_KEY)) return;
    const todos = JSON.parse(localStorage.getItem(TODO_DB_KEY));
    for (let i=0; i<todos.length; i++) {
      todos[i] = new Todo(todos[i]);
    }
    return todos || [];   
  }

  remove(todo) {
    let db = this.toArray();
    const index = this.getIndex(todo.key);
    db.splice(index, 1);
    this.set(db);
  }
}
