import React, { useContext } from "react";
import { Todo } from "../Todo";
import { propEq, filter } from "ramda";

function Completed({ toggleComplated, removeTodo }) {
  const todos = useContext(Todo);
  const completedTodos = filter(propEq("completed", true), todos);
 
  return (
    <div>
      {completedTodos.map(({ text, id, completed }) => (
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

export default Completed;
