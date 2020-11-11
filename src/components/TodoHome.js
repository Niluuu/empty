import React, { useContext } from "react";
import { Todo } from "../Todo";

function TodoApp({ toggleComplated, removeTodo }) {
  const todos = useContext(Todo);

  return (
    <div>
      {todos.map(({ text, id, completed }) => (
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

export default TodoApp;
