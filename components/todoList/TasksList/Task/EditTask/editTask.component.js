import { deleteEditMode, deleteTask } from "../../../../data.js";

export function editTask(task) {
    const inputElement = document.createElement('input');
    inputElement.value = task.title;
    //ставим небольшую задержку, чтобы установить фокус на input после загрузки DOM
    setTimeout(() => {
        inputElement.focus();
    }, 0);
    inputElement.addEventListener('blur', () => {
        if (inputElement.value.trim().length > 0) {
        task.title = inputElement.value
        deleteEditMode(task)
        } else {
            deleteTask(task.id)
        }
    })
    
   
    return inputElement
}