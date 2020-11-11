import React, { useContext, useEffect, useState } from "react";
import { Todo } from "../Todo";
import { propEq, compose, filter, not } from "ramda";

function Completed({ toggleComplated, removeTodo }) {
  const [completed, setCompleted] = useState([]);
  const todos = useContext(Todo);

  useEffect(() => {
    const filtered = filter(compose(not, propEq("completed", false)), todos);
    setCompleted(filtered);
  }, [todos]);

  return (
    <div>
      {completed.map(({ text, id, completed }) => (
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
