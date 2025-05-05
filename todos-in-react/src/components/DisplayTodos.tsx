import { Todo } from "../models/Todo"
import { DisplayTodo } from "./DisplayTodo"

type DisplayTodosProps = {
    todos: Todo[]
    markTodoAsDone: (id: number) => void,
    deleteTodo: (id: number) => void
}

export const DisplayTodos = ({todos, markTodoAsDone, deleteTodo}: DisplayTodosProps) => {

    return <>
        <h2>To do</h2>
        {
            todos.filter(t => !t.isDone).map(t => (
                <DisplayTodo 
                key={t.id}
                todo={t}
                markTodoAsDone={markTodoAsDone}
                deleteTodo={deleteTodo}/>
            ))
        }
        <h2>Done</h2>
        {
        todos.filter(t => t.isDone).map(t => (
                <DisplayTodo 
                key={t.id}
                todo={t}
                markTodoAsDone={markTodoAsDone}
                deleteTodo={deleteTodo}/>
            ))
        }
    </>
}