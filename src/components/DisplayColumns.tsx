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
      <div className="flex flex-row columns-wrapper h-auto">
        <div className="flex justify-center column-wrapper column-style">
          <h1 className="text-2xl	">Todo</h1>
          <div className="cards-wrapper mx-4">
            {
              <DisplayColumn
                todos={todos.filter((t) => !t.isDone)}
                markTodoAsDone={markTodoAsDone}
                deleteTodo={deleteTodo}
                handleSortingChange={handleSortingChange}
              />
            }
          </div>
        </div>

        <div className="column-wrapper column-style">
          <h1 className="text-2xl	">Done</h1>
          <div className="cards-wrapper mx-4">
            {
              <DisplayColumn
                todos={todos.filter((t) => t.isDone)}
                markTodoAsDone={markTodoAsDone}
                deleteTodo={deleteTodo}
                handleSortingChange={handleSortingChange}
              />
            }
          </div>
        </div>
      </div>
    </>
  );
};
