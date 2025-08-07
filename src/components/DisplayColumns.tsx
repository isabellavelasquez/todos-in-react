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
      <div className="flex flex-col w-full gap-10 px-7 columns-wrapper h-auto 
      md:px-50 
      md:flex-row">

       <div className="flex flex-col w-full bg-purple-300 rounded-lg p-6 shadow-md">
          <h1 className="text-2xl">Todo</h1>
          <div className="cards-wrapper">
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

        <div className="column-wrapper flex flex-col w-full bg-purple-300 rounded-lg p-6 shadow-md">
          <h1 className="text-2xl	">Done</h1>
          <div className="cards-wrapper ">
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
