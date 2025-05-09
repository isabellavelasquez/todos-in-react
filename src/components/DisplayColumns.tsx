import { ChangeEvent } from "react";
import { Todo } from "../models/Todo";
import { DisplayColumn } from "./DisplayColumn/DisplayColumn";

type DisplayColumnsProps = {
  todos: Todo[];
  markTodoAsDone: (id: number) => void;
  deleteTodo: (id: number) => void;
  handleSortingChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const DisplayColumns = ({
  todos,
  markTodoAsDone,
  deleteTodo,
  handleSortingChange,
}: DisplayColumnsProps) => {
  return (
    <>
      <div className="flex flex-row ">
        <h1>Todo</h1>
        {
          <DisplayColumn
            todos={todos.filter((t) => !t.isDone)}
            markTodoAsDone={markTodoAsDone}
            deleteTodo={deleteTodo}
            handleSortingChange={handleSortingChange}
          />
        }

        <h1>Done</h1>
        {
          <DisplayColumn
            todos={todos.filter((t) => t.isDone)}
            markTodoAsDone={markTodoAsDone}
            deleteTodo={deleteTodo}
            handleSortingChange={handleSortingChange}
          />
        }
      </div>
    </>
  );
};
