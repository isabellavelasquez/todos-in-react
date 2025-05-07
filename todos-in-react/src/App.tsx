import { useState } from "react";
import "./App.css";
import { AddTodo } from "./components/AddTodo/AddTodo";
import { Todo } from "./models/Todo";
import { DisplayTodos } from "./components/DisplayTodos/DisplayTodos";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (newTodo: Todo) => {
    setTodos([
      ...todos,
      new Todo(newTodo.title, newTodo.description, newTodo.priority),
    ]);
    console.log("this is a list of the todos: ", todos);
  };

  const markTodoAsDone = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t)));
  };

  const deleteTodo = (id: number) => {
    setTodos([...todos.filter((t) => t.id !== id)])
  }

  return (
    <>
      <AddTodo addTodo={addTodo} />
      <DisplayTodos
        todos={todos}
        markTodoAsDone={markTodoAsDone}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;
