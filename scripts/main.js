changeInputPosition();

// User entered a task and clicked enter key
// If there is any text inside the item field, add that text to the todo list
document.getElementById('textInputField').addEventListener('keydown', function(event) {
  var value = this.value;
  if ((event.code === 'Enter' || event.code === 'NumpadEnter' || event.code === 13 || event.keyCode === 13 || event.code === 10 || event.keyCode === 10) && value) {
    addItem(value);
    document.getElementById('textInputField').value = '';
  }
});

function changeInputPosition() {
  if (!document.getElementById('todo').hasChildNodes() && !document.getElementById('completed').hasChildNodes()) {
    document.getElementById('textInputField').style.top = '42%';
    document.getElementById('tasksContainer').style.paddingTop = '70vh';
    document.getElementById('tasksContainer').style.opacity = '0';

    document.getElementById('textInputField').focus();
  }
  else {
    document.getElementById('textInputField').style.top = '30%';
    document.getElementById('tasksContainer').style.paddingTop = '45vh';
    document.getElementById('tasksContainer').style.opacity = '100';
  }
}

function removeItem() {
  var divWrapper = this.parentNode;
  var listItem = divWrapper.parentNode;
  var list = listItem.parentNode;

  divWrapper.classList.add('cardDeleteAnimation');

  setTimeout(function() {
    divWrapper.classList.add('cardDeleteAnimation');
    list.removeChild(listItem);

    changeInputPosition()
  }, 500);
}

function completeItem() {
  var listItem = this.parentNode.parentNode;
  var list = listItem.parentNode;
  var id = list.id;

  // Check if the item should be added to the completed list or to re-added to the todo list
  var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');

  list.removeChild(listItem);
  target.insertBefore(listItem, target.childNodes[0]);
}

// Adds a new item to the todo list
function addItem(text) {
  var list = document.getElementById('todo');

  var listItem = document.createElement('li');

  var divWrapper = document.createElement('div');
  divWrapper.innerText = text;

  var completeButton = document.createElement('button');
  completeButton.classList.add('complete');

  // Add click event for completing the item
  completeButton.addEventListener('click', completeItem);

  var removeButton = document.createElement('button');
  removeButton.classList.add('remove');

  // Add click event for removing the item
  removeButton.addEventListener('click', removeItem);

  listItem.appendChild(divWrapper);

  divWrapper.appendChild(completeButton);
  divWrapper.appendChild(removeButton);

  list.insertBefore(listItem, list.childNodes[0]);

  changeInputPosition()
}
