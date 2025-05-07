import { ChangeEvent } from "react"
import { Todo } from "../../models/Todo"
import { DisplayTodo } from "../DisplayTodo/DisplayTodo"
import './displayTodos.css'

type DisplayTodosProps = {
    todos: Todo[]
    markTodoAsDone: (id: number) => void,
    deleteTodo: (id: number) => void
}


export const DisplayTodos = ({todos, markTodoAsDone, deleteTodo}: DisplayTodosProps) => {

    const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {

        let sortedTodos: Todo[] = []

        if(e.target.value === "priority") {

            const priorityOrder = {
                "High": 3,
                "Medium": 2,
                "Low": 1
            }
            sortedTodos = [...todos].sort(
                (a, b) => priorityOrder[b.priority] - priorityOrder[a.priority])

        
            }// } else if(e.target.value === "alphabetical") {
        //         sortedTodos = [...todos].sort((a,b) => a.title.localeCompare - b.title.localeCompare)
        // }
        
    }
    

    return <>
        <div className="todos-wrapper">
            <div className="todo-column">
                <h2>To do</h2>

                <label htmlFor="sort"></label>
                <select name="sort" id="sort">
                    <option value="priority">Priority</option>
                    <option value="alphabetical">A-Z</option>
                </select>
                <ul>
                {
                    todos.filter(t => !t.isDone).map(t => (
                        <DisplayTodo 
                        key={t.id}
                        todo={t}
                        markTodoAsDone={markTodoAsDone}
                        deleteTodo={deleteTodo}/>
                    ))
                }
                </ul>
            </div>

            <div className="done-column">
                <h2>Done</h2>

                <label htmlFor="sort"></label>
                <select name="sort" id="sort" onChange={changeHandler}>
                    <option value="priority">Priority</option>
                    <option value="alphabetical">A-Z</option>
                </select>
                <ul className="done-column">
                {
                todos.filter(t => t.isDone).map(t => (
                    <DisplayTodo 
                    key={t.id}
                    todo={t}
                    markTodoAsDone={markTodoAsDone}
                    deleteTodo={deleteTodo}/>
                ))
                }
                </ul>
            </div>
        </div>
    </>
}
