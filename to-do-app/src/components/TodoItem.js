
// This component is for the each todo item.

import React from 'react'

const TodoItem = (props) => {
  return (
    <div>
        <h3>    {props.todo.serial}.    {props.todo.title}</h3>
        <h4>    {props.todo.desc}</h4>
        <h5>    <button className="btn btn-sm btn-danger" onClick = {() => props.onDelete(props.todo)}>Delete!</button></h5>
    </div>
  )
}

export default TodoItem
