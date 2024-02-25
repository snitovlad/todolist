import { data, subscribe } from "./components/data.js"
import { TodoList } from "./components/todoList/todoList.component.js"

subscribe(refreshUI)
function refreshUI() {
    const rootElement = document.getElementById('root')
    rootElement.innerHTML = '';
    const todoListElement = TodoList(data.todoList)
    
    rootElement.append(todoListElement)
}
refreshUI()