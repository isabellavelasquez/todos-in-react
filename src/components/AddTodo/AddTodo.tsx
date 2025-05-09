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
      <div className="mb-4 flex">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={handleChange}
            value={todo.title}
            className="flex-grow px-3 py-2 border rounded-l-lg rounded-r-lg"
          />

          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            onChange={handleChange}
            value={todo.description}
          />

          <label htmlFor="priority">Priority</label>
          <select id="priority" value={todo.priority} onChange={handleChange}>
            <option value={"Low"}>Low</option>
            <option value={"Medium"}>Medium</option>
            <option value={"High"}>High</option>
          </select>
          <button className="bg-lime-950">Add</button>
        </form>
      </div>
    </>
  );
};
