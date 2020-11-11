import React, { useContext, useEffect, useState } from "react";
import { Todo } from "../Todo";
import { propEq, compose, filter, not } from "ramda";

function NotCompleted({ toggleComplated, removeTodo }) {
  const todos = useContext(Todo);
  const [notCompleted, setNotCompleted] = useState([]);

  useEffect(() => {
    const filtered = filter(compose(not, propEq("completed", true)), todos);
    setNotCompleted(filtered);
  }, [todos]);

  return (
    <div>
      {notCompleted.map(({ text, id, completed }) => (
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
