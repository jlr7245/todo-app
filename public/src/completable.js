console.log('connected');

function changeElementStatus(elem) {
  elem.classList = 'done';
  elem.innerHTML = 'Done';
  elem.removeEventListener('click', handler);
}

function completeTodo(e) {
  const todoID = e.target.parentElement.dataset.id;
  fetch(`/todo/${todoID}/complete`, {
    method: 'PUT',
    credentials: 'include',
  })
    .then(res => res.json())
    .then(jsonRes => {
      console.log(jsonRes);
      if (jsonRes.successful) {
        changeElementStatus(e.target);
      }
    });
}

function addListenersToTodos() {
  const allTodos = document.querySelectorAll('span.not-done');
  for (let todo of allTodos) {
    todo.addEventListener(
      'click',
      (handler = function(e) {
        completeTodo(e);
      }),
    );
  }
}

document.addEventListener('DOMContentLoaded', addListenersToTodos);
