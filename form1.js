var form = document.getElementById('addForm');
form.addEventListener('submit', addItem);
function addItem(e){
  e.preventDefault();
  const name = e.target.name.value
  var email = e.target.email.value
  var obj= {name,email}
  var st = JSON.stringify(obj)
  localStorage.setItem(email,st)
  show(obj)
}
function show(user){
    const pnode = document.getElementById("ulist")
    const childli  = `<li>${user.name} - ${user.email}</li>`
    pnode.innerHTML= pnode.innerHTML + childli
}