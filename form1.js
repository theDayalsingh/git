var form = document.getElementById('addForm');
form.addEventListener('submit', addItem);
function addItem(e){
  e.preventDefault();
  var name = e.target.name.value
  var age = e.target.age.value
  var obj= {name,age}
  var st = JSON.stringify(obj)
  localStorage.setItem("obj",st)
}
