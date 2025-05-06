import { Todo } from "../../models/Todo";
import { DisplayTodo } from "../DisplayTodo/DisplayTodo";
import "./displayTodos.css";

type DisplayTodosProps = {
  todos: Todo[];
  markTodoAsDone: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export const DisplayTodos = ({
  todos,
  markTodoAsDone,
  deleteTodo,
}: DisplayTodosProps) => {
  return (
    <>
      <div className="todos-wrapper">
        <div className="todo-column">
          <h2>To do</h2>
          <ul>
            {todos
              .filter((t) => !t.isDone)
              .map((t) => (
                <DisplayTodo
                  key={t.id}
                  todo={t}
                  markTodoAsDone={markTodoAsDone}
                  deleteTodo={deleteTodo}
                />
              ))}
          </ul>
        </div>

        <div className="done-column">
          <h2>Done</h2>
          <ul className="done-column">
            {todos
              .filter((t) => t.isDone)
              .map((t) => (
                <DisplayTodo
                  key={t.id}
                  todo={t}
                  markTodoAsDone={markTodoAsDone}
                  deleteTodo={deleteTodo}
                />
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};
