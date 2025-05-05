import { useState } from 'react'
import './App.css'
import { AddTodo } from './components/AddTodo/AddTodo'
import { Todo } from './models/Todo'
import { DisplayTodos } from './components/DisplayTodos/DisplayTodos'

function App() {

  const [todos, setTodos] = useState<Todo[]>([])


  const addTodo = (newTodo: Todo) => {
    setTodos([ ...todos, 
    new Todo(newTodo.title, newTodo.description, newTodo.priority)
  ])
  todos.push(newTodo);
  }

  const markTodoAsDone = (id: number) => {
   setTodos(todos.map((t) => t.id === id ? { ...t, isDone: !t.isDone} : t))
  }

  const deleteTodo = (id: number) => {

  }

  return (
    <>
      <AddTodo addTodo={addTodo}/>
      <DisplayTodos todos={todos} markTodoAsDone={markTodoAsDone} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App
