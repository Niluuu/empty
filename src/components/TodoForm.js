import React from 'react'

function TodoForm({text, writeInput, addToDo, inputRef}) {
  return (
    <div>
      <input ref={inputRef} value={text} onChange={writeInput} />
      <button type="submit" onClick={addToDo}>
        Add to do
      </button>
    </div>
  );
}

export default TodoForm
