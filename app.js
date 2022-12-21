let orderNumber = 0;

document.getElementById("todo").addEventListener('submit', (event) => {
    event.preventDefault();
    let newTask = document.getElementById("text-box").value; 
    console.log(newTask);
    let theList = document.getElementById("the-list");
    let listItem = document.createElement('li')
    let listText = document.createTextNode(newTask)
    listItem.appendChild(listText)
    listItem.classList.add('listItem')
    listItem.id = orderNumber.toString();
    console.log(listItem.id)
    orderNumber ++
    console.log(listItem)
    theList.appendChild(listItem)
    }
);


//document.getElementById(i).addEventListener('click', ()=>{
    //document.getElementById(i).style.textDecoration = "line-through"
    //document.getElementById(i).style.color = "gray"
//})


document.getElementById("clear-all").addEventListener('click', (event)=> {
    document.getElementById("the-list").remove()
    let newList = document.createElement("ul")
    newList.classList.add('the-list')
    document.getElementById('task-list').appendChild(newList)
    orderNumber = 0;
    console.log(orderNumber)
});

/* let tasks = []; */

/*onst addItem = () => {
    let tasks = [];
    let newTask = document.getElementById("text-box").value; 
    console.log(newTask);
    tasks.push(newTask)
    console.log(tasks)
    return tasks
}*/


/*function mapper () {tasks.map((task, i)=> {
    console.log(task)
})
}

console.log(tasks)*/


let listText