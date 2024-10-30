import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import './TodoWrapper.css'
import { v4 as uuidv4 } from 'uuid';
import EditTodoForm from './EditTodoForm';
import Todo from './Todo';

const oldTodo = localStorage.getItem("todos")
console.log(oldTodo)

function TodoWrapper() {

  const[todos,setTodos] = useState(JSON.parse(oldTodo) || [])
  
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])



  function addTodo(todo){
    // console.log(todo)
    setTodos([...todos,{id:uuidv4(),task:todo,completed:false,isEditable:false}])
  }
  console.log("todos",todos)

  function deleteTodo(id){
    const newFilterTodo = todos.filter((todo)=> todo.id !== id)
    setTodos(newFilterTodo);
  }

  function toggleCompleted(id){
    setTodos(
      todos.map((todo)=> todo.id === id ? {...todo,completed:!todo.completed}:todo)
    )
  }

  function editTodo(id){
    setTodos(
      todos.map((todo)=> todo.id === id ? {...todo,isEditable:!todo.isEditable}:todo)
    )
  }

  function editTask(task,id){
    setTodos(
      todos.map((todo)=> todo.id === id ? {...todo, task:task, isEditable:!todo.isEditable}:todo)
    )
  }





  return (
    <div className='todo-wrapper'>
      <div className='todo-main'>
        <h1> Welcome my Todo App</h1>
        <TodoForm addTodo={addTodo}/>
        <div className="display-todo">
          {
            todos.map((todo)=> 
            todo.isEditable ?  
            (<EditTodoForm editTodo={editTask} task={todo} />) : 
            ( <Todo 
              key={todo.id}
              task={todo}
              deleteTodo = {deleteTodo}
              editTodo = {editTodo}
              toggleCompleted={toggleCompleted}
            />)
            )
          }

        </div>
      </div>
        
    </div>
  )
}

export default TodoWrapper
