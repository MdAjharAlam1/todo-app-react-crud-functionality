import React, { useState } from 'react'
import './TodoForm.css'

function TodoForm({addTodo}) {
  const[value,setValue] = useState('');
  
  function handleChange(e){
    setValue(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit} >
        <input type="text" placeholder='Write Your Task Today !' value={value}  onChange={handleChange} required/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm
