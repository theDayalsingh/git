var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);
// remove event from event lidt
itemList.addEventListener('click',removeItem)
// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
//   console.log(li)
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
//create del button element
var deleteBtn = document.createElement('button')
//Add classes to del button
deleteBtn.className='btn btn-danger btn-sm float-right delete'

//Appemd text node
deleteBtn.appendChild(document.createTextNode('X'))

//Append button to li
li.appendChild(deleteBtn)

  // Append li to list
  itemList.appendChild(li);
  //create edit button element
var editBtn = document.createElement('button')
//Add classes to edit button
editBtn.className='btn btn-primary btn-sm float-right '

//Appemd text node
editBtn.appendChild(document.createTextNode('Edit'))

//Append button to li
li.appendChild(editBtn)
}

// remove item
function removeItem(e){
if(e.target.classList.contains('delete')){
    // console.log(1)
    if(confirm("Are u Sure ?")){
         var li=e.target.parentElement
         itemList.removeChild(li)
    }
}
} 
