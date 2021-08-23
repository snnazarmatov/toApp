// creating the main container
let main = document.createElement('main')
main.className = 'container'
document.body.append(main)

// just greeting
let projectName = document.createElement('h1')
projectName.innerHTML = "Let's do it"
main.append(projectName)

// creating a block for future list
let block = document.createElement('div')
block.className = 'mainBlock'
main.append(block)

// creating a blocl-parent for creating a new todo
let inputBlock = document.createElement('div')
block.append(inputBlock)

// input for creating new todo
let textIn = document.createElement('input')
textIn.className = 'textIn'
textIn.setAttribute('placeholder', 'Gonna do')
inputBlock.append(textIn)

// creating a new input with type of date
let dateInput = document.createElement('input')
dateInput.setAttribute('type', 'date')
inputBlock.append(dateInput)

// add button
let addBtn = document.createElement('button')
addBtn.id = 'addBtn'
addBtn.innerHTML = 'Add'
inputBlock.append(addBtn)

// creating a list container for future items
let list = document.createElement('ul')
list.id = 'list'
block.append(list)

// set a function
addBtn.addEventListener('click', onAdd)

const createTodoItem = (newTask, deadline) => {
    let li = document.createElement('li')
        
    let deleteBtn = document.createElement('img')
    deleteBtn.id = 'deleteBtn'
    deleteBtn.src = './images/delete.png'
    deleteBtn.addEventListener('click', onDelete)

    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.addEventListener('change', onDone)

    let txt = document.createTextNode(`${deadline} ${newTask}`)
    let label = document.createElement('label')
    label.className='task'
    label.append(txt)

    li.append(label)
    li.append(checkbox)
    li.append(deleteBtn)
    list.append(li)
}

function onAdd() {
    let newTask = textIn.value
    if(newTask !== '') {
        createTodoItem(newTask, dateInput.value)
    }
}

function onDelete(e) {
    e.target.parentElement.remove()
}

function onDone(e) {
    if (e.target.checked) {
        e.target.parentElement.classList.add('done')
    } else {
        e.target.parentElement.classList.remove('done')
    }
}