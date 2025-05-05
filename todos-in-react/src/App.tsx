import { useState } from 'react'
import './App.css'
import { AddTodo } from './components/AddTodo'
import { Todo } from './models/Todo'

function App() {

  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (newTodo: Todo) => {
    setTodos([ ...todos, 
    new Todo(newTodo.title, newTodo.description, newTodo.priority)
  ])

  todos.push(newTodo);
  }
  console.log(todos)
  return (
    <>
      <AddTodo addTodo={addTodo}/>
    </>
  )
}

export default App
