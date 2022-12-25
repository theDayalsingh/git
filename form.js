// //console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// //document.title=123
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// // console.log(document.all)
// // console.log(document.all[10])
// // document.all[10].textContent='Hello'
// console.log(document.forms)
// console.log(document.forms[0])
// console.log(document.links)
// console.log(document.images)

// get elemnet by id
// console.log(document.getElementById('header-title'))
var headerTitle=document.getElementById('header-title')
var header=document.getElementById('main-header')
// console.log(headerTitle)
// headerTitle.textContent='Hello'
// headerTitle.innerText='Hello'
// headerTitle.innerHTML=<h1>hhh</h1>
// header.style.borderBottom='solid 3px black'

//get element by class nmae

//get element by class nmae
// var items= document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[1])
// items[2].textContent="hello"
// items[2].style.fontWeight='bold'
// items[2].style.backgroundColor = "green"

// // sariyan class nu color krn li

// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold'
// }

//get element by tagname
var li= document.getElementsByTagName('li')
console.log(li)
console.log(li[1])
li[2].textContent="hello"
li[2].style.fontWeight='bold'
li[2].style.backgroundColor = "green"


for(var i=0 ;i<li.length;i++){
    li[i].style.fontWeight='bold'
}

// queryselector

// var header=document.querySelector('#main-header')
// header.style.borderBottom='solid 3px black'

// var input = document.querySelector('input')
// input.value="Hello world"

// var submit = document.querySelector('input[type="submit"]')
// submit.value="SEND" 

// var item = document.querySelector('.list-group-item')
// item.style.color='blue'

// var litem = document.querySelector('.list-group-item:last-child')
// litem.style.color='green'
// var twoitem = document.querySelector('.list-group-item:nth-child(2)')
// twoitem.style.color='green'

// queruy selector al;l

// var title=document.querySelectorAll('.title')
// console.log(title)
// title[0].textContent="HHH"

// var odd= document.querySelectorAll("li:nth-child(odd)")
// var even= document.querySelectorAll("li:nth-child(even)")
// for(var i=0;i<odd.length;i++){
//     odd[i].style.background="grey"
//     even[i].style.background="green"
// }

// parent node
var itemlist = document.querySelector("#items")
// console.log(itemlist.parentNode)
// itemlist.parentNode.style.backgroundColor="grey"
// console.log(itemlist.parentNode.parentNode.parentNode)

// parent element
// console.log(itemlist.parentElement)
// itemlist.parentElement.style.backgroundColor="grey"
// console.log(itemlist.parentElement.parentElement.parentElement)

//childnode
// console.log(itemlist.childNodes) // useless
// console.log(itemlist.children)
// console.log(itemlist.children[1])
// itemlist.children[1].style.background="grey"

//Firstchild useless
// console.log(itemlist.firstChild)

//firstelemt
// console.log(itemlist.firstElementlast

//lastchild useless
// console.log(itemlist.lastChild)

//lastelemt
// console.log(itemlist.lastElementChild)
// itemlist.lastElementChild.textContent="HHH"

//nextsibling useless
// console.log(itemlist.nextSibling)

//nextelemntsibling
// console.log(itemlist.nextElementSibling)
// itemlist.nextElementSibling.textContent="HHH"

// previoussibling useless
// console.log(itemlist.previousSibling)

// previouselemntsibling
// console.log(itemlist.previousElementSibling)
// itemlist.previousElementSibling.textContent="HHH"

// createelement
//create div
var newDiv= document.createElement('div')
console.log(newDiv)
//add classname
newDiv.className='hello'
//add id
newDiv.id='hello1'
//add attr
newDiv.setAttribute("title",'hellodiv')
//create text node
var newDivText =document.createTextNode("Hello world")
newDiv.appendChild(newDivText)
/// put insode constainer

var constainer = document.querySelector('header .container')
var h1 =document.querySelector('header h1')
constainer.insertBefore(newDiv,h1)