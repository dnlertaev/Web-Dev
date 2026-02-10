const form = document.getElementById('todoForm');
const input = document.getElementById('todoInput');
const list = document.getElementById('todoList');

const createTodoItem = (text) => {
  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.textContent = text;

  const delButton = document.createElement('button');
  delButton.type = 'button';
  delButton.textContent = 'Delete';

  checkbox.addEventListener('change', () => {
    span.classList.toggle('done', checkbox.checked);
  });

  delButton.addEventListener('click', () => {
    list.removeChild(li);
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delButton);

  return li;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  list.appendChild(createTodoItem(text));
  input.value = '';
});
