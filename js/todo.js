class Todo {
  constructor(a) {
    if (typeof a == 'object') {
      this.value = a.value;
      this.completed = a.completed;
      this.key = a.key;
    } else {
      this.value = a;
      this.completed = false;
      this.key = Math.floor(Math.random() * 99999999);
    }

    this.elt = this.toHtml();
  }

  delete() {
    this.deleteElement();
    database.remove(this);
    todos.update();
  }

  deleteElement() {
    this.elt.classList.add(TODO_FADE_OUT_CLASSNAME);
    this.elt.addEventListener('animationend', _ => document.getElementById(TODOS_CONTAINER_ID).removeChild(this.elt));
  }

  completeToggle(toggleState) {
    if (!toggleState) {
      this.completed = !this.completed;
      this.completeClassToggle();
      this.update();
    } else {
      this.completed = toggleState;
      this.completeClassToggle(toggleState);
      this.update();   
    }
  }

  completeClassToggle(toggleState) {
    if (!toggleState) {
      this.elt.classList.toggle('completed');
    } else {
      (toggleState) ? this.elt.classList.add('completed') : this.elt.classList.remove('completed');    
    }
  }

  save() {
    database.add(this);
  }

  display() {
    let parent = document.getElementById(TODOS_CONTAINER_ID) || document.createElement('div');
    if (parent.id != TODOS_CONTAINER_ID) {
      parent.id = TODOS_CONTAINER_ID;
      document.querySelector('main').appendChild(parent);
    }
    parent.appendChild(this.elt);
    if (this.completed) this.completeToggle(true);
  }

  update() {
    todos.update(this);
    database.update(this);
  }

  toHtml() {
    const todo = this;
    const container = document.createElement('div');
    container.classList.add('todo-container'); 
  
    const value = document.createElement('div');
    value.id = 'todo-value';
    value.innerText = this.value;

    const complete_button = document.createElement('button');
    complete_button.id = 'complete-toggle';
    complete_button.classList.add('material-icons');
    complete_button.classList.add('todo-button');
    complete_button.innerText = 'done';
    complete_button.addEventListener('click', _=>this.completeToggle());

    const delete_button = document.createElement('button');
    delete_button.id = 'delete-button';
    delete_button.classList.add('material-icons');
    delete_button.classList.add('todo-button');
    delete_button.innerText = 'delete';
    delete_button.addEventListener('click', _=>this.delete());

    container.appendChild(value);
    container.appendChild(complete_button);
    container.appendChild(delete_button);

    return container;
  }
}

const addTodo = () => todos.add(new_todo_input.value);