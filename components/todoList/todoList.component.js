import { AddButton } from "./AddButton/addButton.component.js"
import { AddNewTaskDialog } from "./AddNewTaskDialog/addNewTaskDialog.component.js"
import { Header } from "./Header/header.component.js"
import { TasksList } from "./TasksList/tasksList.component.js"

export function TodoList(data) {
    const container = document.createElement('div')
    container.classList.add('todolist')

    const headerElement = Header(data.title)
    const tasksListElement = TasksList(data.tasks)
    const addButtonElement = AddButton()
    const addNewTaskDialog = AddNewTaskDialog(data)
    
    // if (data.isAddTaskDialogOpen) {        
    //     addNewTaskDialog.open = true
    // }

    container.append(headerElement)
    container.append(tasksListElement)
    container.append(addButtonElement)
    container.append(addNewTaskDialog)


    return container
}