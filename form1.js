var form = document.getElementById('addForm');
form.addEventListener('submit', addItem);
function addItem(e){
  e.preventDefault();
  var newItem = document.getElementById('item').value;
localStorage.setItem("key",newItem)
}

