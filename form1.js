var form = document.getElementById('addForm');
form.addEventListener('submit', addItem);
function addItem(e){
  e.preventDefault();
  const name = e.target.name.value
  const email = e.target.email.value
  const obj= {name,email}
  axios
    .post('https://crudcrud.com/api/fed0c19038434d2ba1a2dab436886de3/userData',obj)
    .then(res => show(res.data))
    .catch(err =>{ 
      document.body.innerHTML= document.body.innerHTML + "<h4>Something wrong</h4>"
      console.error(err)});
}
window.addEventListener("DOMContentLoaded",()=>{
  axios.get('https://crudcrud.com/api/fed0c19038434d2ba1a2dab436886de3/userData')
  .then((response) => {
    for(var i=0;i<response.data.length;i++){
      show(response.data[i])
    }
  })
  .catch((error) =>{console.error(error)});
})
function show(obj){
    const pnode = document.getElementById('ulist')
    const childli  = document.createElement('li')
   childli.textContent=obj.name + ' - ' + obj.email
   const dltbtn= document.createElement('input')
   dltbtn.value="Delete"
   dltbtn.type='button'
   dltbtn.style.backgroundColor="green"
   dltbtn.onclick=()=>{
    axios.delete(`https://crudcrud.com/api/fed0c19038434d2ba1a2dab436886de3/userData/${obj._id}`)
    .then((response) =>  pnode.removeChild(childli))
    .catch((error) =>{console.error(error)});
   }
   const editbtn= document.createElement('input')
   editbtn.value="Edit"
   editbtn.type='button'
   editbtn.style.backgroundColor="yellow"
   editbtn.onclick=()=>{
     document.getElementById('nameid').value=obj.name
     document.getElementById('emailid').value=obj.email
     axios.delete(`https://crudcrud.com/api/fed0c19038434d2ba1a2dab436886de3/userData/${obj._id}`)
     .then((response) =>  pnode.removeChild(childli))
     .catch((error) =>{console.error(error)});
    }
    childli.appendChild(editbtn)
    childli.appendChild(dltbtn)
    pnode.appendChild(childli)
}
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

