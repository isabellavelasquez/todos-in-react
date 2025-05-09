import { Todo } from "../../models/Todo";

type DisplayTodoCardProps = {
  todo: Todo;
  markTodoAsDone: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export const DisplayTodoCard = ({
  todo,
  markTodoAsDone,
  deleteTodo,
}: DisplayTodoCardProps) => {
  return (
    <>
      <li className="p-4 bg-blue rounded-xl shadow-lg">
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
      </li>
    </>
  );
};
