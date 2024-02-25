import { deleteTask } from "../../../../data.js"

export function DeleteTask(taskId) {
    const deleteTaskElement = document.createElement('button')
    deleteTaskElement.append('❌')
    deleteTaskElement.addEventListener('click', () => deleteTask(taskId))
    return deleteTaskElement
}