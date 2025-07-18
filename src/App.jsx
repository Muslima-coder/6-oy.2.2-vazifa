import {useState} from "react"
import FormTodo from "./modules/formTodo"
import ListTodo from "./modules/listTodo"

const App = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])

      localStorage.setItem("todos", JSON.stringify(todos))
  return (

   <>
   <FormTodo todos={todos} setTodos={setTodos}/>
   <ListTodo todos={todos} setTodos={setTodos}/>
   </>
  )

  }

export default App
