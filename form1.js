var form = document.getElementById('addForm');
form.addEventListener('submit', addItem);
function addItem(e){
  e.preventDefault();
  const name = e.target.name.value
  const email = e.target.email.value
  const obj= {name,email}
  localStorage.setItem(obj.email, JSON.stringify(obj))
  show(obj)
}
function show(obj){
    const pnode = document.getElementById('ulist')
    const childli  = document.createElement('li')
   childli.textContent=obj.name + ' - ' + obj.email
   const dltbtn= document.createElement('input')
   dltbtn.value="Delete"
   dltbtn.type='button'
   dltbtn.style.backgroundColor="green"
   dltbtn.onclick=()=>{
    localStorage.removeItem(obj.email)
    pnode.removeChild(childli)
   }
   childli.appendChild(dltbtn)
   pnode.appendChild(childli)
}
// function show(user){
//   // console.log(localStorage.getItem(user.email),"e+m")
//     if(localStorage.getItem(user.email)!==null){
//       notshow(user.email)
//     }
//     const pnode = document.getElementById('ulist')
//     const childli  = `<li id=${user.email}>${user.name} - ${user.email} <button onclick=delet('${user.email}')> Delete User </button></li>`
//     pnode.innerHTML= pnode.innerHTML + childli
// }
// function notshow(emailId){
//   const pnode = document.getElementById("ulist")
//   const childNodeToBeDeleted = document.getElementById(emailId);
//   // console.log(childNodeToBeDeleted , "childmode")
//   if(childNodeToBeDeleted){
// pnode.removeChild(childNodeToBeDeleted)
//   }
// }
// function delet(emailId){
// console.log(emailId)
// localStorage.removeItem(emailId)
// notshow(emailId)
// }


