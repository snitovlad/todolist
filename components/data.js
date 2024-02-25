export const data = {
    todoList: {
        id: createUniqId(),
        title: 'I must to learn',
        tasks: [
            {
                title: 'html',
                id: createUniqId(),
                editMode: false
            },
            {
                title: 'java script',
                id: createUniqId(),
                editMode: false
            },
        ],
        addTaskDialogOpen: {
            isOpen: false,
            error: null

        }
    }
}

function createUniqId() {
    return Math.floor(Math.random() * 100000);
}

let subscriber = () => { }

export function subscribe(newSubscriber) {
    subscriber = newSubscriber
}

export function addTask(newTitle) {
    if (newTitle.trim().length > 0) {
        const newTask = {
            title: newTitle,
            id: createUniqId(),
            editMode: false
        }
        data.todoList.tasks.push(newTask)
        return true
        //closeAddTaskDialog()
    } else {
        setError('empty input')
        return false
    }
}

export function deleteTask(taskId) {
    data.todoList.tasks = data.todoList.tasks.filter(task => task.id !== taskId)
    subscriber()
}

export function openAddTaskDialog() {
    data.todoList.addTaskDialogOpen.isOpen = true
    subscriber()
}
export function closeAddTaskDialog() {
    data.todoList.addTaskDialogOpen.error = null
    data.todoList.addTaskDialogOpen.isOpen = false
    subscriber()
}

export function setError(error) {
    data.todoList.addTaskDialogOpen.error = error
    subscriber()
}

export function setEditMode(task) {
    // data.todoList.tasks.map(el => el.editTask = false)
    data.todoList.tasks[0].editMode = false
    
    task.editMode = true
    subscriber()
}
export function deleteEditMode(task) {
    task.editMode = false
    subscriber()
}
