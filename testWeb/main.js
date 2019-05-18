let textField = document.querySelector("#textField")
let Button = document.querySelector("#taskButton")
let taskList = document.querySelector("#taskList")

Button.onclick = function() {
    let newTask = document.createElement('LI')
    let text = textField.value
    let textNode = document.createTextNode(text)

    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'


    /*
    * mainpulate CSS attribute at run time
    */
    checkbox.onclick = function() {
        newTask.setAttribute('style', 'text-decoration: line-through opacity: 0')
        

        window.setTimeout(function() {
            taskList.removeChild(newTask)

        }, 2000) 
    }
    
    newTask.appendChild(checkbox)
    newTask.appendChild(textNode)
    taskList.appendChild(newTask)

    textField.value = ''
}
