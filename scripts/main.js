document.getElementById('textInputField').focus();

// User entered a task and clicked enter key
// If there is any text inside the item field, add that text to the todo list
document.getElementById('textInputField').addEventListener('keydown', function(event) {
  var value = this.value;
  if ((event.code === 'Enter' || event.code === 'NumpadEnter' || event.code === 13 || event.keyCode === 13 || event.code === 10 || event.keyCode === 10) && value) {
    addItem(value);
    document.getElementById('textInputField').value = '';
  }
});

function removeItem() {
  var item = this.parentNode;
  var parent = item.parentNode;

  parent.removeChild(item);
}

function completeItem() {
  var item = this.parentNode;
  var parent = item.parentNode;
  var id = parent.id;

  // Check if the item should be added to the completed list or to re-added to the todo list
  var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');

  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);
}

// Adds a new item to the todo list
function addItem(text) {
  var list = document.getElementById('todo');

  var item = document.createElement('li');
  item.innerText = text;

  var complete = document.createElement('button');
  complete.classList.add('complete');

  // Add click event for completing the item
  complete.addEventListener('click', completeItem);

  var remove = document.createElement('button');
  remove.classList.add('remove');

  // Add click event for removing the item
  remove.addEventListener('click', removeItem);

  item.appendChild(complete);
  item.appendChild(remove);

  list.insertBefore(item, list.childNodes[0]);
}
