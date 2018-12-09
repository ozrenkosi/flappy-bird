// Initialize Firebase
var config = {
  apiKey: "AIzaSyCZEQ2HCdgj-WMYftWak0W9xsyTsCEx7Z0",
  authDomain: "to-do-app-15bb7.firebaseapp.com",
  databaseURL: "https://to-do-app-15bb7.firebaseio.com",
  projectId: "to-do-app-15bb7",
  storageBucket: "to-do-app-15bb7.appspot.com",
  messagingSenderId: "494588579094"
};
firebase.initializeApp(config);
var database = firebase.database();
var ref = database.ref('notes');

// Get data from Firebase
ref.once('value', function(data) {
  var notes = data.val();
  keys = Object.keys(notes);

  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var text = notes[k];

    addItem(text);
  }
});

function addToDatabase(value) {
  ref.push().set(value);
}

function removeFromDatabase(value) {
  ref.once('value', function(data) {
    var notes = data.val();
    keys = Object.keys(notes);

    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      if (notes[k] === value) {
        database.ref('notes/' + k).set(null);
      }
    }
  });
}

changeInputPosition();

// User entered a task and clicked enter key
// If there is any text inside the item field, add that text to the todo list
document.getElementById('textInputField').addEventListener('keydown', function(event) {
  var value = this.value;
  if ((event.code === 'Enter' || event.code === 'NumpadEnter' || event.code === 13 || event.keyCode === 13 || event.code === 10 || event.keyCode === 10) && value) {
    addItem(value);
    addToDatabase(value);
    document.getElementById('textInputField').value = '';
  }
});

// Moves textInputField up or down depending on if list is empty
function changeInputPosition() {
  if (!document.getElementById('todo').hasChildNodes() && !document.getElementById('completed').hasChildNodes()) {
    // List is empty
    document.getElementById('textInputField').style.top = '42%';
    document.getElementById('tasksContainer').style.opacity = '0';

    document.getElementById('textInputField').focus();
  }
  else {
    // List has items
    document.getElementById('textInputField').style.top = '30%';
    document.getElementById('tasksContainer').style.opacity = '100';
  }
}

function removeItem() {
  var divWrapper = this.parentNode;
  var listItem = divWrapper.parentNode;
  var list = listItem.parentNode;

  divWrapper.classList.add('cardDeleteAnimation');
  removeFromDatabase(this.parentNode.innerText);

  setTimeout(function() {
    list.removeChild(listItem);

    changeInputPosition()
  }, 450);
}

function completeItem() {
  var listItem = this.parentNode.parentNode;
  var list = listItem.parentNode;
  var id = list.id;

  // Check if the item should be added to the completed list or to re-added to the todo list
  if (id === 'completed') {
    addToDatabase(this.parentNode.innerText);
    var target = document.getElementById('todo');
  }
  else {
    removeFromDatabase(this.parentNode.innerText);
    var target = document.getElementById('completed');
  }

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
