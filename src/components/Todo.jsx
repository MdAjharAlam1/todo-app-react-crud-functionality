import React from 'react'
import './Todo.css'
import { FaTrash } from "react-icons/fa";
import { TiEdit } from "react-icons/ti";

function Todo({task,deleteTodo,toggleCompleted,editTodo}) {
  // console.log(task)
  function handleDelete(){
    deleteTodo(task.id)
  }

  function handleToggle(){
    toggleCompleted(task.id)
  }

  function handleEdit(){
    editTodo(task.id)
  }
  return (
    <div className='todo'>
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={handleToggle}>{task.task}</p>
        <div className='todo-icon'>
          <TiEdit size={25} onClick={handleEdit} />
          <FaTrash onClick={handleDelete}/>
        </div>
    </div>
  )
}

export default Todo
