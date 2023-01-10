var form = document.getElementById("addForm")
form.addEventListener("submit",AddItem)
function AddItem(e){
e.preventDefault()
const amountInput = e.target.amount.value
const descriptionInput = e.target.description.value
const categoryInput = e.target.category.value
const totalexpense= {amountInput , descriptionInput,categoryInput}
axios.post('https://crudcrud.com/api/9474668fe4094b0696fcb7cfc8fe22d3/retra',totalexpense)
.then(res => Show(res.data))
.catch(err =>{ 
document.body.innerHTML= document.body.innerHTML + "<h4>Something wrong</h4>"
console.error(err,"notshow.::")});
}
window.addEventListener("DOMContentLoaded",()=>{
    axios.get('https://crudcrud.com/api/9474668fe4094b0696fcb7cfc8fe22d3/retra')
    .then((response) => {
      for(var i=0;i<response.data.length;i++){
        Show(response.data[i])
      }
    })
    .catch((error) =>{console.error(error)});
  })

function Show(totalexpense){
    const categoryInput=document.getElementById('categoryId').value
    const parentnode= document.getElementById('ulist')
    const parentnode2= document.getElementById('ulist2')
    const parentnode3= document.getElementById('ulist3')
    const list = document.createElement('li')
    list.textContent ="You have spent your "+totalexpense.amountInput+" on "+totalexpense.categoryInput+" while "+totalexpense.descriptionInput
    const dltbtn= document.createElement('input')
    dltbtn.value="Delete"
    dltbtn.type='button'
    dltbtn.style.backgroundColor='red'
    dltbtn.onclick=()=>{
        axios.delete(`https://crudcrud.com/api/9474668fe4094b0696fcb7cfc8fe22d3/retra/${totalexpense._id}`)
        .then((response) => {
          if(categoryInput==="table1"){
            parentnode.removeChild(list)
      }else if(categoryInput==="table2"){
        parentnode2.removeChild(list)
        }else{
          parentnode3.removeChild(list)
        }
        })
        .catch((error) =>{console.error(error)});
        }
    list.appendChild(dltbtn)
    
   if(categoryInput==="table1"){
       parentnode.appendChild(list)
 }else if(categoryInput==="table2"){
    parentnode2.appendChild(list)
   }else{
    parentnode3.appendChild(list)
   }

}