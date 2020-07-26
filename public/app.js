var list = document.getElementById("list");

function addtodo(){
    var todo_items = document.getElementById("todo-item")
    var li =document.createElement('li')
    var liText = document.createTextNode(todo_items.value)
    li.appendChild(liText)

    var delBtn =document.createElement("button")
    var deletText =document.createTextNode("DELETE")
    delBtn.setAttribute("class","bTn")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(deletText)
 

    var editBtn =document.createElement("button")
    var editText =document.createTextNode("EDIT")
    editBtn.setAttribute("class","Btn-2")
    editBtn.setAttribute("onclick","editItem(this)")
    editBtn.appendChild(editText)

    li.appendChild(editBtn)
    li.appendChild(delBtn)
    list.appendChild(li)
    todo_items.value = ""
} 

function deleteItem(e){
    e.parentNode.remove()
}

function deleteAll(){
  list.innerHTML = ""
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue =prompt("Enter Edit value",val);
    e.parentNode.firstChild.nodeValue = editValue
}