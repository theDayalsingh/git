var form = document.getElementById("addForm")
form.addEventListener("submit",AddItem)
function AddItem(e){
e.preventDefault()
const amountInput = e.target.amount.value
const descriptionInput = e.target.description.value
const categoryInput = e.target.category.value
const totalexpense= {amountInput , descriptionInput,categoryInput}
localStorage.setItem(totalexpense.descriptionInput, JSON.stringify(totalexpense))
Show(totalexpense)
}

function Show(totalexpense){
    const parentnode= document.getElementById('ulist')
    const list = document.createElement('li')
    list.textContent ="You have spent your "+totalexpense.amountInput+" on "+totalexpense.categoryInput+" while "+totalexpense.descriptionInput
    const dltbtn= document.createElement('input')
    dltbtn.value="Delete"
    dltbtn.type='button'
    dltbtn.style.backgroundColor='red'
    dltbtn.onclick=()=>{
        localStorage.removeItem(totalexpense.descriptionInput)
        parentnode.removeChild(list)
    }
    const editbtn= document.createElement('input')
    editbtn.value="Edit"
    editbtn.type='button'
    editbtn.style.backgroundColor='grey'
    editbtn.onclick=()=>{
        document.getElementById('expenseAmountId').value=totalexpense.amountInput
        document.getElementById('descriptionId').value=totalexpense.descriptionInput
        document.getElementById('categoryId').value=totalexpense.categoryInput
        localStorage.removeItem(totalexpense.descriptionInput)
        parentnode.removeChild(list)
    }
    list.appendChild(editbtn)
    list.appendChild(dltbtn)
    parentnode.appendChild(list)

}