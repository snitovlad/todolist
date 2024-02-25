import { openAddTaskDialog } from "../../data.js"

export function AddButton() {
    const container = document.createElement('button')
    container.classList.add('add-button')
    container.append('add task')
    container.addEventListener('click', () => {
        openAddTaskDialog()
    })
    return container
}