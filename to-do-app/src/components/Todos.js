// this component constitutes for all the todos.

import React from "react";
import TodoItem from "./TodoItem";


export default function Todos(props) {
  return (
    <div className="container">
      <h3 className="text-center my-3">To-do's List</h3>

      {props.todos.length === 0 ? "No todos to display" : ""}

      {props.todos.map((todo) => {
        return (
          <>
            <hr />
            <TodoItem todo={todo} key={todo.serial} onDelete={props.onDelete} />
            <hr />
            <br />
          </>
        );
      })}
    </div>
  );
}
