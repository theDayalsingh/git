var form = document.getElementById("addForm")
form.addEventListener("submit",AddItem)
function AddItem(e){
e.preventDefault()
const amountInput = e.target.amount.value
const descriptionInput = e.target.description.value
const categoryInput = e.target.category.value
const totalexpense= {amountInput , descriptionInput,categoryInput}
axios.post('https://crudcrud.com/api/f9ad109b83bd4351afe32f3b9b308067/expenseTracker',totalexpense)
.then(res => Show(res.data))
.catch(err =>{ 
document.body.innerHTML= document.body.innerHTML + "<h4>Something wrong</h4>"
console.error(err,"notshow.::")});
}
window.addEventListener("DOMContentLoaded",()=>{
    axios.get('https://crudcrud.com/api/f9ad109b83bd4351afe32f3b9b308067/expenseTracker')
    .then((response) => {
      for(var i=0;i<response.data.length;i++){
        Show(response.data[i])
      }
    })
    .catch((error) =>{console.error(error)});
  })

function Show(totalexpense){
    const parentnode= document.getElementById('ulist')
    const list = document.createElement('li')
    list.textContent ="You have spent your "+totalexpense.amountInput+" on "+totalexpense.categoryInput+" while "+totalexpense.descriptionInput
    const dltbtn= document.createElement('input')
    dltbtn.value="Delete"
    dltbtn.type='button'
    dltbtn.style.backgroundColor='red'
    dltbtn.onclick=()=>{
        axios.delete(`https://crudcrud.com/api/f9ad109b83bd4351afe32f3b9b308067/expenseTracker/${totalexpense._id}`)
        .then((response) =>  parentnode.removeChild(list))
        .catch((error) =>{console.error(error)});
        }
    const editbtn= document.createElement('input')
    editbtn.value="Edit"
    editbtn.type='button'
    editbtn.style.backgroundColor='grey'
    editbtn.onclick=()=>{
        document.getElementById('expenseAmountId').value=totalexpense.amountInput
        document.getElementById('descriptionId').value=totalexpense.descriptionInput
        document.getElementById('categoryId').value=totalexpense.categoryInput
       axios.delete(`https://crudcrud.com/api/f9ad109b83bd4351afe32f3b9b308067/expenseTracker/${totalexpense._id}`)
        .then((response) =>  parentnode.removeChild(list))
        .catch((error) =>{console.error(error)});
    }
    list.appendChild(editbtn)
    list.appendChild(dltbtn)
    parentnode.appendChild(list)

}