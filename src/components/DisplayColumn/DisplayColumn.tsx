import { ChangeEvent } from "react";
import { Todo } from "../../models/Todo";
import { DisplayTodoCard } from "../DisplayTodoCard/DisplayTodoCard";

type DisplayColumnProps = {
  todos: Todo[];
  markTodoAsDone: (id: number) => void;
  deleteTodo: (id: number) => void;
  handleSortingChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const DisplayColumn = ({
  todos,
  markTodoAsDone,
  deleteTodo,
  handleSortingChange,
}: DisplayColumnProps) => {
  return (
    <>
      <label htmlFor="sort">Sort by</label>
      <select
        name="sort"
        id="sort"
        onChange={handleSortingChange}
        className="border border-black"
      >
        <option value="priority">Priority</option>
        <option value="alphabetical">A-Z</option>
      </select>
      <ul className="space-y-2">
        {todos.map((t) => (
          <DisplayTodoCard
            key={t.id}
            todo={t}
            markTodoAsDone={markTodoAsDone}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
};
