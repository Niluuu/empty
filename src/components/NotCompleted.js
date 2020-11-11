import React, { useContext } from "react";
import { Todo } from "../Todo";
import { propEq, compose, filter, not } from "ramda";

function NotCompleted({ toggleComplated, removeTodo }) {
  const todos = useContext(Todo);
  const notCompletedTodos = filter(compose(not, propEq("completed", true)), todos);
   
  return (
    <div>
      {notCompletedTodos.map(({ text, id, completed }) => (
        <div style={{ display: "flex", alignItems: "center" }} key={id}>
          <p>{text}</p>
          <button onClick={() => toggleComplated(id)}>
            {completed ? "Complated" : "Not Completed"}
          </button>
          <button onClick={() => removeTodo(id)}>delate</button>
        </div>
      ))}
    </div>
  );
}

export default NotCompleted;
