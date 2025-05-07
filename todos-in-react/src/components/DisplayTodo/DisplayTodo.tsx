<<<<<<< HEAD
import './displayTodo.css'
import { Todo } from "../../models/Todo"

type DisplayTodoProps = {
    todo: Todo,
    markTodoAsDone:(id: number) => void
    deleteTodo: (id: number) => void
}

export const DisplayTodo = ({todo, markTodoAsDone, deleteTodo}: DisplayTodoProps) => {


    return<>
        <li>
            <div className="todoCard">
                <div className="todo">
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                    <h4>{todo.priority}</h4>
                    <input type="checkbox" checked={todo.isDone} onChange={() => {
                    markTodoAsDone(todo.id)
                }}/>
                <button onClick={() => {
                    deleteTodo(todo.id)
                }}>Delete</button>
                </div>
            </div>
        </li>
    </>
}
=======
import "./DisplayTodo.css";
import { Todo } from "../../models/Todo";

type DisplayTodoProps = {
  todo: Todo;
  markTodoAsDone: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export const DisplayTodo = ({
  todo,
  markTodoAsDone,
  deleteTodo,
}: DisplayTodoProps) => {
  return (
    <>
      <li>
        <div className="todoCard">
          <div className="todo">
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <h4>{todo.priority}</h4>
            <input
              type="checkbox"
              checked={todo.isDone}
              onChange={() => {
                markTodoAsDone(todo.id);
              }}
            />
            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </li>
    </>
  );
};
>>>>>>> 689b4253d02b2832bf0b45ca9be9d291d8b798eb
