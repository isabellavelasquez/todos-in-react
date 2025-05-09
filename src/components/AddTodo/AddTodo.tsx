import { ChangeEvent, FormEvent, useState } from "react";
import { defaultValue, Todo } from "../../models/Todo";

type AddTodoProps = {
  addTodo: (t: Todo) => void;
};

export const AddTodo = (props: AddTodoProps) => {
  const [todo, setTodo] = useState<Todo>(defaultValue);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setTodo({ ...todo, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    props.addTodo(todo);
    console.log(todo);

    setTodo(defaultValue);
  };
  return (
    <>
      <div className="h-80">
        <form
          className="w-50 flex flex-col items-center mb-4 space-y-4"
          onSubmit={handleSubmit}
        >
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={handleChange}
            value={todo.title}
            className="input-style"
          />

          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            onChange={handleChange}
            value={todo.description}
            className="input-style"
          />

          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            value={todo.priority}
            onChange={handleChange}
            className="border border-black"
          >
            <option value={"Low"}>Low</option>
            <option value={"Medium"}>Medium</option>
            <option value={"High"}>High</option>
          </select>
          <button className="w-20 border-none rounded-lg bg-amber-300 text-black hover:bg-amber-400">
            Add
          </button>
        </form>
      </div>
    </>
  );
};
