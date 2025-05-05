import { ChangeEvent, FormEvent, useState } from "react"
import { defaultValue, Todo } from "../models/Todo"

type AddTodoProps = {
    addTodo: (t: Todo) => void
}

export const AddTodo = (props: AddTodoProps) => {

    const [todo, setTodo] = useState<Todo>(defaultValue)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo({ ...todo, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        props.addTodo(todo);
        console.log(todo)


        setTodo(defaultValue);
    }   


    return<>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input 
            type="text" 
            id="title" 
            onChange={handleChange} 
            value={todo.title}/>
            
            <label htmlFor="description">Description</label>
            <input 
            type="text" 
            id="description" 
            onChange={handleChange}
            value={todo.description}/>
            
            <h4>Priority</h4>
            <select name="priority" id="priority">
                <option value={todo.priority}>Normal</option>
                <option value={todo.priority}>Medium</option>
                <option value={todo.priority}>High</option>
            </select>
            <button>Add</button>
        </form>
    </>
}