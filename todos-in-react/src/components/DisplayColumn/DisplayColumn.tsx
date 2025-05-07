import { ChangeEvent } from "react"
import { Todo } from "../../models/Todo"
import { DisplayTodoCard } from "../DisplayTodoCard/DisplayTodoCard";
import './displayColumn.scss'

type DisplayColumnProps = {
  todos: Todo[];
  markTodoAsDone: (id: number) => void;
  deleteTodo: (id: number) => void;
  handleSortingChange: (e: ChangeEvent<HTMLSelectElement>) => void
};


export const DisplayColumn = ({todos, markTodoAsDone, deleteTodo, handleSortingChange}: DisplayColumnProps) => {
    

    return <>
        <div className="todos-wrapper">
            <div className="todo-column">
                <label htmlFor="sort"></label>
                <select name="sort" id="sort" onChange={handleSortingChange}>
                    <option value="" disabled selected hidden>Sort by</option>
                    <option value="priority">Priority</option>
                    <option value="alphabetical">A-Z</option>
                </select>
                <ul>
                {
                    todos.map((t) =>
                    <DisplayTodoCard 
                    key={t.id}
                    todo={t}
                    markTodoAsDone={markTodoAsDone}
                    deleteTodo={deleteTodo}/>
                    )
                }
                </ul>
            </div>
        </div>
    </>
}
