var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// remove event from event lidt
itemList.addEventListener('click',removeItem)
// filter
filter.addEventListener('keyup',filterItem)

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newItem1 = document.getElementById('item1').value;
  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
//   console.log(li)
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(newItem1));
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

//filter
function filterItem(e){
    // to lowercse
    var text = e.target.value.toLowerCase()
    // fet list tag
    var items= itemList.getElementsByTagName('li')
    // convert to array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent
        var itemName1=item.childNodes[1].textContent
        if( itemName.toLowerCase().indexOf(text)!=-1 || itemName1.toLowerCase().indexOf(text)!=-1){
            item.style.display='block'
        }else{
            item.style.display='none'
        }
    })
}