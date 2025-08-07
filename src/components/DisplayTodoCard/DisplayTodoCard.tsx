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
      <li className="flex flex-row items-center justify-between p-4 bg-blue rounded-xl shadow-lg bg-violet-200">

        <input 
          className="w-4 h-4 rounded mr-2"
          type="checkbox"
          checked={todo.isDone}
          onChange={() => {
            markTodoAsDone(todo.id);
          }}
        />
        <p>{todo.description}</p>
        <button
className="ml-auto text-xs py-1 px-2 rounded-lg border border-black bg-transparent text-black hover:bg-purple-800 hover:text-white transition"

          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          X
        </button>
      </li>
    </>
  );
};
