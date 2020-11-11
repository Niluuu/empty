import React, { useCallback, useState, useRef } from "react";
import {
  find,
  propEq,
  compose,
  map,
  curry,
  assoc,
  when,
  filter,
  not,
} from "ramda";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Todo } from "./Todo";
import TodoHome from "./components/TodoHome";
import TodoForm from "./components/TodoForm";
import Completed from "./components/Completed";
import NotCompleted from "./components/NotCompleted";

function App() {
  const [todos, setTodo] = useState([
    { text: "buy eggs", completed: true, id: Math.random() },
  ]);
  const [text, setText] = useState("");
  const inputRef = useRef();

  const addToDo = useCallback(
    (e) => {
      e.preventDefault();
      if (text.length > 1) {
        const todo = {
          text: text,
          completed: false,
          id: Math.random(),
        };
        setTodo([...todos, todo]);
        setText(() => "");
      } else {
        inputRef.current.focus();
      }
    },
    [todos, text]
  );

  const writeInput = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [text]
  );

  const toggleCompleted = useCallback(
    (id) => {
      const toggled = find(propEq("id", id))(todos);
      const filter = curry((completed, id, todos) =>
        map(when(propEq("id", id), assoc("completed", completed)), todos)
      );
      const filtered = filter(!toggled.completed, id, todos);

      setTodo(filtered);
    },
    [todos]
  );

  const removeTodo = useCallback(
    (id) => {
      const removed = filter(compose(not, propEq("id", id)), todos);
      setTodo(removed);
    },
    [todos]
  );

  return (
    <Router>
      <div>
        <TodoForm
          text={text}
          addToDo={addToDo}
          writeInput={writeInput}
          inputRef={inputRef}
        />
        <nav>
          <ul>
            <li>
              <Link to="/">All</Link>
            </li>
            <li>
              <Link to="/completed">Completed</Link>
            </li>
            <li>
              <Link to="/notCompleted">NotComplted</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Todo.Provider value={todos}>
            <Route path="/" exact>
              <TodoHome
                toggleComplated={toggleCompleted}
                removeTodo={removeTodo}
              />
            </Route>
            <Route path="/completed">
              <Completed
                toggleComplated={toggleCompleted}
                removeTodo={removeTodo}
              />
            </Route>
            <Route path="/notCompleted">
              <NotCompleted
                toggleComplated={toggleCompleted}
                removeTodo={removeTodo}
              />
            </Route>
          </Todo.Provider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
