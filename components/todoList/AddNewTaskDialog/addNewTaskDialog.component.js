import { addTask, closeAddTaskDialog } from "../../data.js"

export function AddNewTaskDialog(data) {
    const container = document.createElement('dialog')

    const inputElement = document.createElement('input')
    inputElement.placeholder = 'your task'

    const saveButtonElement = document.createElement('button')
    saveButtonElement.append('save')
    saveButtonElement.addEventListener('click', () => {
        //здесь addTask(inputElement.value) и запускается, и проверяется на наличие возврата true или false 
        if (addTask(inputElement.value)) {
            closeAddTaskDialog()
        }
    })

    const cancelButtonElement = document.createElement('button')
    cancelButtonElement.append('cancel')
    cancelButtonElement.addEventListener('click', () => closeAddTaskDialog())

    container.append(inputElement)

    if (data.addTaskDialogOpen.error) {
        inputElement.classList.add("error")
        const errorElement = document.createElement('span')
        errorElement.append(data.addTaskDialogOpen.error)

        container.append(errorElement)
    };

    
    container.append(cancelButtonElement)
    container.append(saveButtonElement)

    if (data.addTaskDialogOpen.isOpen) {
        container.open = true
    }

    return container
}