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
      <li className="flex flex-col items-center p-4 bg-blue rounded-xl shadow-lg">
        <h4>{todo.priority}</h4>

        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => {
            markTodoAsDone(todo.id);
          }}
        />
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
        <button
          className="ml-auto text-xs border-none p-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
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
