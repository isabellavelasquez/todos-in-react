import { ChangeEvent, useState } from "react";
import "./App.scss";
import { AddTodo } from "./components/AddTodo/AddTodo";
import { Todo } from "./models/Todo";
import { DisplayColumns } from "./components/DisplayColumns";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [sortMode, setSortMode] = useState<string>("");

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

  const handleSortingChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortMode(e.target.value);

    
  };

  const sortTodos = (): Todo[] => {
    const priorityOrder = {
      High: 3,
      Medium: 2,
      Low: 1,
    };

    let sortedTodos = [...todos];
    if (sortMode === "priority") {
      sortedTodos.sort(
        (a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]
      );
    } else if (sortMode === "alphabetical") {
      sortedTodos.sort((a, b) => a.title.localeCompare(b.title));
    }
    return sortedTodos;
  };

  const sortedTodos = sortTodos();

  return (
    <>
      <AddTodo addTodo={addTodo} />
      <DisplayColumns
        todos={sortedTodos}
        markTodoAsDone={markTodoAsDone}
        deleteTodo={deleteTodo}
        handleSortingChange = {handleSortingChange}
      />
    </>
  );
}

export default App;
