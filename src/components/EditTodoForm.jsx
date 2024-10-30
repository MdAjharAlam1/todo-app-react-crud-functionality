import React, { useState } from 'react'

function EditTodoForm({task,editTodo}) {
  const [value,setValue] = useState(task.task)

  function handleChange(e){
    setValue(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    editTodo(value,task.id)
  }

  return (
    <div className='todo'>
        <form onSubmit={handleSubmit}>
          <input type="text" value={value} placeholder='update' onChange={handleChange}/>
          <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    </div>
  )
}

export default EditTodoForm
