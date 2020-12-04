const keydownEvents = {
  13: addTodo
}

function setupEvents() {
  new_todo_button.onclick = addTodo;
  document.body.onkeydown = handleKeyDownEvent;
}

const handleKeyDownEvent = event => { if (keydownEvents[event.keyCode]) keydownEvents[event.keyCode]() }
