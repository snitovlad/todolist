import { setEditMode } from "../../../data.js"
import { DeleteTask } from "./DeleteTask/deleteButton.component.js"

export function Task(task) {
    const container = document.createElement('li')
    const taskElement = document.createElement('span')
    taskElement.append(task.title)
    container.append(taskElement)

    const deleteTaskElement = DeleteTask(task.id)
    container.append(deleteTaskElement)

    taskElement.addEventListener("dblclick", () => {
        setEditMode(task)
    })
    return container
}


