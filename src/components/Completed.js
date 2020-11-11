import React, { useContext } from "react";
import { Todo } from "../Todo";
import { propEq, compose, filter, not } from "ramda";

function Completed({ toggleComplated, removeTodo }) {
  const todos = useContext(Todo);
  const completedTodos = filter(compose(not, propEq("completed", false)), todos);
 
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
