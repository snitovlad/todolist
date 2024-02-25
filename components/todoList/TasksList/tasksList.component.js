import { editTask } from "./Task/EditTask/editTask.component.js"
import { Task } from "./Task/task.component.js"

export function TasksList(tasks) {
    const container = document.createElement('ol')
    for (let i = 0; i < tasks.length; i++) {   
        //если editMode=true то для редактирования вставляем input из editTask     
        if (tasks[i].editMode) {
            tasks[i].title = editTask(tasks[i])
            
        }
        let taskElement = Task(tasks[i])
        container.append(taskElement)
    }
    return container
}